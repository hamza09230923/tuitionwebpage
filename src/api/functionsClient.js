import { auth } from '../firebase'

const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
const fallbackBase = projectId
  ? `https://us-central1-${projectId}.cloudfunctions.net`
  : ''

const FUNCTIONS_BASE_URL = import.meta.env.VITE_FUNCTIONS_BASE_URL || fallbackBase

const getIdToken = async () => {
  const user = auth.currentUser
  if (!user) {
    throw new Error('User is not authenticated')
  }
  return user.getIdToken()
}

const callFunction = async (path, payload) => {
  if (!FUNCTIONS_BASE_URL) {
    throw new Error('Functions base URL is not configured')
  }

  const token = await getIdToken()
  const response = await fetch(`${FUNCTIONS_BASE_URL}/${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload || {})
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text || `Request failed (${response.status})`)
  }

  return response.json()
}

const callPublicFunction = async (path, payload) => {
  if (!FUNCTIONS_BASE_URL) {
    throw new Error('Functions base URL is not configured')
  }

  const response = await fetch(`${FUNCTIONS_BASE_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload || {})
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text || `Request failed (${response.status})`)
  }

  return response.json()
}

export const createHidriveUpload = (payload) =>
  callFunction('createHidriveUpload', payload)

export const createRecording = (payload) =>
  callFunction('createRecording', payload)

export const createHomework = (payload) =>
  callFunction('createHomework', payload)

export const createResource = (payload) =>
  callFunction('createResource', payload)

export const registerWebinar = (payload) =>
  callPublicFunction('registerWebinar', payload)
