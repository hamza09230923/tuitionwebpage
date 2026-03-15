import { Link, useLocation } from 'react-router-dom'
import { Calendar, CheckCircle, MessageCircle, Video } from 'lucide-react'

const WEBINAR_WEEKDAYS = [6]
const WEBINAR_HOUR = 12
const WEBINAR_MINUTE = 0
const WEBINAR_DURATION_MINUTES = 60
const WEBINAR_TITLE = 'Weekend GCSE Boost'
const MEET_WEEKLY_LINK = 'https://meet.google.com/vpo-sydu-rsh'
const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/your-group-invite'

function getWebinarWindow(now = new Date()) {
  const nextCandidates = []
  const prevCandidates = []

  WEBINAR_WEEKDAYS.forEach((day) => {
    const base = new Date(now)
    const dayDiff = (day - base.getDay() + 7) % 7
    base.setDate(base.getDate() + dayDiff)
    base.setHours(WEBINAR_HOUR, WEBINAR_MINUTE, 0, 0)

    const next = new Date(base)
    if (dayDiff === 0 && base <= now) {
      next.setDate(next.getDate() + 7)
    }
    nextCandidates.push(next)

    const prev = new Date(base)
    if (base > now) {
      prev.setDate(prev.getDate() - 7)
    }
    prevCandidates.push(prev)
  })

  const nextStart = nextCandidates.reduce((soonest, current) => (
    current < soonest ? current : soonest
  ))
  const prevStart = prevCandidates.reduce((latest, current) => (
    current > latest ? current : latest
  ))
  const prevEnd = new Date(prevStart.getTime() + WEBINAR_DURATION_MINUTES * 60000)
  const isLive = now >= prevStart && now < prevEnd
  const start = isLive ? prevStart : nextStart
  const end = new Date(start.getTime() + WEBINAR_DURATION_MINUTES * 60000)

  return { start, end, isLive }
}

function WebinarThanks() {
  const location = useLocation()
  const stateFlag = location.state && location.state.fromRegistration
  const sessionFlag = typeof window !== 'undefined' &&
    window.sessionStorage.getItem('webinarRegistered') === 'true'
  const isRegistered = Boolean(stateFlag || sessionFlag)
  const webinarWindow = getWebinarWindow()
  const nextWebinarLabel = webinarWindow.start.toLocaleString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  })
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const whatsappGroupQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    WHATSAPP_GROUP_LINK
  )}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-20">
        <div className="bg-white/90 rounded-3xl shadow-xl p-8 sm:p-12">
          <div className="flex items-center gap-3 text-blue-700 font-semibold">
            <CheckCircle className="h-6 w-6" aria-hidden="true" />
            Registration confirmed
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            Thanks for registering for the Live Webinar!
          </h1>
          <p className="text-gray-600 mt-3">
            We will send reminders before the webinar. Your local time is shown below.
          </p>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
            <div className="flex items-center gap-2 text-blue-700 font-semibold">
              <Calendar className="h-5 w-5" aria-hidden="true" />
              Next session time
            </div>
            <p className="text-lg font-semibold text-gray-900 mt-3">
              {nextWebinarLabel}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Timezone: {timezone}
            </p>
          </div>

          {isRegistered ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 text-gray-900 font-semibold">
                  <Video className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  Google Meet link for this week
                </div>
                <p className="text-gray-600 mt-3">
                  Use this link at the session time. Please do not share it publicly.
                </p>
                <div className="mt-4 text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">Meeting link:</span>{' '}
                  <a
                    href={MEET_WEEKLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 hover:text-blue-800 underline"
                  >
                    {MEET_WEEKLY_LINK}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6 text-center">
                <div className="flex items-center justify-center gap-2 text-gray-900 font-semibold">
                  <MessageCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
                  WhatsApp group chat
                </div>
                <p className="text-gray-600 mt-3">
                  Scan to join the WhatsApp group chat for updates.
                </p>
                <img
                  src={whatsappGroupQrUrl}
                  alt="WhatsApp group chat QR code"
                  className="mx-auto mt-4 h-44 w-44 rounded-lg border border-gray-100"
                  loading="lazy"
                />
                <a
                  href={WHATSAPP_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-green-200 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 transition"
                >
                  Open WhatsApp group
                </a>
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm text-amber-900">
                Please register on the webinar page to access the Google Meet link and WhatsApp group.
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/webinar"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Back to webinar page
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebinarThanks
