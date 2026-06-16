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
  const params = {}

  if (booking.attendeeEmail) params.attendee_email = booking.attendeeEmail

  return params
}

function hasTrackedSchedule(booking) {
  if (!booking.uid || typeof window === 'undefined') return false

  const key = `metaScheduleTracked:${booking.uid}`
  if (window.sessionStorage.getItem(key)) return true

  window.sessionStorage.setItem(key, 'true')
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
