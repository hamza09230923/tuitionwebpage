#!/usr/bin/env node

import process from 'node:process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { initializeApp, deleteApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, getFirestore, serverTimestamp, writeBatch } from 'firebase/firestore'

const SUBJECT_ZOOM_LINKS = {
  biology_001: 'https://us06web.zoom.us/j/89121648473',
  english_lang_001: 'https://us06web.zoom.us/j/89020463558',
  english_lit_001: 'https://us06web.zoom.us/j/83496181405',
  chemistry_001: 'https://us06web.zoom.us/j/82539769232',
  maths_001: 'https://us06web.zoom.us/j/84989135376',
  physics_001: 'https://us06web.zoom.us/j/89245151127'
}

const FOUNDATION_ZOOM_LINKS = {
  biology_001: 'https://us06web.zoom.us/j/81397109206',
  chemistry_001: 'https://us06web.zoom.us/j/89250640537',
  physics_001: 'https://us06web.zoom.us/j/89820960530',
  maths_001: 'https://us06web.zoom.us/j/88584874798'
}

const loadEnvFile = () => {
  const envPath = join(process.cwd(), '.env')
  if (!existsSync(envPath)) return
  readFileSync(envPath, 'utf8').split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim()
    const equalsIndex = trimmed.indexOf('=')
    if (!trimmed || trimmed.startsWith('#') || equalsIndex === -1) return
    const key = trimmed.slice(0, equalsIndex).trim()
    const value = trimmed.slice(equalsIndex + 1).trim().replace(/^['"]|['"]$/g, '')
    if (!process.env[key]) process.env[key] = value
  })
}

const arg = (name) => {
  const index = process.argv.indexOf(name)
  return index === -1 ? undefined : process.argv[index + 1]
}

const main = async () => {
  loadEnvFile()
  const app = initializeApp({
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID
  }, 'set-subject-zoom-links')

  try {
    const auth = getAuth(app)
    await signInWithEmailAndPassword(
      auth,
      arg('--admin-email') || process.env.MYSCHOLA_ADMIN_EMAIL || 'admin@myschola.com',
      arg('--admin-password') || process.env.MYSCHOLA_ADMIN_PASSWORD || 'Admin123!'
    )
    const db = getFirestore(app)
    const ids = Object.keys(SUBJECT_ZOOM_LINKS)
    const snapshots = await Promise.all(ids.map((id) => getDoc(doc(db, 'subjects', id))))
    const missing = snapshots.filter((snapshot) => !snapshot.exists()).map((snapshot) => snapshot.id)
    if (missing.length) throw new Error(`Subject document not found: ${missing.join(', ')}`)
    if (!process.argv.includes('--execute')) {
      console.log(`Dry run. Ready to update: ${ids.join(', ')}`)
      return
    }
    const batch = writeBatch(db)
    ids.forEach((id) => batch.update(doc(db, 'subjects', id), {
      zoomLink: SUBJECT_ZOOM_LINKS[id],
      ...(FOUNDATION_ZOOM_LINKS[id] ? { foundationZoomLink: FOUNDATION_ZOOM_LINKS[id] } : {}),
      updatedAt: serverTimestamp()
    }))
    await batch.commit()
    console.log(`Updated Zoom links: ${ids.join(', ')}`)
  } finally {
    await deleteApp(app)
  }
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
