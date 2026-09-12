const admin = require('firebase-admin')
const functions = require('firebase-functions')
const crypto = require('crypto')
const { google } = require('googleapis')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || '')
const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')

admin.initializeApp()

let db
let r2Client

const getDb = () => {
  if (!db) {
    db = admin.firestore()
  }
  return db
}

// The default Gen 1 App Engine service account is unavailable. Use the enabled
// Compute Engine default service account for these functions until it is restored.
const runtimeFunctions = functions.runWith({
  serviceAccount: '927860875256-compute@developer.gserviceaccount.com'
})

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const sanitizeSegment = (value) => {
  if (!value) return 'file'
  return value.replace(/[^a-zA-Z0-9._-]+/g, '_')
}

const R2_EXAM_BOARDS = new Set(['aqa', 'edexcel'])
const R2_UPLOAD_TYPES = {
  homework: 'homework',
  recording: 'videos',
  resource: 'learning-resources'
}

const R2_SUBJECT_PATHS = {
  maths: 'maths', maths_001: 'maths',
  physics: 'physics', physics_001: 'physics',
  biology: 'biology', biology_001: 'biology',
  chemistry: 'chemistry', chemistry_001: 'chemistry',
  'english-language': 'english-language', english_lang_001: 'english-language',
  'english-literature': 'english-literature', english_lit_001: 'english-literature',
  'combined-science': 'combined-science', combined_science_001: 'combined-science',
  'triple-science': 'triple-science', triple_science_001: 'triple-science'
}
const R2_TIERED_SUBJECTS = new Set([
  'maths', 'physics', 'biology', 'chemistry', 'combined-science', 'triple-science'
])
const R2_DOCUMENT_EXTENSIONS = new Set(['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'])

const resolveR2AcademicRoute = ({ subjectId, examBoard, tier }) => {
  const subject = R2_SUBJECT_PATHS[String(subjectId || '').trim().toLowerCase()]
  const board = String(examBoard || '').trim().toLowerCase()
  const requestedTier = String(tier || '').trim().toLowerCase()
  if (!subject) throw new Error('Unsupported subject for R2')
  if (!R2_EXAM_BOARDS.has(board)) throw new Error('Select AQA or Edexcel')
  if (R2_TIERED_SUBJECTS.has(subject)) {
    if (!['foundation', 'higher'].includes(requestedTier)) {
      throw new Error('Select Foundation or Higher for this subject')
    }
    return { subject, board, tier: requestedTier, tiered: true }
  }
  if (requestedTier && requestedTier !== 'all-levels') {
    throw new Error('English resources use the all-levels route')
  }
  return { subject, board, tier: 'all-levels', tiered: false }
}

const assertAdminRole = (role) => {
  if (role !== 'admin') throw new Error('Only admins can upload or publish learning materials')
}

const assertR2FileType = ({ uploadType, fileName, contentType }) => {
  const type = String(uploadType || '').trim().toLowerCase()
  const extension = String(fileName || '').split('.').pop().toLowerCase()
  if (!R2_UPLOAD_TYPES[type]) throw new Error('uploadType must be homework, recording, or resource')
  if (type !== 'recording' && !R2_DOCUMENT_EXTENSIONS.has(extension)) {
    throw new Error('Homework and learning resources must be PDF or Office documents')
  }
  if (type === 'recording' && contentType && !String(contentType).toLowerCase().startsWith('video/')) {
    throw new Error('Lessons must be uploaded as video files')
  }
}

const assertStudentAcademicRoute = (student, subjectId, route) => {
  const subjectIds = Array.isArray(student.subjects) ? student.subjects : []
  if (!subjectIds.includes(subjectId)) throw new Error('A selected student is not enrolled in this subject')
  const settings = student.subjectSettings && student.subjectSettings[subjectId]
  if (!settings) throw new Error('A selected student is missing subject tier settings')
  const studentBoard = String(settings.examBoard || '').trim().toLowerCase()
  const studentTier = String(settings.tier || '').trim().toLowerCase()
  if (studentBoard !== route.board || (route.tiered && studentTier !== route.tier)) {
    throw new Error('A selected student is enrolled on a different exam-board or tier route')
  }
}

const getR2Configuration = () => {
  const required = ['R2_ACCOUNT_ID', 'R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY']
  const missing = required.filter((name) => !process.env[name])
  if (missing.length) {
    throw new Error(`R2 is not configured: ${missing.join(', ')}`)
  }
  return {
    bucket: process.env.R2_BUCKET_NAME || 'myschola-files',
    prefix: sanitizeSegment(process.env.R2_PREFIX || 'materials')
  }
}

