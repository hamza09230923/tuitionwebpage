import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ProtectedRoute from './components/ProtectedRoute'
import StudentDashboard from './pages/StudentDashboard'
import Recordings from './pages/Recordings'
import Homework from './pages/Homework'
import Admin from './pages/Admin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        
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
