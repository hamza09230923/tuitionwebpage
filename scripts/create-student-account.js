#!/usr/bin/env node

import admin from 'firebase-admin'
import process from 'node:process'
import { randomInt } from 'node:crypto'
import { existsSync, readFileSync } from 'fs'
import { join } from 'path'
import { initializeApp, deleteApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  serverTimestamp,
  setDoc,
  where
} from 'firebase/firestore'

const DEFAULT_STUDENT = {
  name: 'Shay',
  email: 'shay.l@myschola.com',
  schoolYear: 'Year 11'
}

const DEFAULT_SUBJECT_IDS = [
  'combined_science_001',
  'english_lang_001',
  'english_lit_001'
]

const SUBJECTS = {
  maths_001: {
    name: 'Maths',
    description: 'GCSE Mathematics',
    zoomLink: ''
  },
  combined_science_001: {
    name: 'Combined Science',
    description: 'GCSE Combined Science',
    zoomLink: ''
  },
  english_lang_001: {
    name: 'English Language',
    description: 'GCSE English Language',
    zoomLink: ''
  },
  english_lit_001: {
    name: 'English Literature',
    description: 'GCSE English Literature',
    zoomLink: ''
  }
}

const DEFAULT_HIDDEN_TITLE_KEYWORDS = ['moses']
const PASSWORD_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz!@#$%&*?'

const parseArgs = () => {
  const args = process.argv.slice(2)
  const parsed = {
    hiddenTitleKeywords: []
  }

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i]
    const next = args[i + 1]

    if (arg === '--name') {
      parsed.name = next
      i += 1
    } else if (arg === '--email') {
      parsed.email = next
      i += 1
    } else if (arg === '--password') {
      parsed.password = next
      i += 1
    } else if (arg === '--school-year') {
      parsed.schoolYear = next
      i += 1
    } else if (arg === '--subjects') {
      parsed.subjectIds = String(next || '')
        .split(',')
        .map((subjectId) => subjectId.trim())
        .filter(Boolean)
      i += 1
    } else if (arg === '--hide-title') {
      if (next) {
        parsed.hiddenTitleKeywords.push(next)
      }
      i += 1
    } else if (arg === '--admin-email') {
      parsed.adminEmail = next
      i += 1
    } else if (arg === '--admin-password') {
      parsed.adminPassword = next
      i += 1
    }
  }

  return parsed
}

const loadEnvFile = () => {
  const envPath = join(process.cwd(), '.env')
  if (!existsSync(envPath)) {
    return
  }

  const env = readFileSync(envPath, 'utf8')
  env.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) {
      return
    }

    const equalsIndex = trimmed.indexOf('=')
    if (equalsIndex === -1) {
      return
    }

    const key = trimmed.slice(0, equalsIndex).trim()
    const value = trimmed.slice(equalsIndex + 1).trim().replace(/^['"]|['"]$/g, '')
    if (!process.env[key]) {
      process.env[key] = value
    }
  })
}

const randomPassword = () => {
  const password = []

  for (let i = 0; i < 8; i += 1) {
    password.push(PASSWORD_CHARS[randomInt(0, PASSWORD_CHARS.length)])
  }

  return password.join('')
}

const getFirebaseConfig = () => ({
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
})

const normalizeHiddenTitleKeywords = (keywords) => (
  keywords
    .map((keyword) => String(keyword || '').trim().toLowerCase())
    .filter(Boolean)
)

const buildSubjectSettings = (subjectIds, existingSettings = {}) => {
  const settings = { ...existingSettings }

  subjectIds.forEach((subjectId) => {
    const subject = SUBJECTS[subjectId] || {}
    const isEnglish = String(subject.name || subjectId).toLowerCase().includes('english')
    settings[subjectId] = {
      examBoard: settings[subjectId]?.examBoard || 'AQA',
      tier: isEnglish ? null : (settings[subjectId]?.tier || 'Higher')
    }
  })

  return settings
}

const titleMatchesHiddenKeyword = (recording, hiddenTitleKeywords) => {
  const title = String(recording.title || '').toLowerCase()
  return hiddenTitleKeywords.some((keyword) => title.includes(keyword))
}

const validateStudent = (student) => {
  if (!student.name || !student.email || !student.password) {
    throw new Error('Student name, email, and password are required.')
  }
  if (student.password.length < 6) {
    throw new Error('Firebase passwords must be at least 6 characters long.')
  }
  if (student.password.length > 8) {
    throw new Error('Password must be 8 characters or fewer.')
  }
}

const createOrUpdateWithAdminSdk = async (student, subjectIds, hiddenTitleKeywords) => {
  const serviceAccountPath = join(process.cwd(), 'serviceAccountKey.json')
  const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'))

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })

  const db = admin.firestore()
  const auth = admin.auth()

  for (const subjectId of subjectIds) {
    const subject = SUBJECTS[subjectId]
    if (!subject) {
      continue
    }

    await db.collection('subjects').doc(subjectId).set(
      {
        ...subject,
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      },
      { merge: true }
    )
  }

  let userRecord
  try {
    userRecord = await auth.getUserByEmail(student.email)
    await auth.updateUser(userRecord.uid, {
      displayName: student.name,
      password: student.password
    })
  } catch (error) {
    if (error.code !== 'auth/user-not-found') {
      throw error
    }

    userRecord = await auth.createUser({
      email: student.email,
      password: student.password,
      displayName: student.name,
      emailVerified: false
    })
  }

  const recordingsSnapshot = await db
    .collection('recordings')
    .where('subjectId', 'in', subjectIds)
    .get()

  const hiddenRecordingIds = recordingsSnapshot.docs
    .filter((recordingDoc) => titleMatchesHiddenKeyword(recordingDoc.data(), hiddenTitleKeywords))
    .map((recordingDoc) => recordingDoc.id)

  const studentRef = db.collection('students').doc(userRecord.uid)
  const existingStudent = await studentRef.get()
  const existingData = existingStudent.exists ? existingStudent.data() : {}

  await studentRef.set(
    {
      name: student.name,
      email: student.email,
      schoolYear: student.schoolYear,
      subjects: subjectIds,
      subjectSettings: buildSubjectSettings(subjectIds, existingData.subjectSettings),
      hiddenRecordingIds,
      hiddenRecordingTitleKeywords: hiddenTitleKeywords,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      ...(existingStudent.exists ? {} : { createdAt: admin.firestore.FieldValue.serverTimestamp() })
    },
    { merge: true }
  )

  return {
    uid: userRecord.uid,
    hiddenRecordingIds
  }
}

