import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  BookOpen, 
  LogOut, 
  Video, 
  FileText, 
  ExternalLink,
  Calculator,
  BookMarked,
  FlaskConical,
  Globe,
  Music,
  Palette,
  History,
  Languages,
  Atom,
  GraduationCap
} from 'lucide-react'
import { auth, db } from '../firebase'
import { signOut } from 'firebase/auth'
import { doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { Link } from 'react-router-dom'

// Function to get subject icon based on subject name
const getSubjectIcon = (subjectName) => {
  const name = subjectName?.toLowerCase() || ''
  
  if (name.includes('math') || name.includes('maths')) {
    return Calculator
  } else if (name.includes('english') || name.includes('literature') || name.includes('language')) {
    return BookMarked
  } else if (name.includes('science') || name.includes('physics') || name.includes('chemistry') || name.includes('biology')) {
    return FlaskConical
  } else if (name.includes('geography') || name.includes('geography')) {
    return Globe
  } else if (name.includes('history')) {
    return History
  } else if (name.includes('music')) {
    return Music
  } else if (name.includes('art') || name.includes('design')) {
    return Palette
  } else if (name.includes('language') || name.includes('french') || name.includes('spanish') || name.includes('german')) {
    return Languages
  } else if (name.includes('computer') || name.includes('ict') || name.includes('it')) {
    return Atom
  } else {
    return GraduationCap
  }
}

// Function to get subject color based on subject name
const getSubjectColor = (subjectName) => {
  const name = subjectName?.toLowerCase() || ''
  
  if (name.includes('math') || name.includes('maths')) {
    return 'bg-blue-50 border-blue-200 text-blue-700'
  } else if (name.includes('english') || name.includes('literature') || name.includes('language')) {
    return 'bg-purple-50 border-purple-200 text-purple-700'
  } else if (name.includes('science') || name.includes('physics') || name.includes('chemistry') || name.includes('biology')) {
    return 'bg-green-50 border-green-200 text-green-700'
  } else if (name.includes('geography')) {
    return 'bg-cyan-50 border-cyan-200 text-cyan-700'
  } else if (name.includes('history')) {
    return 'bg-amber-50 border-amber-200 text-amber-700'
  } else if (name.includes('music')) {
    return 'bg-pink-50 border-pink-200 text-pink-700'
  } else if (name.includes('art') || name.includes('design')) {
    return 'bg-rose-50 border-rose-200 text-rose-700'
  } else {
    return 'bg-gray-50 border-gray-200 text-gray-700'
  }
}

function StudentDashboard() {
  const navigate = useNavigate()
  const [student, setStudent] = useState(null)
  const [subjects, setSubjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [debugInfo, setDebugInfo] = useState(null)

  useEffect(() => {
    const loadStudentData = async () => {
      try {
        const user = auth.currentUser
        if (!user) {
          navigate('/login')
          return
        }

        // Get student document
        const studentDoc = await getDoc(doc(db, 'students', user.uid))
        if (!studentDoc.exists()) {
          setError('Student profile not found')
          setLoading(false)
          return
        }

        const studentData = studentDoc.data()
        setStudent(studentData)

        // Debug: Log student data
        console.log('Student data:', studentData)
        console.log('Student subjects array:', studentData.subjects)

        // Get enrolled subjects with better error handling
        if (studentData.subjects && studentData.subjects.length > 0) {
          const subjectDocs = await Promise.all(
            studentData.subjects.map(async (subjectId) => {
              try {
                const subjectDoc = await getDoc(doc(db, 'subjects', subjectId))
                if (!subjectDoc.exists()) {
                  console.warn(`Subject document not found for ID: ${subjectId}`)
                  return null
                }
                return { id: subjectDoc.id, ...subjectDoc.data() }
              } catch (err) {
                console.error(`Error fetching subject ${subjectId}:`, err)
                return null
              }
            })
          )
          
          // Filter out null values (subjects that don't exist)
          const subjectsData = subjectDocs.filter(subject => subject !== null)
          
          console.log('Loaded subjects:', subjectsData)
          console.log('Expected subjects:', studentData.subjects)
          console.log('Missing subjects:', studentData.subjects.filter(id => 
            !subjectsData.some(s => s.id === id)
          ))
          
          setSubjects(subjectsData)
          
          // Set debug info for troubleshooting
          if (subjectsData.length !== studentData.subjects.length) {
            setDebugInfo({
              expected: studentData.subjects.length,
              loaded: subjectsData.length,
              missing: studentData.subjects.filter(id => 
                !subjectsData.some(s => s.id === id)
              )
            })
          }
        } else {
          console.log('No subjects array found in student data')
        }

        setLoading(false)
      } catch (err) {
        console.error('Error loading student data:', err)
        setError('Failed to load dashboard data')
        setLoading(false)
      }
    }

    loadStudentData()
  }, [navigate])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      navigate('/login', { replace: true })
    } catch (err) {
      console.error('Error signing out:', err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" role="status" aria-live="polite">
        <div className="text-center">
          <div 
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
            aria-hidden="true"
          ></div>
          <p className="mt-4 text-gray-600" aria-label="Loading dashboard">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={handleSignOut}
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Sign out and try again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-blue-600" aria-hidden="true" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">MySchola Student Dashboard</h1>
              <p className="text-sm text-gray-500">
                Hi, <span className="font-medium">{student?.name || 'Student'}</span>
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-3" aria-label="Dashboard navigation">
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition"
              aria-label="Return to homepage"
            >
              Back to site
            </Link>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
              aria-label="Sign out of your account"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Sign out
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Subjects</h2>
          <p className="text-gray-600">
            Select a subject to join Zoom sessions, watch recordings, or complete homework.
          </p>
        </div>

        {/* Debug Info - Only show if there's a mismatch */}
        {debugInfo && (
          <div 
            className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4"
            role="alert"
            aria-live="polite"
          >
            <p className="text-sm text-yellow-800 font-medium mb-1">
              ⚠️ Some subjects may not be loading correctly
            </p>
            <p className="text-xs text-yellow-700">
              Expected {debugInfo.expected} subject(s), loaded {debugInfo.loaded}. 
              Please check the browser console for details.
            </p>
          </div>
        )}

        {subjects.length === 0 ? (
          <div 
            className="bg-white rounded-lg shadow p-8 text-center"
            role="region"
            aria-labelledby="no-subjects-heading"
          >
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
            <h3 id="no-subjects-heading" className="text-lg font-semibold text-gray-900 mb-2">
              No Subjects Enrolled
            </h3>
            <p className="text-gray-600 mb-2">You're not enrolled in any subjects yet.</p>
            <p className="text-sm text-gray-500">Please contact your teacher to get enrolled.</p>
          </div>
        ) : (
          <div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Enrolled subjects"
          >
            {subjects.map((subject) => {
              const SubjectIcon = getSubjectIcon(subject.name)
              const subjectColor = getSubjectColor(subject.name)
              
              return (
                <article
                  key={subject.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                  role="listitem"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${subjectColor}`}>
                      <SubjectIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 flex-1">
                      {subject.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {subject.zoomLink && (
                      <a
                        href={subject.zoomLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium"
                        aria-label={`Join Zoom session for ${subject.name}`}
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        Join Zoom
                      </a>
                    )}
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to={`/app/subject/${subject.id}/recordings`}
                        className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium"
                        aria-label={`View recordings for ${subject.name}`}
                      >
                        <Video className="h-4 w-4" aria-hidden="true" />
                        Recordings
                      </Link>
                      <Link
                        to={`/app/subject/${subject.id}/homework`}
                        className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium"
                        aria-label={`View homework for ${subject.name}`}
                      >
                        <FileText className="h-4 w-4" aria-hidden="true" />
                        Homework
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}

export default StudentDashboard

