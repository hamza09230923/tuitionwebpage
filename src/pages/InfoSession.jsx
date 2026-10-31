/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'
import benefitsComparisonGraphic from '../assets/checklist.jpeg'
import parentTestimonialVideo from '../testimonials/parentTestimonial.MP4'
import studentTestimonialVideo from '../testimonials/studentTestimonial.MP4'
import testimonialVideo3 from '../testimonials/testmonial3.mp4'
import testimonialVideo4 from '../testimonials/testimonial4.mp4'
import testimonialVideo5 from '../testimonials/testimonial5.mp4'
import parentTestimonialPoster from '../testimonials/posters/parent-testimonial.jpg'
import studentTestimonialPoster from '../testimonials/posters/student-testimonial.jpg'
import testimonialPoster3 from '../testimonials/posters/testimonial-3.jpg'
import testimonialPoster4 from '../testimonials/posters/testimonial-4.jpg'
import testimonialPoster5 from '../testimonials/posters/testimonial-5.jpg'
import './InfoSession.css'

const TALLY_FORM_ID = import.meta.env.VITE_TALLY_INFO_SESSION_FORM_ID || 'WJ2E8k'
const PAGE_URL = 'https://myschola.uk/info-session'
const PAGE_TITLE = 'Book Your GCSE Trial Lesson | MySchola'
const PAGE_DESCRIPTION = 'Book a free GCSE trial lesson to see how MySchola can help your child build confidence and improve grades.'

const videoTestimonials = [
  { src: studentTestimonialVideo, poster: studentTestimonialPoster, label: 'Student testimonial', caption: 'What learning with MySchola feels like' },
  { src: testimonialVideo5, poster: testimonialPoster5, label: 'Labib', caption: 'English Literature progress' },
  { src: testimonialVideo4, poster: testimonialPoster4, label: 'Mia', caption: 'English Literature progress' },
  { src: testimonialVideo3, poster: testimonialPoster3, label: 'Eyaad', caption: 'Physics progress' },
]

function BookingButton({ children, className = '', onOpen }) {
  return <button type="button" className={`info-session-button ${className}`} onClick={TALLY_FORM_ID ? undefined : onOpen} data-tally-open={TALLY_FORM_ID} data-tally-layout="modal" data-tally-width="500" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-form-events-forwarding="1">{children}<ArrowRight size={18} aria-hidden="true" /></button>
}

