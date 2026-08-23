#!/usr/bin/env node

import process from 'node:process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { initializeApp, deleteApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {
  collection,
  deleteField,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  serverTimestamp,
  where,
  writeBatch
} from 'firebase/firestore'

const SUBJECT_ID = 'triple_science_001'
const CONTENT_COLLECTIONS = [
  'recordings',
  'studentRecordings',
  'homeworks',
  'studentHomeworks',
  'resources',
  'studentResources'
]

const loadEnvFile = (envPath) => {
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

const getFirebaseConfig = () => ({
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
})

const getHiDriveToken = async () => {
  const tokenUrl = process.env.HIDRIVE_TOKEN_URL
  const clientId = process.env.HIDRIVE_CLIENT_ID
  const clientSecret = process.env.HIDRIVE_CLIENT_SECRET
  const refreshToken = process.env.HIDRIVE_REFRESH_TOKEN
  const scope = process.env.HIDRIVE_SCOPE

  if (!tokenUrl || !clientId || !clientSecret) {
    throw new Error('HiDrive OAuth configuration is missing.')
  }

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret
  })
  if (refreshToken) {
    body.set('grant_type', 'refresh_token')
    body.set('refresh_token', refreshToken)
  } else {
    body.set('grant_type', 'client_credentials')
    if (scope) body.set('scope', scope)
  }

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  })
  if (!response.ok) {
    throw new Error(`HiDrive authentication failed (${response.status}).`)
  }

  const data = await response.json()
  if (!data.access_token) throw new Error('HiDrive did not return an access token.')
  return data.access_token
}

const getHiDriveUrl = (endpoint, hidrivePath, parameters = {}) => {
  const apiBase = String(process.env.HIDRIVE_API_BASE || '').replace(/\/$/, '')
  if (!apiBase) throw new Error('HIDRIVE_API_BASE is missing.')
  const url = new URL(`${apiBase}/${endpoint}`)
  url.searchParams.set('path', hidrivePath)
  Object.entries(parameters).forEach(([key, value]) => {
    url.searchParams.set(key, String(value))
  })
  return url.toString()
}

const getTripleScienceFolder = (hidrivePath) => {
  const normalized = String(hidrivePath || '').startsWith('/')
    ? String(hidrivePath)
    : `/${String(hidrivePath || '')}`
  const marker = `/${SUBJECT_ID}/`
  const markerIndex = normalized.indexOf(marker)
  if (markerIndex === -1) return null
  return normalized.slice(0, markerIndex + marker.length - 1)
}

const checkHiDriveFiles = async (hidrivePaths) => {
  if (!hidrivePaths.size) return { present: 0, missing: 0 }

  loadEnvFile(join(process.cwd(), 'functions', '.env'))
  const token = await getHiDriveToken()
  let present = 0
  let missing = 0
  for (const hidrivePath of hidrivePaths) {
    const response = await fetch(getHiDriveUrl('file', hidrivePath), {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    })
    if (response.status === 404) {
      missing += 1
      continue
    }
    if (!response.ok) {
      throw new Error(`HiDrive file check failed (${response.status}).`)
    }
    present += 1
  }

  return { present, missing }
}