const getR2Client = () => {
  getR2Configuration()
  if (!r2Client) {
    r2Client = new S3Client({
      region: 'auto',
      endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
      }
    })
  }
  return r2Client
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

const sha256 = (value) => crypto
  .createHash('sha256')
  .update(String(value).trim().toLowerCase())
  .digest('hex')

const getStripeWebhookEvent = (req) => {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    return req.body
  }

  const signature = req.get('stripe-signature')
  if (!signature) {
    throw new Error('Missing Stripe signature')
  }

  return stripe.webhooks.constructEvent(req.rawBody, signature, webhookSecret)
}

const buildMetaUserData = (session) => {
  const customer = session.customer_details || {}
  const userData = {}

  if (customer.email) {
    userData.em = [sha256(customer.email)]
  }

  if (customer.phone) {
    userData.ph = [sha256(customer.phone.replace(/\D/g, ''))]
  }

  if (session.client_reference_id) {
    userData.external_id = [sha256(session.client_reference_id)]
  }

  return userData
}

const buildMetaChargeUserData = (charge) => {
  const billingDetails = charge.billing_details || {}
  const userData = {}

  if (billingDetails.email) {
    userData.em = [sha256(billingDetails.email)]
  }

  if (billingDetails.phone) {
    userData.ph = [sha256(billingDetails.phone.replace(/\D/g, ''))]
  }

  if (charge.customer) {
    userData.external_id = [sha256(charge.customer)]
  }

  return userData
}

const sendMetaPurchaseEvent = async (session) => {
  const accessToken = process.env.META_ACCESS_TOKEN
  const pixelId = process.env.META_PIXEL_ID || '2772806336415328'
  const graphVersion = process.env.META_GRAPH_VERSION || 'v26.0'

  if (!accessToken || !pixelId) {
    console.warn('Meta CAPI is not configured; skipping Purchase event')
    return { skipped: true }
  }

  const amountTotal = Number(session.amount_total)
  if (!Number.isFinite(amountTotal) || amountTotal <= 0) {
    console.log('Stripe checkout completed with no paid amount; skipping Meta Purchase event')
    return { skipped: true }
  }

  const value = amountTotal / 100
  const currency = String(session.currency || 'gbp').toUpperCase()
  const userData = buildMetaUserData(session)

  if (!Object.keys(userData).length) {
    console.warn('Meta CAPI user_data is empty; skipping Purchase event')
    return { skipped: true }
  }

  const payload = {
    data: [
      {
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        event_id: session.payment_intent || session.id,
        action_source: 'website',
        event_source_url: process.env.META_EVENT_SOURCE_URL || 'https://myschola.uk/payment-success',
        user_data: userData,
        custom_data: {
          currency,
          value
        }
      }
    ]
  }

  const testEventCode = process.env.META_TEST_EVENT_CODE
  if (testEventCode) {
    payload.test_event_code = testEventCode
  }

  const response = await fetch(
    `https://graph.facebook.com/${graphVersion}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
  )

  const result = await response.json()
  if (!response.ok) {
    throw new Error(`Meta CAPI request failed: ${JSON.stringify(result)}`)
  }

  return result
}

const sendMetaChargePurchaseEvent = async (charge) => {
  const accessToken = process.env.META_ACCESS_TOKEN
  const pixelId = process.env.META_PIXEL_ID || '2772806336415328'
  const graphVersion = process.env.META_GRAPH_VERSION || 'v26.0'

  if (!accessToken || !pixelId) {
    console.warn('Meta CAPI is not configured; skipping charge Purchase event')
    return { skipped: true }
  }

  const amount = Number(charge.amount)
  if (!Number.isFinite(amount) || amount <= 0 || charge.paid === false) {
    console.log('Stripe charge is not a paid amount; skipping Meta Purchase event')
    return { skipped: true }
  }

  const currency = String(charge.currency || 'gbp').toUpperCase()
  const userData = buildMetaChargeUserData(charge)

  if (!Object.keys(userData).length) {
    console.warn('Meta CAPI user_data is empty for charge; skipping Purchase event')
    return { skipped: true }
  }

  const payload = {
    data: [
      {
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        event_id: charge.payment_intent || charge.id,
        action_source: 'website',
        event_source_url: process.env.META_EVENT_SOURCE_URL || 'https://myschola.uk/payment-success',
        user_data: userData,
        custom_data: {
          currency,
          value: amount / 100
        }
      }
    ]
  }

  const testEventCode = process.env.META_TEST_EVENT_CODE
  if (testEventCode) {
    payload.test_event_code = testEventCode
  }

  const response = await fetch(
    `https://graph.facebook.com/${graphVersion}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
  )

  const result = await response.json()
  if (!response.ok) {
    throw new Error(`Meta CAPI charge request failed: ${JSON.stringify(result)}`)
  }

  return result
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
  const adminDoc = await getDb().doc(`admins/${uid}`).get()
  if (adminDoc.exists) {
    return 'admin'
  }
  const teacherDoc = await getDb().doc(`teachers/${uid}`).get()
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

const ensureHidriveDirectory = async (token, directoryPath) => {
  const apiBase = process.env.HIDRIVE_API_BASE
  if (!apiBase) {
    throw new Error('HIDRIVE_API_BASE must be set')
  }

  const normalized = directoryPath.startsWith('/') ? directoryPath : `/${directoryPath}`
  const segments = normalized.split('/').filter(Boolean)
  let currentPath = ''

  for (const segment of segments) {
    currentPath += `/${segment}`
    const response = await fetch(
      `${apiBase}/dir?path=${encodeQueryValue(currentPath)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    // HiDrive returns 409 when the directory already exists, which is safe.
    if (response.ok || response.status === 409) {
      continue
    }

    const text = await response.text()
    throw new Error(
      `HiDrive directory setup failed (${response.status}) for ${currentPath}: ${text}`
    )
  }
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
    data.uri ||
    data.url ||
    data.share_url ||
    data.link
  )
}

const getParentDir = (filePath) => {
  const lastSlash = filePath.lastIndexOf('/')
  if (lastSlash <= 0) return '/'
  return filePath.slice(0, lastSlash)
}

const getExistingShareLink = async (token, dirPath) => {
  const apiBase = process.env.HIDRIVE_API_BASE
  if (!apiBase) return null

  const url = `${apiBase}/share?path=${encodeURIComponent(dirPath)}&fields=uri`
  const response = await fetch(url, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` }
  })

  if (!response.ok) return null

  const data = await response.json()
  const shares = Array.isArray(data) ? data : (data.shares || [data])
  const share = shares.find((s) => s && (s.uri || s.url || s.link))
  return share ? (share.uri || share.url || share.link) : null
}

const createShareLink = async (token, hidrivePath) => {
  const shareUrl = process.env.HIDRIVE_SHARE_URL
  if (!shareUrl) {
    throw new Error('HIDRIVE_SHARE_URL is not configured')
  }

  const parentDir = getParentDir(hidrivePath)

  const shareResponse = await requestShareLink(token, shareUrl, {
    path: parentDir
  })

  console.log('HiDrive share response ok:', shareResponse.ok)
  if (shareResponse.ok) {
    console.log('HiDrive share response data:', JSON.stringify(shareResponse.data))
  } else {
    console.log('HiDrive share response error:', shareResponse.text)
  }

  let shareLink
  if (shareResponse.ok) {
    shareLink = extractShareLink(shareResponse.data)
  } else if (shareResponse.text && (shareResponse.text.includes('already exists') || shareResponse.text.includes('409'))) {
    shareLink = await getExistingShareLink(token, parentDir)
    console.log('Existing share link:', shareLink)
  }

  if (!shareLink) {
    const errText = shareResponse.ok ? 'share link missing in response' : shareResponse.text
    throw new Error(`HiDrive share link failed: ${errText}`)
  }

  return shareLink
}

// Private R2 upload entry point for the live admin workflow. The browser gets
// one short-lived PUT URL; it never receives an R2 credential or public link.
exports.createR2AdminUpload = runtimeFunctions.https.onRequest(async (req, res) => {
  if (handleOptions(req, res)) return
  applyCors(req, res)
  if (req.method !== 'POST') return jsonError(res, 405, 'Method not allowed')

  try {
    const decoded = await getAuthToken(req)
    const role = await getUserRole(decoded.uid)
    assertAdminRole(role)

    const { subjectId, examBoard, tier, fileName, contentType, uploadType, studentIds = [] } = req.body || {}
    if (!subjectId || !examBoard || !fileName || !uploadType) {
      return jsonError(res, 400, 'subjectId, examBoard, fileName, and uploadType are required')
    }
    if (!Array.isArray(studentIds) || studentIds.some((id) => typeof id !== 'string' || !id.trim() || id.includes('/'))) {
      return jsonError(res, 400, 'studentIds must be a valid list')
    }

    const route = resolveR2AcademicRoute({ subjectId, examBoard, tier })
    assertR2FileType({ uploadType, fileName, contentType })
    const recipients = Array.from(new Set(studentIds.map((id) => id.trim())))
    if (recipients.length > 500) return jsonError(res, 400, 'Select no more than 500 students at a time')

    const db = getDb()
    const snapshots = await Promise.all(recipients.map((id) => db.doc(`students/${id}`).get()))
    const missingRouteUpdates = []
    snapshots.forEach((snapshot) => {
      if (!snapshot.exists) throw new Error('A selected student profile was not found')
      const student = snapshot.data() || {}
      const existingRoute = student.subjectSettings && student.subjectSettings[subjectId]
      if (existingRoute) {
        assertStudentAcademicRoute(student, subjectId, route)
      } else {
        missingRouteUpdates.push(
          snapshot.ref.update({
            [`subjectSettings.${subjectId}`]: {
              examBoard: route.board.toUpperCase(),
              tier: route.tiered ? `${route.tier.charAt(0).toUpperCase()}${route.tier.slice(1)}` : null
            }
          })
        )
      }
    })
    await Promise.all(missingRouteUpdates)

    const folder = R2_UPLOAD_TYPES[String(uploadType).toLowerCase()]
    const r2 = getR2Configuration()
    const r2Key = [
      r2.prefix,
      'admin-materials',
      route.subject,
      route.board,
      route.tier,
      folder,
      `${crypto.randomUUID()}-${sanitizeSegment(fileName)}`
    ].join('/')
    const resolvedContentType = contentType || 'application/octet-stream'
    const uploadUrl = await getSignedUrl(
      getR2Client(),
      new PutObjectCommand({
        Bucket: r2.bucket,
        Key: r2Key,
        ContentType: resolvedContentType
      }),
      { expiresIn: 300 }
    )

    res.status(200).json({
      uploadUrl,
      method: 'PUT',
      headers: { 'Content-Type': resolvedContentType },
      r2Key,
      storageProvider: 'r2',
      expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString()
    })
  } catch (err) {
    console.error('createR2AdminUpload error:', err.message)
    jsonError(res, 403, err.message || 'R2 upload initialization failed')
  }
})

const R2_MATERIAL_COLLECTIONS = new Set([
  'recordings', 'studentRecordings', 'homeworks', 'studentHomeworks', 'resources', 'studentResources'
])

exports.getR2DownloadUrl = runtimeFunctions.https.onRequest(async (req, res) => {
  if (handleOptions(req, res)) return
  applyCors(req, res)
  if (req.method !== 'POST') return jsonError(res, 405, 'Method not allowed')

  try {
    const decoded = await getAuthToken(req)
    const { collection, documentId } = req.body || {}
    if (!R2_MATERIAL_COLLECTIONS.has(collection) || !documentId || String(documentId).includes('/')) {
      return jsonError(res, 400, 'A valid material collection and document ID are required')
    }
    const materialSnapshot = await getDb().doc(`${collection}/${documentId}`).get()
    if (!materialSnapshot.exists) return jsonError(res, 404, 'Material was not found')
    const material = materialSnapshot.data() || {}
    if (!material.r2Key) return jsonError(res, 400, 'Material is not stored in R2')

    const role = await getUserRole(decoded.uid)
    if (role !== 'admin') {
      const studentSnapshot = await getDb().doc(`students/${decoded.uid}`).get()
      if (!studentSnapshot.exists) return jsonError(res, 403, 'Not authorized')
      const student = studentSnapshot.data() || {}
      if (material.studentId && material.studentId !== decoded.uid) {
        return jsonError(res, 403, 'Not authorized')
      }
      if (!material.studentId) {
        const route = resolveR2AcademicRoute({
          subjectId: material.subjectId,
          examBoard: material.examBoard,
          tier: material.tier
        })
        assertStudentAcademicRoute(student, material.subjectId, route)
      }
    }

    const downloadUrl = await getSignedUrl(
      getR2Client(),
      new GetObjectCommand({
        Bucket: getR2Configuration().bucket,
        Key: material.r2Key,
        ResponseContentDisposition: 'inline'
      }),
      { expiresIn: 300 }
    )
    res.status(200).json({ downloadUrl, expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString() })
  } catch (err) {
    console.error('getR2DownloadUrl error:', err.message)
    jsonError(res, 403, err.message || 'Unable to open this material')
  }
})

const LEGACY_MATERIALS = [
  { collection: 'recordings', urlField: 'videoUrl', fileField: 'fileName', uploadType: 'recording' },
  { collection: 'studentRecordings', urlField: 'videoUrl', fileField: 'fileName', uploadType: 'recording' },
  { collection: 'homeworks', urlField: 'attachmentUrl', fileField: 'attachmentName', uploadType: 'homework' },
  { collection: 'studentHomeworks', urlField: 'attachmentUrl', fileField: 'attachmentName', uploadType: 'homework' },
  { collection: 'resources', urlField: 'fileUrl', fileField: 'fileName', uploadType: 'resource' },
  { collection: 'studentResources', urlField: 'fileUrl', fileField: 'fileName', uploadType: 'resource' }
]
const MAX_LEGACY_MIGRATION_BYTES = 100 * 1024 * 1024

