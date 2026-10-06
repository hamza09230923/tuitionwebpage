#!/usr/bin/env node

// Update the existing teacher profile without changing his password or classes.
// Uses serviceAccountKey.json or Firebase Admin application-default credentials.
// Dry-run by default; --execute saves the reviewed permissions.
import admin from 'firebase-admin'
import { existsSync, readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { resolve } from 'node:path'

const permissions = ['view_recordings', 'upload_recordings', 'view_homework', 'upload_homework', 'view_resources', 'upload_resources']
const execute = process.argv.includes('--execute')
let credential = existsSync('serviceAccountKey.json')
  ? admin.credential.cert(JSON.parse(readFileSync('serviceAccountKey.json', 'utf8')))
  : admin.credential.applicationDefault()
const cliPath = process.argv.find((arg) => arg.startsWith('--firebase-tools-path='))?.split('=').slice(1).join('=')
if (cliPath) {
  const require = createRequire(import.meta.url)
  const cliAuth = require(resolve(cliPath, 'lib/auth.js'))
  const account = cliAuth.getGlobalDefaultAccount()
  if (!account) throw new Error('Sign in with firebase login first')
  credential = {
    async getAccessToken() {
      const tokens = await cliAuth.getAccessToken(account.tokens.refresh_token, [
        'https://www.googleapis.com/auth/cloud-platform', 'https://www.googleapis.com/auth/firebase'
      ])
      return { access_token: tokens.access_token, expires_in: tokens.expires_in || 3600 }
    }
  }
}
const app = admin.initializeApp({ credential, projectId: 'myschola-5ec1f' })

try {
  const user = await admin.auth().getUserByEmail('fawwaz@myschola.co.uk')
  const decode = (value) => {
    if (value?.stringValue !== undefined) return value.stringValue
    if (value?.arrayValue) return (value.arrayValue.values || []).map(decode)
    if (value?.mapValue) return Object.fromEntries(Object.entries(value.mapValue.fields || {}).map(([key, field]) => [key, decode(field)]))
    return null
  }
  const documentUrl = `https://firestore.googleapis.com/v1/projects/myschola-5ec1f/databases/(default)/documents/teachers/${user.uid}`
  const requestProfile = async (method = 'GET', body) => {
    const token = await credential.getAccessToken()
    const mask = method === 'PATCH' ? '?updateMask.fieldPaths=permissions&updateMask.fieldPaths=allowedMaterialTypes&updateMask.fieldPaths=updatedAt&currentDocument.exists=true' : ''
    const response = await fetch(documentUrl + mask, {
      method, headers: { Authorization: `Bearer ${token.access_token}`, 'Content-Type': 'application/json' },
      ...(body ? { body: JSON.stringify(body) } : {})
    })
    const result = await response.json()
    if (!response.ok) throw new Error(result.error?.message || `Profile request failed: ${response.status}`)
    return Object.fromEntries(Object.entries(result.fields || {}).map(([key, value]) => [key, decode(value)]))
  }
  const ref = cliPath ? {
    async get() {
      const data = await requestProfile()
      return { exists: true, data: () => data }
    },
    async update() {
      const current = await requestProfile()
      const array = (values) => ({ arrayValue: { values: [...new Set(values)].map((value) => ({ stringValue: value })) } })
      await requestProfile('PATCH', { fields: {
        permissions: array([...(current.permissions || []), ...permissions]),
        allowedMaterialTypes: array([...(current.allowedMaterialTypes || []), 'recording', 'homework', 'resource']),
        updatedAt: { timestampValue: new Date().toISOString() }
      } })
    }
  } : admin.firestore().doc(`teachers/${user.uid}`)
  const snapshot = await ref.get()
  if (!snapshot.exists || snapshot.data().email !== user.email) throw new Error('Fawwaz teacher profile was not found')
  const teacher = snapshot.data()
  console.log(JSON.stringify({ mode: execute ? 'execute' : 'dry-run', email: user.email,
    subjects: teacher.subjects, classTiers: teacher.classTiers, classBoards: teacher.classBoards, permissions }, null, 2))
  if (execute) {
    await ref.update({
      permissions: admin.firestore.FieldValue.arrayUnion(...permissions),
      allowedMaterialTypes: admin.firestore.FieldValue.arrayUnion('recording', 'homework', 'resource'),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    })
    const updated = (await ref.get()).data()
    if (!permissions.every((permission) => updated.permissions.includes(permission))) throw new Error('Permission update verification failed')
    console.log('Fawwaz class material permissions enabled and verified.')
  }
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
} finally {
  await app.delete()
}
