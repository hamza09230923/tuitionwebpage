import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Bell,
  MessageCircle,
  Sparkles,
  UserCheck,
  ZoomIn,
  Lock,
  TrendingUp
} from 'lucide-react'
import testimonialVideo1 from '../testimonials/testimonial1-5gwMtUAO.mp4'
import testimonialVideo2 from '../testimonials/testimonial2.mp4'
import testimonialVideo3 from '../testimonials/testmonial3.mp4'
import testimonialVideo4 from '../testimonials/testimonial4.mp4'
import testimonialVideo5 from '../testimonials/testimonial5.mp4'
import nottinghamLogo from '../university/nottingham-university-logo.png'
import kingsCollegeLogo from '../university/King\'s_College_London_logo.svg'
import cambridgeLogo from '../university/cambridge.jpg'
import imperialLogo from '../university/Imperial-College-Logo.png'
import warwickLogo from '../university/warwick.svg'

const WEBINAR_WEEKDAYS = [6]
const WEBINAR_HOUR = 12
const WEBINAR_MINUTE = 0
const WEBINAR_DURATION_MINUTES = 60
const WEBINAR_TITLE = 'Join our Free Flagship Live Webinar!'
const WEBINAR_DESCRIPTION = 'Live GCSE strategy session for Maths, English, and Science — leave with a clear plan to raise grades fast.'
const WEBINAR_LOCATION = 'Google Meet link shared after registration.'
const WHATSAPP_NUMBER = '447344193804'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`
const CALENDLY_WEBINAR_URL = 'https://calendly.com/myscholaukwebinar/free-live-webinar'
const WEBINAR_WELCOME_VIDEO_URL = 'https://www.youtube-nocookie.com/embed/964lgRt8a_E?rel=0'

function TestimonialVideo({ src, className }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      if (video.readyState >= 2) {
        video.currentTime = 0.01
        video.pause()
      }
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)

    if (video.readyState < 2) {
      video.load()
    } else {
      handleLoadedMetadata()
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className={className}
      controls
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

function getWebinarWindow(now = new Date()) {
  const nextCandidates = []
  const prevCandidates = []

  WEBINAR_WEEKDAYS.forEach((day) => {
    const base = new Date(now)
    const dayDiff = (day - base.getDay() + 7) % 7
    base.setDate(base.getDate() + dayDiff)
    base.setHours(WEBINAR_HOUR, WEBINAR_MINUTE, 0, 0)

    const next = new Date(base)
    if (dayDiff === 0 && base <= now) {
      next.setDate(next.getDate() + 7)
    }
    nextCandidates.push(next)

    const prev = new Date(base)
    if (base > now) {
      prev.setDate(prev.getDate() - 7)
    }
    prevCandidates.push(prev)
  })

  const nextStart = nextCandidates.reduce((soonest, current) => (
    current < soonest ? current : soonest
  ))
  const prevStart = prevCandidates.reduce((latest, current) => (
    current > latest ? current : latest
  ))
  const prevEnd = new Date(prevStart.getTime() + WEBINAR_DURATION_MINUTES * 60000)
  const isLive = now >= prevStart && now < prevEnd
  const start = isLive ? prevStart : nextStart
  const end = new Date(start.getTime() + WEBINAR_DURATION_MINUTES * 60000)

  return { start, end, isLive }
}

function getTimeLeft(targetDate) {
  const totalMs = Math.max(targetDate - new Date(), 0)
  const totalSeconds = Math.floor(totalMs / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function padTime(value) {
  return String(value).padStart(2, '0')
}

function toGoogleCalendarDate(date) {
  return date
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}Z$/, 'Z')
}

function buildGoogleCalendarUrl(startDate, endDate) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: WEBINAR_TITLE,
    details: WEBINAR_DESCRIPTION,
    location: WEBINAR_LOCATION,
    dates: `${toGoogleCalendarDate(startDate)}/${toGoogleCalendarDate(endDate)}`
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

function Webinar() {
  const [webinarWindow, setWebinarWindow] = useState(() => getWebinarWindow())
  const [timeLeft, setTimeLeft] = useState(() => {
    const windowState = getWebinarWindow()
    return getTimeLeft(windowState.start)
  })
  const [reminderSet, setReminderSet] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem('webinarReminder') === 'true'
  })
  const [openFaq, setOpenFaq] = useState(0)
  const testimonialVideos = [
    { src: testimonialVideo5, id: 5, name: 'Labib', subjects: ['English Literature'], improvedBy: 3 },
    { src: testimonialVideo4, id: 4, name: 'Mia', subjects: ['English Literature'], improvedBy: 3 },
    { src: testimonialVideo3, id: 3, name: 'Eyaad', subjects: ['Physics'], improvedBy: 2 },
    { src: testimonialVideo2, id: 2, name: 'Atiya', subjects: ['Maths', 'English Literature'], improvedBy: 2 },
    { src: testimonialVideo1, id: 1, name: 'Nihal', subjects: ['Maths', 'English Literature'], improvedBy: 1 }
  ]
  const totalTestimonialVideos = testimonialVideos.length
  const loopedTestimonialVideos = [...testimonialVideos, ...testimonialVideos, ...testimonialVideos]
  const loopStartIndex = totalTestimonialVideos
  const loopEndIndex = totalTestimonialVideos * 2
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(loopStartIndex)
  const [carouselTransitionEnabled, setCarouselTransitionEnabled] = useState(true)
  const [visibleTestimonialCount, setVisibleTestimonialCount] = useState(() => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth >= 1280) return 3
    if (window.innerWidth >= 768) return 2
    return 1
  })
  const [recommendationPercent, setRecommendationPercent] = useState(() => (
    typeof window === 'undefined' ? 97 : 0
  ))

  useEffect(() => {
    const interval = setInterval(() => {
      const windowState = getWebinarWindow()
      const target = windowState.isLive ? windowState.end : windowState.start
      setWebinarWindow(windowState)
      setTimeLeft(getTimeLeft(target))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('webinarReminder', reminderSet ? 'true' : 'false')
  }, [reminderSet])

  useEffect(() => {
    const updateVisibleCount = () => {
      const nextCount = window.innerWidth >= 1280 ? 3 : window.innerWidth >= 768 ? 2 : 1
      setVisibleTestimonialCount(nextCount)
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  useEffect(() => {
    if (activeTestimonialIndex < loopStartIndex || activeTestimonialIndex >= loopEndIndex) {
      setCarouselTransitionEnabled(false)
      const nextIndex = activeTestimonialIndex < loopStartIndex
        ? activeTestimonialIndex + totalTestimonialVideos
        : activeTestimonialIndex - totalTestimonialVideos
      setActiveTestimonialIndex(nextIndex)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setCarouselTransitionEnabled(true))
      })
    }
  }, [activeTestimonialIndex, loopStartIndex, loopEndIndex, totalTestimonialVideos])

  useEffect(() => {
    if (typeof window === 'undefined') return
    let frameId
    const durationMs = 2800
    const target = 97
    const start = window.performance ? window.performance.now() : Date.now()

    const tick = (now) => {
      const current = now || Date.now()
      const progress = Math.min((current - start) / durationMs, 1)
      const value = Math.floor(progress * target)
      setRecommendationPercent(value)
      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)
    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  const nextWebinarLabel = webinarWindow.start.toLocaleString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  })
  const calendarUrl = buildGoogleCalendarUrl(webinarWindow.start, webinarWindow.end)
  const whatsappQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    WHATSAPP_LINK
  )}`

  const formatImprovement = (improvedBy) => (
    improvedBy === 1 ? 'Improved by 1 grade' : `Improved by ${improvedBy} grades`
  )

  const stats = [
    {
      value: '95%',
      label: 'Students improve grades',
      className: 'bg-blue-600 text-blue-100'
    },
    {
      value: '2-3',
      label: 'Grade improvement average',
      className: 'bg-green-600 text-green-100'
    },
    {
      value: '300+',
      label: 'Successful students',
      className: 'bg-purple-600 text-purple-100'
    }
  ]

  const highlights = [
    {
      title: 'One-to-One Support',
      description: 'Personalised lessons where your child only sees the tutor. Privacy-first, focus-first.',
      icon: UserCheck
    },
    {
      title: 'Via Zoom',
      description: 'High-quality video, interactive whiteboard, and chat support for fast progress.',
      icon: ZoomIn
    },
    {
      title: 'Student Privacy',
      description: 'Webcam and microphone are optional. Parents can monitor engagement for peace of mind.',
      icon: Lock
    }
  ]

  const expectations = [
    {
      step: '01',
      title: 'Edexcel + AQA tracker',
      description: 'Structured amber-light tracker to pinpoint strengths and gaps fast.'
    },
    {
      step: '02',
      title: 'Exemplar answers',
      description: 'Techniques aligned directly to mark schemes so students know what earns marks and how to reach Grade 9.'
    },
    {
      step: '03',
      title: 'Exam practice + parent evenings',
      description: 'Regular practice, progress reviews, and clear next steps to keep improvement steady.'
    }
  ]

  const goToPreviousTestimonial = () => {
    setActiveTestimonialIndex((prev) => prev - 1)
  }

  const goToNextTestimonial = () => {
    setActiveTestimonialIndex((prev) => prev + 1)
  }

  const openCalendlyWidget = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: CALENDLY_WEBINAR_URL
      })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: CALENDLY_WEBINAR_URL
        })
      }
    }
    document.body.appendChild(script)
  }

  const faqItems = [
    {
      q: 'Who is this webinar for?',
      a: 'Students in Years 9-11 and parents who want a clear GCSE improvement plan.'
    },
    {
      q: 'How do I get the Google Meet link?',
      a: 'Register above and we will send the private Google Meet link by email or WhatsApp.'
    },
    {
      q: 'Will there be a recording?',
      a: 'Yes. A private recording link is shared after the session.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="w-full bg-[#0B3D91] text-white py-3 px-4 shadow-md relative overflow-hidden">
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-6 whitespace-nowrap animate-marquee-reverse text-sm sm:text-base md:text-lg font-bold">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={`banner-${index}`} className="flex items-center gap-3 pr-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs sm:text-sm uppercase tracking-wide">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                  </span>
                  Attention
                </span>
                <span>Parents of GCSE Years 9, 10 &amp; 11 students</span>
                <span className="text-white/80">•</span>
                <span className="text-white/90">Spaces are running out — join our March cohort</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="bg-white/90 rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-32 -right-24 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 text-blue-700 font-semibold text-sm uppercase tracking-wide">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3 py-1">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Private Webinar Registration
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
              {WEBINAR_TITLE}
            </h1>
            <div className="mt-4 w-full rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-amber-100/60 p-8 sm:p-10 shadow-sm">
              <div className="flex flex-col gap-3">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-red-700">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
                  </span>
                  Limited seats
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-red-700">
                  {WEBINAR_DESCRIPTION}
                </h3>
                <p className="text-lg sm:text-xl font-semibold text-gray-700">
                  Get a step-by-step GCSE improvement roadmap, proven exam techniques, and a clear weekly plan.
                  Book today to secure a place for your child and receive the private Google Meet link instantly.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-red-700">
                <CheckCircle className="h-4 w-4" aria-hidden="true" />
                Only a few seats left this week
              </div>
            </div>
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center">
                A welcome from our co-founders
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">
                Watch this short introduction from our co-founder, Isam, before registering for the webinar.
              </p>
              <div
                className="mt-4 overflow-hidden rounded-2xl border border-slate-100 bg-black"
                style={{ aspectRatio: '16 / 9' }}
              >
                <iframe
                  className="h-full w-full"
                  src={WEBINAR_WELCOME_VIDEO_URL}
                  title="Webinar welcome video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={openCalendlyWidget}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 px-12 py-6 text-white text-2xl font-extrabold ring-2 ring-blue-300/40 hover:shadow-2xl hover:-translate-y-0.5 transition overflow-hidden cta-button"
                >
                  <span className="cta-shimmer" aria-hidden="true" />
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition" aria-hidden="true" />
                  <span className="relative inline-flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-white/90" aria-hidden="true" />
                    Register for the webinar
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className={`rounded-2xl p-5 text-center shadow-md ${stat.className}`}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Results based on historical performance. Individual outcomes vary.
            </p>

            <div className="mt-8">
              <div className="w-full rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-100/70 p-8 md:p-10 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-blue-700 font-semibold">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                    {webinarWindow.isLive ? 'Live now - ends in' : 'Starts in'}
                  </div>
                  {webinarWindow.isLive && (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-600">
                      <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white/90 border border-blue-100 px-4 py-5 shadow-md hover:shadow-lg transition"
                    >
                      <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
                        {padTime(item.value)}
                      </div>
                      <div className="text-xs uppercase tracking-wide text-blue-600 mt-2 font-semibold">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                    Next webinar: <span className="font-bold text-blue-900">{nextWebinarLabel}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-red-700">
                    Spaces are filling up — register soon.
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Time shown in your local timezone.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60 p-8 sm:p-10 shadow-sm">
              <div className="flex flex-col gap-3">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  What to expect
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  A clear plan for measurable GCSE gains to
                  <span className="ml-2 text-emerald-600 text-3xl sm:text-4xl font-extrabold underline decoration-emerald-300 decoration-4 underline-offset-4 animate-soft-glow">
                    Grade 9
                  </span>
                </h3>
                <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
                  Three focused steps we deliver in the webinar so families leave with a concrete action plan.
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {expectations.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                        {item.step}
                      </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900">{item.title}</h4>
                  </div>
                    <p className="mt-3 text-base sm:text-lg text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-base sm:text-lg font-semibold text-emerald-700">
                <CheckCircle className="h-5 w-5" aria-hidden="true" />
                Live examples and Q&A included
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-10 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Parents love this session
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
                    Reserve your spot now
                  </h3>
                  <p className="text-gray-700 mt-2 max-w-2xl text-base sm:text-lg">
                    Book in under a minute and get the private Google Meet link plus the follow-up resources.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative rounded-3xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 p-[2px] shadow-lg">
                    <div className="relative flex items-center gap-4 rounded-[22px] bg-white px-7 py-5 overflow-hidden">
                      <div className="pointer-events-none absolute inset-0 opacity-60">
                        <div className="absolute -left-1/3 top-0 h-full w-1/2 rotate-6 bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent animate-pulse" />
                      </div>
                      <span className="absolute -top-2 -right-2 inline-flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500" />
                      </span>
                      <div className="relative text-4xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight drop-shadow-sm animate-pulse">
                        {recommendationPercent}%
                      </div>
                      <div className="relative text-base sm:text-lg font-semibold text-gray-800">
                        Parents recommend this webinar
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  'Live, interactive webinar with real examples',
                  'Action plan you can use immediately'
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold text-gray-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={openCalendlyWidget}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-8 py-5 text-white text-xl font-bold shadow-xl hover:bg-blue-700 transition"
                >
                  Register for the webinar
                </button>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Secure Calendly pop-up. No card required.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Add to Google Calendar
                </a>
                <button
                  type="button"
                  onClick={() => setReminderSet((prev) => !prev)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    reminderSet
                      ? 'border-green-200 text-green-700 bg-green-50'
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Bell className="h-4 w-4" aria-hidden="true" />
                  {reminderSet ? 'Reminder set' : 'Set a reminder'}
                </button>
              </div>
            </div>

            <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8">
              <div className="max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <TrendingUp className="h-4 w-4" aria-hidden="true" />
                  From our main tutoring programme
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
                  How MySchola lessons work
                </h2>
                <p className="text-gray-600 mt-2">
                  These are the same methods used in our full tutoring programme, adapted for this webinar.
                </p>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {highlights.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-left shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Our tutors study at the UK's most prestigious universities
                </h2>
                <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
                  Learn from the best to achieve your best.
                </p>
              </div>
              <div className="relative overflow-hidden mt-8">
                <div className="flex animate-marquee">
                  {[
                    { src: nottinghamLogo, alt: 'University of Nottingham', name: 'Nottingham' },
                    { src: kingsCollegeLogo, alt: "King's College London", name: "King's College" },
                    { src: cambridgeLogo, alt: 'University of Cambridge', name: 'Cambridge' },
                    { src: imperialLogo, alt: 'Imperial College London', name: 'Imperial' },
                    { src: warwickLogo, alt: 'University of Warwick', name: 'Warwick' }
                  ].map((uni, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={uni.src}
                          alt={uni.alt}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                  {[
                    { src: nottinghamLogo, alt: 'University of Nottingham', name: 'Nottingham' },
                    { src: kingsCollegeLogo, alt: "King's College London", name: "King's College" },
                    { src: cambridgeLogo, alt: 'University of Cambridge', name: 'Cambridge' },
                    { src: imperialLogo, alt: 'Imperial College London', name: 'Imperial' },
                    { src: warwickLogo, alt: 'University of Warwick', name: 'Warwick' }
                  ].map((uni, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={uni.src}
                          alt={uni.alt}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 p-8">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Video testimonials
                </h2>
                <p className="text-gray-600 mt-2">
                  Hear directly from students and parents about their progress.
                </p>

                <div className="relative mt-10 sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4">
                  <button
                    type="button"
                    onClick={goToPreviousTestimonial}
                    className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Previous testimonial videos"
                    title="Previous"
                  >
                    <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <div className="overflow-hidden sm:col-start-2">
                    <div
                      className={`flex ${carouselTransitionEnabled ? 'transition-transform duration-500 ease-out' : ''} will-change-transform`}
                      style={{ transform: `translateX(-${activeTestimonialIndex * (100 / visibleTestimonialCount)}%)` }}
                    >
                      {loopedTestimonialVideos.map((video, index) => {
                        const centerOffset = Math.floor(visibleTestimonialCount / 2)
                        const isCenter = index === activeTestimonialIndex + centerOffset

                        return (
                          <div key={`${video.id}-${index}`} className="flex-shrink-0 px-3" style={{ width: `${100 / visibleTestimonialCount}%` }}>
                            <div
                              className={`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${isCenter ? 'shadow-2xl scale-100 opacity-100' : 'shadow-md scale-95 opacity-60'}`}
                            >
                              <TestimonialVideo
                                src={video.src}
                                className="w-full h-auto rounded-t-2xl"
                              />
                              <div className="p-4 text-center">
                                <p className="text-lg font-semibold text-gray-900">{video.name}</p>
                                <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
                                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                                    {video.subjects.join(' / ')}
                                  </span>
                                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                                    {formatImprovement(video.improvedBy)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={goToNextTestimonial}
                    className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Next testimonial videos"
                    title="Next"
                  >
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <div className="flex items-center justify-between sm:hidden mt-4 px-2">
                    <button
                      type="button"
                      onClick={goToPreviousTestimonial}
                      className="flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Previous testimonial videos"
                      title="Previous"
                    >
                      <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={goToNextTestimonial}
                      className="flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Next testimonial videos"
                      title="Next"
                    >
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick FAQ</h3>
              <div className="space-y-3">
                {faqItems.map((faq, index) => (
                  <div key={faq.q} className="border border-gray-100 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-gray-900"
                      aria-expanded={openFaq === index}
                    >
                      {faq.q}
                      <span className="text-blue-600">{openFaq === index ? '-' : '+'}</span>
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4 text-sm text-gray-600">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-gray-200 p-6 text-center">
                <div className="flex items-center justify-center gap-2 text-gray-900 font-semibold">
                  <MessageCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
                  WhatsApp QR code
                </div>
                <p className="text-gray-600 mt-3">
                  Scan to message us on WhatsApp if you have any questions.
                </p>
                <img
                  src={whatsappQrUrl}
                  alt="WhatsApp QR code for MySchola"
                  className="mx-auto mt-4 h-44 w-44 rounded-lg border border-gray-100"
                  loading="lazy"
                />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-green-200 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 transition"
                >
                  Open WhatsApp chat
                </a>
            </div>

            <div className="mt-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Webinar