const fileNameFromUrl = (url, fallback) => {
  if (fallback) return sanitizeSegment(fallback)
  try {
    const pathname = new URL(url).pathname
    const fromPath = pathname.split('/').filter(Boolean).pop()
    if (fromPath && fromPath.includes('.')) return sanitizeSegment(decodeURIComponent(fromPath))
  } catch (_) {
    // The caller will use a safe generated filename below.
  }
  return `legacy-material-${Date.now()}`
}

const getLegacyRoute = async (material) => {
  let examBoard = material.examBoard
  let tier = material.tier
  if ((!examBoard || !tier) && material.studentId && material.subjectId) {
    const studentSnapshot = await getDb().doc(`students/${material.studentId}`).get()
    const settings = studentSnapshot.exists
      ? studentSnapshot.data()?.subjectSettings?.[material.subjectId]
      : null
    examBoard = examBoard || settings?.examBoard
    tier = tier || settings?.tier
  }
  return resolveR2AcademicRoute({ subjectId: material.subjectId, examBoard, tier })
}

const migrateLegacyMaterial = async ({ snapshot, definition, dryRun }) => {
  const material = snapshot.data() || {}
  if (material.r2Key) return { status: 'already-in-r2' }
  const sourceUrl = String(material[definition.urlField] || '').trim()
  if (!sourceUrl) return { status: 'skipped', reason: 'No legacy file URL' }

  let route
  try {
    route = await getLegacyRoute(material)
  } catch (err) {
    return { status: 'skipped', reason: err.message || 'Missing academic route' }
  }

  if (dryRun) return { status: 'ready', route }

  const response = await fetch(sourceUrl, { redirect: 'follow' })
  if (!response.ok) return { status: 'failed', reason: `Source returned ${response.status}` }
  const contentType = response.headers.get('content-type') || 'application/octet-stream'
  if (contentType.toLowerCase().startsWith('text/html')) {
    return { status: 'failed', reason: 'Source returned a web page instead of the file' }
  }
  const declaredSize = Number(response.headers.get('content-length') || 0)
  if (declaredSize > MAX_LEGACY_MIGRATION_BYTES) {
    return { status: 'skipped', reason: 'File is larger than 100 MB' }
  }
  const body = Buffer.from(await response.arrayBuffer())
  if (body.length > MAX_LEGACY_MIGRATION_BYTES) {
    return { status: 'skipped', reason: 'File is larger than 100 MB' }
  }

  const r2 = getR2Configuration()
  const fileName = fileNameFromUrl(sourceUrl, material[definition.fileField])
  const r2Key = [
    r2.prefix,
    'admin-materials',
    route.subject,
    route.board,
    route.tier,
    R2_UPLOAD_TYPES[definition.uploadType],
    `${crypto.randomUUID()}-${fileName}`
  ].join('/')
  await getR2Client().send(new PutObjectCommand({
    Bucket: r2.bucket,
    Key: r2Key,
    Body: body,
    ContentType: contentType,
    ContentDisposition: 'inline'
  }))
  await snapshot.ref.update({
    [definition.urlField]: null,
    r2Key,
    storageProvider: 'r2',
    examBoard: route.board.toUpperCase(),
    tier: route.tier,
    migratedToR2At: admin.firestore.FieldValue.serverTimestamp()
  })
  return { status: 'migrated', route, bytes: body.length }
}

// Admin-only, one-time legacy file mover. Dry run is the default so records
// without a complete subject/board/tier route are reported rather than exposed.
exports.migrateLegacyMaterialsToR2 = runtimeFunctions.https.onRequest(async (req, res) => {
  if (handleOptions(req, res)) return
  applyCors(req, res)
  if (req.method !== 'POST') return jsonError(res, 405, 'Method not allowed')

  try {
    const decoded = await getAuthToken(req)
    assertAdminRole(await getUserRole(decoded.uid))
    const dryRun = (req.body || {}).mode !== 'migrate'
    const results = { ready: 0, migrated: 0, skipped: [], failed: [], alreadyInR2: 0 }

    for (const definition of LEGACY_MATERIALS) {
      const snapshot = await getDb().collection(definition.collection).limit(500).get()
      for (const documentSnapshot of snapshot.docs) {
        const result = await migrateLegacyMaterial({ snapshot: documentSnapshot, definition, dryRun })
        const entry = { collection: definition.collection, id: documentSnapshot.id, reason: result.reason || null }
        if (result.status === 'ready') results.ready += 1
        else if (result.status === 'migrated') results.migrated += 1
        else if (result.status === 'already-in-r2') results.alreadyInR2 += 1
        else if (result.status === 'skipped') results.skipped.push(entry)
        else results.failed.push(entry)
      }
    }

    res.status(200).json({ mode: dryRun ? 'dry-run' : 'migrate', ...results })
  } catch (err) {
    console.error('migrateLegacyMaterialsToR2 error:', err.message)
    jsonError(res, 500, err.message || 'Unable to migrate legacy materials')
  }
})

