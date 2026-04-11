#!/usr/bin/env node

import admin from 'firebase-admin'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const serviceAccountPath = join(process.cwd(), 'serviceAccountKey.json')

if (!existsSync(serviceAccountPath)) {
  console.error('serviceAccountKey.json not found in the project root.')
  process.exit(1)
}

const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()
const auth = admin.auth()

const scienceSubjects = [
  {
    id: 'biology_001',
    name: 'Biology',
    description: 'GCSE Biology',
    zoomLink: ''
  },
  {
    id: 'chemistry_001',
    name: 'Chemistry',
    description: 'GCSE Chemistry',
    zoomLink: ''
  },
  {
    id: 'physics_001',
    name: 'Physics',
    description: 'GCSE Physics',
    zoomLink: ''
  }
]

const parseArgs = () => {
  const args = process.argv.slice(2)
  const parsed = {}

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i]
    if (arg === '--student-email') {
      parsed.studentEmail = args[i + 1]
      i += 1
    }
  }

  return parsed
}

const buildSubjectSettings = (existingSettings = {}) => {
  const nextSettings = { ...existingSettings }

  scienceSubjects.forEach((subject) => {
    nextSettings[subject.id] = {
      examBoard: nextSettings[subject.id]?.examBoard || 'AQA',
      tier: nextSettings[subject.id]?.tier || 'Higher'
    }
  })

  return nextSettings
}

const createSubjects = async () => {
  for (const subject of scienceSubjects) {
    await db.collection('subjects').doc(subject.id).set(
      {
        name: subject.name,
        description: subject.description,
        zoomLink: subject.zoomLink,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      },
      { merge: true }
    )

    console.log(`Created or updated subject: ${subject.name} (${subject.id})`)
  }
}

const enrollStudent = async (studentEmail) => {
  const user = await auth.getUserByEmail(studentEmail)
  const studentRef = db.collection('students').doc(user.uid)
  const studentSnapshot = await studentRef.get()

  if (!studentSnapshot.exists) {
    throw new Error(`No student document found for ${studentEmail} (uid: ${user.uid})`)
  }

  const studentData = studentSnapshot.data() || {}
  const existingSubjects = Array.isArray(studentData.subjects) ? studentData.subjects : []
  const nextSubjects = Array.from(
    new Set([...existingSubjects, ...scienceSubjects.map((subject) => subject.id)])
  )

  await studentRef.set(
    {
      subjects: nextSubjects,
      subjectSettings: buildSubjectSettings(studentData.subjectSettings),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    },
    { merge: true }
  )

  console.log(`Updated ${studentEmail}`)
  console.log(`Subjects: ${nextSubjects.join(', ')}`)
}

const main = async () => {
  const { studentEmail } = parseArgs()

  await createSubjects()

  if (studentEmail) {
    await enrollStudent(studentEmail)
  } else {
    console.log('No student email provided. Subjects were created only.')
    console.log('Use --student-email you@example.com to add them to a student account.')
  }
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
