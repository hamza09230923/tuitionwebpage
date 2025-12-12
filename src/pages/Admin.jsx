import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, Video, FileText, Save, X } from 'lucide-react'
import { db } from '../firebase'
import { collection, getDocs, addDoc, serverTimestamp, doc, getDoc, Timestamp } from 'firebase/firestore'

function Admin() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  const [activeTab, setActiveTab] = useState('recording') // 'recording' or 'homework'
  
  // Recording form
  const [recordingTitle, setRecordingTitle] = useState('')
  const [recordingVideoUrl, setRecordingVideoUrl] = useState('')
  
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
          setSelectedSubject(subjectsData[0].id)
        }
      } catch (err) {
        console.error('Error loading subjects:', err)
      }
    }

    if (authenticated) {
      loadSubjects()
    }
  }, [authenticated])

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

  const handleSubmitRecording = async (e) => {
    e.preventDefault()
    if (!selectedSubject || !recordingTitle || !recordingVideoUrl) {
      setMessage('Please fill in all fields')
      return
    }

    setLoading(true)
    setMessage('')
    try {
      await addDoc(collection(db, 'recordings'), {
        subjectId: selectedSubject,
        title: recordingTitle,
        videoUrl: recordingVideoUrl,
        date: serverTimestamp()
      })
      
      setMessage('Recording added successfully!')
      setRecordingTitle('')
      setRecordingVideoUrl('')
    } catch (err) {
      console.error('Error adding recording:', err)
      setMessage('Failed to add recording')
    } finally {
      setLoading(false)
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
        <div className="flex gap-2 mb-6">
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
                  required
                />
              </div>
              
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
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Save className="h-4 w-4" />
              {loading ? 'Adding...' : 'Add Recording'}
            </button>
          </form>
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

