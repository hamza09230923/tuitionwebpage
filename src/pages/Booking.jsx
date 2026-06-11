import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, GraduationCap } from 'lucide-react'
import CalInlineEmbed from '../components/CalInlineEmbed'
import { normalizeCalBooking, saveConsultationBooking } from '../utils/bookingStorage'
function Booking() {
  const navigate = useNavigate()

  const handleBookingSuccess = useCallback((bookingData, v2Data) => {
    const booking = saveConsultationBooking(bookingData, v2Data) || normalizeCalBooking(bookingData, v2Data)
    navigate('/booking-success', { replace: true, state: { booking } })
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <GraduationCap className="h-10 w-10 text-blue-600" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Book Your Free Consultation</h1>
          <p className="mt-2 text-gray-600">
            Choose a time below. We&apos;ll confirm by email with your Zoom link.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <CalInlineEmbed
            theme="light"
            elementId="my-cal-inline-parentconsultation-booking"
            onBookingSuccess={handleBookingSuccess}
          />
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-medium text-gray-600 transition hover:text-blue-600"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Booking