function InfoSession() {
  const tallyTriggerRef = useRef(null)
  const [showFloatingBooking, setShowFloatingBooking] = useState(false)

  useEffect(() => {
    const previous = {
      title: document.title,
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
      ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
      ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content') || '',
    }
    const description = document.querySelector('meta[name="description"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    const canonical = document.querySelector('link[rel="canonical"]')
    document.title = PAGE_TITLE
    description?.setAttribute('content', PAGE_DESCRIPTION)
    ogTitle?.setAttribute('content', PAGE_TITLE)
    ogDescription?.setAttribute('content', PAGE_DESCRIPTION)
    ogUrl?.setAttribute('content', PAGE_URL)
    canonical?.setAttribute('href', PAGE_URL)

    return () => {
      document.title = previous.title
      if (description) description.setAttribute('content', previous.description)
      if (ogTitle) ogTitle.setAttribute('content', previous.ogTitle)
      if (ogDescription) ogDescription.setAttribute('content', previous.ogDescription)
      if (ogUrl) ogUrl.setAttribute('content', previous.ogUrl)
      if (canonical) canonical.setAttribute('href', previous.canonical)
    }
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => tallyTriggerRef.current?.click(), 4500)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const updateFloatingBooking = () => setShowFloatingBooking(window.scrollY > 480)
    updateFloatingBooking()
    window.addEventListener('scroll', updateFloatingBooking, { passive: true })
    return () => window.removeEventListener('scroll', updateFloatingBooking)
  }, [])

  const openBooking = () => {
    if (TALLY_FORM_ID) {
      tallyTriggerRef.current?.click()
      return
    }
    window.location.href = '/booking'
  }

  return <div className="info-session-page">
    <button ref={tallyTriggerRef} type="button" className="info-session-tally-trigger" data-tally-open={TALLY_FORM_ID} data-tally-layout="modal" data-tally-width="500" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-form-events-forwarding="1" aria-hidden="true" tabIndex={-1} />

    <header className="info-session-header">
      <Link to="/" className="info-session-brand" aria-label="MySchola home"><img src="/myschola-logo.png" alt="MySchola" /></Link>
      <span className="info-session-header-note">Book your GCSE trial lesson</span>
    </header>

    <main>
      <section className="info-session-hero">
        <div className="info-session-hero-inner">
          <div className="info-session-hero-copy">
            <span className="info-session-eyebrow">For parents of Year 9, 10 &amp; 11 students</span>
            <h1>A clearer route to stronger GCSE grades.</h1>
            <p>Tell us where your child is now. We will listen, answer your questions and explain the most suitable next step.</p>
            <BookingButton className="hero-booking-button" onOpen={openBooking}>Book your Trial Lesson</BookingButton>
          </div>
          <div className="info-session-hero-video" aria-label="Parent testimonial video">
            <div className="hero-video-top"><span>REAL FAMILY EXPERIENCE</span><b>Parent testimonial</b></div>
            <div className="hero-video-frame">
              <video controls playsInline preload="metadata" poster={parentTestimonialPoster}>
                <source src={parentTestimonialVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="info-session-proof-grid" aria-label="MySchola benefits">
          <div><strong>Clear grade improvement</strong><span>in 1 month</span></div>
          <div><strong>80% cheaper</strong><span>than private tutoring</span></div>
          <div><strong>Expert teachers</strong><span>for Maths, English &amp; Science</span></div>
        </div>
      </section>

      <section className="info-session-videos section-light">
        <div className="info-session-narrow-intro info-session-narrow-intro-centered">
          <span className="section-kicker">REAL FAMILY EXPERIENCES</span>
          <h2>Hear from students and parents.</h2>
        </div>
        <div className="info-session-video-grid">
          {videoTestimonials.map((video) => <article className="info-session-video-card" key={video.label} aria-label={video.label}>
            <div className="video-frame"><video controls playsInline preload="metadata" poster={video.poster}><source src={video.src} type="video/mp4" />Your browser does not support the video tag.</video></div>
          </article>)}
        </div>
        <div className="info-session-inline-cta info-session-inline-cta-centered">
          <div>
            <span className="section-kicker">TAKE THE NEXT STEP</span>
            <h3>Let&apos;s talk about what your child needs.</h3>
          </div>
          <BookingButton onOpen={openBooking}>Book your Trial Lesson</BookingButton>
        </div>
      </section>

      <section className="info-session-comparison section-light">
        <div className="info-session-narrow-intro">
          <span className="section-kicker">WHY PARENTS CHOOSE MYSCHOLA</span>
          <h2>Consistent support that can lead to real progress.</h2>
          <p>Many of our students have improved by two or more grades after consistent lessons, homework and exam practice. Individual results vary, but regular attendance and active practice give students a clearer route forward.</p>
        </div>
        <figure className="comparison-figure"><img src={benefitsComparisonGraphic} alt="Comparison of MySchola benefits with other providers and one-to-one home tutors" /><figcaption>What is included in the MySchola support system.</figcaption></figure>
        <div className="info-session-inline-cta">
          <div>
            <span className="section-kicker">READY WHEN YOU ARE</span>
            <h3>Give your child a clearer next step.</h3>
          </div>
          <BookingButton onOpen={openBooking}>Book your Trial Lesson</BookingButton>
        </div>
      </section>

      <section className="info-session-system">
        <div className="info-session-system-head"><span className="section-kicker">HOW MYSCHOLA WORKS</span><h2>A simple system that keeps progress moving.</h2></div>
        <div className="system-flow">
          <article><span>01</span><strong>Assess</strong><small>Find the gaps.</small></article>
          <article><span>02</span><strong>Teach live</strong><small>Build understanding.</small></article>
          <article><span>03</span><strong>Practise</strong><small>Turn learning into marks.</small></article>
          <article><span>04</span><strong>Track</strong><small>Keep parents informed.</small></article>
        </div>
        <div className="system-parent-view">
          <div className="system-parent-view-heading">
            <div>
              <span className="section-kicker">PARENT VIEW</span>
              <strong>Everything important, at a glance.</strong>
            </div>
            <span className="system-parent-status"><i /> Progress visible</span>
          </div>
          <div className="system-parent-metrics">
            <div><small>Attendance</small><b>Consistent</b><span>Weekly lesson rhythm</span></div>
            <div><small>Homework</small><b>Reviewed</b><span>Feedback that moves learning forward</span></div>
            <div><small>Feedback</small><b>Clear</b><span>Strengths and gaps explained</span></div>
            <div><small>Next steps</small><b>Ready</b><span>A practical focus for the week ahead</span></div>
          </div>
        </div>
        <div className="info-session-system-cta">
          <p>See how the system could support your child.</p>
          <BookingButton onOpen={openBooking}>Book your Trial Lesson</BookingButton>
        </div>
      </section>

    </main>

    <SiteFooter showQuickLinks={false} showBookingLinks={false} />
    {showFloatingBooking && <div className="info-session-floating-cta">
      <BookingButton className="floating-booking-button" onOpen={openBooking}>Book your Trial Lesson</BookingButton>
    </div>}
  </div>
}

export default InfoSession
