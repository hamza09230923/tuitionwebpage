const admin = require('firebase-admin')
const functions = require('firebase-functions')
const { google } = require('googleapis')

admin.initializeApp()

const db = admin.firestore()

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const normalizeRoot = (root, fallback = '/recordings') => {
  if (!root) return fallback
  let normalized = root.trim()
  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`
  }
  if (normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1)
  }
  return normalized || '/recordings'
}

const resolveUploadRoot = (uploadType) => {
  const type = String(uploadType || '').toLowerCase()
  if (type === 'homework') {
    return normalizeRoot(
      process.env.HIDRIVE_HOMEWORK_ROOT || process.env.HIDRIVE_UPLOAD_ROOT,
      '/users/myschola/homeworks'
    )
  }
  if (type === 'recording') {
    return normalizeRoot(
      process.env.HIDRIVE_RECORDINGS_ROOT || process.env.HIDRIVE_UPLOAD_ROOT,
      '/users/myschola/recordings'
    )
  }
  return normalizeRoot(process.env.HIDRIVE_UPLOAD_ROOT, '/users/myschola/recordings')
}

const sanitizeSegment = (value) => {
  if (!value) return 'file'
  return value.replace(/[^a-zA-Z0-9._-]+/g, '_')
}

const applyCors = (req, res) => {
  const origin = req.get('origin')
  if (origin) {
    if (!allowedOrigins.length || allowedOrigins.includes(origin)) {
      res.set('Access-Control-Allow-Origin', origin)
    }
  } else if (!allowedOrigins.length) {
    res.set('Access-Control-Allow-Origin', '*')
  }
  res.set('Vary', 'Origin')
  res.set('Access-Control-Allow-Headers', 'Authorization, Content-Type')
  res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  res.set('Access-Control-Max-Age', '3600')
}

const handleOptions = (req, res) => {
  if (req.method === 'OPTIONS') {
    applyCors(req, res)
    res.status(204).send('')
    return true
  }
  return false
}

const jsonError = (res, status, message) => {
  res.status(status).json({ error: message })
}

const getAuthToken = async (req) => {
  const authHeader = req.get('authorization') || ''
  const match = authHeader.match(/^Bearer (.+)$/)
  if (!match) {
    throw new Error('Missing auth token')
  }
  return admin.auth().verifyIdToken(match[1])
}

const getUserRole = async (uid) => {
  const adminDoc = await db.doc(`admins/${uid}`).get()
  if (adminDoc.exists) {
    return 'admin'
  }
  const teacherDoc = await db.doc(`teachers/${uid}`).get()
  if (teacherDoc.exists) {
    return 'teacher'
  }
  return null
}

const getHidriveToken = async () => {
  const tokenUrl = process.env.HIDRIVE_TOKEN_URL
  const clientId = process.env.HIDRIVE_CLIENT_ID
  const clientSecret = process.env.HIDRIVE_CLIENT_SECRET
  const scope = process.env.HIDRIVE_SCOPE
  const refreshToken = process.env.HIDRIVE_REFRESH_TOKEN

  if (!tokenUrl || !clientId || !clientSecret) {
    throw new Error('HiDrive OAuth configuration is missing')
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
    if (scope) {
      body.set('scope', scope)
    }
  }

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`HiDrive token request failed: ${text}`)
  }

  return response.json()
}

const encodeQueryValue = (value) => encodeURIComponent(value)

const splitPathForUpload = (hidrivePath) => {
  const normalized = hidrivePath.startsWith('/') ? hidrivePath : `/${hidrivePath}`
  const lastSlash = normalized.lastIndexOf('/')
  if (lastSlash <= 0) {
    return {
      dir: '/',
      name: normalized.slice(1) || 'file'
    }
  }
  return {
    dir: normalized.slice(0, lastSlash),
    name: normalized.slice(lastSlash + 1) || 'file'
  }
}

const buildUploadUrl = (hidrivePath) => {
  const template = process.env.HIDRIVE_UPLOAD_URL_TEMPLATE
  const apiBase = process.env.HIDRIVE_API_BASE

  if (!template && !apiBase) {
    throw new Error('HIDRIVE_UPLOAD_URL_TEMPLATE or HIDRIVE_API_BASE must be set')
  }

  const { dir, name } = splitPathForUpload(hidrivePath)
  const urlTemplate = template || `${apiBase}/file?dir={dir}&name={name}`
  const encodedPath = encodeQueryValue(hidrivePath)

  if (
    urlTemplate.includes('{dir}') ||
    urlTemplate.includes('{name}') ||
    urlTemplate.includes('{path}')
  ) {
    return urlTemplate
      .replace('{dir}', encodeQueryValue(dir))
      .replace('{name}', encodeQueryValue(name))
      .replace('{path}', encodedPath)
  }

  const separator = urlTemplate.includes('?') ? '&' : '?'
  return `${urlTemplate}${separator}dir=${encodeQueryValue(dir)}&name=${encodeQueryValue(name)}`
}

const appendQuery = (url, query) => {
  if (!query) return url
  const cleaned = query.replace(/^[?&]+/, '')
  if (!cleaned) return url
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}${cleaned}`
}

