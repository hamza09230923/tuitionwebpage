import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Clock, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  MessageCircle,
  ChevronRight,
  Users,
  Sparkles,
  Menu,
  X
} from 'lucide-react'

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
    subject: 'English Literature',
    time: '7:00 PM - 8:00 PM',
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
    time: '11:00 AM - 12:00 PM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-blue-500'
  },
  {
    day: 'Sunday',
    status: 'active',
    subject: 'Physics',
    time: '2:00 PM - 3:00 PM',
    board: 'AQA, Edexcel & OCR',
    level: 'Foundation & Higher',
    color: 'bg-green-500'
  }
]

// Summer Timetable (June - August)
const summerScheduleData = [
  {
    day: 'Monday',
    status: 'active',
    subject: 'Maths',
    time: '5:00 PM - 6:00 PM',
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
    status: 'active',
    subject: 'English Language (Edexcel)',
    time: '5:00 PM - 6:00 PM',
    board: 'Edexcel',
    level: 'Foundation & Higher',
    color: 'bg-red-500'
  },
  {
    day: 'Wednesday',
    status: 'active',
    subject: 'English Language (AQA)',
    time: '6:00 PM - 7:00 PM',
    board: 'AQA',
    level: 'Foundation & Higher',
    color: 'bg-red-500'
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
    subject: 'English Literature (Edexcel)',
    time: '10:00 AM - 11:00 AM',
    board: 'Edexcel',
    level: 'Foundation & Higher',
    color: 'bg-red-500'
  },
  {
    day: 'Saturday',
    status: 'active',
    subject: 'English Literature (AQA)',
    time: '11:00 AM - 12:00 PM',
    board: 'AQA',
    level: 'Foundation & Higher',
    color: 'bg-red-500'
  },
  {
    day: 'Saturday',
    status: 'active',
    subject: 'Chemistry',
    time: '11:00 AM - 12:00 PM',
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
  const currentDayIndex = scheduleData.findIndex(d => d.day === today)

  useEffect(() => {
    // Announce page load for screen readers
    setAnnouncement('MySchola GCSE Timetable page loaded. 6 days of live lessons available.')
  }, [])

  const handleDayClick = (dayData) => {
    setSelectedDay(dayData)
  }

  const getTodaySchedule = () => {
    const todayData = scheduleData[currentDayIndex]
    if (!todayData || todayData.status === 'off') {
      return 'No classes today. Take a break!'
    }
    return `Today: ${todayData.subject} at ${todayData.time}`
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
            Structured live sessions for Year 9-11 students. Click any day to hear details.
          </p>

          {/* Schedule Toggle */}
          <div className="mt-6 inline-flex bg-slate-200 rounded-lg p-1">
            <button
              onClick={() => setScheduleType('summer')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                scheduleType === 'summer'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Summer (Jun-Aug)
            </button>
            <button
              onClick={() => setScheduleType('september')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                scheduleType === 'september'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              September Term
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

        {/* Timetable Grid */}
        <div 
          className="grid gap-4"
          role="list"
          aria-label="Weekly timetable"
        >
          {scheduleData.map((dayData, index) => (
            <button
              key={`${dayData.day}-${index}`}
              onClick={() => handleDayClick(dayData)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                selectedDay?.day === dayData.day && selectedDay?.time === dayData.time
                  ? 'border-blue-500 shadow-lg ring-2 ring-blue-200' 
                  : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
              } ${dayData.status === 'off' ? 'bg-slate-50' : 'bg-white'}`}
              role="listitem"
              aria-label={`${dayData.day}. ${dayData.status === 'off' ? 'No classes' : `${dayData.subject} at ${dayData.time}`}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Day Indicator */}
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm ${
                      dayData.status === 'off' 
                        ? 'bg-slate-200 text-slate-500' 
                        : `${dayData.color} text-white`
                    }`}
                    aria-hidden="true"
                  >
                    {dayData.day.slice(0, 3)}
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {dayData.day}
                    </h3>
                    {dayData.status === 'off' ? (
                      <p className="text-slate-500 font-medium">Rest Day</p>
                    ) : (
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-slate-700">{dayData.subject}</span>
                        <span className="text-slate-400">|</span>
                        <span className="flex items-center gap-1 text-slate-600 text-sm">
                          <Clock className="h-3.5 w-3.5" />
                          {dayData.time}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {dayData.status === 'active' && (
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">
                      {dayData.board}
                    </span>
                    <ChevronRight className="h-5 w-5 text-slate-400" />
                  </div>
                )}
              </div>

              {/* Expanded Details */}
              {selectedDay?.day === dayData.day && selectedDay?.time === dayData.time && dayData.status === 'active' && (
                <div 
                  className="mt-4 pt-4 border-t border-slate-100 animate-fadeIn"
                  role="region"
                  aria-label={`${dayData.day} details`}
                >
                  <div className="grid sm:grid-cols-4 gap-4">
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Subject</p>
                      <p className="font-semibold text-slate-900 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-blue-600" />
                        {dayData.subject}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Time</p>
                      <p className="font-semibold text-slate-900 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        {dayData.time}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Exam Board</p>
                      <p className="font-semibold text-slate-900">{dayData.board}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Level</p>
                      <p className="font-semibold text-slate-900">{dayData.level}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-3">
                    <a
                      href="https://wa.me/447344193804"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition text-sm"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

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
                <li><a href="/#privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/#terms-of-service" className="hover:text-white transition">Refund & Cancellation Policy</a></li>
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
