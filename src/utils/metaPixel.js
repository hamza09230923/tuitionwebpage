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
  } catch {
    // Tracking failures must not interrupt the booking flow.
  }
}

function buildBookingMetaParams(booking) {
  const params = {
    content_name: 'Strategy Call Booked',
    content_category: 'GCSE Tuition',
    lead_type: 'free_gcse_strategy_call',
    booking_platform: 'calcom',
    subject_interest: booking.subjects || 'unknown',
    year_group: booking.childYear || 'unknown',
    source: 'website',
  }

  if (booking.currentGrades) params.current_grade = booking.currentGrades

  return params
}

function hasTrackedSchedule(booking) {
  if (typeof window === 'undefined') return false

  const bookingFingerprint = [
    booking.uid,
    booking.startTime,
    booking.endTime,
    booking.eventTypeId,
  ].filter(Boolean).join(':')
  const key = bookingFingerprint
    ? `metaScheduleTracked:${bookingFingerprint}`
    : 'metaScheduleTracked:currentPage'

  try {
    if (window.sessionStorage.getItem(key) || window.localStorage.getItem(key)) return true

    window.sessionStorage.setItem(key, 'true')
    window.localStorage.setItem(key, 'true')
  } catch {
    return false
  }
  return false
}

/** Primary conversion event — optimize Meta campaigns for Schedule. */
export function trackSchedule(booking) {
  if (typeof window === 'undefined' || !window.fbq || !booking) return
  if (hasTrackedSchedule(booking)) return
  window.fbq('track', 'Schedule', buildBookingMetaParams(booking))
}

export function trackBookingComplete() {
  trackLeadConsultation()
}
