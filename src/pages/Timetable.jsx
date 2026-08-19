import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Clock, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  MessageCircle,
  Users,
  Sparkles,
  Menu,
  X
} from 'lucide-react'

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const scheduleMeta = {
  summer: {
    label: 'Summer (Jun-5 September)',
    calendarTitle: 'Summer Weekly Calendar',
    dateRange: 'June to 5 September'
  },
  september: {
    label: 'September Term (from 6 September onward)',
    calendarTitle: 'September Term Weekly Calendar',
    dateRange: 'From 6 September onward'
  }
}

// September Timetable (Academic Year)
const septemberScheduleData = [
  {
    day: 'Monday',
    status: 'off',
    subject: null,
    time: null,
    board: null
  },
  {
    day: 'Tuesday',
    status: 'active',
    subject: 'English Language',
    time: '6:00 PM - 7:00 PM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-red-500'
  },
  {
    day: 'Wednesday',
    status: 'active',
    subject: 'Biology',
    time: '6:00 PM - 7:00 PM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-green-500'
  },
  {
    day: 'Thursday',
    status: 'active',
    subject: 'English Language',
    time: '7:00 PM - 8:00 PM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-red-500'
  },
  {
    day: 'Friday',
    status: 'active',
    subject: 'Chemistry',
    time: '6:00 PM - 7:00 PM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-green-500'
  },
  {
    day: 'Saturday',
    status: 'active',
    subject: 'Mathematics',
    time: '10:00 AM - 11:00 AM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-blue-500'
  },
  {
    day: 'Saturday',
    status: 'active',
    subject: 'Physics',
    time: '2:00 PM - 3:00 PM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-green-500'
  }
]

// Summer Timetable (June - 5 September)
const summerScheduleData = [
  {
    day: 'Monday',
    status: 'active',
    subject: 'Maths',
    time: '6:00 PM - 7:00 PM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-blue-500'
  },
  {
    day: 'Tuesday',
    status: 'off',
    subject: null,
    time: null,
    board: null
  },
  {
    day: 'Wednesday',
    status: 'off',
    subject: null,
    time: null,
    board: null
  },
  {
    day: 'Thursday',
    status: 'off',
    subject: null,
    time: null,
    board: null
  },
  {
    day: 'Friday',
    status: 'active',
    subject: 'Biology',
    time: '5:00 PM - 6:00 PM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-green-500'
  },
  {
    day: 'Saturday',
    status: 'active',
    subject: 'English Literature',
    time: '10:00 AM - 11:00 AM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-red-500'
  },
  {
    day: 'Saturday',
    status: 'active',
    subject: 'English Language',
    time: '11:00 AM - 12:00 PM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-red-500'
  },
  {
    day: 'Saturday',
    status: 'active',
    subject: 'Chemistry',
    time: '2:00 PM - 3:00 PM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-green-500'
  },
  {
    day: 'Sunday',
    status: 'active',
    subject: 'Physics',
    time: '11:00 AM - 12:00 PM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-green-500'
  }
]

function Timetable() {
  const [selectedDay, setSelectedDay] = useState(null)
  const [announcement, setAnnouncement] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scheduleType, setScheduleType] = useState('summer') // 'summer' or 'september'

  // Get current schedule based on toggle
  const scheduleData = scheduleType === 'summer' ? summerScheduleData : septemberScheduleData

  // Get current day
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  useEffect(() => {
    // Announce page load for screen readers
    setAnnouncement('MySchola GCSE Timetable page loaded. Weekly calendar view available.')
  }, [])

  useEffect(() => {
    setSelectedDay(null)
  }, [scheduleType])

  const handleDayClick = (dayData) => {
    setSelectedDay(dayData)
  }

  const getDayEntries = (day) => scheduleData.filter(d => d.day === day && d.status === 'active')

  const getTodaySchedule = () => {
    const todayEntries = scheduleData.filter(d => d.day === today && d.status === 'active')
    if (todayEntries.length === 0) {
      return 'No classes today. Take a break!'
    }
    return `Today: ${todayEntries.map(({ subject, time }) => `${subject} at ${time}`).join('; ')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Screen Reader Announcements */}
      <div 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>

      {/* Cohort Banner */}
      <div className="w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md">
        <span className="inline-flex items-center gap-2 animate-pulse">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Now Enrolling for New Cohort — Limited Spaces Available
        </span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <span className="ml-2 text-2xl font-bold text-gray-900">MySchola</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center">
              <div className="flex items-center space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                <a href="/#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
                <a href="/courses" className="text-gray-700 hover:text-blue-600 transition">Courses</a>
                <a href="/package" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
                <a href="/#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center"
                  aria-label="Log in"
                >
                  Log In
                </Link>
                <a
                  href="https://wa.me/447344193804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Contact Us
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t" role="menu" aria-label="Mobile navigation menu">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Home</a>
              <a href="/#how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">How It Works</a>
              <a href="/courses" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Courses</a>
              <a href="/package" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Pricing</a>
              <a href="/#faq" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">FAQ</a>
              <Link
                to="/login"
                className="block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                role="menuitem"
              >
                Log In
              </Link>
              <a
                href="https://wa.me/447344193804"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Contact us on WhatsApp"
                role="menuitem"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Contact Us
                </span>
              </a>
            </div>
          </div>
        )}
      </nav>

      <main id="main-content" className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Weekly Live Lesson Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Your GCSE Learning Timetable
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Structured live sessions for Year 9-11 students. Click any lesson to see details.
          </p>

          {/* Schedule Toggle */}
          <div className="mt-6 inline-flex max-w-full flex-wrap justify-center gap-1 bg-slate-200 rounded-lg p-1">
            <button
              onClick={() => setScheduleType('summer')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                scheduleType === 'summer'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              {scheduleMeta.summer.label}
            </button>
            <button
              onClick={() => setScheduleType('september')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                scheduleType === 'september'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              {scheduleMeta.september.label}
            </button>
          </div>
        </div>

        {/* Today's Highlight */}
        <div 
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 mb-8 text-white shadow-lg"
          role="region"
          aria-label="Today\'s schedule"
        >
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="h-5 w-5 text-blue-200" />
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Today - {today}
            </span>
          </div>
          <p className="text-xl font-semibold">
            {getTodaySchedule()}
          </p>
        </div>

        {/* Weekly Calendar */}
        <div
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          role="region"
          aria-label={`${scheduleMeta[scheduleType].calendarTitle}: ${scheduleMeta[scheduleType].dateRange}`}
        >
          <div className="flex flex-col gap-2 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">{scheduleMeta[scheduleType].calendarTitle}</h3>
              <p className="text-sm font-medium text-slate-500">{scheduleMeta[scheduleType].dateRange}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                Maths
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                English
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                Science
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50 text-center text-xs font-bold uppercase tracking-wide text-slate-500">
                {weekDays.map((day) => (
                  <div key={day} className="px-1 py-3">
                    {day.slice(0, 3)}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7">
                {weekDays.map((day) => {
                  const entries = getDayEntries(day)
                  const isToday = day === today
                  return (
                    <div
                      key={day}
                      className={`min-h-[158px] border-r border-slate-200 p-3 last:border-r-0 ${
                        isToday ? 'bg-blue-50' : 'bg-white'
                      }`}
                    >
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <p className="text-sm font-bold text-slate-900">{day.slice(0, 3)}</p>
                        {isToday && (
                          <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[11px] font-bold text-white">
                            Today
                          </span>
                        )}
                      </div>

                      {entries.length > 0 ? (
                        <div className="space-y-2">
                          {entries.map((entry) => (
                            <button
                              key={`${entry.day}-${entry.subject}-${entry.time}`}
                              onClick={() => handleDayClick(entry)}
                              className={`w-full rounded-lg px-2.5 py-2 text-left text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-blue-300 ${entry.color} ${
                                selectedDay?.day === entry.day && selectedDay?.time === entry.time && selectedDay?.subject === entry.subject
                                  ? 'ring-4 ring-blue-200'
                                  : ''
                              }`}
                              aria-label={`${entry.day}. ${entry.subject} at ${entry.time}`}
                            >
                              <span className="block text-sm font-bold leading-tight">{entry.subject}</span>
                              <span className="mt-1 flex items-center gap-1 text-[11px] font-semibold leading-tight text-white/90">
                                <Clock className="h-3 w-3 shrink-0" />
                                {entry.time}
                              </span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="flex h-[92px] items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 text-sm font-medium text-slate-400">
                          Rest day
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {selectedDay && selectedDay.status === 'active' && (
          <div
            className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            role="region"
            aria-label={`${selectedDay.day} selected lesson details`}
          >
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className={`h-11 w-11 rounded-xl ${selectedDay.color} flex items-center justify-center text-sm font-bold text-white`}>
                  {selectedDay.day.slice(0, 3)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{selectedDay.subject}</h3>
                  <p className="text-sm font-medium text-slate-500">{selectedDay.day}</p>
                </div>
              </div>
              <a
                href="https://wa.me/447344193804"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-600"
              >
                <MessageCircle className="h-4 w-4" />
                Ask on WhatsApp
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-4">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Subject</p>
                <p className="flex items-center gap-2 font-semibold text-slate-900">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  {selectedDay.subject}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Time</p>
                <p className="flex items-center gap-2 font-semibold text-slate-900">
                  <Clock className="h-4 w-4 text-blue-600" />
                  {selectedDay.time}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Exam Board</p>
                <p className="font-semibold text-slate-900">{selectedDay.board}</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Level</p>
                <p className="font-semibold text-slate-900">{selectedDay.level}</p>
              </div>
            </div>
          </div>
        )}

        {/* Human Support Section */}
        <div className="mt-8 bg-gradient-to-r from-emerald-50 via-white to-blue-50 rounded-2xl p-6 border border-emerald-200">
          <div className="flex items-start gap-4">
            <div className="bg-emerald-500 p-3 rounded-xl shrink-0">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Need Help or Have Questions?</h3>
              <p className="text-slate-600 mb-4">
                Our team is here to assist you. Whether you need accessibility support, 
                have timetable questions, or want to discuss your learning plan.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/447344193804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400" aria-hidden="true" />
                <span className="ml-2 text-2xl font-bold">MySchola</span>
              </div>
              <p className="text-gray-400">Expert GCSE tutoring for Years 9-11 via Zoom.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400" role="list">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><Link to="/courses" className="hover:text-white transition">Courses</Link></li>
                <li><Link to="/package" className="hover:text-white transition">Pricing</Link></li>
                <li><a href="/timetable" className="hover:text-white transition">Timetable</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400" role="list">
                <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link to="/refund-cancellation-policy" className="hover:text-white transition">Refund & Cancellation Policy</Link></li>
                <li><a href="/#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400" role="list">
                <li><a href="mailto:support@myschola.uk" className="hover:text-white transition">support@myschola.uk</a></li>
                <li><a href="tel:+447344193804" className="hover:text-white transition">+44 7344 193804</a></li>
                <li>
                  <a
                    href="https://wa.me/447344193804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition inline-flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Contact Us on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MySchola. All rights reserved. Tutoring for Years 9-11.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/447344193804"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </div>
  )
}

export default Timetable
