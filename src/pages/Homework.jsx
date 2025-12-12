import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, FileText, CheckCircle, Clock } from 'lucide-react'
import { auth, db } from '../firebase'
import { collection, query, where, getDocs, doc, setDoc, serverTimestamp, getDoc, Timestamp } from 'firebase/firestore'

function Homework() {
  const { subjectId } = useParams()
  const [homeworks, setHomeworks] = useState([])
  const [subject, setSubject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedHomework, setSelectedHomework] = useState(null)
  const [answers, setAnswers] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submissions, setSubmissions] = useState({})

  useEffect(() => {
    const loadData = async () => {
      try {
        // Get subject name
        const subjectDocRef = doc(db, 'subjects', subjectId)
        const subjectDoc = await getDoc(subjectDocRef)
        if (subjectDoc.exists()) {
          setSubject({ id: subjectId, ...subjectDoc.data() })
        }

        // Get homeworks for this subject
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

        // Get user's submissions
        const user = auth.currentUser
        if (user) {
          const submissionsQuery = query(
            collection(db, 'submissions'),
            where('studentId', '==', user.uid),
            where('homeworkId', 'in', homeworksData.map(h => h.id))
          )
          
          const submissionsSnapshot = await getDocs(submissionsQuery)
          const submissionsData = {}
          submissionsSnapshot.docs.forEach(doc => {
            submissionsData[doc.data().homeworkId] = doc.data()
          })
          setSubmissions(submissionsData)
        }

        setLoading(false)
      } catch (err) {
        console.error('Error loading homework:', err)
        setLoading(false)
      }
    }

    if (subjectId) {
      loadData()
    }
  }, [subjectId])

  const handleAnswerChange = (questionIndex, value) => {
    setAnswers({
      ...answers,
      [questionIndex]: value
    })
  }

  const calculateScore = (homework, answers) => {
    let correct = 0
    homework.questions.forEach((question, index) => {
      const userAnswer = answers[index]?.toString().toLowerCase().trim()
      const correctAnswer = question.correctAnswer?.toString().toLowerCase().trim()
      
      if (userAnswer === correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / homework.questions.length) * 100)
  }

  const handleSubmit = async () => {
    if (!selectedHomework) return

    setSubmitting(true)
    try {
      const user = auth.currentUser
      if (!user) {
        alert('You must be logged in to submit homework')
        return
      }

      const score = calculateScore(selectedHomework, answers)
      
      await setDoc(doc(db, 'submissions', `${user.uid}_${selectedHomework.id}`), {
        studentId: user.uid,
        homeworkId: selectedHomework.id,
        subjectId: subjectId,
        answers: answers,
        score: score,
        submittedAt: serverTimestamp()
      })

      // Update local submissions
      setSubmissions({
        ...submissions,
        [selectedHomework.id]: {
          score: score,
          submittedAt: new Date()
        }
      })

      alert(`Homework submitted! Your score: ${score}%`)
      setSelectedHomework(null)
      setAnswers({})
    } catch (err) {
      console.error('Error submitting homework:', err)
      alert('Failed to submit homework. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

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
              Homework - {subject?.name || 'Subject'}
            </h1>
          </div>
          <p className="text-gray-600">Complete and submit your homework assignments.</p>
        </div>

        {selectedHomework ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">{selectedHomework.title}</h2>
              <button
                onClick={() => {
                  setSelectedHomework(null)
                  setAnswers({})
                }}
                className="text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
            </div>

            {selectedHomework.description && (
              <p className="text-gray-600 mb-6">{selectedHomework.description}</p>
            )}

            <div className="space-y-6 mb-6">
              {selectedHomework.questions?.map((question, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Question {index + 1}: {question.question}
                  </label>
                  <input
                    type="text"
                    value={answers[index] || ''}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your answer"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Submit Homework'}
              </button>
              <button
                onClick={() => {
                  setSelectedHomework(null)
                  setAnswers({})
                }}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
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
                const submission = submissions[homework.id]
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
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Due: {formatDate(homework.dueDate)}
                          </div>
                          {homework.questions && (
                            <span>{homework.questions.length} questions</span>
                          )}
                        </div>
                        {submission && (
                          <div className="mt-3 flex items-center gap-2 text-green-600">
                            <CheckCircle className="h-5 w-5" />
                            <span className="font-semibold">Last score: {submission.score}%</span>
                          </div>
                        )}
                        {overdue && !submission && (
                          <div className="mt-3 text-red-600 text-sm font-medium">
                            Overdue
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => setSelectedHomework(homework)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        {submission ? 'Review/Resubmit' : 'Start Homework'}
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

