#!/usr/bin/env node

import process from 'node:process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { initializeApp, deleteApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  serverTimestamp,
  where,
  writeBatch
} from 'firebase/firestore'

const ZAK_EMAIL = 'zak@myschola.co.uk'
const SCIENCE_ZOOM_LINKS = {
  biology_001: 'https://us06web.zoom.us/j/86058491716',
  chemistry_001: 'https://us06web.zoom.us/j/81450978006',
  physics_001: 'https://us06web.zoom.us/j/81950138887'
}

const loadEnvFile = () => {
  const envPath = join(process.cwd(), '.env')
  if (!existsSync(envPath)) return

  readFileSync(envPath, 'utf8').split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) return

    const equalsIndex = trimmed.indexOf('=')
    if (equalsIndex === -1) return

    const key = trimmed.slice(0, equalsIndex).trim()
    const value = trimmed.slice(equalsIndex + 1).trim().replace(/^['\"]|['\"]$/g, '')
    if (!process.env[key]) process.env[key] = value
  })
}

const getArgValue = (flag) => {
  const index = process.argv.indexOf(flag)
  return index === -1 ? undefined : process.argv[index + 1]
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

const main = async () => {
  loadEnvFile()
  const firebaseConfig = getFirebaseConfig()
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    throw new Error('Firebase client config is missing. Check .env.')
  }

  const app = initializeApp(firebaseConfig, 'enroll-zak-in-sciences')
  try {
    const auth = getAuth(app)
    await signInWithEmailAndPassword(
      auth,
      getArgValue('--admin-email') || process.env.MYSCHOLA_ADMIN_EMAIL || 'admin@myschola.com',
      getArgValue('--admin-password') || process.env.MYSCHOLA_ADMIN_PASSWORD || 'Admin123!'
    )

    const db = getFirestore(app)
    const studentSnapshots = await getDocs(
      query(collection(db, 'students'), where('email', '==', ZAK_EMAIL))
    )
    if (studentSnapshots.size !== 1) {
      throw new Error(`Expected one student profile for ${ZAK_EMAIL}; found ${studentSnapshots.size}.`)
    }

    const studentSnapshot = studentSnapshots.docs[0]
    const studentData = studentSnapshot.data() || {}
    const subjectIds = Object.keys(SCIENCE_ZOOM_LINKS)
    const currentSubjects = Array.isArray(studentData.subjects) ? studentData.subjects : []
    const missingSubjectIds = subjectIds.filter((subjectId) => !currentSubjects.includes(subjectId))

    const subjectSnapshots = await Promise.all(
      subjectIds.map((subjectId) => getDoc(doc(db, 'subjects', subjectId)))
    )
    const missingSubjectDocuments = subjectSnapshots
      .filter((snapshot) => !snapshot.exists())
      .map((snapshot) => snapshot.id)
    if (missingSubjectDocuments.length) {
      throw new Error(`Subject document not found: ${missingSubjectDocuments.join(', ')}`)
    }

    const zoomLinksToUpdate = subjectSnapshots
      .filter((snapshot) => snapshot.data()?.zoomLink !== SCIENCE_ZOOM_LINKS[snapshot.id])
      .map((snapshot) => snapshot.id)

    if (!process.argv.includes('--execute')) {
      console.log(`Zak's existing subjects: ${currentSubjects.join(', ') || '(none)'}`)
      console.log(`Subjects to add: ${missingSubjectIds.join(', ') || '(none)'}`)
      console.log(`Zoom links to correct: ${zoomLinksToUpdate.join(', ') || '(none)'}`)
      console.log('Dry run only. Re-run with --execute to save these changes.')
      return
    }

    if (missingSubjectIds.length || zoomLinksToUpdate.length) {
      const batch = writeBatch(db)
      if (missingSubjectIds.length) {
        batch.update(studentSnapshot.ref, {
          subjects: arrayUnion(...missingSubjectIds),
          updatedAt: serverTimestamp()
        })
      }
      zoomLinksToUpdate.forEach((subjectId) => {
        batch.update(doc(db, 'subjects', subjectId), {
          zoomLink: SCIENCE_ZOOM_LINKS[subjectId],
          updatedAt: serverTimestamp()
        })
      })
      await batch.commit()
    }

    const [updatedStudentSnapshot, ...updatedSubjectSnapshots] = await Promise.all([
      getDoc(studentSnapshot.ref),
      ...subjectIds.map((subjectId) => getDoc(doc(db, 'subjects', subjectId)))
    ])
    const updatedSubjects = updatedStudentSnapshot.data()?.subjects
    const enrollmentFailures = subjectIds.filter((subjectId) => !updatedSubjects?.includes(subjectId))
    const zoomFailures = updatedSubjectSnapshots
      .filter((snapshot) => snapshot.data()?.zoomLink !== SCIENCE_ZOOM_LINKS[snapshot.id])
      .map((snapshot) => snapshot.id)
    if (enrollmentFailures.length || zoomFailures.length) {
      throw new Error(
        `Verification failed. Missing enrolments: ${enrollmentFailures.join(', ') || '(none)'}; ` +
          `incorrect Zoom links: ${zoomFailures.join(', ') || '(none)'}.`
      )
    }

    console.log(`Zak is enrolled in: ${subjectIds.join(', ')}`)
    console.log(`Verified Zoom links: ${subjectIds.join(', ')}`)
  } finally {
    await deleteApp(app)
  }
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
