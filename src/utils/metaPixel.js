/**
 * Meta Pixel (Facebook) tracking for MySchola – Pixel ID: 911142258237855
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
