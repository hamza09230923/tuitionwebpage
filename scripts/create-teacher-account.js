#!/usr/bin/env node

/**
 * Create a scoped teacher account for the live MySchola Firebase project.
 *
 * Dry-run by default. Use --execute to create the Auth user and teacher profile.
 * A password can be supplied with --password; otherwise a one-time password is
 * generated and printed after a successful create.
 */

import crypto from 'node:crypto'
import process from 'node:process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { initializeApp, deleteApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, getFirestore, serverTimestamp, setDoc } from 'firebase/firestore'

const TEACHER_PROFILES = {
  fawwaz: {
    name: 'Fawwaz',
    email: 'fawwaz@myschola.co.uk',
    classes: [
      { subjectId: 'physics_001', tier: 'Foundation', examBoard: 'AQA' },
      { subjectId: 'chemistry_001', tier: 'Foundation', examBoard: 'AQA' },
      { subjectId: 'biology_001', tier: 'Foundation', examBoard: 'AQA' },
      { subjectId: 'maths_001', tier: 'Foundation', examBoard: 'Edexcel' }
    ],
    permissions: ['view_recordings', 'upload_recordings', 'view_homework']
  },
  jafren: {
    name: 'Jafren',
    email: 'jafren@myschola.co.uk',
    classes: [
      { subjectId: 'english_lang_001', tier: 'all-levels', examBoard: 'AQA' },
      { subjectId: 'english_lit_001', tier: 'all-levels', examBoard: 'AQA' }
    ],
    permissions: ['view_recordings', 'upload_recordings', 'view_homework']
  }
}

const loadEnvFile = (envPath) => {
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

const getArg = (name) => {
  const prefix = `${name}=`
  const value = process.argv.find((arg) => arg.startsWith(prefix))
  return value ? value.slice(prefix.length) : ''
}

const getTeacherProfile = () => {
  const profileName = (getArg('--teacher') || 'fawwaz').trim().toLowerCase()
  const profile = TEACHER_PROFILES[profileName]
  if (!profile) {
    throw new Error(`Unknown teacher profile: ${profileName}. Choose fawwaz or jafren.`)
  }
  return profile
}

const generatePassword = () => {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%'
  const bytes = crypto.randomBytes(24)
  return Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join('')
}

const firebaseConfig = () => ({
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
})

const createAuthUser = async (apiKey, email, password) => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${encodeURIComponent(apiKey)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, returnSecureToken: true })
    }
  )
  const payload = await response.json()
  if (response.ok) return { uid: payload.localId, created: true }

  const reason = payload?.error?.message || 'Unable to create Auth user'
  if (reason !== 'EMAIL_EXISTS') throw new Error(reason)

  const signInResponse = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${encodeURIComponent(apiKey)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, returnSecureToken: true })
    }
  )
  const signInPayload = await signInResponse.json()
  if (!signInResponse.ok) {
    throw new Error('The Auth user already exists. Re-run with --password=<current-password> to attach the teacher profile.')
  }
  return { uid: signInPayload.localId, created: false }
}

const main = async () => {
  loadEnvFile(join(process.cwd(), '.env'))
  const TEACHER = getTeacherProfile()
  const execute = process.argv.includes('--execute')
  const password = getArg('--password') || process.env.TEACHER_INITIAL_PASSWORD || generatePassword()
  const adminEmail = getArg('--admin-email') || process.env.MYSCHOLA_ADMIN_EMAIL || 'admin@myschola.com'
  const adminPassword = getArg('--admin-password') || process.env.MYSCHOLA_ADMIN_PASSWORD || 'Admin123!'

  const classTiers = Object.fromEntries(TEACHER.classes.map(({ subjectId, tier }) => [subjectId, tier]))
  const classBoards = Object.fromEntries(TEACHER.classes.map(({ subjectId, examBoard }) => [subjectId, examBoard]))
  const classIds = TEACHER.classes.map(({ subjectId, tier }) => (
    `${subjectId}_${tier.toLowerCase() === 'all-levels' ? 'all' : tier.toLowerCase()}`
  ))

  console.log(JSON.stringify({
    mode: execute ? 'execute' : 'dry-run',
    teacher: TEACHER.email,
    classes: TEACHER.classes,
    permissions: TEACHER.permissions,
    classIds
  }, null, 2))

  if (!execute) {
    console.log('Dry run only. Re-run with --execute to create the account.')
    return
  }

  if (!process.env.VITE_FIREBASE_API_KEY || !process.env.VITE_FIREBASE_PROJECT_ID) {
    throw new Error('Firebase configuration is missing from .env')
  }

  const app = initializeApp(firebaseConfig(), 'create-teacher-account')
  try {
    const auth = getAuth(app)
    await signInWithEmailAndPassword(auth, adminEmail, adminPassword)
    const db = getFirestore(app)
    const subjectChecks = await Promise.all(
      TEACHER.classes.map(async ({ subjectId }) => ({
        subjectId,
        snapshot: await getDoc(doc(db, 'subjects', subjectId))
      }))
    )
    const missingSubjects = subjectChecks
      .filter(({ snapshot }) => !snapshot.exists())
      .map(({ subjectId }) => subjectId)
    if (missingSubjects.length > 0) {
      throw new Error(`These subject documents do not exist: ${missingSubjects.join(', ')}`)
    }

    const { uid, created } = await createAuthUser(process.env.VITE_FIREBASE_API_KEY, TEACHER.email, password)
    await setDoc(doc(db, 'teachers', uid), {
      name: TEACHER.name,
      email: TEACHER.email,
      role: 'teacher',
      subjects: TEACHER.classes.map(({ subjectId }) => subjectId),
      classIds,
      classTiers,
      classBoards,
      permissions: TEACHER.permissions,
      allowedMaterialTypes: ['recording', 'homework'],
      updatedAt: serverTimestamp(),
      ...(created ? {
        createdAt: serverTimestamp(),
        ...(TEACHER.email === 'jafren@myschola.co.uk' ? { homeworkVisibleAfter: serverTimestamp() } : {})
      } : {})
    }, { merge: true })

    console.log(`Teacher profile saved for ${TEACHER.email}. Auth user ${created ? 'created' : 'already existed'}.`)
    console.log('The supplied initial password was set. Ask the teacher to change it after first sign-in.')
  } finally {
    await deleteApp(app)
  }
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
