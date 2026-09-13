import { GraduationCap, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { trackLeadWhatsApp } from '../utils/metaPixel'

function SiteFooter() {
  return <footer className="bg-gray-900 px-4 py-12 text-white sm:px-6 lg:px-8" role="contentinfo"><div className="mx-auto max-w-7xl"><div className="mb-8 grid gap-8 md:grid-cols-4">
    <div><div className="mb-4 flex items-center"><GraduationCap className="h-8 w-8 text-blue-400" aria-hidden="true" /><span className="ml-2 text-2xl font-bold">MySchola</span></div><p className="text-gray-400">Expert GCSE tutoring for Years 9-11 via Zoom.</p></div>
    <div><h4 className="mb-4 font-semibold">Quick Links</h4><ul className="space-y-2 text-gray-400"><li><Link to="/">Home</Link></li><li><Link to="/courses">GCSE Courses</Link></li><li><Link to="/package">Tuition Package</Link></li><li><Link to="/timetable">Lesson Timetable</Link></li><li><Link to="/careers">Careers</Link></li><li><Link to="/booking">Book a Free Consultation</Link></li></ul></div>
    <div><h4 className="mb-4 font-semibold">Legal</h4><ul className="space-y-2 text-gray-400"><li><Link to="/privacy-policy">Privacy Policy</Link></li><li><Link to="/refund-cancellation-policy">Refund &amp; Cancellation Policy</Link></li><li><Link to="/faqs">FAQ</Link></li></ul></div>
    <div><h4 className="mb-4 font-semibold">Contact</h4><ul className="space-y-2 text-gray-400"><li><a href="mailto:myscholauk@gmail.com">myscholauk@gmail.com</a></li><li><a href="tel:+447344193804">+44 7344 193804</a></li><li><a href="https://wa.me/447344193804" target="_blank" rel="noopener noreferrer" onClick={trackLeadWhatsApp} className="inline-flex items-center gap-2 text-green-400"><MessageCircle className="h-4 w-4" aria-hidden="true" />Contact Us on WhatsApp</a></li></ul></div>
  </div><div className="border-t border-gray-800 pt-8 text-center text-gray-400"><p>© {new Date().getFullYear()} MySchola. All rights reserved. Tutoring for Years 9-11.</p></div></div></footer>
}

export default SiteFooter
