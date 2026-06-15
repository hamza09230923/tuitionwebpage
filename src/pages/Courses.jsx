import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Menu, X, GraduationCap, MessageCircle, ArrowRight, ArrowLeft,
  BookOpen, Users, Target, Clock, CheckCircle, PlayCircle, Star,
  Monitor, BarChart3, Award
} from 'lucide-react'
import testimonialVideo1 from '../testimonials/testimonial1-5gwMtUAO.mp4'
import testimonialVideo2 from '../testimonials/testimonial2.mp4'
import testimonialVideo3 from '../testimonials/testmonial3.mp4'
import testimonialVideo4 from '../testimonials/testimonial4.mp4'
import testimonialVideo5 from '../testimonials/testimonial5.mp4'
import { trackLeadConsultation, trackLeadWhatsApp } from '../utils/metaPixel'

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

function Courses() {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedYear, setSelectedYear] = useState(9)
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(2)
  const [carouselTransitionEnabled, setCarouselTransitionEnabled] = useState(true)
  const [visibleTestimonialCount, setVisibleTestimonialCount] = useState(() => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth >= 1280) return 3
    if (window.innerWidth >= 768) return 2
    return 1
  })

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

  const yearContent = {
    9: {
      title: 'Year 9 Foundation Programme',
      subtitle: 'Building Strong Foundations for GCSE Success',
      description: 'Our Year 9 programme focuses on establishing core concepts and developing essential study habits that will carry students through their GCSE journey. We introduce key topics early, giving students a significant head start.',
      focusAreas: [
        'Core concept introduction across all subjects',
        'Developing independent study skills',
        'Building confidence in exam-style questions',
        'Early identification of strengths and improvement areas'
      ],
      subjects: ['Mathematics', 'English Language & Literature', 'Combined Science']
    },
    10: {
      title: 'Year 10 GCSE Preparation',
      subtitle: 'Mastering the GCSE Curriculum',
      description: 'Year 10 is crucial for GCSE preparation. Our programme covers the full breadth of the curriculum while developing exam technique and building the knowledge depth required for top grades.',
      focusAreas: [
        'Comprehensive syllabus coverage',
        'Regular exam-style assessments',
        'Advanced problem-solving techniques',
        'Grade boundary awareness and target setting'
      ],
      subjects: ['Mathematics (Higher & Foundation)', 'English Language & Literature', 'Combined Science', 'Triple Science Options']
    },
    11: {
      title: 'Year 11 GCSE Mastery',
      subtitle: 'Final Push for Exam Excellence',
      description: 'Year 11 is all about refinement and exam readiness. We focus on intensive revision, perfecting exam technique, and addressing any remaining gaps to ensure students achieve their target grades.',
      focusAreas: [
        'Intensive exam technique training',
        'Mock exam analysis and feedback',
        'Targeted revision of weak areas',
        'Confidence building for exam day'
      ],
      subjects: ['Mathematics (Higher & Foundation)', 'English Language & Literature', 'Combined Science', 'Triple Science', 'Exam Mastery Sessions']
    }
  }

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

  const formatImprovement = (improvedBy) => (
    improvedBy === 1 ? 'Improved by 1 grade' : `Improved by ${improvedBy} grades`
  )

  const goToPreviousTestimonial = () => {
    setActiveTestimonialIndex((prev) => prev - 1)
  }

  const goToNextTestimonial = () => {
    setActiveTestimonialIndex((prev) => prev + 1)
  }

  const goToBooking = () => {
    trackLeadConsultation()
    navigate('/booking', { replace: false })
  }

  const [typedText, setTypedText] = useState('')
  const fullText = 'Building Strong Foundations for GCSE Success'
  const typingSpeed = 80

  useEffect(() => {
    let index = 0
    let forward = true
    const timer = setInterval(() => {
      if (forward) {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index))
          index++
        } else {
          forward = false
          setTimeout(() => {}, 2000)
        }
      } else {
        if (index > 0) {
          setTypedText(fullText.slice(0, index))
          index--
        } else {
          forward = true
        }
      }
    }, typingSpeed)
    return () => clearInterval(timer)
  }, [])

  const handleYearClick = (year) => {
    navigate(`/package?year=${year}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg">
        Skip to main content
      </a>

      {/* Cohort Banner */}
      <div className="w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md">
        Join our March cohort as soon as possible — spaces are running out!
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
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
                <Link to="/courses" className="text-blue-600 font-semibold">Courses</Link>
                <a href="/#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
                <a href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</a>
                <a href="/#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
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
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Home</Link>
              <Link to="/courses" className="block px-3 py-2 text-blue-600 font-semibold bg-blue-50" role="menuitem">Courses</Link>
              <a href="/#how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">How It Works</a>
              <a href="/#testimonials" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Testimonials</a>
              <a href="/#faq" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">FAQ</a>
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

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100" aria-label="Courses hero section">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-12 tracking-tight">
              Select your <span className="text-blue-600">year group</span>:
            </h1>

            {/* Year Selector - Big Buttons for Parents */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
              {[9, 10, 11].map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearClick(year)}
                  className="w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 rounded-xl font-bold text-xl sm:text-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-white text-gray-800 border-4 border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl hover:scale-105 active:scale-95 focus:ring-blue-400 cursor-pointer touch-manipulation min-h-[80px] sm:min-h-[90px] flex items-center justify-center"
                  aria-label={`Select Year ${year}`}
                >
                  Year {year}
                </button>
              ))}
            </div>

            {/* Animated Subtitle */}
            <p className="text-lg sm:text-xl text-blue-600 font-medium min-h-[1.75rem]">
              {typedText}<span className="animate-pulse">|</span>
            </p>
          </div>
        </section>

        {/* Course Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="course-content-heading">
          <div className="max-w-7xl mx-auto">

            {/* What's Included */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                What's included
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Feature 1 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                      <Monitor className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Live Online Small Group Lessons</h4>
                      <p className="text-blue-100 leading-relaxed">
                        Our lessons cover the <strong className="text-white">breadth of each topic</strong>, methodically building on key concepts taught by our <strong className="text-white">specialist teachers with at least 8 years of teaching experience</strong>. Each lesson is <strong className="text-white">1 hour long</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Regular Parents Evening</h4>
                      <p className="text-blue-100 leading-relaxed">
                        <strong className="text-white">Regular parents evening information every month</strong> to show progress of the student. We continuously monitor progress to ensure every student keeps pace with the curriculum.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                      <PlayCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Engaging Multimedia Teaching</h4>
                      <p className="text-blue-100 leading-relaxed">
                        During the lesson, concepts are taught using <strong className="text-white">illustration, animation and walkthroughs</strong>. This <strong className="text-white">multi-sensory approach</strong> ensures concepts stick and students remain engaged throughout.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Detailed Exam Technique Training</h4>
                      <p className="text-blue-100 leading-relaxed">
                        We <strong className="text-white">explicitly teach detailed exam technique</strong> in our lessons, going through <strong className="text-white">several questions in each lesson</strong>. Students learn exactly how to <strong className="text-white">structure answers to maximise marks</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto text-center">
            <h2 id="testimonials-heading" className="text-4xl font-bold mb-4 text-gray-900">
              Testimonials from Students
            </h2>
            <p className="text-gray-600 mb-12">Short clips from students, with the subject and grade improvements below.</p>

            <div className="relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={goToPreviousTestimonial}
                className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Previous testimonial videos"
                title="Previous"
              >
                <ArrowLeft className="h-5 w-5" />
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
                className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Next testimonial videos"
                title="Next"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
              <div className="flex items-center justify-between sm:hidden mt-4 px-2">
                <button
                  type="button"
                  onClick={goToPreviousTestimonial}
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  aria-label="Previous testimonial videos"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goToNextTestimonial}
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  aria-label="Next testimonial videos"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
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
                <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                <li><Link to="/courses" className="hover:text-white transition">Courses</Link></li>
                <li><a href="/#how-it-works" className="hover:text-white transition">How It Works</a></li>
                <li><a href="/#testimonials" className="hover:text-white transition">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400" role="list">
                <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link to="/refund-cancellation-policy" className="hover:text-white transition">Refund & Cancellation Policy</Link></li>
                <li><a href="/#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400" role="list">
                <li><a href="mailto:support@myschola.uk" className="hover:text-white transition">support@myschola.uk</a></li>
                <li><a href="tel:+447344193804" className="hover:text-white transition">+44 7344 193804</a></li>
                <li>
                  <a
                    href="https://wa.me/447344193804"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackLeadWhatsApp}
                    className="text-green-400 hover:text-green-300 transition inline-flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
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
            <p>&copy; {new Date().getFullYear()} MySchola. All rights reserved. Tutoring for Years 9-11.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/447344193804"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackLeadWhatsApp}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </div>
  )
}

export default Courses
