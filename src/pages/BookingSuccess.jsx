import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, CalendarCheck, GraduationCap } from 'lucide-react'
import BookingDetailsCard from '../components/BookingDetailsCard'
import { getConsultationBooking } from '../utils/bookingStorage'
import { trackConsultationBooked } from '../utils/metaPixel'

function BookingSuccess() {
  const location = useLocation()
  const trackedRef = useRef(false)
  const booking = location.state?.booking || getConsultationBooking()

  useEffect(() => {
    if (!booking || trackedRef.current) return
    trackedRef.current = true
    trackConsultationBooked(booking)
  }, [booking])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CalendarCheck className="h-10 w-10 text-green-600" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {booking?.attendeeName
              ? `Thanks, ${booking.attendeeName.split(' ')[0]}!`
              : 'Booking Confirmed!'}
          </h1>
          <p className="mt-2 text-gray-600">
            Thank you for booking your free consultation. Check your email for the Zoom link and next steps.
          </p>
        </div>

        {booking ? (
          <div className="mt-8">
            <BookingDetailsCard booking={booking} />
          </div>
        ) : null}

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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

export default BookingSuccess
