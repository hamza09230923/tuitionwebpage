import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { GraduationCap, ArrowLeft, Mail, Lock } from 'lucide-react'
import { auth, db } from './firebase'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

function Login() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  // Check if user is already logged in and has student document
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          console.log('Checking student document for UID:', user.uid)
          let studentDoc
          try {
            studentDoc = await getDoc(doc(db, 'students', user.uid))
            console.log('Student document exists:', studentDoc.exists())
          } catch (firestoreError) {
            console.error('Firestore error:', firestoreError)
            if (firestoreError.code === 'permission-denied') {
              console.error('PERMISSION DENIED - Check your Firestore security rules!')
              setError('Permission denied. Please check that Firestore security rules are published.')
              await auth.signOut()
              setCheckingAuth(false)
              return
            }
            throw firestoreError
          }
          
          if (studentDoc.exists()) {
            // User is logged in and has student document, redirect to dashboard
            const returnPath = location.state?.from?.pathname || '/app/dashboard'
            console.log('Redirecting to:', returnPath)
            navigate(returnPath, { replace: true })
            return
          } else {
            // User is logged in but no student document - sign them out
            console.warn('Student document not found for UID:', user.uid)
            await auth.signOut()
            setError('Student profile not found. Please contact your teacher.')
          }
        } catch (err) {
          console.error('Error checking student status:', err)
          if (err.code === 'permission-denied') {
            setError('Permission denied. Please check Firestore security rules.')
          } else {
            setError('Error checking student profile. Please try again.')
          }
        }
      } else {
        console.log('No user logged in')
      }
      setCheckingAuth(false)
    })

    return () => unsubscribe()
  }, [navigate, location])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      // Sign in existing student only
      console.log('Attempting to sign in with email:', email)
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log('Sign in successful. User UID:', user.uid)
      
      // Verify student document exists
      console.log('Checking student document in Firestore...')
      let studentDoc
      try {
        studentDoc = await getDoc(doc(db, 'students', user.uid))
        console.log('Student document exists:', studentDoc.exists())
      } catch (firestoreError) {
        console.error('Firestore error:', firestoreError)
        // Check if it's a permission error
        if (firestoreError.code === 'permission-denied') {
          console.error('PERMISSION DENIED - Check your Firestore security rules!')
          setError('Permission denied. Please check that Firestore security rules are published and allow authenticated users to read their own student document.')
          setLoading(false)
          await auth.signOut()
          return
        }
        throw firestoreError // Re-throw if it's not a permission error
      }
      
      if (!studentDoc.exists()) {
        // Sign out if no student document
        console.error('Student document not found for UID:', user.uid)
        console.error('Please create a document in Firestore:')
        console.error('  Collection: students')
        console.error('  Document ID:', user.uid)
        console.error('  Fields: name (string), email (string), subjects (array)')
        
        await auth.signOut()
        setError(`Student profile not found. Please create a document in Firestore with Document ID: ${user.uid}`)
        setLoading(false)
        return
      }
      
      // Student document exists, redirect to dashboard
      console.log('Student document found. Redirecting to dashboard...')
      const returnPath = location.state?.from?.pathname || '/app/dashboard'
      navigate(returnPath, { replace: true })
    } catch (err) {
      console.error(err)
      // Provide user-friendly error messages
      if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.')
      } else if (err.code === 'auth/user-not-found') {
        setError('No account found with this email. Please contact your teacher to create an account.')
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.')
      } else if (err.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please try again.')
      } else {
        setError(err.message || 'Failed to sign in. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
            <Link to="/" className="flex items-center">
                <GraduationCap className="h-12 w-12 text-blue-600" />
                <span className="ml-2 text-3xl font-bold text-gray-900">MySchola</span>
            </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Students: Use the email and password provided by your teacher
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="********"
                  />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Please wait...' : 'Sign in'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  <Link to="/" className="flex items-center hover:text-gray-900 transition">
                      <ArrowLeft className="h-4 w-4 mr-1" />
                      Back to Home
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
