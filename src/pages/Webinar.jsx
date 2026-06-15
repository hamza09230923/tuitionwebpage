import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CalInlineEmbed from '../components/CalInlineEmbed'
import { normalizeCalBooking, saveStrategyCallBooking } from '../utils/bookingStorage'
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Calendar,
  Trophy,
  UsersRound,
  Sparkles,
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

const HERO_BADGE = 'Free GCSE Strategy Call'
const YOUTUBE_VIDEO_ID = 'fSvTYTwv9ac'
const COUNT_UP_DURATION_MS = 1500
const STRATEGY_CALL_TITLE = 'Free GCSE Strategy Call for Parents | MySchola UK'
const STRATEGY_CALL_DESCRIPTION = "Book a free GCSE strategy call for your Year 9-11 child. Discuss grades, learning gaps and AQA, Edexcel or OCR exam support with MySchola."
const STRATEGY_CALL_URL = 'https://myschola.uk/book-strategy-call'
// eslint-disable-next-line react/prop-types
function TestimonialVideo({ src, className }) {
  const videoRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || shouldLoad) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
          }
        })
      },
      { rootMargin: '100px', threshold: 0.1 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [shouldLoad])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad) return

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
  }, [src, shouldLoad])

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          className="w-full h-auto"
          controls
          playsInline
          preload="metadata"
          width={640}
          height={360}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="flex aspect-video w-full items-center justify-center bg-slate-900">
          <div className="h-12 w-12 animate-pulse rounded-full bg-white/10" />
        </div>
      )}
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function CountUpNumber({ target, suffix = '' }) {
  const numberRef = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!numberRef.current || hasStarted) return

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setHasStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.35 }
    )

    observer.observe(numberRef.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplayValue(target)
      return
    }

    const startTime = window.performance ? window.performance.now() : Date.now()
    let frameId

    const tick = (timestamp) => {
      const currentTime = timestamp || Date.now()
      const progress = Math.min((currentTime - startTime) / COUNT_UP_DURATION_MS, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(target * easedProgress))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frameId)
  }, [hasStarted, target])

  return (
    <span ref={numberRef}>
      {displayValue.toLocaleString('en-GB')}{suffix}
    </span>
  )
}

// eslint-disable-next-line react/prop-types
function YouTubeFacade({ videoId, title }) {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      className="relative block h-full w-full cursor-pointer border-0 p-0"
      style={{ touchAction: 'manipulation' }}
      onClick={() => setActive(true)}
      aria-label={`Play: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/sddefault.jpg`}
        alt={title}
        className="h-full w-full object-cover"
        width={640}
        height={480}
        fetchPriority="high"
        decoding="async"
        onError={(e) => {
          e.currentTarget.src = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
        }}
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm sm:h-20 sm:w-20">
          <svg
            className="ml-1 h-7 w-7 text-white sm:h-9 sm:w-9"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}

