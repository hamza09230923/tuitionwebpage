import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CalendarCheck, GraduationCap, ArrowLeft } from 'lucide-react'
import { trackBookingComplete, trackBookNow } from '../utils/metaPixel'

function BookingSuccess() {
  useEffect(() => {
    trackBookingComplete()
    trackBookNow()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CalendarCheck className="h-10 w-10 text-green-600" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Booking confirmed</h1>
          <p className="text-gray-600 mb-6">
            Thank you for booking your free consultation. You will receive a confirmation email shortly with the meeting link and next steps.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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

export default BookingSuccess