exports.stripeWebhook = runtimeFunctions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return jsonError(res, 405, 'Method not allowed')
  }

  let event
  try {
    event = getStripeWebhookEvent(req)
  } catch (err) {
    console.error('Stripe webhook verification failed:', err)
    return jsonError(res, 400, err.message || 'Invalid Stripe webhook')
  }

  try {
    if (event.type === 'checkout.session.completed') {
      await sendMetaPurchaseEvent(event.data.object)
    } else if (event.type === 'charge.succeeded') {
      await sendMetaChargePurchaseEvent(event.data.object)
    }

    res.status(200).json({ received: true })
  } catch (err) {
    console.error('stripeWebhook error:', err)
    res.status(200).json({
      received: true,
      metaForwarded: false,
      error: err.message || 'Meta forwarding failed'
    })
  }
})

exports.createRecording = runtimeFunctions.https.onRequest(async (req, res) => {
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
    assertAdminRole(role)

    const {
      subjectId,
      title,
      examBoard,
      tier = null,
      r2Key,
      visibility = 'subject',
      studentId = null,
      studentName = null,
      studentEmail = null
    } = req.body || {}

    if (!subjectId || !title || !examBoard) {
      return jsonError(res, 400, 'subjectId, title, and examBoard are required')
    }

    if (!r2Key) {
      return jsonError(res, 400, 'An R2 video upload is required')
    }
    const r2Route = r2Key ? resolveR2AcademicRoute({ subjectId, examBoard, tier }) : null

    const recordingVisibility = visibility === 'student' && studentId ? 'student' : 'subject'
    let targetStudent = null

    if (recordingVisibility === 'student') {
      if (role !== 'admin') {
        return jsonError(res, 403, 'Only admins can create student-specific recordings')
      }

      const studentSnapshot = await getDb().doc(`students/${studentId}`).get()
      if (!studentSnapshot.exists) {
        return jsonError(res, 400, 'Student profile was not found')
      }

      targetStudent = studentSnapshot.data() || {}
      const subjectIds = Array.isArray(targetStudent.subjects) ? targetStudent.subjects : []
      if (!subjectIds.includes(subjectId)) {
        return jsonError(res, 400, 'Student is not enrolled in this subject')
      }
      if (r2Route) assertStudentAcademicRoute(targetStudent, subjectId, r2Route)
    }

    const approvalStatus = role === 'admin' ? 'approved' : 'pending'
    const collectionName = recordingVisibility === 'student' ? 'studentRecordings' : 'recordings'
    const docRef = await getDb().collection(collectionName).add({
      subjectId,
      title,
      videoUrl: null,
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
      storageProvider: 'r2',
      r2Key,
      approvedAt: role === 'admin' ? admin.firestore.FieldValue.serverTimestamp() : null
    })

    res.status(200).json({
      id: docRef.id,
      collection: collectionName,
      approvalStatus,
      videoUrl: null
    })
  } catch (err) {
    console.error('createRecording error:', err)
    jsonError(res, 500, err.message || 'Failed to create recording')
  }
})

