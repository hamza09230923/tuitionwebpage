#!/usr/bin/env node

import process from 'node:process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { initializeApp, deleteApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  writeBatch
} from 'firebase/firestore'

const GROUP_LESSON_ZOOM_LINKS = {
  english_lang_001: 'https://us06web.zoom.us/j/83547340736',
  english_lit_001: 'https://us06web.zoom.us/j/84218770525'
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

  const app = initializeApp(firebaseConfig, 'set-english-group-lesson-zoom-links')
  try {
    const auth = getAuth(app)
    await signInWithEmailAndPassword(
      auth,
      getArgValue('--admin-email') || process.env.MYSCHOLA_ADMIN_EMAIL || 'admin@myschola.com',
      getArgValue('--admin-password') || process.env.MYSCHOLA_ADMIN_PASSWORD || 'Admin123!'
    )

    const db = getFirestore(app)
    const subjectIds = Object.keys(GROUP_LESSON_ZOOM_LINKS)
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
        zoomLink: GROUP_LESSON_ZOOM_LINKS[subjectId],
        updatedAt: serverTimestamp()
      })
    })
    await batch.commit()

    const updatedSubjects = await Promise.all(
      subjectIds.map((subjectId) => getDoc(doc(db, 'subjects', subjectId)))
    )
    const verificationFailures = updatedSubjects
      .filter((snapshot) => snapshot.data()?.zoomLink !== GROUP_LESSON_ZOOM_LINKS[snapshot.id])
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
