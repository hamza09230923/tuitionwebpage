import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Video, Play, BookOpen } from 'lucide-react'
import { auth, db } from '../firebase'
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore'
import { getAuthorizedStudentSubject } from '../utils/studentAccess'
import { getCanonicalSubjectName } from '../utils/subjectMetadata'

const ACCESS_STORAGE_KEY = 'subjectAccess'

const readAccessList = () => {
  try {
    const raw = localStorage.getItem(ACCESS_STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const writeAccessList = (list) => {
  localStorage.setItem(ACCESS_STORAGE_KEY, JSON.stringify(list))
}

const getSubjectPin = (subject) => subject?.pin || subject?.accessPin || ''

function Recordings() {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  const [recordings, setRecordings] = useState([])
  const [filteredRecordings, setFilteredRecordings] = useState([])
  const [subject, setSubject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [pinRequired, setPinRequired] = useState(false)
  const [pinValue, setPinValue] = useState('')
  const [pinError, setPinError] = useState('')
  const [subjectPin, setSubjectPin] = useState('')
  const [accessList, setAccessList] = useState(readAccessList())
  const [reloadKey, setReloadKey] = useState(0)
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
        const pin = getSubjectPin(access.subject)
        setSubjectPin(pin)

        const unlocked = !pin || accessList.includes(subjectId)
        if (!unlocked) {
          setPinRequired(true)
          setLoading(false)
          return
        }

        let recordingsQuery
        try {
          recordingsQuery = query(
            collection(db, 'recordings'),
            where('subjectId', '==', subjectId),
            orderBy('date', 'desc')
          )
        } catch (err) {
          console.warn('OrderBy failed, using simple query:', err)
          recordingsQuery = query(
            collection(db, 'recordings'),
            where('subjectId', '==', subjectId)
          )
        }

        const recordingsSnapshot = await getDocs(recordingsQuery)
        const recordingsData = recordingsSnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          .filter(recording => recording.approvalStatus === 'approved' || !recording.approvalStatus)
          .sort((a, b) => {
            const dateA = a.date?.toDate ? a.date.toDate() : (a.date ? new Date(a.date) : new Date(0))
            const dateB = b.date?.toDate ? b.date.toDate() : (b.date ? new Date(b.date) : new Date(0))
            return dateB - dateA
          })

        setRecordings(recordingsData)
        setFilteredRecordings(recordingsData)
        setPinRequired(false)
        setLoading(false)
      } catch (err) {
        console.error('Error loading recordings:', err)
        setError('Failed to load recordings')
        setLoading(false)
      }
    }

    if (subjectId) {
      setLoading(true)
      setError('')
      setAccessDenied(false)
      loadData()
    }
  }, [subjectId, navigate, accessList, reloadKey])

  const handleUnlock = (e) => {
    e.preventDefault()
    const pin = String(subjectPin || '').trim()
    if (!pin) {
      setPinRequired(false)
      return
    }

    if (pinValue.trim() !== pin) {
      setPinError('Incorrect PIN')
      return
    }

    const updated = Array.from(new Set([...accessList, subjectId]))
    setAccessList(updated)
    writeAccessList(updated)
    setPinValue('')
    setPinError('')
    setPinRequired(false)
    setReloadKey((prev) => prev + 1)
  }

  const isEnglishSubject = () => {
    if (!subject) return false
    const name = subject.name?.toLowerCase() || ''
    return name.includes('english')
  }

  const groupRecordings = () => {
    const groups = {}

    filteredRecordings.forEach(recording => {
      const board = recording.examBoard || 'Other'
      const tier = recording.tier || (isEnglishSubject() ? 'General' : 'Other')
      const key = `${board}_${tier}`

      if (!groups[key]) {
        groups[key] = {
          examBoard: board,
          tier: tier,
          recordings: []
        }
      }
      groups[key].recordings.push(recording)
    })

    return Object.values(groups).sort((a, b) => {
      if (a.examBoard !== b.examBoard) {
        if (a.examBoard === 'AQA') return -1
        if (b.examBoard === 'AQA') return 1
        if (a.examBoard === 'Edexcel') return -1
        if (b.examBoard === 'Edexcel') return 1
        return a.examBoard.localeCompare(b.examBoard)
      }
      if (a.tier === 'Foundation') return -1
      if (b.tier === 'Foundation') return 1
      if (a.tier === 'Higher') return -1
      if (b.tier === 'Higher') return 1
      return a.tier.localeCompare(b.tier)
    })
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Date not available'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading recordings...</p>
        </div>
      </div>
    )
  }

  if (pinRequired) {
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
            <h1 className="text-xl font-semibold text-gray-900 mb-2">Enter Subject PIN</h1>
            <p className="text-sm text-gray-600 mb-4">
              This subject is locked. Enter the PIN to access recordings.
            </p>
            <form onSubmit={handleUnlock} className="space-y-4">
              <input
                type="password"
                value={pinValue}
                onChange={(e) => setPinValue(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject PIN"
                autoFocus
              />
              {pinError && (
                <div className="text-sm text-red-600">{pinError}</div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Unlock Subject
              </button>
            </form>
          </div>
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
              You can only open recordings for subjects assigned to your account.
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
            <Video className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Recordings - {subject ? getCanonicalSubjectName(subject) : 'Subject'}
            </h1>
          </div>
          <p className="text-gray-600">Watch past lesson recordings for this subject.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {filteredRecordings.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No recordings available yet.</p>
            <p className="text-sm text-gray-500 mt-2">Check back later for new recordings.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {groupRecordings().map((group, groupIndex) => (
              <div key={groupIndex} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {group.examBoard}
                        {!isEnglishSubject() && group.tier && (
                          <span className="ml-2 text-base font-normal text-gray-600">
                            - {group.tier}
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {group.recordings.length} recording{group.recordings.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {group.recordings.map((recording) => (
                    <div
                      key={recording.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-gray-900 mb-2">
                            {recording.title}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {formatDate(recording.date)}
                          </p>
                        </div>
                        <a
                          href={recording.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
                        >
                          <Play className="h-4 w-4" />
                          Watch
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Recordings