const buildShareUrl = (shareUrl, hidrivePath) => {
  const template = process.env.HIDRIVE_SHARE_URL_TEMPLATE
  const extraQuery = process.env.HIDRIVE_SHARE_QUERY
  const encodedPath = encodeQueryValue(hidrivePath)
  const base = template || shareUrl

  if (base.includes('{path}')) {
    return appendQuery(base.replace('{path}', encodedPath), extraQuery)
  }

  if (base.includes('path=')) {
    return appendQuery(base, extraQuery)
  }

  const separator = base.includes('?') ? '&' : '?'
  return appendQuery(`${base}${separator}path=${encodedPath}`, extraQuery)
}

const buildShareUrlWithPid = (shareUrl, pid) => {
  const url = new URL(shareUrl)
  url.searchParams.set('pid', pid)
  const extraQuery = process.env.HIDRIVE_SHARE_QUERY
  return appendQuery(url.toString(), extraQuery)
}

const buildFileInfoUrl = (hidrivePath) => {
  const template = process.env.HIDRIVE_FILE_INFO_URL_TEMPLATE
  const apiBase = process.env.HIDRIVE_API_BASE

  if (!template && !apiBase) {
    throw new Error('HIDRIVE_FILE_INFO_URL_TEMPLATE or HIDRIVE_API_BASE must be set')
  }

  const base = template || `${apiBase}/file?path={path}`
  if (base.includes('{path}')) {
    return base.replace('{path}', encodeQueryValue(hidrivePath))
  }

  const separator = base.includes('?') ? '&' : '?'
  return `${base}${separator}path=${encodeQueryValue(hidrivePath)}`
}

const fetchFileInfo = async (token, hidrivePath) => {
  const response = await fetch(buildFileInfoUrl(hidrivePath), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`HiDrive file info failed: ${text}`)
  }

  return response.json()
}

const normalizeDueDate = (input) => {
  if (!input) return null
  const date = new Date(input)
  if (Number.isNaN(date.getTime())) {
    return null
  }
  return admin.firestore.Timestamp.fromDate(date)
}

const trimInput = (value, maxLength = 200) => {
  if (!value) return ''
  const trimmed = String(value).trim()
  if (!trimmed) return ''
  return trimmed.slice(0, maxLength)
}

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const escapeCsv = (value) => {
  if (value === null || value === undefined) return ''
  const stringValue = String(value)
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`
  }
  return stringValue
}

const toCsvRow = (values) => values.map(escapeCsv).join(',')

let sheetsClient = null

const getSheetsClient = () => {
  if (sheetsClient) return sheetsClient

  const clientEmail = process.env.WEBINAR_SHEETS_CLIENT_EMAIL
  const privateKey = process.env.WEBINAR_SHEETS_PRIVATE_KEY

  if (!clientEmail || !privateKey) {
    return null
  }

  const auth = new google.auth.JWT(
    clientEmail,
    null,
    privateKey.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
  )

  sheetsClient = google.sheets({ version: 'v4', auth })
  return sheetsClient
}

const appendWebinarRow = async (registration) => {
  const spreadsheetId = process.env.WEBINAR_SHEET_ID
  if (!spreadsheetId) {
    return false
  }

  const sheets = getSheetsClient()
  if (!sheets) {
    return false
  }

  const sheetName = process.env.WEBINAR_SHEET_NAME || 'Registrations'
  const values = [[
    registration.fullName,
    registration.email,
    registration.phone,
    registration.year,
    registration.timezone || '',
    registration.createdAt || new Date().toISOString(),
    registration.source || 'webinar-page'
  ]]

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:G`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values }
  })

  return true
}

const requestShareLink = async (token, url, options = {}) => {
  const shareBodyMode = options.bodyMode || process.env.HIDRIVE_SHARE_BODY || 'none'
  const method = options.method || process.env.HIDRIVE_SHARE_METHOD || 'POST'
  const headers = {
    Authorization: `Bearer ${token}`
  }

  let body
  if (shareBodyMode === 'json') {
    headers['Content-Type'] = 'application/json'
    body = JSON.stringify({ path: options.path })
  } else if (shareBodyMode === 'form') {
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
    body = new URLSearchParams({ path: options.path })
  }

  const response = await fetch(url, {
    method,
    headers,
    body
  })

  if (!response.ok) {
    return {
      ok: false,
      text: await response.text()
    }
  }

  return {
    ok: true,
    data: await response.json()
  }
}

const extractShareLink = (data) => {
  const preferredField = process.env.HIDRIVE_SHARE_LINK_FIELD
  return (
    (preferredField && data[preferredField]) ||
    data.url ||
    data.share_url ||
    data.link
  )
}

const createShareLink = async (token, hidrivePath, fileId = null) => {
  const shareUrl = process.env.HIDRIVE_SHARE_URL
  if (!shareUrl) {
    throw new Error('HIDRIVE_SHARE_URL is not configured')
  }

  if (fileId) {
    const pidShareResponse = await requestShareLink(
      token,
      buildShareUrlWithPid(shareUrl, fileId),
      { bodyMode: 'none' }
    )

    if (!pidShareResponse.ok) {
      throw new Error(`HiDrive share link failed: ${pidShareResponse.text}`)
    }

    const pidShareLink = extractShareLink(pidShareResponse.data)
    if (!pidShareLink) {
      throw new Error('HiDrive share link missing in response')
    }

    return pidShareLink
  }

  const forcePid =
    process.env.HIDRIVE_SHARE_USE_PID === 'true' ||
    process.env.HIDRIVE_SHARE_USE_PID === '1'

  if (!forcePid) {
    const shareResponse = await requestShareLink(token, buildShareUrl(shareUrl, hidrivePath), {
      path: hidrivePath
    })
    if (shareResponse.ok) {
      const shareLink = extractShareLink(shareResponse.data)
      if (!shareLink) {
        throw new Error('HiDrive share link missing in response')
      }
      return shareLink
    }

    if (!shareResponse.text.includes('not a directory')) {
      throw new Error(`HiDrive share link failed: ${shareResponse.text}`)
    }
  }

  const fileInfo = await fetchFileInfo(token, hidrivePath)
  const pid = fileInfo && (fileInfo.id || fileInfo.pid)
  if (!pid) {
    throw new Error('HiDrive file id missing for share')
  }

  const pidShareResponse = await requestShareLink(
    token,
    buildShareUrlWithPid(shareUrl, pid),
    { bodyMode: 'none' }
  )

  if (!pidShareResponse.ok) {
    throw new Error(`HiDrive share link failed: ${pidShareResponse.text}`)
  }

  const pidShareLink = extractShareLink(pidShareResponse.data)
  if (!pidShareLink) {
    throw new Error('HiDrive share link missing in response')
  }

  return pidShareLink
}

exports.createHidriveUpload = functions.https.onRequest(async (req, res) => {
  if (handleOptions(req, res)) {
    return
  }
  applyCors(req, res)

  if (req.method !== 'POST') {
    return jsonError(res, 405, 'Method not allowed')
  }

  try {
    const decoded = await getAuthToken(req)
    const role = await getUserRole(decoded.uid)
    if (!role) {
      return jsonError(res, 403, 'Not authorized')
    }

    const { subjectId, fileName, contentType, uploadType } = req.body || {}
    if (!subjectId || !fileName) {
      return jsonError(res, 400, 'subjectId and fileName are required')
    }

    const tokenData = await getHidriveToken()
    const accessToken = tokenData.access_token
    if (!accessToken) {
      return jsonError(res, 500, 'Missing HiDrive access token')
    }

    const root = resolveUploadRoot(uploadType)
    const safeSubject = sanitizeSegment(subjectId)
    const safeName = sanitizeSegment(fileName)
    const timestamp = Date.now()
    const hidrivePath = `${root}/${safeSubject}/${timestamp}-${safeName}`

    const uploadUrl = buildUploadUrl(hidrivePath)

    res.status(200).json({
      uploadUrl,
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': contentType || 'application/octet-stream'
      },
      hidrivePath,
      tokenExpiresIn: tokenData.expires_in || null
    })
  } catch (err) {
    console.error('createHidriveUpload error:', err)
    jsonError(res, 500, err.message || 'Upload initialization failed')
  }
})

exports.createRecording = functions.https.onRequest(async (req, res) => {
  if (handleOptions(req, res)) {
    return
  }
  applyCors(req, res)

  if (req.method !== 'POST') {
    return jsonError(res, 405, 'Method not allowed')
  }

  try {
    const decoded = await getAuthToken(req)
    const role = await getUserRole(decoded.uid)
    if (!role) {
      return jsonError(res, 403, 'Not authorized')
    }

    const {
      subjectId,
      title,
      examBoard,
      tier = null,
      videoUrl,
      hidrivePath,
      hidriveFileId,
      visibility = 'subject',
      studentId = null,
      studentName = null,
      studentEmail = null
    } = req.body || {}

    if (!subjectId || !title || !examBoard) {
      return jsonError(res, 400, 'subjectId, title, and examBoard are required')
    }

    if (!videoUrl && !hidrivePath) {
      return jsonError(res, 400, 'videoUrl or hidrivePath is required')
    }

    const recordingVisibility = visibility === 'student' && studentId ? 'student' : 'subject'
    let targetStudent = null

    if (recordingVisibility === 'student') {
      if (role !== 'admin') {
        return jsonError(res, 403, 'Only admins can create student-specific recordings')
      }

      const studentSnapshot = await db.doc(`students/${studentId}`).get()
      if (!studentSnapshot.exists) {
        return jsonError(res, 400, 'Student profile was not found')
      }

      targetStudent = studentSnapshot.data() || {}
      const subjectIds = Array.isArray(targetStudent.subjects) ? targetStudent.subjects : []
      if (!subjectIds.includes(subjectId)) {
        return jsonError(res, 400, 'Student is not enrolled in this subject')
      }
    }

    let finalVideoUrl = videoUrl || null
    const storageProvider = hidrivePath ? 'hidrive' : 'external'

    if (!finalVideoUrl && hidrivePath) {
      const tokenData = await getHidriveToken()
      if (!tokenData.access_token) {
        return jsonError(res, 500, 'Missing HiDrive access token')
      }
      finalVideoUrl = await createShareLink(
        tokenData.access_token,
        hidrivePath,
        hidriveFileId
      )
    }

    const approvalStatus = role === 'admin' ? 'approved' : 'pending'
    const collectionName = recordingVisibility === 'student' ? 'studentRecordings' : 'recordings'
    const docRef = await db.collection(collectionName).add({
      subjectId,
      title,
      videoUrl: finalVideoUrl,
      examBoard,
      tier,
      visibility: recordingVisibility,
      studentId: recordingVisibility === 'student' ? studentId : null,
      studentName: recordingVisibility === 'student'
        ? studentName || targetStudent.name || targetStudent.displayName || targetStudent.studentName || null
        : null,
      studentEmail: recordingVisibility === 'student'
        ? studentEmail || targetStudent.email || null
        : null,
      approvalStatus,
      date: admin.firestore.FieldValue.serverTimestamp(),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      createdBy: decoded.uid,
      createdByRole: role,
      storageProvider,
      hidrivePath: hidrivePath || null,
      hidriveFileId: hidriveFileId || null,
      approvedAt: role === 'admin' ? admin.firestore.FieldValue.serverTimestamp() : null
    })

    res.status(200).json({
      id: docRef.id,
      collection: collectionName,
      approvalStatus,
      videoUrl: finalVideoUrl
    })
  } catch (err) {
    console.error('createRecording error:', err)
    jsonError(res, 500, err.message || 'Failed to create recording')
  }
})

