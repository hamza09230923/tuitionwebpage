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
  where
} from 'firebase/firestore'

const EMAIL = 'fawwaz@myschola.co.uk'
const SUBJECTS = ['physics_001', 'chemistry_001', 'biology_001', 'maths_001']
const BLOCKED_SUBJECT = 'english_lang_001'
const BASE_URL = 'https://us-central1-myschola-5ec1f.cloudfunctions.net'

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

const assert = (condition, message) => {
  if (!condition) throw new Error(message)
}

const expectDenied = async (label, operation) => {
  try {
    await operation()
  } catch (error) {
    const code = error?.code || ''
    assert(code === 'permission-denied', `${label} failed with unexpected error: ${code || error.message}`)
    console.log(`PASS denied: ${label}`)
    return
  }
  throw new Error(`${label} was unexpectedly allowed`)
}

const callFunction = async (auth, path, payload) => {
  const token = await auth.currentUser.getIdToken(true)
  const response = await fetch(`${BASE_URL}/${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  const body = await response.text()
  let parsed = body
  try { parsed = JSON.parse(body) } catch (_) {}
  return { status: response.status, body: parsed }
}

const expectFunctionDenied = async (auth, label, path, payload) => {
  const result = await callFunction(auth, path, payload)
  assert(result.status === 403, `${label} returned HTTP ${result.status}: ${JSON.stringify(result.body)}`)
  console.log(`PASS denied: ${label}`)
}

const expectFunctionAllowed = async (auth, label, path, payload) => {
  const result = await callFunction(auth, path, payload)
  assert(result.status === 200, `${label} returned HTTP ${result.status}: ${JSON.stringify(result.body)}`)
  assert(result.body?.uploadUrl, `${label} did not return a signed upload URL`)
  console.log(`PASS allowed: ${label}`)
}

const main = async () => {
  loadEnvFile(join(process.cwd(), '.env'))
  const password = getArg('--password')
  if (!password) throw new Error('Use --password=<current-password>')

  const app = initializeApp({
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID
  }, 'verify-fawwaz-teacher-account')

  try {
    const auth = getAuth(app)
    const db = getFirestore(app)
    const credential = await signInWithEmailAndPassword(auth, EMAIL, password)
    const teacherSnapshot = await getDoc(doc(db, 'teachers', credential.user.uid))
    assert(teacherSnapshot.exists(), 'Teacher profile does not exist')
    const teacher = teacherSnapshot.data() || {}
    assert(teacher.role === 'teacher', 'Profile role is not teacher')
    assert(JSON.stringify([...teacher.subjects].sort()) === JSON.stringify([...SUBJECTS].sort()), 'Teacher subjects are incorrect')
    assert(SUBJECTS.every((subjectId) => teacher.classTiers?.[subjectId] === 'Foundation'), 'Teacher class tiers are incorrect')
    assert(JSON.stringify(teacher.permissions) === JSON.stringify([
      'view_recordings', 'upload_recordings', 'view_homework', 'upload_homework'
    ]), 'Teacher permissions are incorrect')
    assert(JSON.stringify(teacher.allowedMaterialTypes) === JSON.stringify(['recording', 'homework']), 'Material types are incorrect')
    console.log('PASS profile: Fawwaz is scoped to four Foundation classes')

    for (const subjectId of SUBJECTS) {
      const subjectSnapshot = await getDoc(doc(db, 'subjects', subjectId))
      assert(subjectSnapshot.exists(), `Assigned subject is missing: ${subjectId}`)
    }
    console.log('PASS reads: assigned subject documents are available')

    await expectDenied('unassigned English subject document', () => getDoc(doc(db, 'subjects', BLOCKED_SUBJECT)))
    await expectDenied('Higher-tier recordings query', () => getDocs(query(
      collection(db, 'recordings'),
      where('subjectId', '==', 'physics_001'),
      where('tier', '==', 'Higher')
    )))
    await expectDenied('learning resources query', () => getDocs(query(
      collection(db, 'resources'),
      where('subjectId', '==', 'physics_001')
    )))

    const allowedRecordings = await getDocs(query(
      collection(db, 'recordings'),
      where('subjectId', '==', 'physics_001'),
      where('tier', '==', 'Foundation')
    ))
    const allowedHomework = await getDocs(query(
      collection(db, 'homeworks'),
      where('subjectId', '==', 'physics_001'),
      where('tier', '==', 'Foundation')
    ))
    console.log(`PASS reads: Foundation recordings (${allowedRecordings.size}), homework (${allowedHomework.size})`)

    const recordingPayload = {
      subjectId: 'physics_001',
      examBoard: 'AQA',
      tier: 'Foundation',
      fileName: 'permission-check.mp4',
      contentType: 'video/mp4',
      uploadType: 'recording',
      studentIds: []
    }
    const homeworkPayload = {
      subjectId: 'physics_001',
      examBoard: 'AQA',
      tier: 'Foundation',
      fileName: 'permission-check.pdf',
      contentType: 'application/pdf',
      uploadType: 'homework',
      studentIds: []
    }
    await expectFunctionAllowed(auth, 'Foundation recording upload initialization', 'createR2AdminUpload', recordingPayload)
    await expectFunctionAllowed(auth, 'Foundation homework upload initialization', 'createR2AdminUpload', homeworkPayload)
    await expectFunctionDenied(auth, 'Higher recording upload initialization', 'createR2AdminUpload', {
      ...recordingPayload,
      tier: 'Higher'
    })
    await expectFunctionDenied(auth, 'English recording upload initialization', 'createR2AdminUpload', {
      ...recordingPayload,
      subjectId: BLOCKED_SUBJECT,
      tier: 'all-levels'
    })
    await expectFunctionDenied(auth, 'learning resource upload initialization', 'createR2AdminUpload', {
      ...homeworkPayload,
      uploadType: 'resource'
    })
    console.log('All live Fawwaz permission checks passed.')
  } finally {
    await deleteApp(app)
  }
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
