const STRATEGY_CALL_BOOKING_KEY = 'strategyCallBooking'
const CONSULTATION_BOOKING_KEY = 'consultationBooking'

const SKIP_RESPONSE_KEYS = new Set([
  'location',
  'title',
  'notes',
  'guests',
  'reschedulereason',
])

const DISPLAY_FIELD_PRIORITY = [
  'Your name',
  'Email address',
  'Phone number',
  "Child's full name",
  'Current year',
  'Current grades',
  'Subject',
  'Will you attend?',
]

function formatResponseValue(value) {
  if (value == null || value === '') return null
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return String(value)
  }
  if (Array.isArray(value)) {
    return value.map(formatResponseValue).filter(Boolean).join(', ')
  }
  if (typeof value === 'object') {
    if (value.optionValue) return String(value.optionValue)
    if (value.value != null) return formatResponseValue(value.value)
    if (value.label && value.id) return String(value.label)
    if (value.firstName || value.lastName) {
      return [value.firstName, value.lastName].filter(Boolean).join(' ')
    }
  }
  return null
}

export function extractFieldValue(field) {
  if (field == null) return null
  if (typeof field === 'string' || typeof field === 'number' || typeof field === 'boolean') {
    return String(field)
  }
  if (Array.isArray(field)) {
    return field.map(extractFieldValue).filter(Boolean).join(', ')
  }
  if (typeof field === 'object') {
    if (field.response != null) return formatResponseValue(field.response)
    if (field.value != null) return formatResponseValue(field.value)
    if (field.firstName || field.lastName) {
      return [field.firstName, field.lastName].filter(Boolean).join(' ')
    }
  }
  return null
}

function parseResponsesObject(responses) {
  if (!responses || typeof responses !== 'object') {
    return { byKey: {}, byLabel: {} }
  }

  const byKey = {}
  const byLabel = {}

  Object.entries(responses).forEach(([key, field]) => {
    const value = extractFieldValue(field)
    if (!value) return
    const fieldLabel = typeof field === 'object' && field?.label ? String(field.label) : key
    byKey[key] = value
    byLabel[fieldLabel] = value
  })

  return { byKey, byLabel }
}

function findFieldValue(byKey, byLabel, matcher) {
  for (const [key, value] of Object.entries(byKey)) {
    const fieldLabel = Object.entries(byLabel).find(([, v]) => v === value)?.[0] || key
    if (matcher(key, fieldLabel)) return value
  }
  return null
}

function extractVideoCallUrl(booking, v2Data) {
  return (
    v2Data?.videoCallUrl ||
    booking?.metadata?.videoCallUrl ||
    (typeof booking?.location === 'string' && booking.location.startsWith('http') ? booking.location : null)
  )
}

export function normalizeCalBooking(raw, v2Data) {
  if (!raw || typeof raw !== 'object') return null
  if (raw.booking) return normalizeLegacyBooking(raw, v2Data)
  return normalizeV2Booking(raw)
}

function normalizeLegacyBooking(data, v2Data) {
  const booking = data.booking || {}
  const organizer = data.organizer || booking.user || {}
  const attendees = booking.attendees || []
  const primaryAttendee = attendees.find((a) => !a.host) || attendees[0] || {}
  const { byKey, byLabel } = parseResponsesObject(booking.responses)

  return {
    uid: booking.uid || v2Data?.uid || null,
    title: booking.title || data.eventType?.title || v2Data?.title || null,
    startTime: booking.startTime || v2Data?.startTime || null,
    endTime: booking.endTime || v2Data?.endTime || null,
    status: booking.status || v2Data?.status || null,
    videoCallUrl: extractVideoCallUrl(booking, v2Data),
    attendeeName: byKey.name || primaryAttendee.name || null,
    attendeeEmail: byKey.email || primaryAttendee.email || null,
    phone: byKey.attendeePhoneNumber || byKey.phone || primaryAttendee.phoneNumber || null,
    childName: findFieldValue(byKey, byLabel, (k, l) => /child.*name|full name/i.test(l) || /child.*name/i.test(k)),
    childYear: findFieldValue(byKey, byLabel, (k, l) => /current year|year of the child/i.test(l)),
    currentGrades: findFieldValue(byKey, byLabel, (k, l) => /current grade/i.test(l)),
    subjects: findFieldValue(byKey, byLabel, (k, l) => /subject|enquiring about/i.test(l)),
    willAttend: findFieldValue(byKey, byLabel, (k, l) => /will you attend|spots are limited/i.test(l)),
    hostName: organizer.name || null,
    hostEmail: organizer.email || null,
    guestEmails: byKey.guests || null,
    eventTypeId: booking.eventTypeId || data.eventType?.id || v2Data?.eventTypeId || null,
    bookingFields: Object.keys(byKey).length > 0 ? byKey : null,
    responsesByLabel: Object.keys(byLabel).length > 0 ? byLabel : null,
    bookedAt: new Date().toISOString(),
  }
}

