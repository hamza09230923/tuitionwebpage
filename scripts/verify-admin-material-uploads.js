// Creates isolated test assignments, verifies live uploads/downloads, then removes them.
import assert from 'node:assert/strict'
import { readFileSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { randomUUID } from 'node:crypto'
import { createRequire } from 'node:module'
import { execFileSync } from 'node:child_process'
import { initializeApp, deleteApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore'

for (const path of ['.env', 'functions/.env']) {
  for (const line of readFileSync(path, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([^#=]+)=(.*)$/)
    if (m) process.env[m[1].trim()] ??= m[2].trim().replace(/^['"]|['"]$/g, '')
  }
}
const require = createRequire(new URL('../functions/package.json', import.meta.url))
const { S3Client, DeleteObjectCommand } = require('@aws-sdk/client-s3')
const s3 = new S3Client({
  region: 'auto', endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: process.env.R2_ACCESS_KEY_ID, secretAccessKey: process.env.R2_SECRET_ACCESS_KEY }
})
const app = initializeApp({ apiKey: process.env.VITE_FIREBASE_API_KEY, projectId: process.env.VITE_FIREBASE_PROJECT_ID })
const db = getFirestore(app)
const origin = 'https://myschola.uk'
const base = process.env.VITE_FUNCTIONS_BASE_URL || `https://us-central1-${process.env.VITE_FIREBASE_PROJECT_ID}.cloudfunctions.net`
const testId = `upload-check-${randomUUID()}`
const studentRef = doc(db, 'students', testId)
const records = []
const keys = []
const fixture = `dist/${testId}.mp4`
let createdProfile = false
let token
const route = { subjectId: 'maths_001', examBoard: 'Edexcel', tier: 'Foundation' }
const call = async (endpoint, payload) => {
  const response = await fetch(`${base}/${endpoint}`, {
    method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', Origin: origin },
    body: JSON.stringify(payload), signal: AbortSignal.timeout(60000)
  })
  const body = await response.text()
  assert(response.ok, `${endpoint}: HTTP ${response.status} ${body}`)
  assert.equal(response.headers.get('access-control-allow-origin'), origin, `${endpoint} CORS`)
  return JSON.parse(body)
}
const makePdf = () => {
  let pdf = '%PDF-1.4\n'
  const stream = 'BT /F1 14 Tf 30 100 Td (Temporary admin upload check) Tj ET'
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 300 150] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`
  ]
  const offsets = [0]
  objects.forEach((object, i) => { offsets.push(Buffer.byteLength(pdf)); pdf += `${i + 1} 0 obj\n${object}\nendobj\n` })
  const xref = Buffer.byteLength(pdf)
  pdf += `xref\n0 6\n0000000000 65535 f \n${offsets.slice(1).map(offset => `${String(offset).padStart(10, '0')} 00000 n \n`).join('')}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`
  return Buffer.from(pdf)
}

try {
  const { user } = await signInWithEmailAndPassword(getAuth(app), process.env.MYSCHOLA_ADMIN_EMAIL || 'admin@myschola.com', process.env.MYSCHOLA_ADMIN_PASSWORD || 'Admin123!')
  assert((await getDoc(doc(db, 'admins', user.uid))).exists(), 'Signed-in account must be an admin')
  token = await user.getIdToken()
  console.log(`Admin authenticated: ${user.email}`)
  mkdirSync('dist', { recursive: true })
  execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-f', 'lavfi', '-i', 'color=c=black:s=160x90:d=1', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', fixture], { windowsHide: true })
  const video = readFileSync(fixture)
  const pdf = makePdf()
  await setDoc(studentRef, { name: 'Temporary upload verification', subjects: [route.subjectId], subjectSettings: { [route.subjectId]: { examBoard: route.examBoard, tier: route.tier } } })
  createdProfile = true
  const cases = [
    ['Lesson video', 'recording', 'createRecording', 'mp4', 'video/mp4', video],
    ['Homework PDF', 'homework', 'createHomework', 'pdf', 'application/pdf', pdf],
    ['Homework video', 'homework', 'createHomework', 'mp4', 'video/mp4', video],
    ['Revision resource', 'resource', 'createResource', 'pdf', 'application/pdf', pdf]
  ]
  for (const [label, uploadType, endpoint, extension, contentType, data] of cases) {
    try {
    const fileName = `${testId}-${uploadType}.${extension}`
    const upload = await call('createR2AdminUpload', { ...route, fileName, contentType, uploadType, studentIds: [testId] })
    keys.push(upload.r2Key)
    const preflight = await fetch(upload.uploadUrl, { method: 'OPTIONS', headers: { Origin: origin, 'Access-Control-Request-Method': 'PUT', 'Access-Control-Request-Headers': 'content-type' }, signal: AbortSignal.timeout(30000) })
    assert(preflight.ok, `${label}: upload preflight HTTP ${preflight.status}`)
    assert([origin, '*'].includes(preflight.headers.get('access-control-allow-origin')), `${label}: storage CORS`)
    const put = await fetch(upload.uploadUrl, { method: upload.method || 'PUT', headers: { ...upload.headers, Origin: origin }, body: data, signal: AbortSignal.timeout(30000) })
    assert(put.ok, `${label}: upload HTTP ${put.status}`)
    const saved = await call(endpoint, { ...route, title: `Temporary verification: ${label}`, r2Key: upload.r2Key, visibility: 'student', studentId: testId, attachmentName: fileName, attachmentContentType: contentType, attachmentSize: data.length, fileName, fileContentType: contentType, fileSize: data.length })
    const recordRef = doc(db, saved.collection, saved.id)
    records.push(recordRef)
    assert((await getDoc(recordRef)).exists(), `${label}: assignment was not saved`)
    const preview = await call('getR2DownloadUrl', { collection: saved.collection, documentId: saved.id })
    const download = await fetch(preview.downloadUrl, { headers: { Origin: origin }, signal: AbortSignal.timeout(30000) })
    assert(download.ok, `${label}: preview HTTP ${download.status}`)
    assert.equal(download.headers.get('content-type'), contentType, `${label}: preview MIME type`)
    assert.equal(download.headers.get('content-disposition'), 'inline', `${label}: preview disposition`)
    assert.deepEqual(Buffer.from(await download.arrayBuffer()), data, `${label}: downloaded bytes differ`)
    console.log(`PASS ${label}: browser upload permission, file upload, assignment save and preview/download`)
    } catch (error) {
      console.error(`FAIL ${label}: ${error.message}`)
      process.exitCode = 1
    }
  }
} finally {
  const cleanup = await Promise.allSettled([
    ...records.map(ref => deleteDoc(ref)),
    ...keys.map(Key => s3.send(new DeleteObjectCommand({ Bucket: process.env.R2_BUCKET_NAME || 'myschola-files', Key }))),
    ...(createdProfile ? [deleteDoc(studentRef)] : [])
  ])
  if (existsSync(fixture)) rmSync(fixture)
  await deleteApp(app)
  s3.destroy()
  const failures = cleanup.filter(result => result.status === 'rejected')
  if (failures.length) { console.error(`Cleanup failed for ${failures.length} temporary items`); process.exitCode = 1 }
  else console.log('Temporary assignments, files and student profile removed.')
}
