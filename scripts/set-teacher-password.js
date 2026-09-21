#!/usr/bin/env node

import process from 'node:process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { initializeApp, deleteApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, updatePassword } from 'firebase/auth'

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

const main = async () => {
  loadEnvFile(join(process.cwd(), '.env'))
  const email = getArg('--email')
  const currentPassword = getArg('--current-password')
  const newPassword = getArg('--new-password')

  if (!email || !currentPassword || !newPassword) {
    throw new Error('Use --email=, --current-password=, and --new-password=')
  }
  if (newPassword.length < 6 || newPassword.length > 8) {
    throw new Error('Firebase passwords must be 6 to 8 characters for this account update')
  }

  const app = initializeApp({
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID
  }, 'set-teacher-password')

  try {
    const auth = getAuth(app)
    const credential = await signInWithEmailAndPassword(auth, email, currentPassword)
    await updatePassword(credential.user, newPassword)
    console.log(`Password updated for ${email}. Length: ${newPassword.length} characters.`)
  } finally {
    await deleteApp(app)
  }
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
