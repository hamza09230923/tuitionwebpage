import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Video, Play } from 'lucide-react'
import { db } from '../firebase'
import { collection, query, where, getDocs, orderBy, doc, getDoc } from 'firebase/firestore'

function Recordings() {
  const { subjectId } = useParams()
  const [recordings, setRecordings] = useState([])
  const [subject, setSubject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadRecordings = async () => {
      try {
        // Get subject name
        const subjectDocRef = doc(db, 'subjects', subjectId)
        const subjectDoc = await getDoc(subjectDocRef)
        if (subjectDoc.exists()) {
          setSubject({ id: subjectId, ...subjectDoc.data() })
        }

        // Get recordings for this subject
        const recordingsQuery = query(
          collection(db, 'recordings'),
          where('subjectId', '==', subjectId),
          orderBy('date', 'desc')
        )
        
        const recordingsSnapshot = await getDocs(recordingsQuery)
        const recordingsData = recordingsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        
        setRecordings(recordingsData)
        setLoading(false)
      } catch (err) {
        console.error('Error loading recordings:', err)
        setError('Failed to load recordings')
        setLoading(false)
      }
    }

    if (subjectId) {
      loadRecordings()
    }
  }, [subjectId])

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
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {recordings.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No recordings available yet.</p>
            <p className="text-sm text-gray-500 mt-2">Check back later for new recordings.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {recordings.map((recording) => (
              <div
                key={recording.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {recording.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {formatDate(recording.date)}
                    </p>
                  </div>
                  <a
                    href={recording.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <Play className="h-4 w-4" />
                    Watch
                  </a>
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

