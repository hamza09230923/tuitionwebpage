import { useEffect, useRef, useState } from 'react'

const CAL_EMBED_URL = 'https://app.cal.com/embed/embed.js'
const CAL_NAMESPACE = 'parentconsultation'
const CAL_LINK = 'myschola/parentconsultation'

function bootstrapCal() {
  if (typeof window === 'undefined' || window.Cal?.loaded) return

  ;(function (C, A, L) {
    const p = (a, ar) => { a.q.push(ar) }
    const d = C.document
    C.Cal = C.Cal || function () {
      const cal = C.Cal
      const ar = arguments
      if (!cal.loaded) {
        cal.ns = {}
        cal.q = cal.q || []
        d.head.appendChild(d.createElement('script')).src = A
        cal.loaded = true
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments) }
        const namespace = ar[1]
        api.q = api.q || []
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api
          p(cal.ns[namespace], ar)
          p(cal, ['initNamespace', namespace])
        } else {
          p(cal, ar)
        }
        return
      }
      p(cal, ar)
    }
  })(window, CAL_EMBED_URL, 'init')
}

const DARK_THEME_VARS = {
  'cal-brand': '#fafafa',
  'cal-bg': '#020617',
  'cal-bg-emphasis': '#0f172a',
  'cal-text': '#f8fafc',
  'cal-text-emphasis': '#ffffff',
  'cal-border': '#1e293b',
  'cal-border-emphasis': '#334155',
}

const LIGHT_THEME_VARS = {
  'cal-brand': '#292929',
  'cal-bg': '#ffffff',
  'cal-bg-emphasis': '#f8fafc',
  'cal-text': '#0f172a',
  'cal-text-emphasis': '#020617',
  'cal-border': '#e2e8f0',
  'cal-border-emphasis': '#cbd5e1',
}

// eslint-disable-next-line react/prop-types
export default function CalInlineEmbed({
  onBookingSuccess,
  minHeight = '650px',
  elementId = 'my-cal-inline-parentconsultation',
  theme = 'dark',
}) {
  const wrapperRef = useRef(null)
  const containerRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const initializedRef = useRef(false)
  const bookingHandledRef = useRef(false)
  const legacyBookingRef = useRef(null)
  const onBookingSuccessRef = useRef(onBookingSuccess)

  onBookingSuccessRef.current = onBookingSuccess

  useEffect(() => {
    if (!wrapperRef.current || shouldLoad) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setShouldLoad(true)
        })
      },
      { rootMargin: '50px', threshold: 0.01 }
    )
    observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [shouldLoad])

  useEffect(() => {
    if (!shouldLoad || !containerRef.current || initializedRef.current) return

    bootstrapCal()
    window.Cal('init', CAL_NAMESPACE, { origin: 'https://app.cal.com' })
    window.Cal.config = window.Cal.config || {}
    window.Cal.config.forwardQueryParams = true

    const isDark = theme === 'dark'

    window.Cal.ns[CAL_NAMESPACE]('inline', {
      elementOrSelector: containerRef.current,
      config: {
        layout: 'month_view',
        useSlotsViewOnSmallScreen: 'true',
        theme: isDark ? 'dark' : 'light',
      },
      calLink: CAL_LINK,
    })

    window.Cal.ns[CAL_NAMESPACE]('ui', {
      cssVarsPerTheme: {
        light: LIGHT_THEME_VARS,
        dark: DARK_THEME_VARS,
      },
      hideEventTypeDetails: false,
      layout: 'month_view',
      theme: isDark ? 'dark' : 'light',
    })

    if (onBookingSuccessRef.current) {
      const completeBooking = (v2Data) => {
        if (bookingHandledRef.current) return
        bookingHandledRef.current = true
        const legacyData = legacyBookingRef.current || (v2Data ? { booking: v2Data } : null)
        if (!legacyData) return
        onBookingSuccessRef.current?.(legacyData, v2Data)
      }

      window.Cal.ns[CAL_NAMESPACE]('on', {
        action: 'bookingSuccessful',
        callback: (event) => {
          legacyBookingRef.current = event?.detail?.data
          window.setTimeout(() => completeBooking(null), 400)
        },
      })

      window.Cal.ns[CAL_NAMESPACE]('on', {
        action: 'bookingSuccessfulV2',
        callback: (event) => completeBooking(event?.detail?.data),
      })
    }

    initializedRef.current = true
  }, [shouldLoad, theme])

  const isDark = theme === 'dark'

  return (
    <div ref={wrapperRef} className="h-full w-full">
      {shouldLoad ? (
        <div
          ref={containerRef}
          id={elementId}
          className={isDark ? 'bg-slate-950' : 'bg-white'}
          style={{ width: '100%', minHeight, overflow: 'hidden' }}
        />
      ) : (
        <div
          className={`flex min-h-[420px] w-full flex-col items-center justify-center ${
            isDark
              ? 'bg-slate-950 text-slate-300'
              : 'rounded-2xl border border-slate-200 bg-slate-50 text-slate-600'
          }`}
        >
          <div className={`mb-4 h-11 w-11 animate-spin rounded-full border-b-2 ${isDark ? 'border-blue-400' : 'border-blue-600'}`} />
          <p className="text-sm font-semibold">Loading booking times...</p>
        </div>
      )}
    </div>
  )
}
