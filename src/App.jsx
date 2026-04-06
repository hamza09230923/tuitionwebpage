import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './Home'
import Login from './Login'
import ProtectedRoute from './components/ProtectedRoute'
import StudentDashboard from './pages/StudentDashboard'
import Recordings from './pages/Recordings'
import Homework from './pages/Homework'
import Admin from './pages/Admin'
import ShareLink from './pages/ShareLink'
import HomeworkShareLink from './pages/HomeworkShareLink'
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentConfirmation from './pages/PaymentConfirmation'
import BookingSuccess from './pages/BookingSuccess'
import Booking from './pages/Booking'
import Webinar from './pages/Webinar'
import WebinarThanks from './pages/WebinarThanks'
import Courses from './pages/Courses'
import Package from './pages/Package'
import Timetable from './pages/Timetable'
import { trackPageView } from './utils/metaPixel'

const WEBINAR_ROUTE = '/book-strategy-call'
const WEBINAR_THANKS_ROUTE = '/book-strategy-call/thanks'
const LEGACY_WEBINAR_ROUTE = '/webinar'
const LEGACY_WEBINAR_THANKS_ROUTE = '/webinar/thanks'

function closeCalendlyPopup() {
  if (typeof window === 'undefined') return
  window.Calendly?.closePopupWidget?.()
}

function isCalendlyScheduledEvent(e) {
  return (
    e?.data?.event &&
    e.data.event.indexOf('calendly') === 0 &&
    e.data.event === 'calendly.event_scheduled'
  )
}

function RouteTracker() {
  const { pathname } = useLocation()
  useEffect(() => {
    trackPageView()
  }, [pathname])
  return null
}

function CalendlyPopupListener() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(() => {
    const handler = (e) => {
      if (isCalendlyScheduledEvent(e)) {
        if (
          pathname.startsWith(WEBINAR_ROUTE) ||
          pathname.startsWith(LEGACY_WEBINAR_ROUTE)
        ) {
          if (typeof window !== 'undefined') {
            window.sessionStorage.setItem('strategyCallRegistered', 'true')
          }
          closeCalendlyPopup()
          navigate(WEBINAR_THANKS_ROUTE, { replace: true })
        } else {
          closeCalendlyPopup()
          navigate('/booking-success', { replace: true })
        }
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [navigate, pathname])
  return null
}

function App() {
  return (
    <Router>
      <RouteTracker />
      <CalendlyPopupListener />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/share-link" element={<ShareLink />} />
        <Route path="/admin/homework-share-link" element={<HomeworkShareLink />} />
        <Route path={WEBINAR_ROUTE} element={<Webinar />} />
        <Route path={WEBINAR_THANKS_ROUTE} element={<WebinarThanks />} />
        <Route path={LEGACY_WEBINAR_ROUTE} element={<Webinar />} />
        <Route path={LEGACY_WEBINAR_THANKS_ROUTE} element={<WebinarThanks />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/package" element={<Package />} />
        <Route path="/timetable" element={<Timetable />} />
        
        {/* Protected student routes */}
        <Route
          path="/app/dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/subject/:subjectId/recordings"
          element={
            <ProtectedRoute>
              <Recordings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/subject/:subjectId/homework"
          element={
            <ProtectedRoute>
              <Homework />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
