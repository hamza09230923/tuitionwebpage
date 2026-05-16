import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Download, ChevronDown, ChevronUp } from 'lucide-react'
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { getAuthorizedStudentSubject } from '../utils/studentAccess'
import { getCanonicalSubjectName } from '../utils/subjectMetadata'

const getHiddenResourceIds = (studentData) => {
  const hiddenIds = Array.isArray(studentData?.hiddenResourceIds)
    ? studentData.hiddenResourceIds
    : []
  return new Set(hiddenIds.map((id) => String(id)))
}

const getHiddenResourceTitleKeywords = (studentData) => {
  const keywords = Array.isArray(studentData?.hiddenResourceTitleKeywords)
    ? studentData.hiddenResourceTitleKeywords
    : []
  return keywords
    .map((keyword) => String(keyword || '').trim().toLowerCase())
    .filter(Boolean)
}

const isResourceHiddenForStudent = (resource, studentData) => {
  if (getHiddenResourceIds(studentData).has(String(resource.id))) return true
  const title = String(resource.title || '').toLowerCase()
  return title
    ? getHiddenResourceTitleKeywords(studentData).some((kw) => title.includes(kw))
    : false
}

function Resources() {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  const [resources, setResources] = useState([])
  const [subject, setSubject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [accessDenied, setAccessDenied] = useState(false)
  const [expanded, setExpanded] = useState({})

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

        const subjectQuery = query(
          collection(db, 'resources'),
          where('subjectId', '==', subjectId)
        )
        const subjectSnap = await getDocs(subjectQuery)
        const subjectResources = subjectSnap.docs.map((doc) => ({
          id: doc.id,
          sourceCollection: 'resources',
          ...doc.data()
        }))

        let studentResources = []
        try {
          const studentQuery = query(
            collection(db, 'studentResources'),
            where('subjectId', '==', subjectId),
            where('studentId', '==', user.uid)
          )
          const studentSnap = await getDocs(studentQuery)
          studentResources = studentSnap.docs.map((doc) => ({
            id: doc.id,
            sourceCollection: 'studentResources',
            ...doc.data()
          }))
        } catch (err) {
          console.warn('Student-specific resources could not be loaded:', err)
        }

        const all = [...subjectResources, ...studentResources]
          .filter((r) => !('approvalStatus' in r) || r.approvalStatus === 'approved')
          .filter((r) => !isResourceHiddenForStudent(r, access.student))

        setResources(all)
        setError('')
        setLoading(false)
      } catch (err) {
        console.error('Error loading resources:', err)
        setError('Failed to load resources')
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading resources...</p>
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
              You can only open resources for subjects assigned to your account.
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
            <BookOpen className="h-6 w-6 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Revision Resources - {subject ? getCanonicalSubjectName(subject) : 'Subject'}
            </h1>
          </div>
          <p className="text-gray-600">Download revision materials and resources.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {resources.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No revision resources available yet.</p>
            </div>
          ) : (
            resources.map((resource) => {
              const isExpanded = expanded[resource.id] === true
              return (
                <div
                  key={`${resource.sourceCollection}-${resource.id}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setExpanded((prev) => ({ ...prev, [resource.id]: !isExpanded }))}
                    className={`w-full p-4 transition flex items-center justify-between ${
                      isExpanded
                        ? 'bg-purple-50 border-b-2 border-purple-200'
                        : 'bg-white border-b border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className={`p-2 rounded-lg ${isExpanded ? 'bg-purple-100' : 'bg-gray-100'}`}>
                        <BookOpen className={`h-5 w-5 ${isExpanded ? 'text-purple-700' : 'text-gray-600'}`} />
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <h3 className={`font-semibold truncate ${isExpanded ? 'text-purple-900' : 'text-gray-900'}`}>
                          {resource.title}
                        </h3>
                        {resource.fileName && (
                          <p className="text-sm text-gray-500">{resource.fileName}</p>
                        )}
                      </div>
                    </div>
                    <div className={`p-1 rounded-full ml-4 ${isExpanded ? 'bg-purple-200' : 'bg-gray-200'}`}>
                      {isExpanded
                        ? <ChevronUp className="h-5 w-5 text-purple-700" />
                        : <ChevronDown className="h-5 w-5 text-gray-500" />}
                    </div>
                  </button>

                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-4 space-y-3">
                      {resource.description && (
                        <p className="text-gray-600 text-sm">{resource.description}</p>
                      )}
                      {resource.fileUrl ? (
                        <a
                          href={resource.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-800 text-sm font-medium"
                        >
                          <Download className="h-4 w-4" />
                          Download {resource.fileName || 'resource'}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-500">No file attached.</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default Resources
