import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './Home'

// Lazy load routes for better performance - only load when needed
const Login = lazy(() => import('./Login'))
const Dashboard = lazy(() => import('./Dashboard'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
