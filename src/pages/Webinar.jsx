import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  Clock,
  BarChart3,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Bell,
  CircleX,
  Sparkles,
  Target,
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
import benefitsComparisonGraphic from '../assets/checklist.jpeg'
import nottinghamLogo from '../university/nottingham-university-logo.png'
import kingsCollegeLogo from '../university/King\'s_College_London_logo.svg'
import cambridgeLogo from '../university/cambridge.jpg'
import imperialLogo from '../university/Imperial-College-Logo.png'
import warwickLogo from '../university/warwick.svg'

const WEBINAR_WEEKDAYS = [0]
const WEBINAR_HOUR = 16
const WEBINAR_MINUTE = 0
const WEBINAR_DURATION_MINUTES = 60
const HERO_BADGE = 'Free GCSE Strategy Call'
const HERO_TITLE = 'Struggling to Improve Your Childâ€™s Grades? Letâ€™s Build a Plan'
const HERO_DESCRIPTION = 'If your child is working hard but not getting the grades they should,'
const HERO_PROBLEM_LINE = 'the problem is usually not effort.'
const HERO_SOLUTION_LINE = 'It is exam technique.'
const WEBINAR_TITLE = 'Join our Free Flagship Live Webinar!'
const WEBINAR_DESCRIPTION = 'Live GCSE strategy session for Maths, English, and Science â€” leave with a clear plan to raise grades fast.'
const WEBINAR_LOCATION = 'Zoom link shared after registration.'
const CALENDLY_WEBINAR_URL = 'https://calendly.com/myscholaukwebinar/new-meeting?month=2026-03'
const WEBINAR_WELCOME_VIDEO_URL = 'https://www.youtube-nocookie.com/embed/SESxBf0A-OE?rel=0'

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
  const webinarWindow = getWebinarWindow()
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

  const calendarUrl = buildGoogleCalendarUrl(webinarWindow.start, webinarWindow.end)

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

  const revisionRealityPoints = [
    {
      stat: '5-10',
      statLabel: 'hours a week',
      title: 'Hours In',
      description: 'Many students are already putting in serious revision time every single week.',
      icon: Clock,
      iconClass: 'bg-blue-600 text-white',
      statClass: 'text-blue-700'
    },
    {
      stat: '4-5',
      statLabel: 'grade plateau',
      title: 'Grades Stuck',
      description: 'Despite the effort, many stay stuck at Grade 4 or 5 and cannot break through.',
      icon: BarChart3,
      iconClass: 'bg-amber-500 text-white',
      statClass: 'text-amber-700'
    },
    {
      stat: 'Lost',
      statLabel: 'marks in the exam',
      title: 'Marks Lost',
      description: 'Students often know the content, but still drop marks through weak structure and poor exam technique.',
      icon: CircleX,
      iconClass: 'bg-rose-500 text-white',
      statClass: 'text-rose-700'
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
  const webinarHeroTitle = 'GCSE Strategy Call for Parents Who Want Faster Grade Growth'
  const webinarHeroDescription = 'Exam technique. Clear diagnosis. Confidence. Results.'
  const heroHighlights = [
    { icon: TrendingUp, label: 'Results-focused' },
    { icon: Target, label: 'Exam strategy' },
    { icon: UserCheck, label: 'Parent clarity' },
    { icon: CheckCircle, label: 'Action plan' }
  ]
  const heroCards = [
    {
      eyebrow: 'Pinpoint',
      title: 'Why grades are stuck'
    },
    {
      eyebrow: 'Plan',
      title: 'What changes next'
    },
    {
      eyebrow: 'Momentum',
      title: 'How to move up faster'
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
      q: 'Who is this consultation call for?',
      a: 'It is for parents of students in Years 9 to 11 who want clear support in GCSE Maths, English, or Science.'
    },
    {
      q: 'What happens on the consultation call?',
      a: 'We talk through your child\'s current grade, the areas they are struggling with, how our lessons work, and the best next steps for improvement.'
    },
    {
      q: 'Do you offer a free trial lesson?',
      a: 'Yes. If our tuition feels like the right fit after the consultation call, we can offer a free trial lesson so you can see how the teaching works before committing.'
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
                <span className="text-white/80">|</span>
                <span className="text-white/90">Spaces are running out - join this month&apos;s cohort</span>
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
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-2 text-blue-700 font-semibold text-sm uppercase tracking-wide shadow-sm">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {HERO_BADGE}
              </span>
            </div>

            <div className="mt-6 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
                {webinarHeroTitle}
              </h1>
              <p className="mt-4 text-lg sm:text-xl font-semibold text-slate-600">
                {webinarHeroDescription}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {heroHighlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <Icon className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 w-full rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-6 sm:p-8 shadow-[0_24px_60px_rgba(37,99,235,0.12)]">
              <div className="flex flex-col items-center gap-5 text-center">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Limited spaces this month
                </span>
                <h3 className="max-w-4xl text-3xl leading-tight sm:text-4xl font-bold text-slate-900">
                  Short call. Sharp diagnosis. Clear next steps.
                </h3>
                <p className="max-w-3xl text-base sm:text-lg font-semibold text-slate-600">
                  We guarantee to boost your child&apos;s grades by 2-3 with the right strategy, structure, and support.
                </p>
                <div className="w-full max-w-3xl rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-100 via-white to-lime-50 p-5 shadow-[0_20px_55px_rgba(16,185,129,0.18)]">
                  <div className="flex flex-col items-center gap-2">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                      <TrendingUp className="h-4 w-4" aria-hidden="true" />
                      Money-back promise
                    </div>
                    <p className="text-lg sm:text-2xl font-extrabold text-slate-900">
                      Follow the system. No improvement. Full refund.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={openCalendlyWidget}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 px-8 sm:px-12 py-4 sm:py-5 text-white text-lg sm:text-xl font-extrabold ring-2 ring-blue-300/40 hover:shadow-2xl hover:-translate-y-0.5 transition overflow-hidden cta-button"
                >
                  <span className="cta-shimmer" aria-hidden="true" />
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition" aria-hidden="true" />
                  <span className="relative inline-flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-white/90" aria-hidden="true" />
                    Book Free Strategy Call
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {heroCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-center shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">{card.eyebrow}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{card.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-5 sm:p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Founder walkthrough
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight text-slate-900 text-center">
                  See the MySchola method
                </h3>
                <p className="mt-3 text-sm sm:text-base font-semibold text-slate-600 text-center">
                  Strategy. Structure. Grade momentum.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">Exam technique</span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">Parent clarity</span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">Grade growth</span>
                </div>
              </div>
              <div
                className="mt-4 overflow-hidden rounded-2xl border border-slate-100 bg-black"
                style={{ aspectRatio: '16 / 9' }}
              >
                <iframe
                  className="h-full w-full"
                  src={WEBINAR_WELCOME_VIDEO_URL}
                  title="Tuition overview video"
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
                    Yes, I Want to Book a Call With MySchola
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 sm:p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_320px] lg:items-start">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    The gaps we fix
                  </span>
                  <h3 className="mt-4 max-w-3xl text-2xl sm:text-3xl font-bold text-gray-900">
                    The three core problems we solve at MySchola:
                  </h3>
                  <p className="mt-3 max-w-2xl text-base sm:text-lg text-gray-600">
                    Many students are already working hard. The real issue is that their effort is not translating into marks in the exam.
                  </p>
                </div>

                <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-lg">
                  <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    The real gap
                  </div>
                  <p className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">
                    The jump from Grade 5 to Grade 9 usually comes down to strategy.
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-gray-600">
                    It is answer structure, exam technique, and knowing exactly how to turn subject knowledge into marks.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {revisionRealityPoints.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.title}
                      className="consultation-problem-card group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                      style={{ animationDelay: `${index * 140}ms` }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconClass} shadow-lg`}>
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="text-right">
                          <div className={`text-3xl sm:text-4xl font-black tracking-tight ${item.statClass}`}>
                            {item.stat}
                          </div>
                          <div className="text-xs font-semibold text-gray-500">
                            {item.statLabel}
                          </div>
                        </div>
                      </div>
                      <h4 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-3 text-sm sm:text-base text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-blue-50 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg">
                    <Target className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">
                      Our tuition is built to solve the exact reasons students stay stuck.
                    </p>
                    <p className="mt-2 text-sm sm:text-base text-gray-600">
                      We focus on exam technique, answer structure, and smarter revision habits so students can turn effort into measurable grade improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/60 p-6 sm:p-8 shadow-sm">
              <div className="max-w-4xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                  What we do differently
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Why families choose our tuition over other options
                </h3>
                <p className="mt-3 text-base sm:text-lg text-gray-600">
                  We combine strong teaching, progress tracking, homework support, and clear exam preparation in one structured programme.
                </p>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <img
                  src={benefitsComparisonGraphic}
                  alt="Comparison table showing what MySchola does differently compared with other providers and one-to-one home tutors"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
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

            {false && (
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
                    Spaces are filling up â€” register soon.
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Time shown in your local timezone.
                </p>
              </div>
            </div>
            )}

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
                  Three focused steps we deliver in our lessons so families leave with a concrete action plan.
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
                    Book in under a minute and get the private Zoom link plus the follow-up resources.
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
                        of parents recommend us
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  'Clear consultation with real examples',
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
                  Yes, I Want to Book a Call With MySchola
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

