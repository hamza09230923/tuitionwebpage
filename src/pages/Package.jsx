import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import {
  GraduationCap,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  Check,
  Star,
  ArrowLeft,
  Zap,
} from 'lucide-react'
import testimonialVideo1 from '../testimonials/testimonial1-5gwMtUAO.mp4'
import testimonialVideo2 from '../testimonials/testimonial2.mp4'
import testimonialVideo3 from '../testimonials/testmonial3.mp4'
import testimonialVideo4 from '../testimonials/testimonial4.mp4'
import testimonialVideo5 from '../testimonials/testimonial5.mp4'

function trackLeadWhatsApp() {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-11111111111/lead_whatsapp_QQQ',
    })
  }
  if (window.fbq) {
    window.fbq('track', 'Lead', { content_name: 'WhatsApp Contact' })
  }
}

function trackLeadConsultation() {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-11111111111/lead_consultation_RRR',
    })
  }
  if (window.fbq) {
    window.fbq('track', 'Lead', { content_name: 'Book Consultation' })
  }
}

function TestimonialVideo({ src, className = '' }) {
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

const testimonialVideos = [
  { src: testimonialVideo5, id: 5, name: 'Labib', subjects: ['English Literature'], improvedBy: 3 },
  { src: testimonialVideo4, id: 4, name: 'Mia', subjects: ['English Literature'], improvedBy: 3 },
  { src: testimonialVideo3, id: 3, name: 'Eyaad', subjects: ['Physics'], improvedBy: 2 },
  { src: testimonialVideo2, id: 2, name: 'Atiya', subjects: ['Maths', 'English Literature'], improvedBy: 2 },
  { src: testimonialVideo1, id: 1, name: 'Nihal', subjects: ['Maths', 'English Literature'], improvedBy: 1 }
]

function Package() {
  const [searchParams] = useSearchParams()
  const year = searchParams.get('year') || '9'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(5)
  const [carouselTransitionEnabled, setCarouselTransitionEnabled] = useState(true)
  const [visibleTestimonialCount, setVisibleTestimonialCount] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 768) return 2
      return 1
    }
    return 1
  })
  const [selectedYear, setSelectedYear] = useState(year)
  const totalTestimonialVideos = testimonialVideos.length
  const loopedTestimonialVideos = [...testimonialVideos, ...testimonialVideos, ...testimonialVideos]
  const loopStartIndex = totalTestimonialVideos
  const loopEndIndex = totalTestimonialVideos * 2

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
    const interval = setInterval(() => {
      setActiveTestimonialIndex((prev) => {
        const next = prev + 1
        if (next > loopEndIndex) {
          setCarouselTransitionEnabled(false)
          setTimeout(() => {
            setCarouselTransitionEnabled(true)
          }, 50)
          return loopStartIndex
        }
        return next
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [loopEndIndex, loopStartIndex])

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

  const getMathsScienceEnglishLink = () => {
    switch (year) {
      case '9':
        return 'https://buy.stripe.com/6oU14o8JV24Aggr6PbcjS19'
      case '10':
        return 'https://buy.stripe.com/7sY6oIf8j10we8jflHcjS1a'
      case '11':
        return 'https://buy.stripe.com/fZu5kE0dp6kQfcn0qNcjS1b'
      default:
        return 'https://buy.stripe.com/6oU14o8JV24Aggr6PbcjS19'
    }
  }

  const getMathsEnglishLink = () => {
    switch (year) {
      case '9':
        return 'https://buy.stripe.com/eVq3cw6BN4cI3tF7TfcjS16'
      case '10':
        return 'https://buy.stripe.com/5kQ5kE2lx8sY6FR3CZcjS17'
      case '11':
        return 'https://buy.stripe.com/6oUaEY9NZ38Efcn4H3cjS18'
      default:
        return 'https://buy.stripe.com/eVq3cw6BN4cI3tF7TfcjS16'
    }
  }

  const getEnglishScienceLink = () => {
    switch (year) {
      case '9':
        return 'https://buy.stripe.com/dRm14of8jcJec0bgpLcjS12'
      case '10':
        return 'https://buy.stripe.com/14A7sM4tFeRme8j3CZcjS14'
      case '11':
        return 'https://buy.stripe.com/14A28sd0b24A4xJ0qNcjS15'
      default:
        return 'https://buy.stripe.com/dRm14of8jcJec0bgpLcjS12'
    }
  }

  const getScienceMathsLink = () => {
    switch (year) {
      case '9':
        return 'https://buy.stripe.com/00w28s3pB7oU7JVehDcjS0l'
      case '10':
        return 'https://buy.stripe.com/14A6oId0bbFa8NZ0qNcjS0m'
      case '11':
        return 'https://buy.stripe.com/28EfZi7FR9x27JV1uRcjS0n'
      default:
        return 'https://buy.stripe.com/00w28s3pB7oU7JVehDcjS0l'
    }
  }

  const getScienceLink = () => {
    switch (year) {
      case '9':
        return 'https://buy.stripe.com/bJe28sgcn6kQfcn0qNcjS1i'
      case '10':
        return 'https://buy.stripe.com/9B65kE9NZgZu7JVb5rcjS1k'
      case '11':
        return 'https://buy.stripe.com/aFabJ2gcnaB63tFehDcjS1j'
      default:
        return 'https://buy.stripe.com/bJe28sgcn6kQfcn0qNcjS1i'
    }
  }

  const getEnglishOnlyLink = () => {
    switch (year) {
      case '9':
        return 'https://buy.stripe.com/14AcN6bW74cI9S36PbcjS1o'
      case '10':
        return 'https://buy.stripe.com/9B6aEY5xJcJe3tFddzcjS1p'
      case '11':
        return 'https://buy.stripe.com/fZu9AUd0b7oUe8j6PbcjS1q'
      default:
        return 'https://buy.stripe.com/14AcN6bW74cI9S36PbcjS1o'
    }
  }

  const getMathsOnlyLink = () => {
    switch (year) {
      case '9':
        return 'https://buy.stripe.com/8x24gAbW7bFad4fb5rcjS1l'
      case '10':
        return 'https://buy.stripe.com/9B6aEY6BN9x26FR4H3cjS1m'
      case '11':
        return 'https://buy.stripe.com/5kQ3cw2lx4cId4fc9vcjS1n'
      default:
        return 'https://buy.stripe.com/8x24gAbW7bFad4fb5rcjS1l'
    }
  }

  const getMathsScienceLink = () => {
    switch (year) {
      case '9':
        return 'https://buy.stripe.com/dRmaEY5xJ10w8NZ6PbcjS1c'
      case '10':
        return 'https://buy.stripe.com/dRm5kEbW76kQ1lx3CZcjS1d'
      case '11':
        return 'https://buy.stripe.com/28E6oI2lxeRmd4fgpLcjS1e'
      default:
        return 'https://buy.stripe.com/dRmaEY5xJ10w8NZ6PbcjS1c'
    }
  }

  const getChemistryLink = () => {
    switch (year) {
      case '9':
        return 'https://buy.stripe.com/3cIcN67FR8sY1lx8XjcjS1x'
      case '10':
        return 'https://buy.stripe.com/cNi3cwgcn9x2d4f6PbcjS1y'
      case '11':
        return 'https://buy.stripe.com/4gM7sM3pB24Aggr1uRcjS1z'
      default:
        return 'https://buy.stripe.com/3cIcN67FR8sY1lx8XjcjS1x'
    }
  }

  const getPhysicsLink = () => {
    switch (year) {
      case '9':
        return 'https://buy.stripe.com/28E28s2lx9x24xJb5rcjS1u'
      case '10':
        return 'https://buy.stripe.com/fZu7sMe4faB6aW7gpLcjS1v'
      case '11':
        return 'https://buy.stripe.com/00w9AUgcn8sYfcn7TfcjS1w'
      default:
        return 'https://buy.stripe.com/28E28s2lx9x24xJb5rcjS1u'
    }
  }

  const getBiologyLink = () => {
    switch (year) {
      case '9':
        return 'https://buy.stripe.com/5kQ3cwgcn9x2e8j0qNcjS1r'
      case '10':
        return 'https://buy.stripe.com/dRm9AUbW7fVqc0b0qNcjS1s'
      case '11':
        return 'https://buy.stripe.com/3cI3cw6BN10w2pBehDcjS1t'
      default:
        return 'https://buy.stripe.com/5kQ3cwgcn9x2e8j0qNcjS1r'
    }
  }

  const handleBundleCheckout = (bundleType) => {
    switch (bundleType) {
      case 'maths-science-english':
        window.location.href = getMathsScienceEnglishLink()
        break
      case 'maths-english':
        window.location.href = getMathsEnglishLink()
        break
      case 'english-science':
        window.location.href = getEnglishScienceLink()
        break
      case 'science-maths':
        window.location.href = getScienceMathsLink()
        break
      case 'maths-science':
        window.location.href = getMathsScienceLink()
        break
      case 'crash-course':
        window.location.href = 'https://buy.stripe.com/00w6oI3pB6kQe8j0qNcjS1D'
        break
      case 'english-science-crash':
        window.location.href = 'https://buy.stripe.com/28EaEY6BN7oU9S3gpLcjS1E'
        break
      default:
        openCalendlyPopup()
    }
  }

  const getTestPackageLink = () => {
    // £1 Test Package Stripe Link
    return 'https://buy.stripe.com/8x28wQe4faB63tF1uRcjS1g'
  }

  const handleIndividualCheckout = (subjectType) => {
    switch (subjectType) {
      case 'science':
        window.location.href = getScienceLink()
        break
      case 'english-only':
        window.location.href = getEnglishOnlyLink()
        break
      case 'maths-only':
        window.location.href = getMathsOnlyLink()
        break
      case 'chemistry':
        window.location.href = getChemistryLink()
        break
      case 'physics':
        window.location.href = getPhysicsLink()
        break
      case 'biology':
        window.location.href = getBiologyLink()
        break
      default:
        openCalendlyPopup()
    }
  }

  const openCalendlyWidget = () => {
    const calendlyUrl = 'https://calendly.com/admin-myschola/30min'

    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: calendlyUrl,
        text: 'Book Free Consultation',
        color: '#2563eb',
        textColor: '#ffffff',
        branding: true
      })
    } else {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: calendlyUrl,
            text: 'Book Free Consultation',
            color: '#2563eb',
            textColor: '#ffffff',
            branding: true
          })
        }
      }
      document.body.appendChild(script)
    }
  }

  const openCalendlyPopup = () => {
    trackLeadConsultation()
    navigate('/booking')
    openCalendlyWidget()
  }

  const bundles = [
    {
      id: 'maths-science',
      name: 'Maths + Science',
      subjects: 'Mathematics & Science',
      price: '£128',
      originalPrice: '£150',
      savingsPercent: '15%',
      perLesson: '~£8 per hour',
      period: '/month',
      billing: 'Billed monthly after 7-day free trial',
      trialDays: 7,
      features: [
        '16 lessons per month',
        '1-1 Strategy Call',
        'Unlimited Platform Access',
        'Assessments',
        'Exam Mastermind Lessons',
        'Detailed feedback',
        'Covers Bio, Chem & Phys',
      ],
    },
    {
      id: 'maths-science-english',
      name: 'Maths + Science + English',
      subjects: 'Mathematics, Science & English',
      price: '£168',
      originalPrice: '£220',
      savingsPercent: '24%',
      perLesson: '~£7 per hour',
      period: '/month',
      billing: 'Billed monthly after 7-day free trial',
      trialDays: 7,
      popular: true,
      features: [
        '24 lessons per month',
        '1-1 Strategy Call',
        'Unlimited Platform Access',
        'Assessments',
        'Exam Mastermind Lessons',
        'Detailed feedback',
        'Covers Bio, Chem & Phys',
        'Covers Lit & Lang',
        'Crash Course is included',
      ],
    },
    {
      id: 'maths-english',
      name: 'Maths + English',
      subjects: 'Mathematics & English',
      price: '£96',
      originalPrice: '£125',
      savingsPercent: '23%',
      perLesson: '~£8 per hour',
      period: '/month',
      billing: 'Billed monthly after 7-day free trial',
      trialDays: 7,
      features: [
        '12 lessons per month',
        '1-1 Strategy Call',
        'Unlimited Platform Access',
        'Assessments',
        'Exam Mastermind Lessons',
        'Detailed feedback',
        'Covers Lit & Lang',
      ],
    },
    {
      id: 'english-science',
      name: 'English + Science',
      subjects: 'English & Science',
      price: '£160',
      originalPrice: '£175',
      savingsPercent: '9%',
      perLesson: '~£8 per hour',
      period: '/month',
      billing: 'Billed monthly after 7-day free trial',
      trialDays: 7,
      features: [
        '20 lessons per month',
        '1-1 Strategy Call',
        'Unlimited Platform Access',
        'Assessments',
        'Exam Mastermind Lessons',
        'Detailed feedback',
        'Covers Lit & Lang',
        'Covers Bio, Chem & Phys',
      ],
    },
    {
      id: 'crash-course',
      name: 'Year 11 Crash Course',
      subjects: 'Intensive Exam Preparation',
      price: '£209.99',
      originalPrice: 'Last year was £455',
      savingsPercent: '54%',
      perLesson: '2 instalments of £104.99 every 2 weeks',
      period: '',
      billing: '7-day risk-free trial • First lesson free • Cancel before day 8',
      features: [
        '21 hours teaching total',
        'Combined Science (Biology, Chemistry, Physics), Mathematics & English included',
        '1-1 Strategy Call',
        'Unlimited Platform Access',
        'Assessments',
        'Exam Mastermind Lessons',
        'Detailed feedback',
        'Intensive Exam Prep',
      ],
    },
    {
      id: 'english-science-crash',
      name: 'English & Science Crash Course Year 11',
      subjects: 'English & Science Intensive Prep',
      price: '£149.99',
      originalPrice: '£254',
      savingsPercent: '41%',
      perLesson: '2 instalments of £74.99 every 2 weeks',
      period: '',
      billing: '7-day risk-free trial • First lesson free • Cancel before day 8',
      features: [
        '15 hours teaching total',
        'Combined Science & English Literature and Language covered',
        '1-1 Strategy Call',
        'Unlimited Platform Access',
        'Assessments',
        'Exam Mastermind Lessons',
        'Detailed feedback',
        'Intensive Exam Prep',
      ],
    },
  ]

  const individualPricing = [
    {
      id: 'science',
      name: 'Science',
      subjects: 'Science (Bio, Chem, Phys)',
      price: '£107.99',
      perLesson: '~£9 per lesson',
      period: '/month',
      billing: 'Billed monthly after 7-day free trial',
      trialDays: 7,
      features: [
        '12 lessons per month',
        '1-1 Strategy Call',
        'Unlimited Platform Access',
        'Assessments',
        'Exam Mastermind Lessons',
        'Detailed feedback',
        'Covers Bio, Chem & Phys',
      ],
    },
    {
      id: 'english-only',
      name: 'English Only',
      subjects: 'English Language & Literature',
      price: '£79.99',
      perLesson: '~£10 per lesson',
      period: '/month',
      billing: 'Billed monthly after 7-day free trial',
      trialDays: 7,
      features: [
        '8 lessons per month',
        '1-1 Strategy Call',
        'Unlimited Platform Access',
        'Assessments',
        'Exam Mastermind Lessons',
        'Detailed feedback',
        'Covers Lit & Lang',
      ],
    },
    {
      id: 'maths-only',
      name: 'Maths Only',
      subjects: 'Mathematics',
      price: '£59.99',
      perLesson: '~£15 per lesson',
      period: '/month',
      billing: 'Billed monthly after 7-day free trial',
      trialDays: 7,
      features: [
        '4 lessons per month',
        '1-1 Strategy Call',
        'Unlimited Platform Access',
        'Assessments',
        'Exam Mastermind Lessons',
        'Detailed feedback',
      ],
    },
    {
      id: 'chemistry',
      name: 'Science - Chemistry',
      subjects: 'Chemistry Only',
      price: '£59.99',
      perLesson: '~£15 per lesson',
      period: '/month',
      billing: 'Billed monthly after 7-day free trial',
      trialDays: 7,
      features: [
        '4 lessons per month',
        '1-1 Strategy Call',
        'Unlimited Platform Access',
        'Assessments',
        'Exam Mastermind Lessons',
        'Detailed feedback',
        'Covers only Chemistry',
      ],
    },
    {
      id: 'physics',
      name: 'Science - Physics',
      subjects: 'Physics Only',
      price: '£59.99',
      perLesson: '~£15 per lesson',
      period: '/month',
      billing: 'Billed monthly after 7-day free trial',
      trialDays: 7,
      features: [
        '4 lessons per month',
        '1-1 Strategy Call',
        'Unlimited Platform Access',
        'Assessments',
        'Exam Mastermind Lessons',
        'Detailed feedback',
        'Covers only Physics',
      ],
    },
    {
      id: 'biology',
      name: 'Science - Biology',
      subjects: 'Biology Only',
      price: '£59.99',
      perLesson: '~£15 per lesson',
      period: '/month',
      billing: 'Billed monthly after 7-day free trial',
      trialDays: 7,
      features: [
        '4 lessons per month',
        '1-1 Strategy Call',
        'Unlimited Platform Access',
        'Assessments',
        'Exam Mastermind Lessons',
        'Detailed feedback',
        'Covers only Biology',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg">
        Skip to main content
      </a>

      {/* Cohort Banner */}
      <div className="w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md">
        <span className="inline-flex items-center gap-2 animate-pulse">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Now Enrolling for New Cohort — Limited Spaces Available
        </span>
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
                <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                <a href="/#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
                <a href="/#subjects" className="text-gray-700 hover:text-blue-600 transition">Subjects</a>
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
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t" role="menu" aria-label="Mobile navigation menu">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Home</a>
              <a href="/#how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">How It Works</a>
              <a href="/#subjects" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Subjects</a>
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
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100" aria-label="Package hero section">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-4">
              Year {year} Course
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Choose Your <span className="text-blue-600">Learning Package</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Flexible pricing options tailored for Year {year} students. All packages include expert tutoring, detailed feedback, and exam preparation.
            </p>
            <p className="text-base text-green-600 font-medium mb-8 max-w-2xl mx-auto">
              7-day risk-free trial includes your first lesson free. Continue only if you're happy — cancel anytime before day 8.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Year Selection
            </Link>
          </div>
        </section>

        {/* Bundle Packages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="bundles-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="bundles-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              Bundle Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {bundles.filter(bundle => (bundle.id !== 'crash-course' && bundle.id !== 'english-science-crash') || selectedYear === '11').map((bundle, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${
                    bundle.popular
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl scale-105'
                      : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-blue-400'
                  } transition-all duration-300`}
                >
                  {bundle.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-1 ${bundle.popular ? 'text-white' : 'text-gray-900'}`}>
                    {bundle.name}
                  </h3>
                  <p className={`text-sm mb-4 ${bundle.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    {bundle.subjects}
                  </p>
                  
            {bundle.trialDays && (
                    <div className={`rounded-md px-3 py-2 mb-3 text-xs ${bundle.popular ? 'bg-green-500/20 text-green-100' : 'bg-green-50 text-green-700'}`}>
                      <span className="font-medium">7-day risk-free trial</span>
                      <span className="opacity-75 ml-1">• First lesson free • Cancel before day 8</span>
                    </div>
                  )}
                  {bundle.id === 'maths-science-english' && (
                    <div className={`rounded-xl p-4 mb-4 text-center relative overflow-hidden ${bundle.popular ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-2 border-green-400/50' : 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300'}`}>
                      <div className="relative z-10">
                        <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${bundle.popular ? 'text-green-300' : 'text-green-700'}`}>
                          Includes Year 11
                        </p>
                        <p className={`text-lg font-extrabold uppercase mb-1 ${bundle.popular ? 'text-white' : 'text-gray-900'}`}>
                          Crash Course
                        </p>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${bundle.popular ? 'bg-green-500 text-white' : 'bg-green-600 text-white'}`}>
                          <Zap className="h-3 w-3" />
                          Starts from April
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-2">
                    <span className={`text-4xl font-extrabold ${bundle.popular ? 'text-white' : 'text-gray-900'}`}>
                      {bundle.price}
                    </span>
                    <span className={`text-lg ${bundle.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                      {bundle.period}
                    </span>
                  </div>
                  {bundle.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      {bundle.originalPrice.startsWith('Last year') ? (
                        <span className={`text-sm ${bundle.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                          Last year was <span className={`line-through ${bundle.popular ? 'text-blue-200' : 'text-gray-400'}`}>{bundle.id === 'crash-course' ? '£455' : '£249'}</span>
                        </span>
                      ) : (
                        <span className={`text-sm line-through ${bundle.popular ? 'text-blue-200' : 'text-gray-400'}`}>
                          {bundle.originalPrice}
                        </span>
                      )}
                      <span className="text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded">
                        SAVE {bundle.savingsPercent}
                      </span>
                    </div>
                  )}
                  {bundle.perLesson && (
                    <div className={`text-sm font-bold mb-2 ${bundle.popular ? 'text-green-300' : 'text-green-600'}`}>
                      {bundle.perLesson}
                    </div>
                  )}
                  <p className={`text-sm mb-4 ${bundle.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    {bundle.billing}
                  </p>
                  <ul className="space-y-3 mb-4 flex-grow">
                    {bundle.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${bundle.popular ? 'text-green-300' : 'text-green-500'}`} />
                        <span className={`text-sm ${bundle.popular ? 'text-blue-50' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Crash Course Badge removed */}
                  <button
                    type="button"
                    onClick={() => handleBundleCheckout(bundle.id)}
                    className="w-full py-3 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px] touch-manipulation bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600"
                  >
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="individual-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="individual-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              Individual Subject Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {individualPricing.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 flex flex-col"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{item.subjects}</p>
                  
                  {item.trialDays && (
                    <div className="rounded-md px-3 py-2 mb-3 text-xs bg-green-50 text-green-700">
                      <span className="font-medium">7-day risk-free trial</span>
                      <span className="opacity-75 ml-1">• First lesson free • Cancel before day 8</span>
                    </div>
                  )}
                  
                  <div className="mb-2">
                    <span className="text-4xl font-extrabold text-gray-900">{item.price}</span>
                    <span className="text-lg text-gray-500">{item.period}</span>
                  </div>
                  {item.perLesson && (
                    <div className="text-sm font-bold text-green-600 mb-2">
                      {item.perLesson}
                    </div>
                  )}
                  <p className="text-sm text-gray-500 mb-6">{item.billing}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {item.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => item.id ? handleIndividualCheckout(item.id) : openCalendlyPopup}
                    className="w-full py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation"
                  >
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="testimonials-heading">
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
                <li><a href="/#privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/#terms-of-service" className="hover:text-white transition">Refund & Cancellation Policy</a></li>
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
                    onClick={openCalendlyPopup}
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

export default Package
