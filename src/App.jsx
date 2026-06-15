import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Home from './Home'
import { trackPageView } from './utils/metaPixel'

const Login = lazy(() => import('./Login'))
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'))
const StudentDashboard = lazy(() => import('./pages/StudentDashboard'))
const Recordings = lazy(() => import('./pages/Recordings'))
const Homework = lazy(() => import('./pages/Homework'))
const Admin = lazy(() => import('./pages/Admin'))
const ShareLink = lazy(() => import('./pages/ShareLink'))
const HomeworkShareLink = lazy(() => import('./pages/HomeworkShareLink'))
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'))
const PaymentConfirmation = lazy(() => import('./pages/PaymentConfirmation'))
const BookingSuccess = lazy(() => import('./pages/BookingSuccess'))
const Booking = lazy(() => import('./pages/Booking'))
const Webinar = lazy(() => import('./pages/Webinar'))
const WebinarThanks = lazy(() => import('./pages/WebinarThanks'))
const Courses = lazy(() => import('./pages/Courses'))
const Package = lazy(() => import('./pages/Package'))
const Timetable = lazy(() => import('./pages/Timetable'))
const Resources = lazy(() => import('./pages/Resources'))
const ResourceShareLink = lazy(() => import('./pages/ResourceShareLink'))

const WEBINAR_ROUTE = '/book-strategy-call'
const WEBINAR_THANKS_ROUTE = '/book-strategy-call/thanks'
const LEGACY_WEBINAR_ROUTE = '/webinar'
const LEGACY_WEBINAR_THANKS_ROUTE = '/webinar/thanks'

function RouteTracker() {
  const { pathname } = useLocation()
  useEffect(() => {
    trackPageView()
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <RouteTracker />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/share-link" element={<ShareLink />} />
          <Route path="/admin/homework-share-link" element={<HomeworkShareLink />} />
          <Route path="/admin/resource-share-link" element={<ResourceShareLink />} />
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
          <Route
            path="/app/subject/:subjectId/resources"
            element={
              <ProtectedRoute>
                <Resources />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