exports.createHomework = runtimeFunctions.https.onRequest(async (req, res) => {
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
    assertAdminRole(role)

    const {
      subjectId,
      title,
      description,
      dueDate,
      questions,
      attachmentName,
      attachmentContentType,
      attachmentSize,
      r2Key,
      examBoard,
      tier,
      visibility = 'subject',
      studentId = null,
      studentIds = [],
      studentName = null,
      studentEmail = null
    } = req.body || {}

    if (!subjectId || !title) {
      return jsonError(res, 400, 'subjectId and title are required')
    }

    if (!['subject', 'student', 'students'].includes(visibility)) {
      return jsonError(res, 400, 'visibility must be subject, student, or students')
    }

    const isStudentSpecificRequest = visibility === 'student' || visibility === 'students'
    const rawStudentIds = visibility === 'students'
      ? studentIds
      : visibility === 'student'
        ? [studentId]
        : []

    if (isStudentSpecificRequest && !Array.isArray(rawStudentIds)) {
      return jsonError(res, 400, 'Student IDs must be provided as a list')
    }

    if (isStudentSpecificRequest && rawStudentIds.some((id) => (
      typeof id !== 'string' || !id.trim() || id.includes('/')
    ))) {
      return jsonError(res, 400, 'One or more student IDs are invalid')
    }

    const requestedStudentIds = Array.from(new Set(rawStudentIds.map((id) => id.trim())))
    if (isStudentSpecificRequest && requestedStudentIds.length === 0) {
      return jsonError(res, 400, 'Select at least one student for student-specific homework')
    }

    if (requestedStudentIds.length > 500) {
      return jsonError(res, 400, 'Select no more than 500 students at a time')
    }

    const homeworkVisibility = requestedStudentIds.length > 0 ? 'student' : 'subject'
    const targetStudents = new Map()
    const db = getDb()
    const r2Route = resolveR2AcademicRoute({ subjectId, examBoard, tier })

    if (homeworkVisibility === 'student') {
      if (role !== 'admin') {
        return jsonError(res, 403, 'Only admins can create student-specific homework')
      }

      const studentSnapshots = await Promise.all(
        requestedStudentIds.map((id) => db.doc(`students/${id}`).get())
      )
      for (let index = 0; index < studentSnapshots.length; index += 1) {
        const studentSnapshot = studentSnapshots[index]
        const targetStudentId = requestedStudentIds[index]
        if (!studentSnapshot.exists) {
          return jsonError(res, 400, 'Student profile was not found')
        }

        const targetStudent = studentSnapshot.data() || {}
        const subjectIds = Array.isArray(targetStudent.subjects) ? targetStudent.subjects : []
        if (!subjectIds.includes(subjectId)) {
          return jsonError(res, 400, 'A selected student is not enrolled in this subject')
        }
        assertStudentAcademicRoute(targetStudent, subjectId, r2Route)

        targetStudents.set(targetStudentId, targetStudent)
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

    if (!r2Key && sanitizedQuestions.length === 0) {
      return jsonError(res, 400, 'Provide at least one question or an attachment')
    }

    const homeworkData = {
      subjectId,
      title,
      description: description || '',
      dueDate: normalizeDueDate(dueDate),
      questions: sanitizedQuestions,
      attachmentUrl: null,
      attachmentName: attachmentName || null,
      attachmentContentType: attachmentContentType || null,
      attachmentSize: Number.isFinite(attachmentSize) ? attachmentSize : null,
      storageProvider: r2Key ? 'r2' : 'inline',
      r2Key: r2Key || null,
      examBoard,
      tier,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      createdBy: decoded.uid,
      createdByRole: role
    }

    if (homeworkVisibility === 'student') {
      const batch = db.batch()
      const docRefs = requestedStudentIds.map((targetStudentId) => {
        const targetStudent = targetStudents.get(targetStudentId) || {}
        const docRef = db.collection('studentHomeworks').doc()
        batch.set(docRef, {
          ...homeworkData,
          visibility: 'student',
          studentId: targetStudentId,
          studentName: requestedStudentIds.length === 1
            ? studentName || targetStudent.name || targetStudent.displayName || targetStudent.studentName || null
            : targetStudent.name || targetStudent.displayName || targetStudent.studentName || null,
          studentEmail: requestedStudentIds.length === 1
            ? studentEmail || targetStudent.email || null
            : targetStudent.email || null
        })
        return docRef
      })
      await batch.commit()

      return res.status(200).json({
        id: docRefs[0].id,
        ids: docRefs.map((docRef) => docRef.id),
        collection: 'studentHomeworks',
        recipientCount: requestedStudentIds.length,
        attachmentUrl: null
      })
    }

    const docRef = await db.collection('homeworks').add({
      ...homeworkData,
      visibility: 'subject',
      studentId: null,
      studentName: null,
      studentEmail: null
    })

    res.status(200).json({
      id: docRef.id,
      collection: 'homeworks',
      attachmentUrl: null
    })
  } catch (err) {
    console.error('createHomework error:', err)
    jsonError(res, 500, err.message || 'Failed to create homework')
  }
})

exports.createResource = runtimeFunctions.https.onRequest(async (req, res) => {
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
    assertAdminRole(role)

    const {
      subjectId,
      title,
      description,
      fileName,
      fileContentType,
      fileSize,
      r2Key,
      examBoard,
      tier,
      visibility = 'subject',
      studentId = null,
      studentIds = [],
      studentName = null,
      studentEmail = null
    } = req.body || {}

    if (!subjectId || !title) {
      return jsonError(res, 400, 'subjectId and title are required')
    }

    if (!r2Key) {
      return jsonError(res, 400, 'An R2 learning-resource upload is required')
    }
    const r2Route = resolveR2AcademicRoute({ subjectId, examBoard, tier })

    if (!['subject', 'student', 'students'].includes(visibility)) {
      return jsonError(res, 400, 'visibility must be subject, student, or students')
    }

    const isStudentSpecificRequest = visibility === 'student' || visibility === 'students'
    const rawStudentIds = visibility === 'students'
      ? studentIds
      : visibility === 'student'
        ? [studentId]
        : []

    if (isStudentSpecificRequest && !Array.isArray(rawStudentIds)) {
      return jsonError(res, 400, 'Student IDs must be provided as a list')
    }

    if (isStudentSpecificRequest && rawStudentIds.some((id) => (
      typeof id !== 'string' || !id.trim() || id.includes('/')
    ))) {
      return jsonError(res, 400, 'One or more student IDs are invalid')
    }

    const requestedStudentIds = Array.from(new Set(rawStudentIds.map((id) => id.trim())))
    if (isStudentSpecificRequest && requestedStudentIds.length === 0) {
      return jsonError(res, 400, 'Select at least one student for student-specific resources')
    }

    if (requestedStudentIds.length > 500) {
      return jsonError(res, 400, 'Select no more than 500 students at a time')
    }

    const resourceVisibility = requestedStudentIds.length > 0 ? 'student' : 'subject'
    const targetStudents = new Map()
    const db = getDb()

    if (resourceVisibility === 'student') {
      if (role !== 'admin') {
        return jsonError(res, 403, 'Only admins can create student-specific resources')
      }

      const studentSnapshots = await Promise.all(
        requestedStudentIds.map((id) => db.doc(`students/${id}`).get())
      )
      for (let index = 0; index < studentSnapshots.length; index += 1) {
        const studentSnapshot = studentSnapshots[index]
        const targetStudentId = requestedStudentIds[index]
        if (!studentSnapshot.exists) {
          return jsonError(res, 400, 'Student profile was not found')
        }

        const targetStudent = studentSnapshot.data() || {}
        const subjectIds = Array.isArray(targetStudent.subjects) ? targetStudent.subjects : []
        if (!subjectIds.includes(subjectId)) {
          return jsonError(res, 400, 'A selected student is not enrolled in this subject')
        }
        assertStudentAcademicRoute(targetStudent, subjectId, r2Route)

        targetStudents.set(targetStudentId, targetStudent)
      }
    }

    const approvalStatus = role === 'admin' ? 'approved' : 'pending'
    const resourceData = {
      subjectId,
      title,
      description: description || '',
      fileUrl: null,
      fileName: fileName || null,
      fileContentType: fileContentType || null,
      fileSize: Number.isFinite(fileSize) ? fileSize : null,
      approvalStatus,
      storageProvider: 'r2',
      r2Key,
      examBoard,
      tier,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      createdBy: decoded.uid,
      createdByRole: role,
      approvedAt: role === 'admin' ? admin.firestore.FieldValue.serverTimestamp() : null
    }

    if (resourceVisibility === 'student') {
      const batch = db.batch()
      const docRefs = requestedStudentIds.map((targetStudentId) => {
        const targetStudent = targetStudents.get(targetStudentId) || {}
        const docRef = db.collection('studentResources').doc()
        batch.set(docRef, {
          ...resourceData,
          visibility: 'student',
          studentId: targetStudentId,
          studentName: requestedStudentIds.length === 1
            ? studentName || targetStudent.name || targetStudent.displayName || targetStudent.studentName || null
            : targetStudent.name || targetStudent.displayName || targetStudent.studentName || null,
          studentEmail: requestedStudentIds.length === 1
            ? studentEmail || targetStudent.email || null
            : targetStudent.email || null
        })
        return docRef
      })
      await batch.commit()

      return res.status(200).json({
        id: docRefs[0].id,
        ids: docRefs.map((docRef) => docRef.id),
        collection: 'studentResources',
        recipientCount: requestedStudentIds.length,
        approvalStatus,
        fileUrl: null
      })
    }

    const docRef = await db.collection('resources').add({
      ...resourceData,
      visibility: 'subject',
      studentId: null,
      studentName: null,
      studentEmail: null
    })

    res.status(200).json({
      id: docRef.id,
      collection: 'resources',
      approvalStatus,
      fileUrl: null
    })
  } catch (err) {
    console.error('createResource error:', err)
    jsonError(res, 500, err.message || 'Failed to create resource')
  }
})

exports.registerWebinar = runtimeFunctions.https.onRequest(async (req, res) => {
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

    const docRef = await getDb().collection('webinarRegistrations').add({
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

exports.exportWebinarRegistrations = runtimeFunctions.https.onRequest(async (req, res) => {
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