exports.createHomework = functions.https.onRequest(async (req, res) => {
  if (handleOptions(req, res)) {
    return
  }
  applyCors(req, res)

  if (req.method !== 'POST') {
    return jsonError(res, 405, 'Method not allowed')
  }

  try {
    const decoded = await getAuthToken(req)
    const role = await getUserRole(decoded.uid)
    if (!role) {
      return jsonError(res, 403, 'Not authorized')
    }

    const {
      subjectId,
      title,
      description,
      dueDate,
      questions,
      attachmentUrl,
      attachmentName,
      attachmentContentType,
      attachmentSize,
      hidrivePath,
      hidriveFileId,
      visibility = 'subject',
      studentId = null,
      studentName = null,
      studentEmail = null
    } = req.body || {}

    if (!subjectId || !title) {
      return jsonError(res, 400, 'subjectId and title are required')
    }

    const homeworkVisibility = visibility === 'student' && studentId ? 'student' : 'subject'
    let targetStudent = null

    if (homeworkVisibility === 'student') {
      if (role !== 'admin') {
        return jsonError(res, 403, 'Only admins can create student-specific homework')
      }

      const studentSnapshot = await db.doc(`students/${studentId}`).get()
      if (!studentSnapshot.exists) {
        return jsonError(res, 400, 'Student profile was not found')
      }

      targetStudent = studentSnapshot.data() || {}
      const subjectIds = Array.isArray(targetStudent.subjects) ? targetStudent.subjects : []
      if (!subjectIds.includes(subjectId)) {
        return jsonError(res, 400, 'Student is not enrolled in this subject')
      }
    }

    const sanitizedQuestions = Array.isArray(questions)
      ? questions
        .filter((q) => q && q.question && q.correctAnswer)
        .map((q) => ({
          question: String(q.question).trim(),
          correctAnswer: String(q.correctAnswer).trim()
        }))
        .filter((q) => q.question && q.correctAnswer)
      : []

    if (!attachmentUrl && !hidrivePath && sanitizedQuestions.length === 0) {
      return jsonError(res, 400, 'Provide at least one question or an attachment')
    }

    let finalAttachmentUrl = attachmentUrl || null
    let storageProvider = null

    if (!finalAttachmentUrl && hidrivePath) {
      const tokenData = await getHidriveToken()
      if (!tokenData.access_token) {
        return jsonError(res, 500, 'Missing HiDrive access token')
      }
      finalAttachmentUrl = await createShareLink(
        tokenData.access_token,
        hidrivePath,
        hidriveFileId
      )
    }

    if (finalAttachmentUrl) {
      storageProvider = hidrivePath ? 'hidrive' : 'external'
    }

    const collectionName = homeworkVisibility === 'student' ? 'studentHomeworks' : 'homeworks'
    const docRef = await db.collection(collectionName).add({
      subjectId,
      title,
      description: description || '',
      dueDate: normalizeDueDate(dueDate),
      questions: sanitizedQuestions,
      visibility: homeworkVisibility,
      studentId: homeworkVisibility === 'student' ? studentId : null,
      studentName: homeworkVisibility === 'student'
        ? studentName || targetStudent.name || targetStudent.displayName || targetStudent.studentName || null
        : null,
      studentEmail: homeworkVisibility === 'student'
        ? studentEmail || targetStudent.email || null
        : null,
      attachmentUrl: finalAttachmentUrl,
      attachmentName: attachmentName || null,
      attachmentContentType: attachmentContentType || null,
      attachmentSize: Number.isFinite(attachmentSize) ? attachmentSize : null,
      storageProvider,
      hidrivePath: hidrivePath || null,
      hidriveFileId: hidriveFileId || null,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      createdBy: decoded.uid,
      createdByRole: role
    })

    res.status(200).json({
      id: docRef.id,
      collection: collectionName,
      attachmentUrl: finalAttachmentUrl
    })
  } catch (err) {
    console.error('createHomework error:', err)
    jsonError(res, 500, err.message || 'Failed to create homework')
  }
})

