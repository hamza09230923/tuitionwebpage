import { Menu, X, BookOpen, Users, Award, ArrowRight, ArrowLeft, Check, Star, GraduationCap, Target, TrendingUp, Mail, Phone, Clock, HelpCircle, ZoomIn, UserCheck, Lock, MessageCircle } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CalInlineEmbed from './components/CalInlineEmbed'
import { normalizeCalBooking, saveConsultationBooking } from './utils/bookingStorage'
import { scrollToBookingSection } from './utils/scrollToBooking'
import testimonialVideo1 from './testimonials/testimonial1-5gwMtUAO.mp4'
import testimonialVideo2 from './testimonials/testimonial2.mp4'
import testimonialVideo3 from './testimonials/testmonial3.mp4'
import testimonialVideo4 from './testimonials/testimonial4.mp4'
import testimonialVideo5 from './testimonials/testimonial5.mp4'
import benefitsComparisonGraphic from './assets/checklist.jpeg'
import { trackLeadConsultation, trackLeadWhatsApp } from './utils/metaPixel'
// University logos
import nottinghamLogo from './university/nottingham-university-logo.png'
import kingsCollegeLogo from './university/King\'s_College_London_logo.svg'
import cambridgeLogo from './university/cambridge.jpg'
import imperialLogo from './university/Imperial-College-Logo.png'
import warwickLogo from './university/warwick.svg'
// Exam board logos
import aqaLogo from './university/aqa.jpg'
import edexcelLogo from './university/edexcel-vector-logo.png'

