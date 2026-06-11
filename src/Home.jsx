import { Menu, X, BookOpen, Users, Award, ArrowRight, ArrowLeft, Check, Star, GraduationCap, Shield, Target, TrendingUp, Mail, Phone, Clock, FileText, HelpCircle, ZoomIn, UserCheck, Lock, MessageCircle } from 'lucide-react'
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
      controls={showControls}
      playsInline
      preload="metadata"
      width={640}
      height={360}
    >
      <source src={src} type="video/mp4" />
      <track kind="captions" src="" label="English" srclang="en" />
      Your browser does not support the video tag.
    </video>
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
        Join our May cohort as soon as possible — spaces are running out!
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
                MySchola: #1 GCSE Tutoring Platform for
                <span className="text-blue-600"> Years 9-11</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 max-w-3xl mx-auto px-2">
              <strong>GCSE Maths, English &amp; Science</strong> via Zoom
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Personalised lessons with one-to-one support from expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={goToBooking}
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation"
                aria-label="Book a free consultation"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How Lessons Work Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="how-it-works-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="how-it-works-heading" className="text-4xl font-bold text-center mb-12">How Our Lessons Work</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A clear, supportive structure that keeps students confident and parents fully in the loop.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">One-to-One Support</h3>
              <p className="text-gray-600">Personalised lessons with one-to-one support. Your child only sees the teacher, ensuring privacy and focus.</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <ZoomIn className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Via Zoom</h3>
              <p className="text-gray-600">Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy.</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Student Privacy</h3>
              <p className="text-gray-600">Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons.</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Personalised Support</h3>
              <p className="text-gray-600">Students can ask questions anytime between lessons. Tutors respond with personalised explanations, feedback, and next-step guidance.</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Parent Evenings</h3>
              <p className="text-gray-600">Regular parent evenings to review progress, share targets, and agree on the next steps for maximum grade improvement.</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Regular Exam-Style Tests</h3>
              <p className="text-gray-600">We set regular exams and topic checks to track progress, build exam technique, and close gaps quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="benefits-heading" className="text-4xl font-bold text-center mb-4">Benefits for Parents & Students</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Why thousands of families choose MySchola for GCSE success
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
                <h3 className="text-xl font-semibold">Grade Improvement</h3>
              </div>
              <p className="text-gray-600">Students consistently improve by 2-3 grades with our proven teaching methods and personalised approach.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-blue-500 mr-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Confidence Building</h3>
              </div>
              <p className="text-gray-600">Watch your child's confidence soar as they master difficult concepts and see their progress week by week.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Target className="h-6 w-6 text-red-500 mr-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Exam Focus</h3>
              </div>
              <p className="text-gray-600">Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Clock className="h-6 w-6 text-purple-500 mr-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
              </div>
              <p className="text-gray-600">Choose times that work around your family's schedule. Evening and weekend slots available.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Users className="h-6 w-6 text-orange-500 mr-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Expert Tutors</h3>
              </div>
              <p className="text-gray-600">Qualified UK teachers with DBS checks and proven track records of GCSE success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <BookOpen className="h-6 w-6 text-indigo-500 mr-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Personalised Curriculum</h3>
              </div>
              <p className="text-gray-600">Lessons tailored to your child's learning style, pace, and specific areas that need improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="video-testimonials-heading">
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
      </section>

      <section id="text-testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="testimonials-heading" className="text-4xl font-bold text-center mb-4">What Parents & Students Say</h2>
          <p className="text-center text-gray-600 mb-12">Real results from real families</p>
{/* Results/Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-700 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white">Students improve grades</div>
            </div>
            <div className="bg-green-700 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">2-3</div>
              <div className="text-white">Grade improvement average</div>
            </div>
            <div className="bg-purple-700 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-white">Successful students</div>
            </div>
          </div>

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
      </section>

      {/* Subjects/Services Section */}
      <section id="subjects" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="subjects-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="subjects-heading" className="text-4xl font-bold text-center mb-4">Subjects We Offer</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive GCSE support for Years 9-11
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Maths', description: 'GCSE Maths (Foundation & Higher)' },
              { name: 'Combined Science', description: 'Trilogy and Synergy pathways' },
              { name: 'Triple Science', description: 'Biology, Chemistry, and Physics' },
              { name: 'English Language', description: 'Reading, writing, and language skills' },
              { name: 'English Literature', description: 'Poetry, prose, and drama analysis' }
            ].map((subject) => (
              <div key={subject.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600">
                <div className="flex items-start mb-2">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{subject.name}</h3>
                    <p className="text-gray-600 text-sm">{subject.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Tutors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="universities-heading">
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
      </section>

      {/* Exam Boards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="exam-boards-heading">
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
      </section>

      {/* Book Call Section */}
      <section id="book-call" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-indigo-700" aria-labelledby="book-call-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center text-white mb-8">
            <h2 id="book-call-heading" className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 px-2">Ready to Start Your Child's GCSE Success Journey?</h2>
            <p className="text-lg sm:text-xl text-white mb-2 px-2">
              Book a free consultation to discuss your child's needs and see how we can help them achieve their goals.
            </p>
            <p className="text-white text-sm">No card required • Free 15-minute consultation</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/20 bg-slate-950 shadow-2xl">
            <CalInlineEmbed
              theme="dark"
              elementId="my-cal-inline-parentconsultation-home"
              onBookingSuccess={handleBookingSuccess}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do the Zoom lessons work?',
                a: 'Each lesson feels one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later.'
              },
              {
                q: 'What equipment do we need?',
                a: 'You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard.'
              },
              {
                q: 'How long are the sessions?',
                a: 'All lessons are 60 minutes and this duration is fixed.'
              },
              {
                q: 'Can I choose the tutor?',
                a: 'Yes! During your consultation, we\'ll discuss your child\'s learning style and match them with the best tutor. You can also request specific tutors based on availability.'
              },
              {
                q: 'What if my child misses a session?',
                a: 'All sessions are recorded and uploaded. If your child misses a lesson, they can watch the recording at their convenience. You can ask any questions through our WhatsApp support, available 24/7.'
              },
              {
                q: 'Do you provide homework and practice materials?',
                a: 'Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price.'
              },
              {
                q: 'How quickly will we see results?',
                a: 'Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness.'
              },
              {
                q: 'What age groups do you teach?',
                a: 'We specialize in Years 9-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects.'
              }
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="contact-heading">
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
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy-policy" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Privacy Policy</h2>
          <div className="prose max-w-none text-gray-600 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
              <p>We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h3>
              <p>We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Data Security</h3>
              <p>We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Session Recordings</h3>
              <p>Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Your Rights</h3>
              <p>You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Children's Privacy</h3>
              <p>We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements.</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Refund & Cancellation Policy Section */}
      <section id="terms-of-service" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Refund & Cancellation Policy</h2>
          <p className="text-center text-gray-500 mb-12">MySchola - Last updated: 9 March 2026</p>
          <div className="prose max-w-none text-gray-600 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Overview</h3>
              <p>This Refund & Cancellation Policy explains how refunds, cancellations, and subscription changes work for services provided by MySchola.</p>
              <p>By purchasing or subscribing to any MySchola service, you agree to this policy in addition to our Terms of Service.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Subscription Payments</h3>
              <p>MySchola provides tutoring and educational services on a weekly or monthly subscription basis.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payments are processed automatically through Stripe or other secure payment providers.</li>
                <li>Subscription fees vary depending on the subjects, number of sessions, and selected package.</li>
                <li>Subscriptions renew automatically at the end of each billing cycle unless cancelled beforehand.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. 7-Day Money-Back Guarantee</h3>
              <p>We offer a 7-day money-back guarantee from the date of your first payment.</p>
              <p>You may request a full refund within 7 calendar days if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The request is made within 7 days of the initial purchase.</li>
                <li>The request is submitted in writing.</li>
                <li>There has been no excessive or abusive use of the service.</li>
              </ul>
              <p>This guarantee allows parents and students to determine whether the service is suitable for their needs.</p>
              <p>Refunds are not intended for customers who primarily consume a significant portion of the service and then request a refund.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Partial Refunds</h3>
              <p>In certain situations, partial refunds may be offered at MySchola's discretion, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Removing one subject from a multi-subject subscription.</li>
                <li>Downgrading to a smaller tutoring package.</li>
                <li>Reduction in services during an active billing period.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. No Refunds After 7 Days</h3>
              <p>After the 7-day money-back guarantee period has passed:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>No refunds will be issued for time already used.</li>
                <li>Missed lessons, unused sessions, or lack of attendance do not qualify for refunds.</li>
                <li>Refunds are not issued for failure to attend or engage with lessons.</li>
              </ul>
              <p>If a subscription is cancelled after this period, the cancellation will only prevent future charges.</p>
              <p>Any partial refund will be calculated proportionally based on the remaining value of the unused service.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Cancellation Policy</h3>
              <p>You may cancel your subscription at any time.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations apply to future billing periods only.</li>
                <li>Access to tutoring sessions and learning resources will remain active until the end of the current paid billing period.</li>
                <li>Once a billing cycle has begun, it is considered earned and non-refundable after the 7-day guarantee period.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7. How to Cancel or Request a Refund</h3>
              <p>All cancellation or refund requests must be submitted in writing.</p>
              <p>You can contact us via WhatsApp or SMS: +44 7344 193804.</p>
              <p>Your request should include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The student's full name.</li>
                <li>The email address or phone number used during registration.</li>
                <li>A clear request to cancel or request a refund.</li>
              </ul>
              <p>Our support team will review and respond to requests as quickly as possible.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Immediate Access to Digital Services</h3>
              <p>Access to MySchola's digital platform, tutoring sessions, recordings, and learning resources is typically provided within minutes of successful payment.</p>
              <p>By accessing the service immediately, you acknowledge that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Digital educational services begin immediately after purchase.</li>
                <li>Your subscription is considered active once access has been granted.</li>
              </ul>
              <p>This does not affect your statutory rights or the 7-day money-back guarantee, but it helps prevent misuse of the refund policy.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Abuse of the Refund Policy</h3>
              <p>To ensure fairness for all students and families, MySchola reserves the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refuse refund requests where there is evidence of repeated or abusive refund behaviour.</li>
                <li>Suspend or terminate accounts in cases of misuse, fraudulent activity, or bad-faith use of the service.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to This Policy</h3>
              <p>MySchola may update this Refund & Cancellation Policy from time to time.</p>
              <p>The most current version will always be available on our website.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Contact</h3>
              <p>MySchola</p>
              <p>For support, refunds, or cancellations:</p>
              <p>WhatsApp / SMS: +44 7344 193804</p>
            </div>
          </div>
        </div>
      </section>

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
                <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#subjects" className="hover:text-white transition">Subjects</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400" role="list">
                <li><a href="#privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#terms-of-service" className="hover:text-white transition">Refund & Cancellation Policy</a></li>
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


