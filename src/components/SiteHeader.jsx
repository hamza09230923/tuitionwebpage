/* eslint-disable react/prop-types */
import { GraduationCap, Menu, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { trackLeadWhatsApp } from '../utils/metaPixel'
import { getCohortMonth } from '../utils/cohortMonth'

function SiteHeader({ activePath = '' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const links = [
    ['/', 'Home'],
    ['/#how-it-works', 'How It Works'],
    ['/#subjects', 'Subjects'],
    ['/#testimonials', 'Testimonials'],
    ['/faqs', 'FAQ']
  ]

  return (
    <>
      <div className="cohort-banner">
        Join our {getCohortMonth()} cohort as soon as possible - spaces are running out!
      </div>
      <nav className="site-nav sticky top-0 z-50" role="navigation" aria-label="Main navigation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="site-nav-inner">
            <Link to="/" className="site-brand"><GraduationCap aria-hidden="true" /><span>MySchola</span></Link>
            <div className="nav-links hidden md:flex"><div>
              {links.map(([href, label]) => href.startsWith('/#') ? <a key={label} href={href}>{label}</a> : <Link key={label} to={href} className={activePath === href ? 'active' : ''}>{label}</Link>)}
            </div></div>
            <div className="nav-actions"><div className="hidden md:flex">
              <Link to="/login" className="nav-login">Log In</Link>
              <a href="https://wa.me/447344193804" target="_blank" rel="noopener noreferrer" onClick={trackLeadWhatsApp} className="nav-whatsapp"><MessageCircle aria-hidden="true" />Contact Us</a>
            </div><button type="button" className="rounded p-2 md:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button></div>
          </div>
        </div>
        {mobileMenuOpen && <div className="mobile-menu md:hidden"><div>
          {links.map(([href, label]) => href.startsWith('/#') ? <a key={label} href={href} onClick={() => setMobileMenuOpen(false)}>{label}</a> : <Link key={label} to={href} onClick={() => setMobileMenuOpen(false)}>{label}</Link>)}
          <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="nav-login">Log In</Link>
          <a href="https://wa.me/447344193804" target="_blank" rel="noopener noreferrer" onClick={trackLeadWhatsApp} className="nav-whatsapp">Contact Us</a>
        </div></div>}
      </nav>
    </>
  )
}

export default SiteHeader
