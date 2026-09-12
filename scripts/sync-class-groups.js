#!/usr/bin/env node

import process from 'node:process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { initializeApp, deleteApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, getDocs, getFirestore, serverTimestamp, writeBatch } from 'firebase/firestore'
import { buildClassGroupRecords, buildStudentClassLists } from '../src/utils/classGroups.js'

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

const commitOps = async (db, ops) => {
  for (let i = 0; i < ops.length; i += 400) {
    const batch = writeBatch(db)
    ops.slice(i, i + 400).forEach((op) => {
      if (op.type === 'delete') batch.delete(op.ref)
      else batch.set(op.ref, op.data)
    })
    await batch.commit()
  }
}

const main = async () => {
  loadEnvFile(join(process.cwd(), '.env'))
  const execute = process.argv.includes('--execute')
  const app = initializeApp({
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID
  }, 'sync-class-groups')

  try {
    const auth = getAuth(app)
    await signInWithEmailAndPassword(
      auth,
      process.env.MYSCHOLA_ADMIN_EMAIL || 'admin@myschola.com',
      process.env.MYSCHOLA_ADMIN_PASSWORD || 'Admin123!'
    )
    const db = getFirestore(app)
    const [studentsSnap, subjectsSnap] = await Promise.all([
      getDocs(collection(db, 'students')),
      getDocs(collection(db, 'subjects'))
    ])
    const students = studentsSnap.docs.map((snap) => ({ id: snap.id, ...snap.data() }))
    const subjects = subjectsSnap.docs.map((snap) => ({ id: snap.id, ...snap.data() }))
    const groups = buildClassGroupRecords(students, subjects)
    const lists = buildStudentClassLists(students, subjects)

    console.log(JSON.stringify({
      mode: execute ? 'execute' : 'dry-run',
      groupCount: groups.length,
      studentCount: lists.length,
      groups: groups.map((group) => ({
        id: group.id,
        subjectName: group.subjectName,
        tier: group.tier,
        examBoard: group.examBoard,
        zoomLink: group.zoomLink,
        studentCount: group.studentCount,
        students: group.students.map((student) => student.name)
      }))
    }, null, 2))

    if (!execute) {
      console.log('Dry run only. Re-run with --execute to save classGroups and studentClassLists.')
      return
    }

    const existingGroups = await getDocs(collection(db, 'classGroups'))
    const existingLists = await getDocs(collection(db, 'studentClassLists'))
    const nextGroupIds = new Set(groups.map((group) => group.id))
    const nextListIds = new Set(lists.map((student) => student.id))
    const ops = []
    existingGroups.docs.forEach((snap) => {
      if (!nextGroupIds.has(snap.id)) ops.push({ type: 'delete', ref: snap.ref })
    })
    existingLists.docs.forEach((snap) => {
      if (!nextListIds.has(snap.id)) ops.push({ type: 'delete', ref: snap.ref })
    })
    groups.forEach((group) => {
      ops.push({
        type: 'set',
        ref: doc(db, 'classGroups', group.id),
        data: { ...group, updatedAt: serverTimestamp() }
      })
    })
    lists.forEach((student) => {
      ops.push({
        type: 'set',
        ref: doc(db, 'studentClassLists', student.id),
        data: { ...student, updatedAt: serverTimestamp() }
      })
    })
    await commitOps(db, ops)
    console.log(`Saved ${groups.length} class groups and ${lists.length} student class lists.`)
  } finally {
    await deleteApp(app)
  }
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
