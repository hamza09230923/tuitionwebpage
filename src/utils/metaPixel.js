/**
 * Meta Pixel (Facebook) tracking for MySchola – Pixel ID: 2772806336415328
 */

export function trackPageView() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

/** Lead: user clicked "Book Consultation" CTA. */
export function trackLeadConsultation() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Consultation Booking',
      content_category: 'GCSE Tuition',
    })
  }
}

export function trackLeadWhatsApp() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'WhatsApp Inquiry',
      content_category: 'GCSE Tuition',
    })
  }
}

export function trackPurchase() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', { currency: 'GBP' })
  }
}

export function trackStartTrial() {
  if (typeof window === 'undefined' || !window.fbq) return
  try {
    if (window.location.hostname !== 'myschola.uk') return
    window.fbq('track', 'StartTrial', { value: 0, currency: 'GBP', predicted_ltv: 0 })
  } catch (_) {}
}

function toMetaParamKey(key) {
  return key.replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_+|_+$/g, '').toLowerCase().slice(0, 40)
}

function buildBookingMetaParams(booking, fallbackContentName) {
  const params = {
    content_name: booking.title || fallbackContentName,
    content_category: 'GCSE Tuition',
  }

  if (booking.uid) params.booking_id = booking.uid
  if (booking.status) params.status = booking.status
  if (booking.attendeeName) params.attendee_name = booking.attendeeName
  if (booking.attendeeEmail) params.attendee_email = booking.attendeeEmail
  if (booking.phone) params.phone = booking.phone
  if (booking.startTime) params.appointment_time = booking.startTime
  if (booking.endTime) params.appointment_end_time = booking.endTime
  if (booking.eventTypeId) params.event_type_id = String(booking.eventTypeId)
  if (booking.hostName) params.host_name = booking.hostName
  if (booking.childName) params.child_name = booking.childName
  if (booking.childYear) params.child_year = booking.childYear
  if (booking.currentGrades) params.current_grades = booking.currentGrades
  if (booking.subjects) params.subjects = booking.subjects
  if (booking.willAttend) params.will_attend = booking.willAttend

  if (booking.bookingFields) {
    Object.entries(booking.bookingFields).forEach(([key, value]) => {
      if (value) params[`field_${toMetaParamKey(key)}`] = value
    })
  }

  if (booking.responsesByLabel) {
    Object.entries(booking.responsesByLabel).forEach(([label, value]) => {
      if (value) params[`response_${toMetaParamKey(label)}`] = value
    })
  }

  return params
}

/** Primary conversion event — optimize Meta campaigns for Schedule. */
export function trackSchedule(booking, fallbackContentName = 'Consultation Booked') {
  if (typeof window === 'undefined' || !window.fbq || !booking) return
  window.fbq('track', 'Schedule', buildBookingMetaParams(booking, fallbackContentName))
}

export function trackBookNow(booking) {
  if (typeof window === 'undefined' || !window.fbq) return
  const params = { value: 0, currency: 'GBP' }
  if (booking?.uid) params.booking_id = booking.uid
  if (booking?.attendeeName) params.attendee_name = booking.attendeeName
  window.fbq('track', 'BOOK NOW', params)
}

export function trackStrategyCallBooked(booking) {
  if (typeof window === 'undefined' || !window.fbq || !booking) return
  const params = buildBookingMetaParams(booking, 'Strategy Call Booked')
  trackSchedule(booking, 'Strategy Call Booked')
  window.fbq('track', 'Lead', params)
  trackBookNow(booking)
}

export function trackConsultationBooked(booking) {
  if (typeof window === 'undefined' || !window.fbq || !booking) return
  const params = buildBookingMetaParams(booking, 'Consultation Booked')
  trackSchedule(booking, 'Consultation Booked')
  window.fbq('track', 'Lead', params)
  trackBookNow(booking)
}

/** @deprecated Use trackConsultationBooked */
export function trackBookingComplete() {
  trackLeadConsultation()
}
