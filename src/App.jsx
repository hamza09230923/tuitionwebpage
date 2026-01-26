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
import BookingSuccess from './pages/BookingSuccess'
import Booking from './pages/Booking'
import { trackPageView } from './utils/metaPixel'

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
  useEffect(() => {
    const handler = (e) => {
      if (isCalendlyScheduledEvent(e)) {
        navigate('/booking-success', { replace: true })
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [navigate])
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
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/share-link" element={<ShareLink />} />
        <Route path="/admin/homework-share-link" element={<HomeworkShareLink />} />
        
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
