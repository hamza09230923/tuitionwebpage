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
    ['/faqs', 'FAQ'],
    ['/careers', 'Careers']
  ]

  return (
    <>
      <div className="w-full bg-[#0B3D91] px-4 py-3 text-center text-sm font-bold text-white shadow-md sm:text-base md:text-lg">
        Join our {getCohortMonth()} cohort as soon as possible - spaces are running out!
      </div>
      <nav className="sticky top-0 z-50 bg-white shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
            <Link to="/" className="flex items-center"><GraduationCap className="h-8 w-8 text-blue-600" aria-hidden="true" /><span className="ml-2 text-2xl font-bold text-gray-900">MySchola</span></Link>
            <div className="hidden justify-center md:flex"><div className="flex items-center space-x-8 text-base font-medium">
              {links.map(([href, label]) => href.startsWith('/#') ? <a key={label} href={href} className="text-gray-700 transition hover:text-blue-600">{label}</a> : <Link key={label} to={href} className={activePath === href ? 'font-semibold text-blue-600' : 'text-gray-700 transition hover:text-blue-600'}>{label}</Link>)}
            </div></div>
            <div className="flex justify-end"><div className="hidden items-center space-x-4 md:flex">
              <Link to="/login" className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700">Log In</Link>
              <a href="https://wa.me/447344193804" target="_blank" rel="noopener noreferrer" onClick={trackLeadWhatsApp} className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-2 text-white transition hover:bg-green-600"><MessageCircle className="h-5 w-5" aria-hidden="true" />Contact Us</a>
            </div><button type="button" className="rounded p-2 md:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button></div>
          </div>
        </div>
        {mobileMenuOpen && <div className="border-t bg-white md:hidden"><div className="space-y-1 px-4 pb-3 pt-2">
          {links.map(([href, label]) => href.startsWith('/#') ? <a key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50">{label}</a> : <Link key={label} to={href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50">{label}</Link>)}
          <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg bg-blue-600 px-3 py-2 text-center text-white">Log In</Link>
          <a href="https://wa.me/447344193804" target="_blank" rel="noopener noreferrer" onClick={trackLeadWhatsApp} className="block rounded-lg bg-green-500 px-3 py-2 text-center text-white">Contact Us</a>
        </div></div>}
      </nav>
    </>
  )
}

export default SiteHeader