function normalizeV2Booking(raw) {
  const booking = raw.booking || {}
  const fields = raw.bookingFieldsResponses || booking.bookingFieldsResponses || {}
  const { byKey, byLabel } = parseResponsesObject(
    Object.keys(fields).length > 0 ? fields : raw.responses
  )

  return {
    uid: raw.uid || booking.uid || null,
    title: raw.title || booking.title || null,
    startTime: raw.startTime || booking.startTime || null,
    endTime: raw.endTime || booking.endTime || null,
    status: raw.status || booking.status || null,
    videoCallUrl: raw.videoCallUrl || extractVideoCallUrl(booking, raw),
    attendeeName: raw.attendeeName || byKey.name || null,
    attendeeEmail: raw.email || byKey.email || null,
    phone: raw.phone || byKey.attendeePhoneNumber || byKey.phone || null,
    childName: findFieldValue(byKey, byLabel, (k, l) => /child.*name|full name/i.test(l)),
    childYear: findFieldValue(byKey, byLabel, (k, l) => /current year|year of the child/i.test(l)),
    currentGrades: findFieldValue(byKey, byLabel, (k, l) => /current grade/i.test(l)),
    subjects: findFieldValue(byKey, byLabel, (k, l) => /subject|enquiring about/i.test(l)),
    willAttend: findFieldValue(byKey, byLabel, (k, l) => /will you attend|spots are limited/i.test(l)),
    hostName: raw.hostName || null,
    guestEmails: raw.guestEmails || byKey.guests || null,
    eventTypeId: raw.eventTypeId || null,
    bookingFields: Object.keys(byKey).length > 0 ? byKey : null,
    responsesByLabel: Object.keys(byLabel).length > 0 ? byLabel : null,
    bookedAt: new Date().toISOString(),
  }
}

export function getBookingDisplayFields(booking) {
  if (!booking) return []

  const usedValues = new Set()
  const fields = []
  const tryAdd = (label, value) => {
    if (!value || usedValues.has(value)) return
    usedValues.add(value)
    fields.push({ label, value })
  }

  tryAdd('Your name', booking.attendeeName)
  tryAdd('Email address', booking.attendeeEmail)
  tryAdd('Phone number', booking.phone)
  tryAdd("Child's full name", booking.childName)
  tryAdd('Current year', booking.childYear)
  tryAdd('Current grades', booking.currentGrades)
  tryAdd('Subject', booking.subjects)
  tryAdd('Will you attend?', booking.willAttend)

  if (booking.responsesByLabel) {
    Object.entries(booking.responsesByLabel).forEach(([label, value]) => {
      const formatted = formatBookingFieldLabel(label)
      if (SKIP_RESPONSE_KEYS.has(label.toLowerCase())) return
      if (DISPLAY_FIELD_PRIORITY.some((p) => formatted.toLowerCase().includes(p.toLowerCase().slice(0, 8)))) return
      tryAdd(formatted, value)
    })
  }

  return fields
}

export function saveStrategyCallBooking(raw, v2Data) {
  const booking = normalizeCalBooking(raw, v2Data)
  if (!booking) return null
  sessionStorage.setItem(STRATEGY_CALL_BOOKING_KEY, JSON.stringify(booking))
  sessionStorage.setItem('strategyCallRegistered', 'true')
  return booking
}

export function getStrategyCallBooking() {
  try {
    const stored = sessionStorage.getItem(STRATEGY_CALL_BOOKING_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export function saveConsultationBooking(raw, v2Data) {
  const booking = normalizeCalBooking(raw, v2Data)
  if (!booking) return null
  sessionStorage.setItem(CONSULTATION_BOOKING_KEY, JSON.stringify(booking))
  return booking
}

export function getConsultationBooking() {
  try {
    const stored = sessionStorage.getItem(CONSULTATION_BOOKING_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export function formatBookingDateTime(iso) {
  if (!iso) return null
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  })
}

export function formatBookingFieldLabel(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim()
}