const deleteHiDriveFiles = async (hidrivePaths) => {
  if (!hidrivePaths.size) return

  loadEnvFile(join(process.cwd(), 'functions', '.env'))
  const token = await getHiDriveToken()
  const folders = new Set()

  for (const hidrivePath of hidrivePaths) {
    const folder = getTripleScienceFolder(hidrivePath)
    if (!folder) {
      throw new Error('Refusing to delete a HiDrive path outside Triple Science.')
    }

    const response = await fetch(getHiDriveUrl('file', hidrivePath), {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    if (!response.ok && response.status !== 404) {
      throw new Error(`HiDrive file deletion failed (${response.status}).`)
    }
    folders.add(folder)
  }

  for (const folder of folders) {
    const response = await fetch(getHiDriveUrl('dir', folder, { recursive: true }), {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    if (!response.ok && response.status !== 404) {
      throw new Error(`HiDrive folder deletion failed (${response.status}).`)
    }
  }
}

const getHiDriveSubjectFolders = () => (
  [
    process.env.HIDRIVE_RECORDINGS_ROOT || process.env.HIDRIVE_UPLOAD_ROOT,
    process.env.HIDRIVE_HOMEWORK_ROOT || process.env.HIDRIVE_UPLOAD_ROOT,
    process.env.HIDRIVE_RESOURCES_ROOT || process.env.HIDRIVE_UPLOAD_ROOT
  ]
    .filter(Boolean)
    .map((root) => `/${String(root).replace(/^\/+|\/+$/g, '')}/${SUBJECT_ID}`)
)

const verifyHiDriveSubjectFolders = async () => {
  loadEnvFile(join(process.cwd(), 'functions', '.env'))
  const roots = getHiDriveSubjectFolders()

  const token = await getHiDriveToken()
  let remaining = 0
  for (const folder of new Set(roots)) {
    const response = await fetch(getHiDriveUrl('dir', folder), {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    })
    if (response.status === 404) continue
    if (!response.ok) {
      throw new Error(`HiDrive folder verification failed (${response.status}).`)
    }
    remaining += 1
  }

  return remaining
}

const deleteHiDriveSubjectFolders = async () => {
  loadEnvFile(join(process.cwd(), 'functions', '.env'))
  const token = await getHiDriveToken()
  for (const folder of new Set(getHiDriveSubjectFolders())) {
    const response = await fetch(getHiDriveUrl('dir', folder, { recursive: true }), {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    if (!response.ok && response.status !== 404) {
      throw new Error(`HiDrive folder deletion failed (${response.status}).`)
    }
  }
}

const getArgValue = (flag) => {
  const index = process.argv.indexOf(flag)
  return index === -1 ? undefined : process.argv[index + 1]
}

const getArgs = () => ({
  execute: process.argv.includes('--execute'),
  deleteHidriveFiles: process.argv.includes('--delete-hidrive-files'),
  checkHidriveFiles: process.argv.includes('--check-hidrive-files'),
  verifyHidriveFolders: process.argv.includes('--verify-hidrive-folders'),
  adminEmail: getArgValue('--admin-email'),
  adminPassword: getArgValue('--admin-password')
})

const removeSubject = (values) => (
  Array.isArray(values)
    ? values.filter((value) => String(value) !== SUBJECT_ID)
    : values
)

const removeSubjectEnrollment = (enrollments) => (
  Array.isArray(enrollments)
    ? enrollments.filter((enrollment) => String(enrollment?.subjectId) !== SUBJECT_ID)
    : enrollments
)

const removeIds = (values, ids) => (
  Array.isArray(values)
    ? values.filter((value) => !ids.has(String(value)))
    : values
)

const changed = (before, after) => JSON.stringify(before) !== JSON.stringify(after)

const chunk = (values, size) => {
  const result = []
  for (let index = 0; index < values.length; index += size) {
    result.push(values.slice(index, index + size))
  }
  return result
}

const getDocsForSubject = async (db, collectionName) => {
  const snapshot = await getDocs(
    query(collection(db, collectionName), where('subjectId', '==', SUBJECT_ID))
  )
  return snapshot.docs
}

const getSubmissionDocs = async (db, homeworkIds) => {
  const byPath = new Map()
  const add = (docs) => docs.forEach((snapshot) => byPath.set(snapshot.ref.path, snapshot))

  add(await getDocsForSubject(db, 'submissions'))
  for (const ids of chunk([...homeworkIds], 30)) {
    if (!ids.length) continue
    const snapshot = await getDocs(
      query(collection(db, 'submissions'), where('homeworkId', 'in', ids))
    )
    add(snapshot.docs)
  }

  return [...byPath.values()]
}

const getStudentUpdates = (studentDocs, recordingIds, homeworkIds, resourceIds) => (
  studentDocs.flatMap((snapshot) => {
    const data = snapshot.data() || {}
    const nextSubjects = removeSubject(data.subjects)
    const nextEnrollments = removeSubjectEnrollment(data.enrollments)
    const nextRecordingIds = removeIds(data.hiddenRecordingIds, recordingIds)
    const nextHomeworkIds = removeIds(data.hiddenHomeworkIds, homeworkIds)
    const nextResourceIds = removeIds(data.hiddenResourceIds, resourceIds)
    const hasSubjectSettings = Boolean(
      data.subjectSettings &&
      typeof data.subjectSettings === 'object' &&
      Object.prototype.hasOwnProperty.call(data.subjectSettings, SUBJECT_ID)
    )

    if (
      !changed(data.subjects, nextSubjects) &&
      !changed(data.enrollments, nextEnrollments) &&
      !changed(data.hiddenRecordingIds, nextRecordingIds) &&
      !changed(data.hiddenHomeworkIds, nextHomeworkIds) &&
      !changed(data.hiddenResourceIds, nextResourceIds) &&
      !hasSubjectSettings
    ) {
      return []
    }

    const update = { updatedAt: serverTimestamp() }
    if (changed(data.subjects, nextSubjects)) update.subjects = nextSubjects
    if (changed(data.enrollments, nextEnrollments)) update.enrollments = nextEnrollments
    if (changed(data.hiddenRecordingIds, nextRecordingIds)) {
      update.hiddenRecordingIds = nextRecordingIds
    }
    if (changed(data.hiddenHomeworkIds, nextHomeworkIds)) {
      update.hiddenHomeworkIds = nextHomeworkIds
    }
    if (changed(data.hiddenResourceIds, nextResourceIds)) {
      update.hiddenResourceIds = nextResourceIds
    }
    if (hasSubjectSettings) update[`subjectSettings.${SUBJECT_ID}`] = deleteField()

    return [{ type: 'update', ref: snapshot.ref, data: update }]
  })
)

const commitOperations = async (db, operations) => {
  for (const operationChunk of chunk(operations, 450)) {
    const batch = writeBatch(db)
    operationChunk.forEach((operation) => {
      if (operation.type === 'delete') {
        batch.delete(operation.ref)
      } else {
        batch.update(operation.ref, operation.data)
      }
    })
    await batch.commit()
  }
}

const audit = async (db) => {
  const [subjectSnapshot, studentSnapshots, ...contentSnapshots] = await Promise.all([
    getDoc(doc(db, 'subjects', SUBJECT_ID)),
    getDocs(collection(db, 'students')),
    ...CONTENT_COLLECTIONS.map((collectionName) => getDocsForSubject(db, collectionName))
  ])

  const content = Object.fromEntries(
    CONTENT_COLLECTIONS.map((collectionName, index) => [collectionName, contentSnapshots[index]])
  )
  const homeworkIds = new Set([
    ...content.homeworks.map((snapshot) => snapshot.id),
    ...content.studentHomeworks.map((snapshot) => snapshot.id)
  ])
  const submissions = await getSubmissionDocs(db, homeworkIds)
  const recordingIds = new Set([
    ...content.recordings.map((snapshot) => snapshot.id),
    ...content.studentRecordings.map((snapshot) => snapshot.id)
  ])
  const resourceIds = new Set([
    ...content.resources.map((snapshot) => snapshot.id),
    ...content.studentResources.map((snapshot) => snapshot.id)
  ])
  const hidrivePaths = new Set(
    [...Object.values(content).flat(), ...submissions]
      .map((snapshot) => snapshot.data()?.hidrivePath)
      .filter(Boolean)
  )
  const studentUpdates = getStudentUpdates(
    studentSnapshots.docs,
    recordingIds,
    homeworkIds,
    resourceIds
  )
  return {
    subjectSnapshot,
    content,
    submissions,
    studentUpdates,
    hidrivePaths
  }
}

const printSummary = (state) => {
  const counts = Object.fromEntries(
    CONTENT_COLLECTIONS.map((collectionName) => [collectionName, state.content[collectionName].length])
  )

  console.log('Triple Science clean-up audit')
  console.log(`Subject document: ${state.subjectSnapshot.exists() ? 'present' : 'absent'}`)
  console.log(`Student profiles to update: ${state.studentUpdates.length}`)
  Object.entries(counts).forEach(([collectionName, count]) => {
    console.log(`${collectionName}: ${count}`)
  })
  console.log(`submissions: ${state.submissions.length}`)
  console.log(`Referenced HiDrive files (not deleted by this tool): ${state.hidrivePaths.size}`)
}

const verify = async (db) => {
  const state = await audit(db)
  const remainingContent = Object.values(state.content)
    .reduce((total, docs) => total + docs.length, 0) + state.submissions.length
  const subjectRemains = state.subjectSnapshot.exists()

  console.log('Post-clean-up verification')
  console.log(`Subject document remaining: ${subjectRemains ? 'yes' : 'no'}`)
  console.log(`Student profiles still referencing subject or content: ${state.studentUpdates.length}`)
  console.log(`Related Firestore content remaining: ${remainingContent}`)

  return !subjectRemains && !state.studentUpdates.length && !remainingContent
}

const main = async () => {
  loadEnvFile(join(process.cwd(), '.env'))
  const args = getArgs()
  const firebaseConfig = getFirebaseConfig()
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    throw new Error('Firebase client config is missing. Check .env.')
  }

  const app = initializeApp(firebaseConfig, 'remove-triple-science')
  try {
    const auth = getAuth(app)
    await signInWithEmailAndPassword(
      auth,
      args.adminEmail || process.env.MYSCHOLA_ADMIN_EMAIL || 'admin@myschola.com',
      args.adminPassword || process.env.MYSCHOLA_ADMIN_PASSWORD || 'Admin123!'
    )

    const db = getFirestore(app)
    const state = await audit(db)
    printSummary(state)

    if (args.checkHidriveFiles || args.deleteHidriveFiles) {
      const hidriveCheck = await checkHiDriveFiles(state.hidrivePaths)
      console.log(`HiDrive files present: ${hidriveCheck.present}`)
      console.log(`HiDrive files already absent: ${hidriveCheck.missing}`)
    }

    if (args.verifyHidriveFolders) {
      const remainingFolders = await verifyHiDriveSubjectFolders()
      console.log(`Triple Science HiDrive folders remaining: ${remainingFolders}`)
      if (remainingFolders) {
        throw new Error('Triple Science storage folders still exist.')
      }
    }

    if (!args.execute) {
      console.log('Dry run only. Re-run with --execute --delete-hidrive-files to remove all listed Triple Science data.')
      return
    }

    await commitOperations(db, state.studentUpdates)

    if (args.deleteHidriveFiles) {
      await deleteHiDriveFiles(state.hidrivePaths)
      await deleteHiDriveSubjectFolders()
    } else if (state.hidrivePaths.size) {
      console.log('HiDrive files were not deleted. Use --delete-hidrive-files for a complete removal.')
    }

    const contentDeletes = [
      ...Object.values(state.content).flat(),
      ...state.submissions
    ].map((snapshot) => ({ type: 'delete', ref: snapshot.ref }))
    await commitOperations(db, contentDeletes)

    if (state.subjectSnapshot.exists()) {
      await commitOperations(db, [{ type: 'delete', ref: state.subjectSnapshot.ref }])
    }

    const complete = await verify(db)
    if (!complete) {
      throw new Error('Post-clean-up verification found remaining Triple Science references.')
    }

    if (args.deleteHidriveFiles) {
      const remainingFolders = await verifyHiDriveSubjectFolders()
      if (remainingFolders) {
        throw new Error('Post-clean-up verification found remaining Triple Science storage folders.')
      }
    }

    console.log('Triple Science has been removed from the app data.')
  } finally {
    await deleteApp(app)
  }
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