exports.registerWebinar = functions.https.onRequest(async (req, res) => {
  if (handleOptions(req, res)) {
    return
  }
  applyCors(req, res)

  if (req.method !== 'POST') {
    return jsonError(res, 405, 'Method not allowed')
  }

  try {
    const {
      fullName,
      email,
      phone,
      year,
      timezone
    } = req.body || {}

    const normalizedName = trimInput(fullName, 120)
    const normalizedEmail = trimInput(email, 160).toLowerCase()
    const normalizedPhone = trimInput(phone, 40)
    const normalizedYear = trimInput(year, 40)
    const normalizedTimezone = trimInput(timezone, 60)

    if (!normalizedName || !normalizedEmail || !normalizedPhone || !normalizedYear) {
      return jsonError(res, 400, 'Full name, email, phone number, and year are required')
    }

    if (!isValidEmail(normalizedEmail)) {
      return jsonError(res, 400, 'Email address is invalid')
    }

    const docRef = await db.collection('webinarRegistrations').add({
      fullName: normalizedName,
      email: normalizedEmail,
      phone: normalizedPhone,
      year: normalizedYear,
      timezone: normalizedTimezone || null,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      source: 'webinar-page',
      userAgent: trimInput(req.get('user-agent'), 200),
      ip: trimInput(req.get('x-forwarded-for') || req.ip, 80)
    })

    try {
      await appendWebinarRow({
        fullName: normalizedName,
        email: normalizedEmail,
        phone: normalizedPhone,
        year: normalizedYear,
        timezone: normalizedTimezone || '',
        createdAt: new Date().toISOString(),
        source: 'webinar-page'
      })
    } catch (sheetError) {
      console.warn('appendWebinarRow failed:', sheetError)
    }

    res.status(200).json({ id: docRef.id })
  } catch (err) {
    console.error('registerWebinar error:', err)
    jsonError(res, 500, err.message || 'Failed to register')
  }
})

exports.exportWebinarRegistrations = functions.https.onRequest(async (req, res) => {
  if (handleOptions(req, res)) {
    return
  }
  applyCors(req, res)

  if (req.method !== 'GET') {
    return jsonError(res, 405, 'Method not allowed')
  }

  const exportKey = process.env.WEBINAR_EXPORT_KEY
  if (exportKey && req.query.key !== exportKey) {
    return jsonError(res, 401, 'Unauthorized')
  }

  try {
    const snapshot = await db
      .collection('webinarRegistrations')
      .orderBy('createdAt', 'desc')
      .get()

    const header = [
      'Full Name',
      'Email',
      'Phone',
      'Year',
      'Timezone',
      'Created At',
      'Source'
    ]

    const rows = snapshot.docs.map((doc) => {
      const data = doc.data() || {}
      const createdAt = data.createdAt?.toDate?.()
      return [
        data.fullName || '',
        data.email || '',
        data.phone || '',
        data.year || '',
        data.timezone || '',
        createdAt ? createdAt.toISOString() : '',
        data.source || ''
      ]
    })

    const csv = [toCsvRow(header), ...rows.map(toCsvRow)].join('\n')

    res.set('Content-Type', 'text/csv; charset=utf-8')
    res.set('Content-Disposition', 'attachment; filename="webinar-registrations.csv"')
    res.status(200).send(csv)
  } catch (err) {
    console.error('exportWebinarRegistrations error:', err)
    jsonError(res, 500, err.message || 'Failed to export registrations')
  }
})
