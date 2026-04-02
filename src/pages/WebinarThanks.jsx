import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, CheckCircle, Mail, MessageCircle, Video } from 'lucide-react'

const SUPPORT_EMAIL = 'myscholauk@gmail.com'
const WHATSAPP_NUMBER = '447344193804'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

function WebinarThanks() {
  const location = useLocation()
  const stateFlag = location.state && location.state.fromRegistration
  const sessionFlag = typeof window !== 'undefined' &&
    window.sessionStorage.getItem('strategyCallRegistered') === 'true'
  const isRegistered = Boolean(stateFlag || sessionFlag)
  const whatsappQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    WHATSAPP_LINK
  )}`

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.Calendly?.closePopupWidget?.()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          <div className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400 px-8 py-10 text-white sm:px-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
              <CheckCircle className="h-4 w-4" aria-hidden="true" />
              Booking confirmed
            </div>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
              Your MySchola strategy call is booked.
            </h1>
            <p className="mt-3 max-w-3xl text-base text-white/90 sm:text-lg">
              Check the email you used to book. Your confirmation contains your scheduled time,
              your private Zoom link, and your reschedule options.
            </p>
          </div>

          <div className="px-8 py-8 sm:px-10 sm:py-10">
            {isRegistered ? (
              <>
                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
                      <Mail className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      Confirmation email
                    </div>
                    <p className="mt-3 text-lg font-bold text-gray-900">
                      Check your inbox first
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Search for your booking confirmation from MySchola or Calendly if it has not
                      appeared yet.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
                      <Video className="h-4 w-4" aria-hidden="true" />
                      Private Zoom link
                    </div>
                    <p className="mt-3 text-lg font-bold text-gray-900">
                      Your Zoom link is in the confirmation email
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Use the private Zoom link in that email at your booked time. If you cannot
                      find it, message us and we will resend the details.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">
                      <CheckCircle className="h-4 w-4" aria-hidden="true" />
                      Before the call
                    </div>
                    <p className="mt-3 text-lg font-bold text-gray-900">
                      Come ready with your child&apos;s current grades and main concerns
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      We will use the call to identify the main barriers, map out the right support,
                      and show you exactly how our programme works.
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 sm:p-8">
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                      Need the details quickly?
                    </p>
                    <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                      Everything you need for your strategy call is below.
                    </h2>
                    <p className="mt-3 text-base text-gray-600 sm:text-lg">
                      If you need help before the call, contact us on WhatsApp or email and we will
                      get back to you as quickly as possible.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_320px]">
                    <div className="grid gap-4">
                      <div className="rounded-3xl border border-green-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-green-700">
                          <MessageCircle className="h-4 w-4" aria-hidden="true" />
                          WhatsApp
                        </div>
                        <p className="mt-3 text-xl font-bold text-gray-900">
                          Message us directly on WhatsApp
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                          Use WhatsApp if you need us to resend your booking details or help you
                          locate the Zoom link before the call.
                        </p>
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                        >
                          Open WhatsApp chat
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                        <p className="mt-3 text-sm font-semibold text-gray-700">
                          WhatsApp: +44 7344 193804
                        </p>
                      </div>

                      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
                          <Mail className="h-4 w-4 text-blue-600" aria-hidden="true" />
                          Email
                        </div>
                        <p className="mt-3 text-xl font-bold text-gray-900">
                          myscholauk@gmail.com
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                          If you prefer email, contact us here and we can resend your confirmation
                          details or answer any questions before the call.
                        </p>
                        <a
                          href={`mailto:${SUPPORT_EMAIL}`}
                          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                        >
                          Email MySchola
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                      <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        WhatsApp QR code
                      </div>
                      <p className="mt-4 text-sm text-gray-600">
                        Scan this code on your phone to open a WhatsApp chat with MySchola.
                      </p>
                      <img
                        src={whatsappQrUrl}
                        alt="WhatsApp QR code for MySchola"
                        className="mx-auto mt-5 h-52 w-52 rounded-2xl border border-slate-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  No booking found
                </p>
                <h2 className="mt-3 text-2xl font-bold text-gray-900">
                  Book your strategy call first to view the confirmation details.
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-gray-700 sm:text-base">
                  Once you complete your booking, this page will show the next-step details for your
                  Zoom call, along with the WhatsApp and email contact options.
                </p>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/book-strategy-call"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Back to strategy call page
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebinarThanks
