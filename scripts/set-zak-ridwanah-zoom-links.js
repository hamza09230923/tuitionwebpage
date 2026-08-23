#!/usr/bin/env node

import process from 'node:process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { initializeApp, deleteApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {
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

const STUDENT_EMAILS = ['zak@myschola.co.uk', 'ridwanah@myschola.co.uk']
const ZOOM_LINKS = {
  biology_001: 'https://us06web.zoom.us/j/86058491716',
  chemistry_001: 'https://us06web.zoom.us/j/81450978006',
  physics_001: 'https://us06web.zoom.us/j/81950138887',
  maths_001: 'https://us06web.zoom.us/j/81136001581'
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
    const value = trimmed.slice(equalsIndex + 1).trim().replace(/^['"]|['"]$/g, '')
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

  const app = initializeApp(firebaseConfig, 'set-zak-ridwanah-zoom-links')
  try {
    const auth = getAuth(app)
    await signInWithEmailAndPassword(
      auth,
      getArgValue('--admin-email') || process.env.MYSCHOLA_ADMIN_EMAIL || 'admin@myschola.com',
      getArgValue('--admin-password') || process.env.MYSCHOLA_ADMIN_PASSWORD || 'Admin123!'
    )

    const db = getFirestore(app)
    const studentsSnapshot = await getDocs(
      query(collection(db, 'students'), where('email', 'in', STUDENT_EMAILS))
    )
    const foundEmails = new Set(studentsSnapshot.docs.map((snapshot) => snapshot.data()?.email))
    const missingEmails = STUDENT_EMAILS.filter((email) => !foundEmails.has(email))
    if (missingEmails.length) {
      throw new Error(`Student profile not found: ${missingEmails.join(', ')}`)
    }

    const enrolledSubjectIds = new Set(
      studentsSnapshot.docs.flatMap((snapshot) => {
        const subjects = snapshot.data()?.subjects
        return Array.isArray(subjects) ? subjects : []
      })
    )
    const subjectIds = Object.keys(ZOOM_LINKS)
    const missingEnrolments = subjectIds.filter((subjectId) => !enrolledSubjectIds.has(subjectId))
    if (missingEnrolments.length) {
      throw new Error(`Neither student is enrolled in: ${missingEnrolments.join(', ')}`)
    }

    const subjectSnapshots = await Promise.all(
      subjectIds.map((subjectId) => getDoc(doc(db, 'subjects', subjectId)))
    )
    const missingSubjects = subjectSnapshots
      .filter((snapshot) => !snapshot.exists())
      .map((snapshot) => snapshot.id)
    if (missingSubjects.length) {
      throw new Error(`Subject document not found: ${missingSubjects.join(', ')}`)
    }

    if (!process.argv.includes('--execute')) {
      console.log(`Ready to update: ${subjectIds.join(', ')}`)
      console.log('Dry run only. Re-run with --execute to save the Zoom links.')
      return
    }

    const batch = writeBatch(db)
    subjectIds.forEach((subjectId) => {
      batch.update(doc(db, 'subjects', subjectId), {
        zoomLink: ZOOM_LINKS[subjectId],
        updatedAt: serverTimestamp()
      })
    })
    await batch.commit()

    const updatedSubjects = await Promise.all(
      subjectIds.map((subjectId) => getDoc(doc(db, 'subjects', subjectId)))
    )
    const verificationFailures = updatedSubjects
      .filter((snapshot) => snapshot.data()?.zoomLink !== ZOOM_LINKS[snapshot.id])
      .map((snapshot) => snapshot.id)
    if (verificationFailures.length) {
      throw new Error(`Zoom link verification failed: ${verificationFailures.join(', ')}`)
    }

    console.log(`Updated Zoom links: ${subjectIds.join(', ')}`)
  } finally {
    await deleteApp(app)
  }
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
