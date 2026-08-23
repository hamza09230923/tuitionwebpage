#!/usr/bin/env node

import process from 'node:process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { initializeApp, deleteApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {
  collection,
  getDoc,
  getDocs,
  getFirestore,
  query,
  serverTimestamp,
  updateDoc,
  where
} from 'firebase/firestore'

const STUDENT_EMAIL = 'ridwanah@myschola.co.uk'
const SUBJECT_ID = 'combined_science_001'

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

  const app = initializeApp(firebaseConfig, 'remove-ridwanah-combined-science')
  try {
    const auth = getAuth(app)
    await signInWithEmailAndPassword(
      auth,
      getArgValue('--admin-email') || process.env.MYSCHOLA_ADMIN_EMAIL || 'admin@myschola.com',
      getArgValue('--admin-password') || process.env.MYSCHOLA_ADMIN_PASSWORD || 'Admin123!'
    )

    const db = getFirestore(app)
    const studentSnapshots = await getDocs(
      query(collection(db, 'students'), where('email', '==', STUDENT_EMAIL))
    )
    if (studentSnapshots.size !== 1) {
      throw new Error(`Expected one student profile for ${STUDENT_EMAIL}; found ${studentSnapshots.size}.`)
    }

    const studentSnapshot = studentSnapshots.docs[0]
    const studentData = studentSnapshot.data() || {}
    const currentSubjects = Array.isArray(studentData.subjects) ? studentData.subjects : []
    const nextSubjects = currentSubjects.filter((subjectId) => subjectId !== SUBJECT_ID)
    const currentSettings = studentData.subjectSettings && typeof studentData.subjectSettings === 'object'
      ? studentData.subjectSettings
      : {}
    const hasSubjectSettings = Object.prototype.hasOwnProperty.call(currentSettings, SUBJECT_ID)

    if (!process.argv.includes('--execute')) {
      console.log(`Combined Science currently enrolled: ${currentSubjects.includes(SUBJECT_ID)}`)
      console.log(`Combined Science settings present: ${hasSubjectSettings}`)
      console.log('Dry run only. Re-run with --execute to save this removal.')
      return
    }

    if (currentSubjects.includes(SUBJECT_ID) || hasSubjectSettings) {
      const update = { updatedAt: serverTimestamp() }
      if (currentSubjects.includes(SUBJECT_ID)) update.subjects = nextSubjects
      if (hasSubjectSettings) {
        const nextSettings = { ...currentSettings }
        delete nextSettings[SUBJECT_ID]
        update.subjectSettings = nextSettings
      }
      await updateDoc(studentSnapshot.ref, update)
    }

    const updatedStudentSnapshot = await getDoc(studentSnapshot.ref)
    const updatedStudentData = updatedStudentSnapshot.data() || {}
    const enrollmentRemains = Array.isArray(updatedStudentData.subjects) && updatedStudentData.subjects.includes(SUBJECT_ID)
    const settingsRemain = Boolean(updatedStudentData.subjectSettings?.[SUBJECT_ID])
    if (enrollmentRemains || settingsRemain) {
      throw new Error('Verification failed: Combined Science is still present on Ridwanah’s account.')
    }

    console.log('Removed Combined Science from Ridwanah’s account and verified the result.')
  } finally {
    await deleteApp(app)
  }
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
