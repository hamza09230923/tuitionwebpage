import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, Video, FileText, Save, X, CheckCircle, Clock } from 'lucide-react'
import { auth, db, storage } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, getDocs, addDoc, serverTimestamp, doc, getDoc, Timestamp, updateDoc, query, where } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

function Admin() {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(false)
  const [authChecking, setAuthChecking] = useState(true)
  const [isTeacher, setIsTeacher] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedSubjectData, setSelectedSubjectData] = useState(null)
  const [activeTab, setActiveTab] = useState('recording') // 'recording', 'homework', or 'approve'
  
  // Recording form
  const [recordingTitle, setRecordingTitle] = useState('')
  const [recordingFile, setRecordingFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(null)
  const [examBoard, setExamBoard] = useState('')
  const [tier, setTier] = useState('')
  const [yearGroup, setYearGroup] = useState('')
  
  // Approval
  const [pendingRecordings, setPendingRecordings] = useState([])
  
  // Homework form
  const [homeworkTitle, setHomeworkTitle] = useState('')
  const [homeworkDescription, setHomeworkDescription] = useState('')
  const [homeworkDueDate, setHomeworkDueDate] = useState('')
  const [questions, setQuestions] = useState([{ question: '', correctAnswer: '' }])
  
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Check Firebase auth and ensure user is a teacher or admin
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        // Not logged in at all – go to login
        navigate('/login', { replace: true })
        setAuthChecking(false)
        return
      }

      try {
        const [teacherDoc, adminDoc] = await Promise.all([
          getDoc(doc(db, 'teachers', user.uid)),
          getDoc(doc(db, 'admins', user.uid))
        ])

        const teacherExists = teacherDoc.exists()
        const adminExists = adminDoc.exists()

        if (teacherExists || adminExists) {
          setAuthenticated(true)
          setIsTeacher(teacherExists)
          setIsAdmin(adminExists)
          setMessage('')
        } else {
          // Logged in but not a teacher/admin
          setMessage('You are not authorised to access the admin panel.')
          navigate('/login', { replace: true })
        }
      } catch (err) {
        console.error('Error checking admin/teacher status:', err)
        setMessage('Failed to verify your permissions.')
        navigate('/login', { replace: true })
      } finally {
        setAuthChecking(false)
      }
    })

    return () => unsubscribe()
  }, [navigate])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/login', { replace: true })
    } catch (err) {
      console.error('Error logging out:', err)
      setMessage('Failed to log out. Please try again.')
    }
  }

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

  // Check if subject is English (no Foundation/Higher tier)
  const isEnglishSubject = () => {
    if (!selectedSubjectData) return false
    const name = selectedSubjectData.name?.toLowerCase() || ''
    return name.includes('english')
  }

  const handleSubmitRecording = async (e) => {
    e.preventDefault()
    if (!selectedSubject || !recordingTitle || !examBoard || !yearGroup) {
      setMessage('Please fill in all required fields')
      return
    }

    if (!recordingFile) {
      setMessage('Please select a video file (MP4)')
      return
    }

    // Foundation/Higher required only for Maths & Sciences (non-English)
    if (!isEnglishSubject() && !tier) {
      setMessage('Please select a tier (Foundation or Higher) for this subject')
      return
    }

    setLoading(true)
    setMessage('')
    try {
      // Upload video file to Firebase Storage with progress
      const filePath = `recordings/${selectedSubject}/${Date.now()}_${recordingFile.name}`
      const fileRef = ref(storage, filePath)
      const uploadTask = uploadBytesResumable(fileRef, recordingFile)

      await new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setUploadProgress(percent)
          },
          (error) => reject(error),
          () => resolve()
        )
      })

      const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)

      await addDoc(collection(db, 'recordings'), {
        subjectId: selectedSubject,
        title: recordingTitle,
        videoUrl: downloadUrl,
        originalFileName: recordingFile.name,
        examBoard: examBoard,
        tier: isEnglishSubject() ? null : tier,
        yearGroup,
        // Auto-approve recordings created from the teacher/admin panel
        approvalStatus: 'approved',
        date: serverTimestamp(),
        createdAt: serverTimestamp()
      })
      
      setMessage('Recording added successfully! It will be visible to students after approval.')
      setRecordingTitle('')
      setRecordingFile(null)
      setExamBoard('')
      setTier('')
      setYearGroup('')
      setUploadProgress(null)
    } catch (err) {
      console.error('Error adding recording:', err)
      setMessage('Failed to add recording')
      setUploadProgress(null)
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

  if (authChecking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking permissions...</p>
        </div>
      </div>
    )
  }

  if (!authenticated) {
    // We already navigated away in the auth effect; render nothing here
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {isAdmin ? 'Admin Panel' : 'Teacher Panel'}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {isAdmin
                  ? 'Manage recordings, homework and approvals.'
                  : 'Add recordings and homework for your students.'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/app/dashboard')}
                className="text-gray-600 hover:text-gray-900 underline text-sm"
              >
                Back to dashboard
              </button>
              <button
                onClick={handleLogout}
                className="text-sm text-red-600 hover:text-red-700 underline"
              >
                Log out
              </button>
            </div>
          </div>
        </div>

        {/* Subject overview (student-like cards) */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Your Subjects</h2>
              <p className="text-sm text-gray-600">Select a subject to manage recordings or homework.</p>
            </div>
          </div>
          {subjects.length === 0 ? (
            <div className="text-gray-600 text-sm">No subjects available.</div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className={`border rounded-lg p-4 transition hover:shadow-sm ${
                    selectedSubject === subject.id ? 'border-blue-500 ring-1 ring-blue-200' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                    {selectedSubject === subject.id && (
                      <span className="text-xs text-blue-600 font-semibold">Selected</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{subject.description || 'No description provided.'}</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedSubject(subject.id)}
                      className="px-3 py-2 text-sm rounded-md border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition"
                    >
                      Manage
                    </button>
                    <button
                      onClick={() => navigate(`/app/subject/${subject.id}/recordings`)}
                      className="px-3 py-2 text-sm rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
                    >
                      View as student
                    </button>
                    <button
                      onClick={() => navigate(`/app/subject/${subject.id}/homework`)}
                      className="px-3 py-2 text-sm rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
                    >
                      Homework view
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
          {isAdmin && (
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
          )}
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year Group *
                </label>
                <select
                  value={yearGroup}
                  onChange={(e) => setYearGroup(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Year Group</option>
                  <option value="Year 7">Year 7</option>
                  <option value="Year 8">Year 8</option>
                  <option value="Year 9">Year 9</option>
                  <option value="Year 10">Year 10</option>
                  <option value="Year 11">Year 11</option>
                </select>
              </div>

              {!isEnglishSubject() && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tier (Maths & Sciences only) *
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
                    ℹ️ English subjects do not use Foundation/Higher tiers. Tier will be stored as not set.
                  </p>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Video file (MP4) *
                </label>
                <input
                  type="file"
                  accept="video/mp4"
                  onChange={(e) => setRecordingFile(e.target.files?.[0] || null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  Please upload an MP4 video file from your device.
                </p>
                {uploadProgress !== null && (
                  <div className="mt-2">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Uploading...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 bg-blue-600 transition-all"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  </div>
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
        {activeTab === 'approve' && isAdmin && (
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
                          {recording.yearGroup && (
                            <p><span className="font-medium">Year:</span> {recording.yearGroup}</p>
                          )}
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