function Webinar() {
  const navigate = useNavigate()

  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const canonical = document.querySelector('link[rel="canonical"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const previous = {
      description: description?.getAttribute('content'),
      canonical: canonical?.getAttribute('href'),
      ogUrl: ogUrl?.getAttribute('content'),
      ogTitle: ogTitle?.getAttribute('content'),
      ogDescription: ogDescription?.getAttribute('content'),
    }

    document.title = STRATEGY_CALL_TITLE
    description?.setAttribute('content', STRATEGY_CALL_DESCRIPTION)
    canonical?.setAttribute('href', STRATEGY_CALL_URL)
    ogUrl?.setAttribute('content', STRATEGY_CALL_URL)
    ogTitle?.setAttribute('content', STRATEGY_CALL_TITLE)
    ogDescription?.setAttribute('content', STRATEGY_CALL_DESCRIPTION)

    return () => {
      document.title = previousTitle
      if (previous.description) description?.setAttribute('content', previous.description)
      if (previous.canonical) canonical?.setAttribute('href', previous.canonical)
      if (previous.ogUrl) ogUrl?.setAttribute('content', previous.ogUrl)
      if (previous.ogTitle) ogTitle?.setAttribute('content', previous.ogTitle)
      if (previous.ogDescription) ogDescription?.setAttribute('content', previous.ogDescription)
    }
  }, [])

  const handleBookingSuccess = useCallback((bookingData, v2Data) => {
    const booking = saveStrategyCallBooking(bookingData, v2Data) || normalizeCalBooking(bookingData, v2Data)
    navigate('/book-strategy-call/thanks', {
      replace: true,
      state: { fromRegistration: true, booking },
    })
  }, [navigate])

  const testimonialVideos = [
    { src: testimonialVideo5, id: 5, name: 'Labib', subjects: ['English Literature'], improvedBy: 3 },
    { src: testimonialVideo4, id: 4, name: 'Mia', subjects: ['English Literature'], improvedBy: 3 },
    { src: testimonialVideo3, id: 3, name: 'Eyaad', subjects: ['Physics'], improvedBy: 2 },
    { src: testimonialVideo2, id: 2, name: 'Atiya', subjects: ['Maths', 'English Literature'], improvedBy: 2 },
    { src: testimonialVideo1, id: 1, name: 'Nihal', subjects: ['Maths', 'English Literature'], improvedBy: 1 }
  ]
  const universities = [
    { src: nottinghamLogo, alt: 'University of Nottingham' },
    { src: kingsCollegeLogo, alt: "King's College London" },
    { src: cambridgeLogo, alt: 'University of Cambridge' },
    { src: imperialLogo, alt: 'Imperial College London' },
    { src: warwickLogo, alt: 'University of Warwick' }
  ]
  const proofStats = [
    { target: 500, suffix: '+', label: 'Students taught', icon: UsersRound },
    { target: 3000, suffix: '+', label: 'Lessons delivered', icon: BookOpenCheck },
    { target: 1000, suffix: '+', label: 'Grade 7-9 results', icon: Trophy }
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
  const resizeTimeoutRef = useRef(null)

  useEffect(() => {
    const updateVisibleCount = () => {
      const nextCount = window.innerWidth >= 1280 ? 3 : window.innerWidth >= 768 ? 2 : 1
      setVisibleTestimonialCount(nextCount)
    }

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
      resizeTimeoutRef.current = setTimeout(updateVisibleCount, 150)
    }

    updateVisibleCount()
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
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

  const carouselTransform = useMemo(() => ({
    transform: `translateX(calc(-${activeTestimonialIndex} * (100% / ${visibleTestimonialCount})))`,
  }), [activeTestimonialIndex, visibleTestimonialCount])

  const formatImprovement = (improvedBy) => (
    improvedBy === 1 ? 'Improved by 1 grade' : `Improved by ${improvedBy} grades`
  )

  const goToPreviousTestimonial = () => {
    setActiveTestimonialIndex((prev) => prev - 1)
  }

  const goToNextTestimonial = () => {
    setActiveTestimonialIndex((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <style>{`
        @keyframes attention-pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(0.72); }
        }
        .animate-attention {
          animation: attention-pulse 1.6s infinite ease-in-out;
        }
      `}</style>
      <main className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
        <section className="mx-auto max-w-5xl text-center">
          <div className="animate-attention mb-4 inline-block rounded-lg bg-red-600 px-4 py-2 text-sm font-black uppercase tracking-widest text-white sm:text-base">
            ATTENTION PARENTS OF YEAR 9 10 & 11
          </div>
          <h1 className="mx-auto mb-3 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            <span className="block">Help your child work towards <strong className="text-blue-400">GCSE grades 7–9</strong> in just <strong className="text-blue-400">12 weeks</strong></span>
            <span className="block text-blue-400 underline decoration-2 underline-offset-4">GUARANTEED</span>
            <span className="block text-2xl sm:text-4xl mt-2">OR..</span>
            <span className="block text-xl sm:text-3xl mt-1">we&apos;ll continue working with you for <strong className="text-blue-400">free</strong> until we do.</span>
          </h1>

          <p className="text-xl sm:text-2xl font-black text-white mb-3">
            👇🏼 <span className="text-blue-400">Watch this now.</span>
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
            <div className="aspect-video w-full">
              <YouTubeFacade
                videoId={YOUTUBE_VIDEO_ID}
                title="MySchola GCSE strategy video"
              />
            </div>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 px-4 py-2 text-sm font-bold uppercase tracking-wide text-blue-100 ring-1 ring-blue-300/30">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {HERO_BADGE}
            </span>

            <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-300 sm:text-xl sm:leading-8">
              Watch this video to see why GCSE students stay stuck, then book your free strategy call before the same mistakes cost them again.
            </p>

            <a
              href="#booking"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-8 py-4 text-lg font-black text-white shadow-[0_18px_45px_rgba(59,130,246,0.45)] transition hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300/50"
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
              Book Free Trial Lesson
            </a>
            <p className="mx-auto mt-6 max-w-2xl rounded-full border border-amber-300/25 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-100">
              We planned to take on <strong className="text-white line-through decoration-2">10 students</strong> this month. <strong className="text-white">Only 4 spots remain.</strong>
            </p>
            <div className="mx-auto mt-7 grid max-w-5xl gap-5 rounded-2xl bg-black/25 px-4 py-5 sm:grid-cols-3">
              {proofStats.map((stat) => {
                const Icon = stat.icon

                return (
                <div key={stat.label} className="flex items-center justify-center gap-3 text-center">
                  <Icon className="h-9 w-9 shrink-0 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.45)]" aria-hidden="true" />
                  <div>
                    <div className="text-3xl font-black leading-none text-white sm:text-4xl">
                      <CountUpNumber target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-xs font-black uppercase tracking-wide text-slate-200">
                      {stat.label}
                    </div>
                  </div>
                </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-5xl" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 300px' }}>
          <div className="text-center">
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              Our students have gone on to these universities
            </h2>
            <p className="mt-2 text-sm font-semibold text-slate-300">
              Proof that the right GCSE strategy can create real academic momentum.
            </p>
          </div>
          <div className="relative mt-6 overflow-hidden">
            <div className="flex animate-marquee">
              {[...universities, ...universities].map((uni, index) => (
                <div key={`${uni.alt}-${index}`} className="mx-3 flex-shrink-0 sm:mx-4">
                  <div className="flex h-24 w-44 items-center justify-center rounded-xl bg-white p-5 shadow-sm sm:h-28 sm:w-56">
                    <img
                      src={uni.src}
                      alt={uni.alt}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      width={224}
                      height={112}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="mx-auto mt-10 max-w-5xl">
          <div className="mb-8 text-center text-white">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Start Your Child&apos;s GCSE Success Journey?
            </h2>
            <p className="mt-4 text-base text-white sm:text-lg">
              Book a free consultation to discuss your child&apos;s needs and see how we can help them achieve their goals.
            </p>
            <p className="mt-2 text-sm text-white">No card required • Free 15-minute consultation</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <CalInlineEmbed
              theme="light"
              elementId="my-cal-inline-parentconsultation-strategy-call"
              onBookingSuccess={handleBookingSuccess}
            />
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-5xl" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 500px' }}>
          <div className="text-center">
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              Watch students explain the results
            </h2>
            <p className="mt-2 text-sm font-semibold text-slate-300">
              Real GCSE students sharing how their marks moved after structured support.
            </p>
          </div>

          <div className="relative mt-8 sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4">
            <button
              type="button"
              onClick={goToPreviousTestimonial}
              className="hidden h-12 w-12 items-center justify-center rounded-full bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950 sm:flex"
              aria-label="Previous testimonial videos"
              title="Previous"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="overflow-hidden sm:col-start-2">
              <div
                className={`flex ${carouselTransitionEnabled ? 'transition-transform duration-500 ease-out' : ''}`}
                style={carouselTransform}
              >
                {loopedTestimonialVideos.map((video, index) => {
                  const centerOffset = Math.floor(visibleTestimonialCount / 2)
                  const isCenter = index === activeTestimonialIndex + centerOffset

                  return (
                    <div key={`${video.id}-${index}`} className="flex-shrink-0 px-3" style={{ width: `${100 / visibleTestimonialCount}%` }}>
                      <div className={`h-full overflow-hidden rounded-2xl bg-white text-slate-900 transition-all duration-500 ${isCenter ? 'scale-100 opacity-100 shadow-2xl' : 'scale-95 opacity-70 shadow-md'}`}>
                        <TestimonialVideo
                          src={video.src}
                          className="w-full h-auto"
                        />
                        <div className="p-4 text-center">
                          <p className="text-lg font-bold text-slate-900">{video.name}</p>
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
              className="hidden h-12 w-12 items-center justify-center rounded-full bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950 sm:flex"
              aria-label="Next testimonial videos"
              title="Next"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="mt-4 flex items-center justify-between px-2 sm:hidden">
              <button
                type="button"
                onClick={goToPreviousTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="Previous testimonial videos"
                title="Previous"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goToNextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="Next testimonial videos"
                title="Next"
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Webinar