const createOrUpdateWithClientSdk = async (student, subjectIds, hiddenTitleKeywords, adminCredentials) => {
  const firebaseConfig = getFirebaseConfig()
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    throw new Error('Firebase client config is missing. Check the .env file.')
  }

  const adminApp = initializeApp(firebaseConfig, 'student-account-admin')
  const studentApp = initializeApp(firebaseConfig, 'student-account-create')

  try {
    const adminAuth = getAuth(adminApp)
    await signInWithEmailAndPassword(
      adminAuth,
      adminCredentials.email,
      adminCredentials.password
    )

    const db = getFirestore(adminApp)
    for (const subjectId of subjectIds) {
      const subject = SUBJECTS[subjectId]
      if (!subject) {
        continue
      }

      await setDoc(
        doc(db, 'subjects', subjectId),
        {
          ...subject,
          updatedAt: serverTimestamp()
        },
        { merge: true }
      )
    }

    const studentAuth = getAuth(studentApp)
    let studentUser
    try {
      const created = await createUserWithEmailAndPassword(
        studentAuth,
        student.email,
        student.password
      )
      studentUser = created.user
      await updateProfile(studentUser, { displayName: student.name })
    } catch (error) {
      if (error.code !== 'auth/email-already-in-use') {
        throw error
      }

      try {
        const existing = await signInWithEmailAndPassword(
          studentAuth,
          student.email,
          student.password
        )
        studentUser = existing.user
      } catch {
        throw new Error(
          `Student ${student.email} already exists, but the provided password could not sign in. Use serviceAccountKey.json to reset it.`
        )
      }
    }

    const recordingsSnapshot = await getDocs(
      query(collection(db, 'recordings'), where('subjectId', 'in', subjectIds))
    )

    const hiddenRecordingIds = recordingsSnapshot.docs
      .filter((recordingDoc) => titleMatchesHiddenKeyword(recordingDoc.data(), hiddenTitleKeywords))
      .map((recordingDoc) => recordingDoc.id)

    const studentRef = doc(db, 'students', studentUser.uid)
    const existingStudent = await getDoc(studentRef)
    const existingData = existingStudent.exists() ? existingStudent.data() : {}

    await setDoc(
      studentRef,
      {
        name: student.name,
        email: student.email,
        schoolYear: student.schoolYear,
        subjects: subjectIds,
        subjectSettings: buildSubjectSettings(subjectIds, existingData.subjectSettings),
        hiddenRecordingIds,
        hiddenRecordingTitleKeywords: hiddenTitleKeywords,
        updatedAt: serverTimestamp(),
        ...(existingStudent.exists() ? {} : { createdAt: serverTimestamp() })
      },
      { merge: true }
    )

    return {
      uid: studentUser.uid,
      hiddenRecordingIds
    }
  } finally {
    await Promise.all([
      deleteApp(adminApp),
      deleteApp(studentApp)
    ])
  }
}

const main = async () => {
  loadEnvFile()
  const args = parseArgs()
  const subjectIds = args.subjectIds?.length ? args.subjectIds : DEFAULT_SUBJECT_IDS
  const hiddenTitleKeywords = normalizeHiddenTitleKeywords(
    args.hiddenTitleKeywords.length ? args.hiddenTitleKeywords : DEFAULT_HIDDEN_TITLE_KEYWORDS
  )
  const student = {
    name: args.name || DEFAULT_STUDENT.name,
    email: String(args.email || DEFAULT_STUDENT.email).trim().toLowerCase(),
    password: args.password || randomPassword(),
    schoolYear: args.schoolYear || DEFAULT_STUDENT.schoolYear
  }

  validateStudent(student)

  const serviceAccountPath = join(process.cwd(), 'serviceAccountKey.json')
  const useAdminSdk = existsSync(serviceAccountPath)
  const result = useAdminSdk
    ? await createOrUpdateWithAdminSdk(student, subjectIds, hiddenTitleKeywords)
    : await createOrUpdateWithClientSdk(
      student,
      subjectIds,
      hiddenTitleKeywords,
      {
        email: args.adminEmail || process.env.MYSCHOLA_ADMIN_EMAIL || 'admin@myschola.com',
        password: args.adminPassword || process.env.MYSCHOLA_ADMIN_PASSWORD || 'Admin123!'
      }
    )

  console.log('Student account ready')
  console.log(`UID: ${result.uid}`)
  console.log(`Name: ${student.name}`)
  console.log(`Email: ${student.email}`)
  console.log(`Password: ${student.password}`)
  console.log(`Subjects: ${subjectIds.join(', ')}`)
  console.log(`Hidden title keywords: ${hiddenTitleKeywords.join(', ') || 'none'}`)
  console.log(`Matching hidden recording IDs: ${result.hiddenRecordingIds.join(', ') || 'none found'}`)
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
