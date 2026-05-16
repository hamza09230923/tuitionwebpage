import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { createResource } from '../api/functionsClient'

const STORAGE_KEY = 'pendingResource'

function ResourceShareLink() {
  const navigate = useNavigate()
  const location = useLocation()
  const [checkingAuth, setCheckingAuth] = useState(true)
  const [authorized, setAuthorized] = useState(false)
  const [pending, setPending] = useState(null)
  const [subjectName, setSubjectName] = useState('')
  const [shareLink, setShareLink] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAuthorized(false)
        setCheckingAuth(false)
        navigate('/login', { replace: true })
        return
      }

      try {
        const adminDoc = await getDoc(doc(db, 'admins', user.uid))
        const teacherDoc = adminDoc.exists() ? null : await getDoc(doc(db, 'teachers', user.uid))

        if (adminDoc.exists() || teacherDoc?.exists()) {
          setAuthorized(true)
        } else {
          setAuthorized(false)
          navigate('/login', { replace: true })
        }
      } catch (err) {
        console.error('Error verifying role:', err)
        setAuthorized(false)
        navigate('/login', { replace: true })
      } finally {
        setCheckingAuth(false)
      }
    })

    return () => unsubscribe()
  }, [navigate])

  useEffect(() => {
    const stateResource = location.state?.pendingResource
    if (stateResource) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stateResource))
      setPending(stateResource)
      return
    }

    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setPending(JSON.parse(stored))
      } catch {
        setPending(null)
      }
    }
  }, [location.state])

  useEffect(() => {
    const loadSubjectName = async () => {
      if (!pending?.subjectId) return
      try {
        const subjectDoc = await getDoc(doc(db, 'subjects', pending.subjectId))
        if (subjectDoc.exists()) {
          setSubjectName(subjectDoc.data().name || '')
        }
      } catch (err) {
        console.error('Error loading subject:', err)
      }
    }

    loadSubjectName()
  }, [pending])

  const handleSave = async (e) => {
    e.preventDefault()
    if (!pending) {
      setMessage('No pending upload found. Go back and upload again.')
      return
    }

    if (!shareLink) {
      setMessage('Paste the HiDrive share link to continue.')
      return
    }

    setLoading(true)
    setMessage('')
    try {
      await createResource({
        subjectId: pending.subjectId,
        title: pending.title,
        description: pending.description,
        fileUrl: shareLink,
        fileName: pending.fileName || null,
        fileContentType: pending.fileContentType || null,
        fileSize: pending.fileSize || null,
        hidrivePath: pending.hidrivePath,
        hidriveFileId: pending.hidriveFileId,
        visibility: pending.visibility || 'subject',
        studentId: pending.studentId || null,
        studentName: pending.studentName || null,
        studentEmail: pending.studentEmail || null
      })

      sessionStorage.removeItem(STORAGE_KEY)
      setMessage('Resource added successfully!')
    } catch (err) {
      console.error('Error saving resource:', err)
      setMessage('Failed to save resource')
    } finally {
      setLoading(false)
    }
  }

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verifying access...</p>
        </div>
      </div>
    )
  }

  if (!authorized) {
    return null
  }

  if (!pending) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center">
          <p className="text-gray-700 mb-4">No pending upload found. Please upload a file first.</p>
          <button
            onClick={() => navigate('/admin', { replace: true })}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back to Admin
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Paste HiDrive Share Link</h1>
          <p className="text-sm text-gray-600 mt-2">
            Your upload is complete. Create a share link in HiDrive and paste it below.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Resource Details</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p><span className="font-medium">Title:</span> {pending.title}</p>
            <p><span className="font-medium">Subject:</span> {subjectName || pending.subjectId}</p>
            <p>
              <span className="font-medium">Access:</span>{' '}
              {pending.visibility === 'student'
                ? pending.studentName || pending.studentEmail || pending.studentId || 'Specific student'
                : 'All students enrolled in this subject'}
            </p>
            {pending.fileName && (
              <p><span className="font-medium">File:</span> {pending.fileName}</p>
            )}
          </div>
        </div>

        <form onSubmit={handleSave} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4">
            <p>1) Open HiDrive and find the uploaded file.</p>
            <p>2) Click Share → Create link → Copy link.</p>
            <p>3) Paste the link below and click Save Resource.</p>
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            HiDrive Share Link
          </label>
          <input
            type="url"
            value={shareLink}
            onChange={(e) => setShareLink(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="https://hidrive.ionos.com/lnk/..."
            required
          />

          {message && (
            <div className={`mt-4 p-3 rounded-md text-sm ${
              message.includes('successfully')
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {message}
            </div>
          )}

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Resource'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin')}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            >
              Back to Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResourceShareLink
