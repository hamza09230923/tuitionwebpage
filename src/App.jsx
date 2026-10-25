import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './Home'
import NotFound from './pages/NotFound'
import { trackPageView } from './utils/metaPixel'

const Login = lazy(() => import('./Login'))
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'))
const StudentDashboard = lazy(() => import('./pages/StudentDashboard'))
const Recordings = lazy(() => import('./pages/Recordings'))
const Homework = lazy(() => import('./pages/Homework'))
const Admin = lazy(() => import('./pages/Admin'))
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'))
const BookingSuccess = lazy(() => import('./pages/BookingSuccess'))
const Booking = lazy(() => import('./pages/Booking'))
const Webinar = lazy(() => import('./pages/Webinar'))
const WebinarThanks = lazy(() => import('./pages/WebinarThanks'))
const Courses = lazy(() => import('./pages/Courses'))
const Package = lazy(() => import('./pages/Package'))
const Timetable = lazy(() => import('./pages/Timetable'))
const Resources = lazy(() => import('./pages/Resources'))
const Books = lazy(() => import('./pages/Books'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const RefundCancellationPolicy = lazy(() => import('./pages/RefundCancellationPolicy'))
const FAQs = lazy(() => import('./pages/FAQs'))
const Careers = lazy(() => import('./pages/Careers'))
const EnglishTeacher = lazy(() => import('./pages/EnglishTeacher'))
const InspectorCalls = lazy(() => import('./pages/InspectorCalls'))

const WEBINAR_ROUTE = '/book-strategy-call'
const WEBINAR_THANKS_ROUTE = '/book-strategy-call/thanks'
const LEGACY_WEBINAR_ROUTE = '/webinar'
const LEGACY_WEBINAR_THANKS_ROUTE = '/webinar/thanks'

const ROUTE_TITLES = {
  '/': 'MySchola | Online GCSE Tuition for Maths, English & Science',
  '/booking': 'Book a Free GCSE Consultation | MySchola',
  '/login': 'Log in | MySchola',
  '/courses': 'GCSE Courses | MySchola',
  '/package': 'GCSE Tuition Packages | MySchola',
  '/timetable': 'GCSE Tuition Timetable | MySchola',
  '/privacy-policy': 'Privacy Policy | MySchola',
  '/refund-cancellation-policy': 'Refund & Cancellation Policy | MySchola',
  '/faqs': 'FAQs | MySchola',
  '/careers': 'Careers at MySchola | GCSE Tuition',
  '/english-teacher': 'English Teacher Vacancy | MySchola',
  '/app/dashboard': 'Student dashboard | MySchola',
  '/app/literature/an-inspector-calls': 'An Inspector Calls | MySchola',
}

function getDocumentTitle(pathname) {
  if (ROUTE_TITLES[pathname]) return ROUTE_TITLES[pathname]
  if (pathname.startsWith('/app/subject/')) return 'Student materials | MySchola'
  return 'MySchola | Online GCSE Tuition'
}

function RouteTracker() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    document.title = getDocumentTitle(pathname)
    trackPageView()
    const targetId = hash.replace(/^#/, '')
    const scrollToTarget = () => {
      const target = targetId ? document.getElementById(targetId) : null
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    }
    const frame = window.requestAnimationFrame(scrollToTarget)
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])
  return null
}

function RouteTransition() {
  const { pathname } = useLocation()

  return (
    <AnimatePresence initial={false} mode="sync">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/admin" element={<Admin />} />
          <Route path={WEBINAR_ROUTE} element={<Webinar />} />
          <Route path={WEBINAR_THANKS_ROUTE} element={<WebinarThanks />} />
          <Route path={LEGACY_WEBINAR_ROUTE} element={<Webinar />} />
          <Route path={LEGACY_WEBINAR_THANKS_ROUTE} element={<WebinarThanks />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/package" element={<Package />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/english-teacher" element={<EnglishTeacher />} />
          <Route path="/app/dashboard" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
          <Route path="/app/literature/an-inspector-calls" element={<ProtectedRoute><InspectorCalls /></ProtectedRoute>} />
          <Route path="/app/subject/:subjectId/recordings" element={<ProtectedRoute><Recordings /></ProtectedRoute>} />
          <Route path="/app/subject/:subjectId/homework" element={<ProtectedRoute><Homework /></ProtectedRoute>} />
          <Route path="/app/subject/:subjectId/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
          <Route path="/app/subject/:subjectId/books" element={<ProtectedRoute><Books /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <RouteTracker />
      <Suspense fallback={null}>
        <RouteTransition />
      </Suspense>
    </Router>
  )
}

export default App
