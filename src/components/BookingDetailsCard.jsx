import { ArrowRight, Calendar, CheckCircle, Mail, MessageCircle, User, Video } from 'lucide-react'
import { formatBookingDateTime, getBookingDisplayFields } from '../utils/bookingStorage'

function Detail({ label, value, icon: Icon }) {
  if (!value) return null
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {Icon ? <Icon className="h-4 w-4 text-blue-600" aria-hidden="true" /> : null}
        {label}
      </div>
      <p className="mt-2 text-base font-semibold text-gray-900 break-words">{value}</p>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
export default function BookingDetailsCard({ booking }) {
  if (!booking) return null

  const displayFields = getBookingDisplayFields(booking)
  const formattedStart = formatBookingDateTime(booking.startTime)
  const formattedEnd = formatBookingDateTime(booking.endTime)

  return (
    <div className="rounded-[2rem] border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        Your booking details
      </p>
      <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
        {booking.title || 'Parent consultation'}
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {displayFields.map((field) => (
          <Detail
            key={`${field.label}-${field.value}`}
            label={field.label}
            value={field.value}
            icon={
              /email/i.test(field.label) ? Mail
                : /phone/i.test(field.label) ? MessageCircle
                  : /name|child|host/i.test(field.label) ? User
                    : Calendar
            }
          />
        ))}
        <Detail label="Date & time" value={formattedStart} icon={Calendar} />
        <Detail label="Status" value={booking.status} icon={CheckCircle} />
        {formattedEnd && formattedEnd !== formattedStart ? (
          <Detail label="Ends" value={formattedEnd} icon={Calendar} />
        ) : null}
        {booking.hostName ? <Detail label="Host" value={booking.hostName} icon={User} /> : null}
      </div>

      {booking.videoCallUrl ? (
        <div className="mt-6 rounded-2xl border border-blue-200 bg-white p-5">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
            <Video className="h-4 w-4" aria-hidden="true" />
            Meeting link
          </div>
          <a
            href={booking.videoCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 break-all"
          >
            Join your Zoom call
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      ) : null}

      {booking.uid ? (
        <p className="mt-4 text-xs text-slate-500">Booking reference: {booking.uid}</p>
      ) : null}
    </div>
  )
}