function TestimonialVideo({ src, className, showControls = true }) {
  const containerRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (!containerRef.current || shouldLoad) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '150px', threshold: 0.01 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <div ref={containerRef} className="aspect-video bg-slate-100">
      {shouldLoad ? (
        <video
          className={className}
          controls={showControls}
          playsInline
          preload="metadata"
          width={640}
          height={360}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : null}
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function DeferredSection({ children, className = '', ...props }) {
  return (
    <section
      className={`deferred-section ${className}`}
      style={{ contentVisibility: 'auto', containIntrinsicSize: '600px' }}
      {...props}
    >
      {children}
    </section>
  )
}

function Home() {
  const navigate = useNavigate()
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(loopStartIndex)
  const [carouselTransitionEnabled, setCarouselTransitionEnabled] = useState(true)
  const [visibleTestimonialCount, setVisibleTestimonialCount] = useState(() => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth >= 1280) return 3
    if (window.innerWidth >= 768) return 2
    return 1
  })

  const formatImprovement = (improvedBy) => (
    improvedBy === 1 ? 'Improved by 1 grade' : `Improved by ${improvedBy} grades`
  )

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


    const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const goToPreviousTestimonial = () => {
    setActiveTestimonialIndex((prev) => prev - 1)
  }

  const goToNextTestimonial = () => {
    setActiveTestimonialIndex((prev) => prev + 1)
  }

  const handleBookingSuccess = useCallback((bookingData, v2Data) => {
    const booking = saveConsultationBooking(bookingData, v2Data) || normalizeCalBooking(bookingData, v2Data)
    navigate('/booking-success', { replace: true, state: { booking } })
  }, [navigate])

  const goToBooking = () => {
    trackLeadConsultation()
    navigate('/booking', { replace: false })
    scrollToBookingSection()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg">
        Skip to main content
      </a>

      {/* Cohort Banner */}
      <div className="w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md">
        Join our June cohort as soon as possible — spaces are running out!
      </div>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <span className="ml-2 text-2xl font-bold text-gray-900">MySchola</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center">
              <div className="flex items-center space-x-8">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
                <a href="#subjects" className="text-gray-700 hover:text-blue-600 transition">Subjects</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center"
                  aria-label="Log in"
                >
                  Log In
                </Link>
                <a
                  href="https://wa.me/447344193804"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackLeadWhatsApp}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Contact Us
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t" role="menu" aria-label="Mobile navigation menu">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Home</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">How It Works</a>
              <a href="#subjects" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Subjects</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Testimonials</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">FAQ</a>
              <Link
                to="/login"
                className="block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                role="menuitem"
              >
                Log In
              </Link>
              <a
                href="https://wa.me/447344193804"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackLeadWhatsApp}
                className="block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Contact us on WhatsApp"
                role="menuitem"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Contact Us
                </span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Clear Headline */}
      <main id="main-content">
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100" aria-label="Hero section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative inline-block px-2">
              <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                GCSE Tuition That Helps Students Close Gaps, Build Confidence and
                <span className="text-blue-600"> Improve Grades</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
              Online small-group Maths, English and Science tuition for Year 9, Year 10 and Year 11 students, built around exam technique, weekly structure and clear parent feedback.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={goToBooking}
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation"
                aria-label="Book a free consultation"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" aria-hidden="true" />
              </button>
              <Link
                to="/courses"
                className="bg-white text-blue-700 border-2 border-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-50 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px]"
              >
                View GCSE Courses
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-600">Free consultation and trial lesson available. No card required.</p>
          </div>
        </div>
      </section>

      {/* How Lessons Work Section */}
      <DeferredSection id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="how-it-works-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="how-it-works-heading" className="text-4xl font-bold text-center mb-4">How MySchola Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Good GCSE tuition starts with understanding what your child needs. We use a simple four-step process so students receive focused support and parents know what happens next.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Free Consultation</h3>
              <p className="text-gray-600">Tell us about your child's current grades, confidence, school targets and the areas causing concern. We will explain how the lessons work and whether MySchola is a suitable fit.</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <ZoomIn className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Identify Gaps and Exam Board</h3>
              <p className="text-gray-600">We identify weak topics, confirm whether your child studies AQA, Edexcel or OCR, and consider whether Foundation or Higher content is most relevant.</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Join Weekly Small-Group Lessons</h3>
              <p className="text-gray-600">Your child joins structured online GCSE group tuition with clear explanations, guided practice, exam questions and opportunities to learn from other students' questions.</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Track Progress</h3>
              <p className="text-gray-600">Homework, tutor feedback and parent updates help everyone see what is improving, which topics need more work and what the next priorities should be.</p>
            </div>
          </div>
        </div>
      </DeferredSection>

      {/* Benefits Section */}
      <DeferredSection className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="benefits-heading" className="text-4xl font-bold text-center mb-4">Consistent Support That Can Lead to Real Progress</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Many of our students have improved by two or more grades after consistent lessons, homework and exam practice. Individual results vary, but regular attendance and active practice give students a clearer route forward.
          </p>
          <div className="mb-12 flex justify-center">
            <img
              src={benefitsComparisonGraphic}
              alt="Comparison table showing MySchola benefits against other providers and one-to-one home tutors"
              className="w-full max-w-6xl h-auto rounded-2xl border border-gray-200 shadow-sm object-contain"
              loading="lazy"
              width={1152}
              height={768}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <TrendingUp className="h-6 w-6 text-green-500 mr-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Encouraging Grade Progress</h3>
              </div>
              <p className="text-gray-600">We have supported students who began with Grade 3 predictions and later achieved Grade 8 or 9 outcomes. These are individual stories, not guaranteed results, and they came through sustained effort, lessons and practice.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-blue-500 mr-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Confidence Building</h3>
              </div>
              <p className="text-gray-600">Students build confidence by revisiting difficult topics, asking questions and seeing that they can answer increasingly challenging exam questions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Target className="h-6 w-6 text-red-500 mr-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Exam Focus</h3>
              </div>
              <p className="text-gray-600">Structured GCSE exam practice uses past-paper questions, mark schemes and timed tasks to develop stronger exam technique.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Clock className="h-6 w-6 text-purple-500 mr-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Weekly Homework and Feedback</h3>
              </div>
              <p className="text-gray-600">Homework reinforces each lesson, while feedback helps students understand mistakes and take responsibility for their next steps.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Users className="h-6 w-6 text-orange-500 mr-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Monthly Parent Progress Calls</h3>
              </div>
              <p className="text-gray-600">Monthly Zoom progress calls give parents a clear view of attendance, homework, strengths, concerns and current priorities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <BookOpen className="h-6 w-6 text-indigo-500 mr-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">AQA, Edexcel and OCR Focus</h3>
              </div>
              <p className="text-gray-600">Lessons account for the student's exam board, current level and topic gaps so practice stays relevant to the course they are taking.</p>
            </div>
          </div>
        </div>
      </DeferredSection>

      <DeferredSection className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-950 text-white" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="trust-heading" className="text-3xl sm:text-4xl font-bold">A Clear GCSE Support System for Students and Parents</h2>
            <p className="mt-4 mx-auto max-w-3xl text-blue-100">Trust is built through consistent teaching, useful feedback and honest communication. These are the practical commitments at the centre of MySchola tuition.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ['Every Week', 'Structured small-group lessons and homework keep revision moving.'],
              ['Every Month', 'Parent progress calls make strengths, gaps and next steps clear.'],
              ['3 Exam Boards', 'Focused support for AQA, Edexcel and OCR GCSE specifications.'],
              ['Between Lessons', '1-to-1 WhatsApp tutor support helps students when they get stuck.']
            ].map(([title, copy]) => (
              <div key={title} className="rounded-xl border border-blue-700 bg-blue-900 p-6 text-center">
                <p className="text-2xl font-bold text-blue-200">{title}</p>
                <p className="mt-3 text-sm leading-relaxed text-blue-50">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </DeferredSection>

      {/* Social Proof / Testimonials Section */}
      <DeferredSection id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="video-testimonials-heading">
        <div className="max-w-6xl mx-auto text-center">
          <h2 id="video-testimonials-heading" className="text-4xl font-bold mb-4 text-gray-900">Video Testimonials</h2>
          <p className="text-gray-600 mb-12">Short clips from students, with the subject and grade improvements below.</p>

          <div className="relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4">
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
      </DeferredSection>

      <DeferredSection id="text-testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="testimonials-heading" className="text-4xl font-bold text-center mb-4">What Parents & Students Say</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Every student's starting point and outcome is different. These stories show how regular teaching, practice and encouragement have helped individual students make progress.</p>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Aisha K, Parent',
                text: 'My son started the term lacking confidence in Maths and was sitting at a Grade 5. After weekly Zoom lessons with MySchola, his understanding improved steadily and he finished the term with a Grade 7.',
                rating: 5,
                result: 'Maths: Grade 5 → Grade 7'
              },
              {
                name: 'Rahul P, Parent',
                text: 'MySchola was patient and explained the Poetry Anthology texts in a way my daughter could finally understand. Her confidence grew each week and her English grade jumped from a 5 to an 8.',
                rating: 5,
                result: 'English Lit: Grade 5 → Grade 8'
              },
              {
                name: 'Emma L., Parent',
                text: 'The confidence my son gained was incredible. He went from hating Chemistry especially Organic Chemistry to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!',
                rating: 5,
                result: 'Chemistry: Grade 5 → Grade 8'
              },
              {
                name: 'Michael R., Student',
                text: 'Going through past papers and custom exam style questions with Isam and Hamza made a huge difference. Physics finally started to make sense, and I learned how to approach exam questions properly.',
                rating: 5,
                result: 'Physics: Grade 6 → Grade 9'
              },
              {
                name: 'Jasmin K., Parent',
                text: 'As a working parent, the flexible scheduling in the evenings was a lifesaver. My daughter could do sessions that fit around school and activities. Highly recommend!',
                rating: 4,
                result: 'Maths: Grade 6 → Grade 8'
              },
              {
                name: 'Emmanuel P., Parent',
                text: 'The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!',
                rating: 5,
                result: 'English: Grade 5 → Grade 7'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                  <p className="text-sm text-blue-600 font-medium mt-1">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DeferredSection>

      {/* Subjects/Services Section */}
      <DeferredSection id="subjects" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="subjects-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="subjects-heading" className="text-4xl font-bold text-center mb-4">Online GCSE Tuition for Maths, English and Science</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our GCSE Maths tuition, GCSE English tuition and GCSE Science tuition combine clear teaching with purposeful exam-question practice. Students receive support that matches their exam board and current needs, whether they are rebuilding foundations or aiming for the highest grades.
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'GCSE Maths Tuition',
                description: 'Maths can become frustrating when a missed topic makes later work harder. Our online GCSE Maths tuition helps Foundation and Higher students identify those gaps, rebuild core skills and practise applying methods to exam questions. Lessons develop confidence across areas such as algebra, number, geometry, ratio, probability and statistics. Tutors also teach students how to show working clearly, manage time and avoid common exam mistakes.'
              },
              {
                name: 'GCSE English Tuition',
                description: 'Our GCSE English tuition supports English Language and English Literature students with the skills needed to respond clearly under exam conditions. Lessons cover reading, analysis, creative and transactional writing, quotations, essay planning and evidence-based arguments. Students practise exam questions, improve their technique and receive feedback that helps them write with greater confidence and precision.'
              },
              {
                name: 'GCSE Science Tuition',
                description: 'GCSE Science tuition covers Biology, Chemistry and Physics for Combined Science and Triple Science students. Tutors explain difficult concepts in manageable steps, revisit topic gaps and connect knowledge to the wording used in exam questions. Foundation and Higher students practise calculations, required practicals, extended responses and the exam technique needed to earn marks consistently.'
              }
            ].map((subject) => (
              <div key={subject.name} className="bg-white p-7 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-blue-600">
                <div className="flex items-start mb-3">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{subject.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{subject.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/courses" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">View GCSE Courses <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" /></Link>
          </div>
        </div>
      </DeferredSection>

      <DeferredSection className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="year-groups-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="year-groups-heading" className="text-4xl font-bold text-center mb-4">GCSE Tuition for Every Stage of Years 9-11</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">The right priorities change as GCSE exams get closer. Our Year 9 tuition, Year 10 tuition and Year 11 tuition give students a structured weekly routine while focusing on the work that matters most at their stage.</p>
          <div className="grid lg:grid-cols-3 gap-8">
            <article className="bg-white p-7 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">Year 9 GCSE Tuition</h3>
              <p className="text-gray-600 leading-relaxed">Year 9 is the ideal time to build foundations early. Students can strengthen key Maths, English and Science knowledge before gaps become harder to manage. Regular GCSE revision support also helps them settle into more demanding content, develop useful study habits and approach future assessments with confidence.</p>
            </article>
            <article className="bg-white p-7 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">Year 10 GCSE Tuition</h3>
              <p className="text-gray-600 leading-relaxed">Year 10 students need to balance learning new content with remembering earlier topics. Tuition helps close gaps before mocks, improve exam technique and keep revision manageable. Weekly lessons and homework provide accountability throughout the year instead of leaving everything until the final months.</p>
            </article>
            <article className="bg-white p-7 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">Year 11 GCSE Tuition</h3>
              <p className="text-gray-600 leading-relaxed">Year 11 tuition focuses on targeted revision, intensive exam technique and past-paper preparation. Students learn how to interpret questions, use mark schemes, manage time and prioritise weak topics. The aim is to make the final revision period calmer, clearer and more productive.</p>
            </article>
          </div>
        </div>
      </DeferredSection>

      <DeferredSection className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="parents-heading">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="parents-heading" className="text-4xl font-bold mb-5">Built for Busy Parents Who Want Clear Progress</h2>
            <p className="text-gray-600 leading-relaxed mb-4">It is difficult to support GCSE revision when you are not sure what has been covered, whether homework is complete or where your child is struggling. MySchola gives families a clear weekly routine and straightforward communication, without expecting parents to become subject teachers.</p>
            <p className="text-gray-600 leading-relaxed">Students receive lessons, homework tracking, feedback and access to 1-to-1 WhatsApp tutor support between sessions. Monthly Zoom progress calls help parents understand current performance, engagement and next priorities. You can see whether the plan is working and raise concerns before they become bigger problems.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {['A dependable weekly lesson routine', 'Clear communication and progress updates', 'Homework tracking and tutor feedback', '1-to-1 WhatsApp tutor support', 'Monthly Zoom progress calls', 'Support aligned with school and exams'].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg bg-blue-50 p-4">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </DeferredSection>

      <DeferredSection className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="comparison-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="comparison-heading" className="text-4xl font-bold text-center mb-4">Why Parents Choose MySchola Over Traditional Tuition</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Small-group tuition sits between costly one-to-one lessons and unsupported independent revision. It gives students regular expert teaching, useful peer discussion and personal feedback at a lower cost than typical 1-to-1 tuition.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ['Structured group learning', 'Lessons follow a clear plan, while tutors can revisit misunderstandings and respond to questions raised during the session.'],
              ['Learning from other students', 'Students often benefit when somebody else asks a question they had not thought to ask or explains where they became stuck.'],
              ['More accountability than self-study', 'A weekly timetable, homework and feedback make it easier to keep going than relying on revision intentions alone.'],
              ['More personal support than recorded videos', 'Students can ask questions, receive feedback and contact a tutor on WhatsApp instead of watching content without guidance.']
            ].map(([title, copy]) => (
              <article key={title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/package" className="font-semibold text-blue-700 hover:text-blue-900">Compare Tuition Package</Link>
            <Link to="/timetable" className="font-semibold text-blue-700 hover:text-blue-900">View Lesson Timetable</Link>
          </div>
        </div>
      </DeferredSection>

      {/* University Tutors Section */}
      <DeferredSection className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="universities-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="universities-heading" className="text-4xl font-bold mb-4 text-gray-900">
              Our tutors study at the UK's most prestigious universities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your education is everything. That's why we only hire the best in class. All of our tutors have stellar academic backgrounds and have first-hand experience with the rigorous exam process. Learn from the best to achieve your best.
            </p>
          </div>
          
          {/* Marquee Banner */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {/* First set of logos */}
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
                      width={288}
                      height={176}
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
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
                      width={288}
                      height={176}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DeferredSection>

      {/* Exam Boards Section */}
      <DeferredSection className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="exam-boards-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="exam-boards-heading" className="text-4xl font-bold mb-4 text-gray-900">
              Expert tuition for every exam board
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Unlock academic success with tailored support across every exam board. Our team of expert tutors knows the ins and outs of each curriculum, offering customized guidance that fits your exact syllabus.
            </p>
          </div>
          
          {/* Marquee Banner */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-reverse">
              {/* Multiple sets for smoother scrolling */}
              {[...Array(3)].map((_, setIndex) => 
                [
                  { src: aqaLogo, alt: 'AQA', name: 'AQA' },
                  { src: edexcelLogo, alt: 'Edexcel', name: 'Edexcel' }
                ].map((board, index) => (
                  <div key={`set-${setIndex}-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-10">
                    <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 h-44 sm:h-52 lg:h-60 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <img 
                        src={board.src} 
                        alt={board.alt} 
                        className="w-full h-full object-contain"
                        loading="lazy"
                        width={320}
                        height={240}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </DeferredSection>

      {/* Book Call Section */}
      <DeferredSection id="book-call" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-indigo-700" aria-labelledby="book-call-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center text-white mb-8">
            <h2 id="book-call-heading" className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 px-2">Ready to Start Your Child's GCSE Success Journey?</h2>
            <p className="text-lg sm:text-xl text-white mb-2 px-2">
              Book a free consultation to discuss your child's needs and see how we can help them achieve their goals.
            </p>
            <p className="text-white text-sm">No card required • Free 15-minute consultation</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <CalInlineEmbed
              theme="light"
              elementId="my-cal-inline-parentconsultation-home"
              onBookingSuccess={handleBookingSuccess}
            />
          </div>
        </div>
      </DeferredSection>

      {/* FAQ Section */}
      <DeferredSection id="faq" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What subjects do you teach?', a: 'MySchola teaches GCSE Maths, English Language, English Literature, Combined Science and Triple Science. Lessons are designed for students in Year 9, Year 10 and Year 11.' },
              { q: 'Do you cover AQA, Edexcel and OCR?', a: 'Yes. We provide AQA GCSE tuition, Edexcel GCSE tuition and OCR GCSE tuition. During the consultation, we confirm your child\'s exam board so lessons and exam-question practice are relevant to their specification.' },
              { q: 'Is this suitable for Foundation students?', a: 'Yes. Foundation GCSE tuition helps students strengthen core knowledge, close topic gaps and build confidence with the question styles and skills needed for their target grade.' },
              { q: 'Is this suitable for Higher students?', a: 'Yes. Higher GCSE tuition supports students with more demanding topics, multi-step questions, exam technique and the accuracy needed to work towards higher grades.' },
              { q: 'How big are the groups?', a: 'MySchola lessons are taught in small online groups so students can receive focused teaching, ask questions and benefit from hearing how other students approach a problem. We will explain the current group options during your consultation.' },
              { q: 'Do parents receive updates?', a: 'Yes. Parents receive clear progress updates and monthly Zoom progress calls covering attendance, homework, strengths, concerns and the topics that should be prioritised next.' },
              { q: 'Is there homework?', a: 'Yes. Weekly homework reinforces lesson content and gives tutors another way to identify misunderstandings. Feedback helps students correct mistakes and prepare for future exam questions.' },
              { q: 'How does the free trial work?', a: 'Book a free consultation first so we can understand your child\'s year group, subject, exam board and current needs. We will then explain the suitable lesson options and how to arrange the free trial lesson.' },
              { q: 'Is tuition online?', a: 'Yes. Lessons are delivered online, making it easier for students to follow a consistent weekly routine from home. A laptop or desktop computer and a reliable internet connection are recommended.' },
              { q: 'How do I book?', a: 'Use the booking calendar on this page or visit the booking page to choose a free consultation time. There is no card required for the consultation.' }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="font-semibold text-gray-900 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
                    {faq.q}
                  </span>
                  <span className="text-blue-600" aria-hidden="true" aria-label={openFAQ === index ? "Collapse answer" : "Expand answer"}>
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div id={`faq-answer-${index}`} className="px-6 pb-4 text-gray-600" role="region" aria-labelledby={`faq-question-${index}`}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </DeferredSection>

      {/* Contact Section */}
      <DeferredSection id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="contact-heading" className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Mail className="h-6 w-6 text-blue-600 mb-3" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a href="mailto:myscholauk@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
                myscholauk@gmail.com
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Phone className="h-6 w-6 text-blue-600 mb-3" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:+447344193804" className="text-gray-600 hover:text-blue-600 transition">
                +44 7344 193804
              </a>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri 9am-6pm</p>
            </div>
          </div>
        </div>
      </DeferredSection>

      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400" aria-hidden="true" />
                <span className="ml-2 text-2xl font-bold">MySchola</span>
              </div>
              <p className="text-gray-400">Expert GCSE tutoring for Years 9-11 via Zoom.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400" role="list">
                  <li><a href="#home" className="hover:text-white transition">Home</a></li>
                  <li><Link to="/courses" className="hover:text-white transition">GCSE Courses</Link></li>
                  <li><Link to="/package" className="hover:text-white transition">Tuition Package</Link></li>
                  <li><Link to="/timetable" className="hover:text-white transition">Lesson Timetable</Link></li>
                  <li><Link to="/booking" className="hover:text-white transition">Book a Free Consultation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400" role="list">
                <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link to="/refund-cancellation-policy" className="hover:text-white transition">Refund & Cancellation Policy</Link></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400" role="list">
                <li><a href="mailto:myscholauk@gmail.com" className="hover:text-white transition">myscholauk@gmail.com</a></li>
                <li><a href="tel:+447344193804" className="hover:text-white transition">+44 7344 193804</a></li>
                <li>
                  <a
                    href="https://wa.me/447344193804"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackLeadWhatsApp}
                    className="text-green-400 hover:text-green-300 transition inline-flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Contact Us on WhatsApp
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={goToBooking}
                    className="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base"
                    aria-label="Book a consultation"
                  >
                    Book Consultation
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MySchola. All rights reserved. Tutoring for Years 9-11.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button - Mobile Optimized */}
      <a
        href="https://wa.me/447344193804"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackLeadWhatsApp}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
      </a>
    </div>
  )
}

export default Home


