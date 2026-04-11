import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, FileText, Clock, Download } from 'lucide-react'
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { getAuthorizedStudentSubject } from '../utils/studentAccess'
import { getCanonicalSubjectName } from '../utils/subjectMetadata'

function Homework() {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  const [homeworks, setHomeworks] = useState([])
  const [subject, setSubject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedHomework, setSelectedHomework] = useState(null)
  const [error, setError] = useState('')
  const [accessDenied, setAccessDenied] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      try {
        const user = auth.currentUser
        if (!user) {
          navigate('/login')
          return
        }

        const access = await getAuthorizedStudentSubject(db, user.uid, subjectId)
        if (!access.authorized) {
          setAccessDenied(true)
          setError('You are not enrolled in this subject.')
          setLoading(false)
          return
        }

        setAccessDenied(false)
        setSubject(access.subject)

        const homeworksQuery = query(
          collection(db, 'homeworks'),
          where('subjectId', '==', subjectId)
        )
        
        const homeworksSnapshot = await getDocs(homeworksQuery)
        const homeworksData = homeworksSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        
        setHomeworks(homeworksData)
        setError('')
        setLoading(false)
      } catch (err) {
        console.error('Error loading homework:', err)
        setError('Failed to load homework')
        setLoading(false)
      }
    }

    if (subjectId) {
      setLoading(true)
      setError('')
      setAccessDenied(false)
      loadData()
    }
  }, [subjectId, navigate])

  const formatDate = (timestamp) => {
    if (!timestamp) return 'No due date'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('en-GB', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const isOverdue = (dueDate) => {
    if (!dueDate) return false
    const due = dueDate.toDate ? dueDate.toDate() : new Date(dueDate)
    return due < new Date()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading homework...</p>
        </div>
      </div>
    )
  }

  if (accessDenied) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/app/dashboard"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h1 className="text-xl font-semibold text-gray-900 mb-2">Access denied</h1>
            <p className="text-sm text-gray-600">
              You can only open homework for subjects assigned to your account.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/app/dashboard"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="h-6 w-6 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Homework - {subject ? getCanonicalSubjectName(subject) : 'Subject'}
            </h1>
          </div>
          <p className="text-gray-600">Download your homework assignments.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {selectedHomework ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">{selectedHomework.title}</h2>
              <button
                onClick={() => {
                  setSelectedHomework(null)
                }}
                className="text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
            </div>

            {selectedHomework.description && (
              <p className="text-gray-600 mb-6">{selectedHomework.description}</p>
            )}
            <p className="text-sm text-gray-500 mb-6">
              Due: {formatDate(selectedHomework.dueDate)}
            </p>

            {selectedHomework.attachmentUrl && (
              <a
                href={selectedHomework.attachmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6"
              >
                <Download className="h-5 w-5" />
                Download {selectedHomework.attachmentName || 'homework file'}
              </a>
            )}

            {!selectedHomework.attachmentUrl && (
              <p className="text-gray-600">No homework file attached.</p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {homeworks.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No homework assignments available yet.</p>
              </div>
            ) : (
              homeworks.map((homework) => {
                const overdue = isOverdue(homework.dueDate)
                
                return (
                  <div
                    key={homework.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {homework.title}
                        </h3>
                        {homework.description && (
                          <p className="text-gray-600 mb-2">{homework.description}</p>
                        )}
                        {homework.attachmentUrl && (
                          <a
                            href={homework.attachmentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-2"
                          >
                            <Download className="h-4 w-4" />
                            Download {homework.attachmentName || 'homework file'}
                          </a>
                        )}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Due: {formatDate(homework.dueDate)}
                          </div>
                        </div>
                        {overdue && (
                          <div className="mt-3 text-red-600 text-sm font-medium">
                            Overdue
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => setSelectedHomework(homework)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Homework

