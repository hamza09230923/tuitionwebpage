import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Video, FileText, Save, CheckCircle, Trash2, Download, Clock } from 'lucide-react'
import { auth, db } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, serverTimestamp, doc, getDoc, updateDoc, query, where, orderBy, deleteDoc } from 'firebase/firestore'
import { createHidriveUpload } from '../api/functionsClient'
import { getCanonicalSubjectName } from '../utils/subjectMetadata'

function Admin() {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState(null)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedSubjectData, setSelectedSubjectData] = useState(null)
  const [activeTab, setActiveTab] = useState('recording') // 'recording', 'homework', 'approve', 'manage', or 'manage-homework'
  
  // Recording form
  const [recordingTitle, setRecordingTitle] = useState('')
  const [recordingFile, setRecordingFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [examBoard, setExamBoard] = useState('')
  const [tier, setTier] = useState('')
  
  // Approval
  const [pendingRecordings, setPendingRecordings] = useState([])
  const [pendingRecordingsLoading, setPendingRecordingsLoading] = useState(false)
  const [managedRecordings, setManagedRecordings] = useState([])
  const [managedRecordingsLoading, setManagedRecordingsLoading] = useState(false)
  const [deletingRecordingId, setDeletingRecordingId] = useState('')
  
  // Homework form
  const [homeworkTitle, setHomeworkTitle] = useState('')
  const [homeworkDescription, setHomeworkDescription] = useState('')
  const [homeworkDueDate, setHomeworkDueDate] = useState('')
  const [homeworkFile, setHomeworkFile] = useState(null)
  const [homeworkUploadProgress, setHomeworkUploadProgress] = useState(0)
  const [managedHomeworks, setManagedHomeworks] = useState([])
  const [managedHomeworksLoading, setManagedHomeworksLoading] = useState(false)
  const [deletingHomeworkId, setDeletingHomeworkId] = useState('')
  
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const isAdmin = userRole === 'admin'

  // Require a signed-in user with admin or teacher role document
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAuthenticated(false)
        setCheckingAuth(false)
        navigate('/login', { replace: true })
        return
      }

      try {
        const adminDoc = await getDoc(doc(db, 'admins', user.uid))
        const teacherDoc = adminDoc.exists() ? null : await getDoc(doc(db, 'teachers', user.uid))

        if (adminDoc.exists() || teacherDoc?.exists()) {
          setAuthenticated(true)
          setUserRole(adminDoc.exists() ? 'admin' : 'teacher')
        } else {
          setAuthenticated(false)
          setUserRole(null)
          navigate('/login', { replace: true })
        }
      } catch (err) {
        console.error('Error verifying role:', err)
        setAuthenticated(false)
        setUserRole(null)
        navigate('/login', { replace: true })
      } finally {
        setCheckingAuth(false)
      }
    })

    return () => unsubscribe()
  }, [navigate])

  useEffect(() => {
    const loadSubjects = async () => {
      try {
        const subjectsSnapshot = await getDocs(collection(db, 'subjects'))
        const subjectsData = subjectsSnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          .sort((a, b) => getCanonicalSubjectName(a).localeCompare(getCanonicalSubjectName(b)))
        setSubjects(subjectsData)
        if (subjectsData.length > 0) {
          const firstSubject = subjectsData[0]
          setSelectedSubject(firstSubject.id)
          setSelectedSubjectData(firstSubject)
        }
      } catch (err) {
        console.error('Error loading subjects:', err)
      }
    }

    if (authenticated) {
      loadSubjects()
    }
  }, [authenticated])

  useEffect(() => {
    const loadPendingRecordings = async () => {
      if (activeTab === 'approve' && authenticated) {
        setPendingRecordingsLoading(true)
        try {
          const recordingsQuery = query(
            collection(db, 'recordings'),
            where('approvalStatus', '==', 'pending')
          )
          const recordingsSnapshot = await getDocs(recordingsQuery)
          const recordingsData = await Promise.all(
            recordingsSnapshot.docs.map(async (recordingDoc) => {
              const data = recordingDoc.data()
              // Get subject name
              let subjectName = subjects.find((subject) => subject.id === data.subjectId)
                ? getCanonicalSubjectName(subjects.find((subject) => subject.id === data.subjectId))
                : 'Unknown'

              if (data.subjectId) {
                try {
                  const subjectDocRef = doc(db, 'subjects', data.subjectId)
                  const subjectDoc = await getDoc(subjectDocRef)
                  if (subjectDoc.exists() && subjectName === 'Unknown') {
                    subjectName = getCanonicalSubjectName({
                      id: subjectDoc.id,
                      ...subjectDoc.data()
                    })
                  }
                } catch (err) {
                  console.error('Error fetching subject:', err)
                }
              }
              return {
                id: recordingDoc.id,
                ...data,
                subjectName
              }
            })
          )
          setPendingRecordings(
            recordingsData.sort((a, b) => {
              const dateA = a.date?.toDate ? a.date.toDate() : (a.date ? new Date(a.date) : new Date(0))
              const dateB = b.date?.toDate ? b.date.toDate() : (b.date ? new Date(b.date) : new Date(0))
              return dateB - dateA
            })
          )
        } catch (err) {
          console.error('Error loading pending recordings:', err)
        } finally {
          setPendingRecordingsLoading(false)
        }
      }
    }
    loadPendingRecordings()
  }, [activeTab, authenticated, subjects])

  useEffect(() => {
    const loadManagedRecordings = async () => {
      if (activeTab !== 'manage' || !authenticated || !selectedSubject) {
        return
      }

      setManagedRecordingsLoading(true)
      try {
        let recordingsQuery
        try {
          recordingsQuery = query(
            collection(db, 'recordings'),
            where('subjectId', '==', selectedSubject),
            orderBy('date', 'desc')
          )
        } catch (err) {
          console.warn('Recordings orderBy failed, using simple query:', err)
          recordingsQuery = query(
            collection(db, 'recordings'),
            where('subjectId', '==', selectedSubject)
          )
        }

        const recordingsSnapshot = await getDocs(recordingsQuery)
        const recordingsData = recordingsSnapshot.docs
          .map((recordingDoc) => ({
            id: recordingDoc.id,
            ...recordingDoc.data()
          }))
          .sort((a, b) => {
            const dateA = a.date?.toDate ? a.date.toDate() : (a.date ? new Date(a.date) : new Date(0))
            const dateB = b.date?.toDate ? b.date.toDate() : (b.date ? new Date(b.date) : new Date(0))
            return dateB - dateA
          })

        setManagedRecordings(recordingsData)
      } catch (err) {
        console.error('Error loading subject recordings:', err)
        setMessage('Failed to load recordings for this subject')
      } finally {
        setManagedRecordingsLoading(false)
      }
    }

    loadManagedRecordings()
  }, [activeTab, authenticated, selectedSubject])

  useEffect(() => {
    const loadManagedHomeworks = async () => {
      if (activeTab !== 'manage-homework' || !authenticated || !selectedSubject) {
        return
      }

      setManagedHomeworksLoading(true)
      try {
        const homeworksQuery = query(
          collection(db, 'homeworks'),
          where('subjectId', '==', selectedSubject)
        )

        const homeworksSnapshot = await getDocs(homeworksQuery)
        const homeworksData = homeworksSnapshot.docs
          .map((homeworkDoc) => ({
            id: homeworkDoc.id,
            ...homeworkDoc.data()
          }))
          .sort((a, b) => {
            const dateA = a.dueDate?.toDate ? a.dueDate.toDate() : (a.dueDate ? new Date(a.dueDate) : new Date(0))
            const dateB = b.dueDate?.toDate ? b.dueDate.toDate() : (b.dueDate ? new Date(b.dueDate) : new Date(0))
            return dateB - dateA
          })

        setManagedHomeworks(homeworksData)
      } catch (err) {
        console.error('Error loading homeworks:', err)
        setMessage('Failed to load homework for this subject')
      } finally {
        setManagedHomeworksLoading(false)
      }
    }

    loadManagedHomeworks()
  }, [activeTab, authenticated, selectedSubject])

  useEffect(() => {
    // Update selected subject data when subject changes
    const subject = subjects.find(s => s.id === selectedSubject)
    setSelectedSubjectData(subject || null)
    // Reset form fields when subject changes
    setExamBoard('')
    setTier('')
  }, [selectedSubject, subjects])

  // Check if subject is English (no tier needed)
  const isEnglishSubject = () => {
    if (!selectedSubjectData) return false
    const name = selectedSubjectData.name?.toLowerCase() || ''
    return name.includes('english')
  }

  const uploadFileWithProgress = (file, uploadConfig, onProgress) => new Promise((resolve, reject) => {
    if (!uploadConfig?.uploadUrl) {
      reject(new Error('Upload URL is missing'))
      return
    }

    const xhr = new XMLHttpRequest()
    xhr.open(uploadConfig.method || 'PUT', uploadConfig.uploadUrl, true)
    xhr.responseType = 'json'
    xhr.timeout = 180000

    if (uploadConfig.headers) {
      Object.entries(uploadConfig.headers).forEach(([key, value]) => {
        if (value) {
          xhr.setRequestHeader(key, value)
        }
      })
    }

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100)
        if (onProgress) {
          onProgress(progress)
        }
      }
    }

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        if (onProgress) {
          onProgress(100)
        }
        let responseData = xhr.response
        if (!responseData && xhr.responseText) {
          try {
            responseData = JSON.parse(xhr.responseText)
          } catch {
            responseData = null
          }
        }
        resolve({ response: responseData })
      } else {
        const responseText = String(xhr.responseText || '').trim()
        reject(new Error(responseText || `Upload failed (${xhr.status})`))
      }
    }

    xhr.onerror = () => {
      reject(new Error('Upload failed'))
    }

    xhr.ontimeout = () => {
      reject(new Error('Upload timed out'))
    }

    xhr.send(file)
  })

  const handleSubmitRecording = async (e) => {
    e.preventDefault()
    if (!selectedSubject || !recordingTitle || !examBoard) {
      setMessage('Please fill in all required fields')
      return
    }

    if (!recordingFile) {
      setMessage('Please upload a video file to continue')
      return
    }

    if (!isEnglishSubject() && !tier) {
      setMessage('Please select a tier (Foundation or Higher)')
      return
    }

    setLoading(true)
    setMessage('')
    try {
      setUploadProgress(0)
      const uploadConfig = await createHidriveUpload({
        subjectId: selectedSubject,
        fileName: recordingFile.name,
        contentType: recordingFile.type,
        uploadType: 'recording'
      })

      const uploadResult = await uploadFileWithProgress(recordingFile, uploadConfig, setUploadProgress)
      const uploadResponse = uploadResult?.response
      const hidriveFileId =
        uploadResponse?.id ||
        uploadResponse?.pid ||
        uploadResponse?.file_id ||
        null

      const pendingRecording = {
        subjectId: selectedSubject,
        title: recordingTitle,
        examBoard: examBoard,
        tier: isEnglishSubject() ? null : tier,
        hidrivePath: uploadConfig.hidrivePath,
        hidriveFileId,
        fileName: recordingFile.name
      }

      sessionStorage.setItem('pendingRecording', JSON.stringify(pendingRecording))

      setRecordingTitle('')
      setRecordingFile(null)
      setUploadProgress(0)
      setExamBoard('')
      setTier('')

      navigate('/admin/share-link', { state: { pendingRecording } })
    } catch (err) {
      console.error('Error adding recording:', err)
      setMessage(err?.message || 'Failed to upload recording')
      setUploadProgress(0)
    } finally {
      setLoading(false)
    }
  }

  const handleApproveRecording = async (recordingId) => {
    try {
      await updateDoc(doc(db, 'recordings', recordingId), {
        approvalStatus: 'approved',
        approvedAt: serverTimestamp()
      })
      setPendingRecordings((current) => current.filter((recording) => recording.id !== recordingId))
      setManagedRecordings((current) => current.map((recording) => (
        recording.id === recordingId
          ? { ...recording, approvalStatus: 'approved', approvedAt: new Date() }
          : recording
      )))
      setMessage('Recording approved successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error approving recording:', err)
      setMessage('Failed to approve recording')
    }
  }

  const handleRejectRecording = async (recordingId) => {
    try {
      await updateDoc(doc(db, 'recordings', recordingId), {
        approvalStatus: 'rejected',
        rejectedAt: serverTimestamp()
      })
      setPendingRecordings((current) => current.filter((recording) => recording.id !== recordingId))
      setManagedRecordings((current) => current.map((recording) => (
        recording.id === recordingId
          ? { ...recording, approvalStatus: 'rejected', rejectedAt: new Date() }
          : recording
      )))
      setMessage('Recording rejected')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error rejecting recording:', err)
      setMessage('Failed to reject recording')
    }
  }

  const handleDeleteRecording = async (recordingId, recordingTitle) => {
    if (!isAdmin) {
      setMessage('Only admins can delete recordings')
      return
    }

    const confirmed = window.confirm(
      `Delete "${recordingTitle}"? This removes the recording from Firestore and students will lose access immediately.`
    )

    if (!confirmed) {
      return
    }

    setDeletingRecordingId(recordingId)
    try {
      await deleteDoc(doc(db, 'recordings', recordingId))
      setPendingRecordings((current) => current.filter((recording) => recording.id !== recordingId))
      setManagedRecordings((current) => current.filter((recording) => recording.id !== recordingId))
      setMessage('Recording deleted successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error deleting recording:', err)
      setMessage('Failed to delete recording')
    } finally {
      setDeletingRecordingId('')
    }
  }

  const handleDeleteHomework = async (homeworkId, homeworkTitle) => {
    const confirmed = window.confirm(
      `Delete "${homeworkTitle}"? Students will no longer be able to access this homework.`
    )

    if (!confirmed) {
      return
    }

    setDeletingHomeworkId(homeworkId)
    try {
      await deleteDoc(doc(db, 'homeworks', homeworkId))
      setManagedHomeworks((current) => current.filter((homework) => homework.id !== homeworkId))
      setMessage('Homework deleted successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error deleting homework:', err)
      setMessage('Failed to delete homework')
    } finally {
      setDeletingHomeworkId('')
    }
  }

  const formatRecordingDate = (timestamp) => {
    if (!timestamp) {
      return 'Date not available'
    }

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    if (Number.isNaN(date.getTime())) {
      return 'Date not available'
    }

    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getStatusStyles = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-700'
      case 'rejected':
        return 'bg-red-100 text-red-700'
      case 'pending':
      default:
        return 'bg-yellow-100 text-yellow-700'
    }
  }

  const formatHomeworkDate = (timestamp) => {
    if (!timestamp) {
      return 'No due date'
    }

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    if (Number.isNaN(date.getTime())) {
      return 'No due date'
    }

    return date.toLocaleString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const isHomeworkOverdue = (timestamp) => {
    if (!timestamp) {
      return false
    }

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    if (Number.isNaN(date.getTime())) {
      return false
    }

    return date < new Date()
  }

  const handleSubmitHomework = async (e) => {
    e.preventDefault()
    if (!selectedSubject || !homeworkTitle) {
      setMessage('Please fill in all required fields')
      return
    }

    if (!homeworkFile) {
      setMessage('Please upload a homework file')
      return
    }

    setLoading(true)
    setMessage('')
    try {
      let hidrivePath = null
      let hidriveFileId = null
      let attachmentName = null
      let attachmentContentType = null
      let attachmentSize = null

      if (homeworkFile) {
        setHomeworkUploadProgress(0)
        const uploadConfig = await createHidriveUpload({
          subjectId: selectedSubject,
          fileName: homeworkFile.name,
          contentType: homeworkFile.type,
          uploadType: 'homework'
        })

        const uploadResult = await uploadFileWithProgress(
          homeworkFile,
          uploadConfig,
          setHomeworkUploadProgress
        )
        const uploadResponse = uploadResult?.response
        hidriveFileId =
          uploadResponse?.id ||
          uploadResponse?.pid ||
          uploadResponse?.file_id ||
          null

        hidrivePath = uploadConfig.hidrivePath
        attachmentName = homeworkFile.name
        attachmentContentType = homeworkFile.type
        attachmentSize = homeworkFile.size
      }

      const pendingHomework = {
        subjectId: selectedSubject,
        title: homeworkTitle,
        description: homeworkDescription,
        dueDate: homeworkDueDate ? new Date(homeworkDueDate).toISOString() : null,
        attachmentName,
        attachmentContentType,
        attachmentSize,
        hidrivePath,
        hidriveFileId,
        fileName: homeworkFile.name
      }

      sessionStorage.setItem('pendingHomework', JSON.stringify(pendingHomework))
      setHomeworkTitle('')
      setHomeworkDescription('')
      setHomeworkDueDate('')
      setHomeworkFile(null)
      setHomeworkUploadProgress(0)
      navigate('/admin/homework-share-link', { state: { pendingHomework } })
    } catch (err) {
      console.error('Error adding homework:', err)
      setMessage(err?.message || 'Failed to add homework')
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

  if (!authenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <button
              onClick={async () => {
                await auth.signOut()
                navigate('/login', { replace: true })
              }}
              className="text-gray-600 hover:text-gray-900 underline text-sm"
            >
              Sign out
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setActiveTab('recording')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeTab === 'recording'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Video className="h-4 w-4" />
            Add Recording
          </button>
          <button
            onClick={() => setActiveTab('homework')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeTab === 'homework'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FileText className="h-4 w-4" />
            Add Homework
          </button>
          <button
            onClick={() => setActiveTab('approve')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${
              activeTab === 'approve'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <CheckCircle className="h-4 w-4" />
            Approve Recordings
            {pendingRecordings.length > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {pendingRecordings.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('manage')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeTab === 'manage'
                ? 'bg-slate-800 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Video className="h-4 w-4" />
            Manage Recordings
          </button>
          <button
            onClick={() => setActiveTab('manage-homework')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeTab === 'manage-homework'
                ? 'bg-emerald-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FileText className="h-4 w-4" />
            Manage Homework
          </button>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.includes('successfully') 
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {message}
          </div>
        )}

        {/* Subject Selection */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Subject
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {subjects.map(subject => (
              <option key={subject.id} value={subject.id}>
                {getCanonicalSubjectName(subject)}
              </option>
            ))}
          </select>
        </div>

        {/* Recording Form */}
        {activeTab === 'recording' && (
          <form onSubmit={handleSubmitRecording} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Recording</h2>
            <p className="text-sm text-gray-600 mb-6">
              Recordings will be pending approval before students can view them.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={recordingTitle}
                  onChange={(e) => setRecordingTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Algebra Basics - Lesson 1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Exam Board *
                </label>
                <select
                  value={examBoard}
                  onChange={(e) => setExamBoard(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Exam Board</option>
                  <option value="AQA">AQA</option>
                  <option value="Edexcel">Edexcel</option>
                </select>
              </div>

              {!isEnglishSubject() && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tier *
                  </label>
                  <select
                    value={tier}
                    onChange={(e) => setTier(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Tier</option>
                    <option value="Foundation">Foundation</option>
                    <option value="Higher">Higher</option>
                  </select>
                </div>
              )}

              {isEnglishSubject() && (
                <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                  <p className="text-sm text-blue-800">
                    English subjects do not have Foundation/Higher tiers.
                  </p>
                </div>
              )}
              
              <div className="bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700">
                After upload, you will be taken to a new page to paste the HiDrive share link.
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Video File
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null
                    setRecordingFile(file)
                    setUploadProgress(0)
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <p className="text-sm text-gray-600 mt-2">Uploading... {uploadProgress}%</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Save className="h-4 w-4" />
              {loading ? 'Adding...' : 'Add Recording (Pending Approval)'}
            </button>
          </form>
        )}

        {/* Approval Tab */}
        {activeTab === 'approve' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Approve Recordings</h2>
            <p className="text-sm text-gray-600 mb-6">
              Review and approve pending recordings. Only approved recordings will be visible to students.
            </p>

            {pendingRecordingsLoading ? (
              <div className="text-center py-8 text-gray-600">
                Loading pending recordings...
              </div>
            ) : pendingRecordings.length === 0 ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <p className="text-gray-600">No pending recordings to approve.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {pendingRecordings.map((recording) => (
                  <div
                    key={recording.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {recording.title}
                        </h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><span className="font-medium">Subject:</span> {recording.subjectName}</p>
                          <p><span className="font-medium">Exam Board:</span> {recording.examBoard}</p>
                          {recording.tier && (
                            <p><span className="font-medium">Tier:</span> {recording.tier}</p>
                          )}
                          {recording.date && (
                            <p><span className="font-medium">Date:</span> {
                              recording.date.toDate ? 
                                recording.date.toDate().toLocaleDateString('en-GB') : 
                                'N/A'
                            }</p>
                          )}
                        </div>
                        <a
                          href={recording.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2"
                        >
                          <Video className="h-4 w-4" />
                          Preview Video
                        </a>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleApproveRecording(recording.id)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4" />
                          Approve
                        </button>
                        <button
                          onClick={() => handleRejectRecording(recording.id)}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                          Reject
                        </button>
                        {isAdmin && (
                          <button
                            onClick={() => handleDeleteRecording(recording.id, recording.title)}
                            disabled={deletingRecordingId === recording.id}
                            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition flex items-center gap-2 disabled:opacity-50"
                          >
                            <Trash2 className="h-4 w-4" />
                            {deletingRecordingId === recording.id ? 'Deleting...' : 'Delete'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'manage' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Manage Recordings</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Review all recordings for the selected subject and remove anything that should no longer be available.
                </p>
              </div>
              {!isAdmin && (
                <div className="bg-amber-50 border border-amber-200 text-amber-800 text-sm rounded-md px-3 py-2">
                  Delete is limited to admin accounts.
                </div>
              )}
            </div>

            {managedRecordingsLoading ? (
              <div className="text-center py-8 text-gray-600">
                Loading recordings...
              </div>
            ) : managedRecordings.length === 0 ? (
              <div className="text-center py-8">
                <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No recordings found for this subject.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {managedRecordings.map((recording) => (
                  <div
                    key={recording.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {recording.title}
                          </h3>
                          <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${getStatusStyles(recording.approvalStatus)}`}>
                            {recording.approvalStatus || 'approved'}
                          </span>
                        </div>

                        <div className="space-y-1 text-sm text-gray-600">
                          <p><span className="font-medium">Exam Board:</span> {recording.examBoard || 'N/A'}</p>
                          {recording.tier && (
                            <p><span className="font-medium">Tier:</span> {recording.tier}</p>
                          )}
                          <p><span className="font-medium">Date:</span> {formatRecordingDate(recording.date || recording.createdAt)}</p>
                          {recording.createdByRole && (
                            <p><span className="font-medium">Uploaded by:</span> {recording.createdByRole}</p>
                          )}
                        </div>

                        {recording.videoUrl && (
                          <a
                            href={recording.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-3"
                          >
                            <Video className="h-4 w-4" />
                            Preview Video
                          </a>
                        )}
                      </div>

                      {isAdmin && (
                        <button
                          onClick={() => handleDeleteRecording(recording.id, recording.title)}
                          disabled={deletingRecordingId === recording.id}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 whitespace-nowrap"
                        >
                          <Trash2 className="h-4 w-4" />
                          {deletingRecordingId === recording.id ? 'Deleting...' : 'Delete'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'manage-homework' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Manage Homework</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Review homework for the selected subject, open the attachment, and remove work that should no longer appear to students.
                </p>
              </div>
            </div>

            {managedHomeworksLoading ? (
              <div className="text-center py-8 text-gray-600">
                Loading homework...
              </div>
            ) : managedHomeworks.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No homework found for this subject.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {managedHomeworks.map((homework) => {
                  const overdue = isHomeworkOverdue(homework.dueDate)

                  return (
                    <div
                      key={homework.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {homework.title}
                            </h3>
                            {overdue && (
                              <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-red-100 text-red-700">
                                Overdue
                              </span>
                            )}
                          </div>

                          {homework.description && (
                            <p className="text-sm text-gray-600 mb-3">
                              {homework.description}
                            </p>
                          )}

                          <div className="space-y-1 text-sm text-gray-600">
                            <p className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span><span className="font-medium">Due:</span> {formatHomeworkDate(homework.dueDate)}</span>
                            </p>
                            {homework.attachmentName && (
                              <p><span className="font-medium">File:</span> {homework.attachmentName}</p>
                            )}
                            {homework.createdByRole && (
                              <p><span className="font-medium">Uploaded by:</span> {homework.createdByRole}</p>
                            )}
                          </div>

                          {homework.attachmentUrl && (
                            <a
                              href={homework.attachmentUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 text-sm mt-3"
                            >
                              <Download className="h-4 w-4" />
                              Open Attachment
                            </a>
                          )}
                        </div>

                        <button
                          onClick={() => handleDeleteHomework(homework.id, homework.title)}
                          disabled={deletingHomeworkId === homework.id}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 whitespace-nowrap"
                        >
                          <Trash2 className="h-4 w-4" />
                          {deletingHomeworkId === homework.id ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Homework Form */}
        {activeTab === 'homework' && (
          <form onSubmit={handleSubmitHomework} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Homework</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={homeworkTitle}
                  onChange={(e) => setHomeworkTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={homeworkDescription}
                  onChange={(e) => setHomeworkDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="3"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Due Date
                </label>
                <input
                  type="datetime-local"
                  value={homeworkDueDate}
                  onChange={(e) => setHomeworkDueDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Homework File *
                </label>
                <input
                  type="file"
                  required
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null
                    setHomeworkFile(file)
                    setHomeworkUploadProgress(0)
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {homeworkUploadProgress > 0 && homeworkUploadProgress < 100 && (
                  <p className="text-sm text-gray-600 mt-2">Uploading... {homeworkUploadProgress}%</p>
                )}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700">
                After upload, you will be taken to a new page to paste the HiDrive share link.
              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Save className="h-4 w-4" />
              {loading ? 'Adding...' : 'Add Homework'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Admin
