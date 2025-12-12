import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GraduationCap, LogOut, Video, FileText, ExternalLink, Calculator, BookOpen, FlaskConical, Beaker, Atom, BookMarked } from 'lucide-react'
import { auth, db } from '../firebase'
import { signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

// Map subject IDs to icons and colors
const getSubjectIcon = (subjectId) => {
  const id = subjectId.toLowerCase()
  if (id.includes('math')) return { Icon: Calculator, color: 'blue' }
  if (id.includes('english')) return { Icon: BookMarked, color: 'purple' }
  if (id.includes('science') || id.includes('combined') || id.includes('triple')) return { Icon: FlaskConical, color: 'green' }
  if (id.includes('biology')) return { Icon: Beaker, color: 'emerald' }
  if (id.includes('chemistry')) return { Icon: Atom, color: 'cyan' }
  if (id.includes('physics')) return { Icon: Atom, color: 'indigo' }
  return { Icon: BookOpen, color: 'gray' }
}

function StudentDashboard() {
  const navigate = useNavigate()
  const [student, setStudent] = useState(null)
  const [subjects, setSubjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

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

        // Get enrolled subjects
        if (studentData.subjects && studentData.subjects.length > 0) {
          const subjectDocs = await Promise.all(
            studentData.subjects.map(subjectId => 
              getDoc(doc(db, 'subjects', subjectId))
            )
          )
          
          const subjectsData = subjectDocs
            .filter(doc => doc.exists())
            .map(doc => ({ id: doc.id, ...doc.data() }))
          
          setSubjects(subjectsData)
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
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
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">MySchola</span>
            </Link>
            <div className="hidden md:block ml-6 pl-6 border-l border-gray-200">
              <p className="text-sm text-gray-500">Welcome back</p>
              <p className="text-base font-semibold text-gray-900">{student?.name || 'Student'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden sm:block text-sm text-gray-600 hover:text-gray-900 transition font-medium"
            >
              Back to site
            </Link>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition font-medium"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Subjects</h2>
          <p className="text-gray-600 text-lg">Select a subject to join Zoom sessions, watch recordings, or complete homework.</p>
        </div>

        {subjects.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-700 text-lg font-medium mb-2">You're not enrolled in any subjects yet.</p>
            <p className="text-sm text-gray-500">Please contact your teacher to get enrolled.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => {
              const { Icon, color } = getSubjectIcon(subject.id)
              const colorClasses = {
                blue: 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100',
                purple: 'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100',
                green: 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100',
                emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100',
                cyan: 'bg-cyan-50 border-cyan-200 text-cyan-700 hover:bg-cyan-100',
                indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100',
                gray: 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
              }
              
              return (
                <div
                  key={subject.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${colorClasses[color] || colorClasses.gray}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{subject.name}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {subject.zoomLink && (
                      <a
                        href={subject.zoomLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm hover:shadow-md"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Join Zoom Session
                      </a>
                    )}
                    
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        to={`/app/subject/${subject.id}/recordings`}
                        className="flex flex-col items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-3 rounded-lg border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition font-medium"
                      >
                        <Video className="h-5 w-5" />
                        <span className="text-sm">Recordings</span>
                      </Link>
                      <Link
                        to={`/app/subject/${subject.id}/homework`}
                        className="flex flex-col items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-3 rounded-lg border-2 border-green-200 hover:border-green-300 hover:bg-green-50 transition font-medium"
                      >
                        <FileText className="h-5 w-5" />
                        <span className="text-sm">Homework</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}

export default StudentDashboard

