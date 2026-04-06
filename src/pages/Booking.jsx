import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, GraduationCap, Loader2 } from 'lucide-react'
import { trackLeadConsultation } from '../utils/metaPixel'

function Booking() {
  const [isLoading, setIsLoading] = useState(true)
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)

  useEffect(() => {
    // Track the booking page view
    trackLeadConsultation()
    
    // Preconnect to Calendly domain for better performance
    const preconnect = document.createElement('link')
    preconnect.rel = 'preconnect'
    preconnect.href = 'https://assets.calendly.com'
    preconnect.crossOrigin = 'anonymous'
    document.head.appendChild(preconnect)
    
    // Open Calendly popup when page loads
    const calendlyUrl = 'https://calendly.com/admin-myschola/30min'
    
    const openCalendly = () => {
      setIsLoading(false)
      
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ 
          url: calendlyUrl,
          text: 'Book Free Consultation',
          color: '#2563eb',
          textColor: '#ffffff',
          branding: true
        })
        setCalendlyLoaded(true)
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
            setCalendlyLoaded(true)
          }
        }
        document.body.appendChild(script)
        
        // Fallback timeout
        setTimeout(() => {
          if (!window.Calendly) {
            window.open(calendlyUrl, '_blank', 'noopener,noreferrer')
          }
        }, 2000)
      }
    }
    
    // Load Calendly after a short delay
    const timer = setTimeout(openCalendly, 500)
    
    return () => {
      clearTimeout(timer)
      // Clean up preconnect link
      if (preconnect.parentNode) {
        preconnect.parentNode.removeChild(preconnect)
      }
    }
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
            {isLoading ? 'Loading booking calendar...' : 'The booking calendar should open automatically. If it doesn\'t appear, please click the button below.'}
          </p>
          
          {isLoading && (
            <div className="flex justify-center mb-4">
              <Loader2 className="h-6 w-6 text-blue-600 animate-spin" aria-hidden="true" />
            </div>
          )}
          
          <button
            onClick={() => {
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
                window.open(calendlyUrl, '_blank', 'noopener,noreferrer')
              }
            }}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 mb-4 font-semibold min-h-[44px] touch-manipulation"
            aria-label="Open booking calendar"
          >
            {calendlyLoaded ? 'Open Calendar Again' : 'Open Booking Calendar'}
          </button>
          
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition font-medium"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            Back to home
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-500">
          <GraduationCap className="h-5 w-5 text-blue-600" aria-hidden="true" />
          <span className="text-sm font-medium">MySchola</span>
        </div>
      </div>
    </div>
  )
}

export default Booking
