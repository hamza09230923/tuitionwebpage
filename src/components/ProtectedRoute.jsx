import { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

/**
 * ProtectedRoute component that ensures only authenticated students can access /app routes
 */
function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isStudent, setIsStudent] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if user is a student in Firestore
        try {
          const studentDoc = await getDoc(doc(db, 'students', user.uid))
          if (studentDoc.exists()) {
            setIsAuthenticated(true)
            setIsStudent(true)
          } else {
            setIsAuthenticated(false)
            setIsStudent(false)
          }
        } catch (error) {
          console.error('Error checking student status:', error)
          setIsAuthenticated(false)
          setIsStudent(false)
        }
      } else {
        setIsAuthenticated(false)
        setIsStudent(false)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated || !isStudent) {
    // Redirect to login with return path
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute

