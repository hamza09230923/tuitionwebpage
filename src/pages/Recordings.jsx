import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Video, Play, BookOpen, AlertCircle } from 'lucide-react'
import { auth, db } from '../firebase'
import { collection, query, where, getDocs, orderBy, doc, getDoc } from 'firebase/firestore'

function Recordings() {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  const [recordings, setRecordings] = useState([])
  const [filteredRecordings, setFilteredRecordings] = useState([])
  const [subject, setSubject] = useState(null)
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [studentSettings, setStudentSettings] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        // Check authentication
        const user = auth.currentUser
        if (!user) {
          navigate('/login')
          return
        }

        // Get student document to check exam board/tier settings
        const studentDoc = await getDoc(doc(db, 'students', user.uid))
        if (!studentDoc.exists()) {
          setError('Student profile not found')
          setLoading(false)
          return
        }

        const studentData = studentDoc.data()
        setStudent(studentData)

        // Get subject-specific settings for this student
        // Check if student has subjectSettings object with exam board/tier per subject
        const subjectSettings = studentData.subjectSettings || {}
        const currentSubjectSettings = subjectSettings[subjectId] || null
        setStudentSettings(currentSubjectSettings)

        // Get subject name
        const subjectDocRef = doc(db, 'subjects', subjectId)
        const subjectDoc = await getDoc(subjectDocRef)
        if (subjectDoc.exists()) {
          setSubject({ id: subjectId, ...subjectDoc.data() })
        }

        // Get recordings for this subject
        // Note: If you get an index error, create a composite index in Firestore
        // for: collection='recordings', fields=['subjectId', 'approvalStatus', 'date']
        let recordingsQuery
        try {
          recordingsQuery = query(
            collection(db, 'recordings'),
            where('subjectId', '==', subjectId),
            orderBy('date', 'desc')
          )
        } catch (err) {
          // Fallback if orderBy fails (e.g., missing index or no date field)
          console.warn('OrderBy failed, using simple query:', err)
          recordingsQuery = query(
            collection(db, 'recordings'),
            where('subjectId', '==', subjectId)
          )
        }
        
        const recordingsSnapshot = await getDocs(recordingsQuery)
        // Filter to only show approved recordings (or old recordings without approvalStatus)
        const recordingsData = recordingsSnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          .filter(recording => {
            // Show if approved, or if no approvalStatus field (backward compatibility)
            return recording.approvalStatus === 'approved' || !recording.approvalStatus
          })
          .sort((a, b) => {
            // Sort by date descending
            const dateA = a.date?.toDate ? a.date.toDate() : (a.date ? new Date(a.date) : new Date(0))
            const dateB = b.date?.toDate ? b.date.toDate() : (b.date ? new Date(b.date) : new Date(0))
            return dateB - dateA
          })
        
        setRecordings(recordingsData)
        setLoading(false)
      } catch (err) {
        console.error('Error loading recordings:', err)
        setError('Failed to load recordings')
        setLoading(false)
      }
    }

    if (subjectId) {
      loadData()
    }
  }, [subjectId, navigate])

  // Check if subject is English (no tier)
  const isEnglishSubject = () => {
    if (!subject) return false
    const name = subject.name?.toLowerCase() || ''
    return name.includes('english')
  }

  // Filter recordings based on student's exam board and tier settings
  useEffect(() => {
    if (!recordings.length) {
      setFilteredRecordings([])
      return
    }

    // If student has no settings, show all recordings (backward compatibility)
    if (!studentSettings || !studentSettings.examBoard) {
      setFilteredRecordings(recordings)
      return
    }

    const studentExamBoard = studentSettings.examBoard
    const studentTier = studentSettings.tier

    // Filter recordings to match student's exam board and tier
    const filtered = recordings.filter(recording => {
      const recordingBoard = recording.examBoard
      const recordingTier = recording.tier

      // Must match exam board
      if (recordingBoard !== studentExamBoard) {
        return false
      }

      // For English subjects, no tier matching needed
      if (isEnglishSubject()) {
        return true
      }

      // For other subjects, must match tier
      if (recordingTier && studentTier) {
        return recordingTier === studentTier
      }

      // If recording has no tier but student has tier, don't show it
      // If student has no tier but recording has tier, don't show it
      return !recordingTier && !studentTier
    })

    setFilteredRecordings(filtered)
  }, [recordings, studentSettings, subject])

  // Group filtered recordings by exam board and tier
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
    
    // Sort groups: AQA first, then Edexcel, then others
    // Within each board: Foundation before Higher (if applicable)
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
              Recordings - {subject?.name || 'Subject'}
            </h1>
          </div>
          <p className="text-gray-600">Watch past lesson recordings for this subject.</p>
          {studentSettings && (
            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="text-gray-500">Your settings:</span>
              <span className="font-semibold text-blue-600">
                {studentSettings.examBoard}
                {!isEnglishSubject() && studentSettings.tier && ` - ${studentSettings.tier}`}
              </span>
            </div>
          )}
          {!studentSettings && (
            <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-md p-3 flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium mb-1">No exam board settings found</p>
                <p>Please contact your administrator to set your exam board and tier preferences. Until then, all recordings are shown.</p>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {filteredRecordings.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            {studentSettings ? (
              <>
                <p className="text-gray-600 font-medium mb-2">No recordings available for your settings.</p>
                <p className="text-sm text-gray-500">
                  Your settings: <span className="font-semibold">{studentSettings.examBoard}{!isEnglishSubject() && studentSettings.tier ? ` - ${studentSettings.tier}` : ''}</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {recordings.length > 0 
                    ? `There are ${recordings.length} recording(s) available, but none match your exam board/tier settings.`
                    : 'No recordings have been added for this subject yet.'}
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600">No recordings available yet.</p>
                <p className="text-sm text-gray-500 mt-2">Check back later for new recordings.</p>
              </>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {groupRecordings().map((group, groupIndex) => (
              <div key={groupIndex} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {/* Section Header */}
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

                {/* Recordings List */}
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

