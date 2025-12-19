import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, Video, FileText, Save, X, CheckCircle, Clock } from 'lucide-react'
import { db, storage } from '../firebase'
import { collection, getDocs, addDoc, serverTimestamp, doc, getDoc, Timestamp, updateDoc, query, where } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

function Admin() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedSubjectData, setSelectedSubjectData] = useState(null)
  const [activeTab, setActiveTab] = useState('recording') // 'recording', 'homework', or 'approve'
  
  // Recording form
  const [recordingTitle, setRecordingTitle] = useState('')
  const [recordingVideoUrl, setRecordingVideoUrl] = useState('')
  const [recordingFile, setRecordingFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [examBoard, setExamBoard] = useState('')
  const [tier, setTier] = useState('')
  
  // Approval
  const [pendingRecordings, setPendingRecordings] = useState([])
  
  // Homework form
  const [homeworkTitle, setHomeworkTitle] = useState('')
  const [homeworkDescription, setHomeworkDescription] = useState('')
  const [homeworkDueDate, setHomeworkDueDate] = useState('')
  const [questions, setQuestions] = useState([{ question: '', correctAnswer: '' }])
  
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const loadSubjects = async () => {
      try {
        const subjectsSnapshot = await getDocs(collection(db, 'subjects'))
        const subjectsData = subjectsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
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
        try {
          const recordingsQuery = query(
            collection(db, 'recordings'),
            where('approvalStatus', '==', 'pending')
          )
          const recordingsSnapshot = await getDocs(recordingsQuery)
          const recordingsData = await Promise.all(
            recordingsSnapshot.docs.map(async (doc) => {
              const data = doc.data()
              // Get subject name
              let subjectName = 'Unknown'
              if (data.subjectId) {
                try {
                  const subjectDoc = await getDoc(doc(db, 'subjects', data.subjectId))
                  if (subjectDoc.exists()) {
                    subjectName = subjectDoc.data().name
                  }
                } catch (err) {
                  console.error('Error fetching subject:', err)
                }
              }
              return {
                id: doc.id,
                ...data,
                subjectName
              }
            })
          )
          setPendingRecordings(recordingsData)
        } catch (err) {
          console.error('Error loading pending recordings:', err)
        }
      }
    }
    loadPendingRecordings()
  }, [activeTab, authenticated])

  useEffect(() => {
    // Update selected subject data when subject changes
    const subject = subjects.find(s => s.id === selectedSubject)
    setSelectedSubjectData(subject || null)
    // Reset form fields when subject changes
    setExamBoard('')
    setTier('')
  }, [selectedSubject, subjects])

  const handleLogin = (e) => {
    e.preventDefault()
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'
    if (password === adminPassword) {
      setAuthenticated(true)
      setMessage('')
    } else {
      setMessage('Incorrect password')
    }
  }

  const addQuestion = () => {
    setQuestions([...questions, { question: '', correctAnswer: '' }])
  }

  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index))
  }

  const updateQuestion = (index, field, value) => {
    const updated = [...questions]
    updated[index][field] = value
    setQuestions(updated)
  }

  // Check if subject is English (no tier needed)
  const isEnglishSubject = () => {
    if (!selectedSubjectData) return false
    const name = selectedSubjectData.name?.toLowerCase() || ''
    return name.includes('english')
  }

  const handleSubmitRecording = async (e) => {
    e.preventDefault()
    if (!selectedSubject || !recordingTitle || !examBoard) {
      setMessage('Please fill in all required fields')
      return
    }

    // Require either a video URL or an uploaded file
    if (!recordingVideoUrl && !recordingFile) {
      setMessage('Provide a video URL or upload a file')
      return
    }

    // Validate tier for non-English subjects
    if (!isEnglishSubject() && !tier) {
      setMessage('Please select a tier (Foundation or Higher)')
      return
    }

    setLoading(true)
    setMessage('')
    try {
      let finalVideoUrl = recordingVideoUrl

      // If a file is provided, upload to Firebase Storage first
      if (recordingFile) {
        const storagePath = `recordings/${selectedSubject}/${Date.now()}-${recordingFile.name}`
        const storageRef = ref(storage, storagePath)
        const uploadTask = uploadBytesResumable(storageRef, recordingFile)

        await new Promise((resolve, reject) => {
          uploadTask.on('state_changed',
            (snapshot) => {
              const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
              setUploadProgress(progress)
            },
            (err) => reject(err),
            async () => {
              finalVideoUrl = await getDownloadURL(uploadTask.snapshot.ref)
              resolve()
            }
          )
        })
      }

      await addDoc(collection(db, 'recordings'), {
        subjectId: selectedSubject,
        title: recordingTitle,
        videoUrl: finalVideoUrl,
        examBoard: examBoard,
        tier: isEnglishSubject() ? null : tier, // No tier for English
        approvalStatus: 'pending', // Default to pending
        date: serverTimestamp(),
        createdAt: serverTimestamp()
      })
      
      setMessage('Recording added successfully! It will be visible to students after approval.')
      setRecordingTitle('')
      setRecordingVideoUrl('')
      setRecordingFile(null)
      setUploadProgress(0)
      setExamBoard('')
      setTier('')
    } catch (err) {
      console.error('Error adding recording:', err)
      setMessage('Failed to add recording')
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
      setPendingRecordings(pendingRecordings.filter(r => r.id !== recordingId))
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
      setPendingRecordings(pendingRecordings.filter(r => r.id !== recordingId))
      setMessage('Recording rejected')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error rejecting recording:', err)
      setMessage('Failed to reject recording')
    }
  }

  const handleSubmitHomework = async (e) => {
    e.preventDefault()
    if (!selectedSubject || !homeworkTitle || questions.length === 0) {
      setMessage('Please fill in all required fields')
      return
    }

    // Validate questions
    const validQuestions = questions.filter(q => q.question.trim() && q.correctAnswer.trim())
    if (validQuestions.length === 0) {
      setMessage('Please add at least one valid question')
      return
    }

    setLoading(true)
    setMessage('')
    try {
      await addDoc(collection(db, 'homeworks'), {
        subjectId: selectedSubject,
        title: homeworkTitle,
        description: homeworkDescription,
        dueDate: homeworkDueDate ? Timestamp.fromDate(new Date(homeworkDueDate)) : null,
        questions: validQuestions,
        createdAt: serverTimestamp()
      })
      
      setMessage('Homework added successfully!')
      setHomeworkTitle('')
      setHomeworkDescription('')
      setHomeworkDueDate('')
      setQuestions([{ question: '', correctAnswer: '' }])
    } catch (err) {
      console.error('Error adding homework:', err)
      setMessage('Failed to add homework')
    } finally {
      setLoading(false)
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {message && (
              <div className="mb-4 text-red-600 text-sm">{message}</div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <button
            onClick={() => navigate('/')}
            className="mt-4 w-full text-gray-600 hover:text-gray-900 underline text-sm"
          >
            Back to site
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-900 underline text-sm"
            >
              Back to site
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
                {subject.name}
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
                    ℹ️ English subjects do not have Foundation/Higher tiers.
                  </p>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Video URL *
                </label>
                <input
                  type="url"
                  value={recordingVideoUrl}
                  onChange={(e) => setRecordingVideoUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://youtube.com/watch?v=..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or upload video file
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setRecordingFile(e.target.files?.[0] || null)}
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

            {pendingRecordings.length === 0 ? (
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
                      </div>
                    </div>
                  </div>
                ))}
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
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Questions *
                  </label>
                  <button
                    type="button"
                    onClick={addQuestion}
                    className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <Plus className="h-4 w-4" />
                    Add Question
                  </button>
                </div>
                
                <div className="space-y-3">
                  {questions.map((q, index) => (
                    <div key={index} className="border border-gray-200 rounded-md p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Question {index + 1}</span>
                        {questions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeQuestion(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        value={q.question}
                        onChange={(e) => updateQuestion(index, 'question', e.target.value)}
                        placeholder="Question text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <input
                        type="text"
                        value={q.correctAnswer}
                        onChange={(e) => updateQuestion(index, 'correctAnswer', e.target.value)}
                        placeholder="Correct answer"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  ))}
                </div>
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
