import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, GraduationCap } from 'lucide-react'
import { trackLeadConsultation, trackStartTrial } from '../utils/metaPixel'

function Booking() {
  useEffect(() => {
    // Track the booking page view
    trackLeadConsultation()
    trackStartTrial()
    
    // Open Calendly popup when page loads
    const calendlyUrl = 'https://calendly.com/admin-myschola/30min'
    
    const openCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: calendlyUrl })
      } else {
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        script.onload = () => {
          if (window.Calendly) {
            window.Calendly.initPopupWidget({ url: calendlyUrl })
          }
        }
        document.body.appendChild(script)
        setTimeout(() => {
          if (!window.Calendly) {
            window.open(calendlyUrl, '_blank', 'noopener,noreferrer')
          }
        }, 1000)
      }
    }
    
    // Small delay to ensure page is loaded
    const timer = setTimeout(openCalendly, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="h-10 w-10 text-blue-600" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Consultation</h1>
          <p className="text-gray-600 mb-6">
            The booking calendar should open automatically. If it doesn't appear, please click the button below.
          </p>
          <button
            onClick={() => {
              const calendlyUrl = 'https://calendly.com/admin-myschola/30min'
              if (window.Calendly) {
                window.Calendly.initPopupWidget({ url: calendlyUrl })
              } else {
                window.open(calendlyUrl, '_blank', 'noopener,noreferrer')
              }
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 mb-4"
          >
            Open Booking Calendar
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            Back to home
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-500">
          <GraduationCap className="h-5 w-5 text-blue-600" aria-hidden="true" />
          <span className="text-sm">MySchola</span>
        </div>
      </div>
    </div>
  )
}

export default Booking
