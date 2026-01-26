/**
 * Meta Pixel (Facebook) tracking for MySchola – Pixel ID: 2772806336415328
 * Base pixel + PageView init in index.html. These helpers fire custom events.
 */

export function trackPageView() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

/** Lead: user clicked "Book Consultation" (opens Calendly). */
export function trackLeadConsultation() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Consultation Booking',
      content_category: 'GCSE Tuition'
    })
  }
}

/** Lead: user clicked WhatsApp contact button. */
export function trackLeadWhatsApp() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'WhatsApp Inquiry',
      content_category: 'GCSE Tuition'
    })
  }
}

/** Purchase: user landed on payment success (Stripe redirect). */
export function trackPurchase() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', { currency: 'GBP' })
  }
}

/** Lead: user completed consultation booking (redirected from Calendly to /booking-success). */
export function trackBookingComplete() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Consultation Booked',
      content_category: 'GCSE Tuition'
    })
  }
}

/** Start Trial: user clicked start-trial CTA (e.g. Book Free Consultation). Fires only on https://myschola.uk/ */
export function trackStartTrial() {
  if (typeof window === 'undefined' || !window.fbq) return
  try {
    const isMySchola = window.location.hostname === 'myschola.uk'
    if (!isMySchola) return
    window.fbq('track', 'StartTrial', {
      value: 0,
      currency: 'GBP',
      predicted_ltv: 0
    })
  } catch (_) {}
}
