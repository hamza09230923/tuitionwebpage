import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, FileText, Clock, Download, ExternalLink, Send, CheckCircle, ChevronDown, ChevronUp, Folder } from 'lucide-react'
import { auth, db } from '../firebase'
import { collection, query, where, getDocs, addDoc, updateDoc, serverTimestamp, doc } from 'firebase/firestore'
import { getAuthorizedStudentSubject } from '../utils/studentAccess'
import { getCanonicalSubjectName } from '../utils/subjectMetadata'

const getHiddenHomeworkIds = (studentData) => {
  const hiddenIds = Array.isArray(studentData?.hiddenHomeworkIds)
    ? studentData.hiddenHomeworkIds
    : []

  return new Set(hiddenIds.map((id) => String(id)))
}

const getHiddenHomeworkTitleKeywords = (studentData) => {
  const keywords = Array.isArray(studentData?.hiddenHomeworkTitleKeywords)
    ? studentData.hiddenHomeworkTitleKeywords
    : []

  return keywords
    .map((keyword) => String(keyword || '').trim().toLowerCase())
    .filter(Boolean)
}

const isHomeworkHiddenForStudent = (homework, studentData) => {
  if (getHiddenHomeworkIds(studentData).has(String(homework.id))) {
    return true
  }

  const title = String(homework.title || '').toLowerCase()
  return title
    ? getHiddenHomeworkTitleKeywords(studentData).some((keyword) => title.includes(keyword))
    : false
}

function Homework() {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  const [homeworks, setHomeworks] = useState([])
  const [subject, setSubject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedHomework, setSelectedHomework] = useState(null)
  const [error, setError] = useState('')
  const [accessDenied, setAccessDenied] = useState(false)
  const [submissions, setSubmissions] = useState([])
  const [studentName, setStudentName] = useState('')
  const [googleDocsUrls, setGoogleDocsUrls] = useState({})
  const [submittingHomeworkId, setSubmittingHomeworkId] = useState(null)
  const [updatingHomeworkId, setUpdatingHomeworkId] = useState(null)
  const [submitMessage, setSubmitMessage] = useState('')
  const [expandedHomework, setExpandedHomework] = useState({})

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

        const homeworksQuery = query(
          collection(db, 'homeworks'),
          where('subjectId', '==', subjectId)
        )
        
        const homeworksSnapshot = await getDocs(homeworksQuery)
        const subjectHomeworksData = homeworksSnapshot.docs.map(doc => ({
          id: doc.id,
          sourceCollection: 'homeworks',
          visibility: 'subject',
          ...doc.data()
        }))

        let studentHomeworksData = []
        try {
          const studentHomeworksQuery = query(
            collection(db, 'studentHomeworks'),
            where('subjectId', '==', subjectId),
            where('studentId', '==', user.uid)
          )
          const studentHomeworksSnapshot = await getDocs(studentHomeworksQuery)
          studentHomeworksData = studentHomeworksSnapshot.docs.map(doc => ({
            id: doc.id,
            sourceCollection: 'studentHomeworks',
            visibility: 'student',
            ...doc.data()
          }))
        } catch (err) {
          console.warn('Student-specific homework could not be loaded:', err)
        }

        const homeworksData = [...subjectHomeworksData, ...studentHomeworksData]
          .filter((homework) => !isHomeworkHiddenForStudent(homework, access.student))
        
        setHomeworks(homeworksData)

        setStudentName(access.student?.name || access.student?.displayName || '')

        // Load student's submissions for this subject
        const submissionsQuery = query(
          collection(db, 'submissions'),
          where('studentId', '==', user.uid),
          where('subjectId', '==', subjectId)
        )
        const submissionsSnapshot = await getDocs(submissionsQuery)
        const submissionsData = submissionsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setSubmissions(submissionsData)

        setError('')
        setLoading(false)
      } catch (err) {
        console.error('Error loading homework:', err)
        setError('Failed to load homework')
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

  const handleSubmitHomework = async (e, homework) => {
    e.preventDefault()
    const url = googleDocsUrls[homework.id] || ''
    if (!url.trim()) {
      setSubmitMessage(`Please enter a Google Docs link for "${homework.title}"`)
      return
    }

    // Basic validation for Google Docs URL
    if (!url.includes('docs.google.com')) {
      setSubmitMessage('Please enter a valid Google Docs link')
      return
    }

    setSubmittingHomeworkId(homework.id)
    setSubmitMessage('')

    try {
      const user = auth.currentUser
      if (!user) {
        navigate('/login')
        return
      }

      await addDoc(collection(db, 'submissions'), {
        studentId: user.uid,
        studentName: studentName,
        subjectId: subjectId,
        homeworkId: homework.id,
        homeworkTitle: homework.title,
        googleDocsUrl: url.trim(),
        submittedAt: serverTimestamp()
      })

      setGoogleDocsUrls(prev => ({ ...prev, [homework.id]: '' }))
      setSubmitMessage(`"${homework.title}" submitted successfully!`)

      // Refresh submissions
      const submissionsQuery = query(
        collection(db, 'submissions'),
        where('studentId', '==', user.uid),
        where('subjectId', '==', subjectId)
      )
      const submissionsSnapshot = await getDocs(submissionsQuery)
      const submissionsData = submissionsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setSubmissions(submissionsData)
    } catch (err) {
      console.error('Error submitting homework:', err)
      setSubmitMessage('Failed to submit homework. Please try again.')
    } finally {
      setSubmittingHomeworkId(null)
    }
  }

  const handleUpdateSubmission = async (e, homework, submission) => {
    e.preventDefault()
    const url = googleDocsUrls[homework.id] || ''
    if (!url.trim()) {
      setSubmitMessage('Please enter a Google Docs link')
      return
    }

    // Basic validation for Google Docs URL
    if (!url.includes('docs.google.com')) {
      setSubmitMessage('Please enter a valid Google Docs link')
      return
    }

    setUpdatingHomeworkId(homework.id)
    setSubmitMessage('')

    try {
      await updateDoc(doc(db, 'submissions', submission.id), {
        googleDocsUrl: url.trim(),
        updatedAt: serverTimestamp()
      })

      setGoogleDocsUrls(prev => ({ ...prev, [homework.id]: '' }))
      setSubmitMessage('Link updated successfully!')

      // Refresh submissions
      const user = auth.currentUser
      const submissionsQuery = query(
        collection(db, 'submissions'),
        where('studentId', '==', user.uid),
        where('subjectId', '==', subjectId)
      )
      const submissionsSnapshot = await getDocs(submissionsQuery)
      const submissionsData = submissionsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setSubmissions(submissionsData)
    } catch (err) {
      console.error('Error updating submission:', err)
      setSubmitMessage('Failed to update link. Please try again.')
    } finally {
      setUpdatingHomeworkId(null)
    }
  }

  // Get submission for a specific homework
  const getSubmissionForHomework = (homeworkId) => {
    return submissions.find(sub => sub.homeworkId === homeworkId)
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
              You can only open homework for subjects assigned to your account.
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
            <FileText className="h-6 w-6 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Homework - {subject ? getCanonicalSubjectName(subject) : 'Subject'}
            </h1>
          </div>
          <p className="text-gray-600">Download your homework assignments.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {selectedHomework ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">{selectedHomework.title}</h2>
              <button
                onClick={() => {
                  setSelectedHomework(null)
                }}
                className="text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
            </div>

            {selectedHomework.description && (
              <p className="text-gray-600 mb-6">{selectedHomework.description}</p>
            )}
            <p className="text-sm text-gray-500 mb-6">
              Due: {formatDate(selectedHomework.dueDate)}
            </p>

            {selectedHomework.attachmentUrl && (
              <a
                href={selectedHomework.attachmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6"
              >
                <Download className="h-5 w-5" />
                Download {selectedHomework.attachmentName || 'homework file'}
              </a>
            )}

            {!selectedHomework.attachmentUrl && (
              <p className="text-gray-600">No homework file attached.</p>
            )}
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
                const overdue = isOverdue(homework.dueDate)
                const submission = getSubmissionForHomework(homework.id)
                const isSubmitting = submittingHomeworkId === homework.id
                const isExpanded = expandedHomework[homework.id] === true
                
                // Status badge config
                let statusBadge = null
                if (submission) {
                  if (submission.marked) {
                    statusBadge = (
                      <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Marked
                      </span>
                    )
                  } else {
                    statusBadge = (
                      <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-yellow-100 text-yellow-700">
                        <Clock className="h-3 w-3 mr-1" />
                        Submitted
                      </span>
                    )
                  }
                } else {
                  statusBadge = (
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                      overdue ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {overdue ? 'Overdue' : 'Not Submitted'}
                    </span>
                  )
                }
                
                return (
                  <div
                    key={`${homework.sourceCollection || 'homeworks'}-${homework.id}`}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                  >
                    {/* Compact Header - Click to Expand */}
                    <button
                      onClick={() => setExpandedHomework(prev => ({ ...prev, [homework.id]: !isExpanded }))}
                      className={`w-full p-4 transition flex items-center justify-between ${
                        isExpanded 
                          ? 'bg-blue-50 border-b-2 border-blue-200' 
                          : 'bg-white border-b border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className={`p-2 rounded-lg ${isExpanded ? 'bg-blue-100' : 'bg-gray-100'}`}>
                          <Folder className={`h-5 w-5 ${isExpanded ? 'text-blue-700' : 'text-gray-600'}`} />
                        </div>
                        <div className="text-left flex-1 min-w-0">
                          <h3 className={`font-semibold truncate ${isExpanded ? 'text-blue-900' : 'text-gray-900'}`}>
                            {homework.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Due: {formatDate(homework.dueDate)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 ml-4">
                        {statusBadge}
                        <div className={`p-1 rounded-full transition-transform duration-200 ${isExpanded ? 'bg-blue-200' : 'bg-gray-200'}`}>
                          {isExpanded ? (
                            <ChevronUp className={`h-5 w-5 ${isExpanded ? 'text-blue-700' : 'text-gray-500'}`} />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Expandable Content */}
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-4 space-y-4">
                        {/* Homework Details */}
                        {homework.description && (
                          <p className="text-gray-600 text-sm">{homework.description}</p>
                        )}
                        {homework.attachmentUrl && (
                          <a
                            href={homework.attachmentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 text-sm"
                          >
                            <Download className="h-4 w-4" />
                            Download {homework.attachmentName || 'homework file'}
                          </a>
                        )}
                        {overdue && (
                          <p className="text-red-600 text-sm font-medium">Overdue</p>
                        )}

                        {/* Divider */}
                        <div className="border-t border-gray-200 pt-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Send className="h-4 w-4 text-green-600" />
                            <h4 className="font-semibold text-gray-900">Your Submission</h4>
                          </div>

                          {submission ? (
                            /* Submitted State - with update option if not marked and not overdue */
                            <div className={`rounded-lg p-4 ${submission.marked ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
                              <div className="flex items-start gap-3">
                                {submission.marked ? (
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                ) : (
                                  <Clock className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                                )}
                                <div className="flex-1 min-w-0">
                                  <p className={`text-sm font-medium ${submission.marked ? 'text-green-800' : 'text-yellow-800'}`}>
                                    {submission.marked ? 'Marked by Teacher' : 'Pending Review'}
                                  </p>
                                  <p className="text-sm text-gray-600 mt-1">
                                    Submitted: {submission.submittedAt?.toDate
                                      ? submission.submittedAt.toDate().toLocaleString('en-GB')
                                      : 'Pending'}
                                  </p>
                                  {submission.markedAt && (
                                    <p className="text-sm text-green-600 mt-1">
                                      Marked: {submission.markedAt?.toDate
                                        ? submission.markedAt.toDate().toLocaleString('en-GB')
                                        : 'Yes'}
                                    </p>
                                  )}
                                  
                                  {/* Show current link and open button */}
                                  <div className="flex items-center gap-2 mt-3">
                                    <a
                                      href={submission.googleDocsUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                                    >
                                      <ExternalLink className="h-4 w-4" />
                                      Open Your Work
                                    </a>
                                  </div>

                                  {/* Update link option - only if not marked and not overdue */}
                                  {!submission.marked && !overdue && (
                                    <div className="mt-4 pt-3 border-t border-yellow-200">
                                      <p className="text-xs text-gray-500 mb-2">Need to change your link? Update it below:</p>
                                      <form onSubmit={(e) => handleUpdateSubmission(e, homework, submission)} className="space-y-2">
                                        <input
                                          type="url"
                                          defaultValue={submission.googleDocsUrl}
                                          onChange={(e) => setGoogleDocsUrls(prev => ({ ...prev, [homework.id]: e.target.value }))}
                                          placeholder="https://docs.google.com/document/d/..."
                                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                          disabled={updatingHomeworkId === homework.id}
                                        />
                                        {submitMessage && updatingHomeworkId === homework.id && (
                                          <p className={`text-sm ${submitMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                                            {submitMessage}
                                          </p>
                                        )}
                                        <button
                                          type="submit"
                                          disabled={updatingHomeworkId === homework.id}
                                          className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm"
                                        >
                                          {updatingHomeworkId === homework.id ? (
                                            <>
                                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                              Updating...
                                            </>
                                          ) : (
                                            <>
                                              <Send className="h-4 w-4" />
                                              Update Link
                                            </>
                                          )}
                                        </button>
                                      </form>
                                    </div>
                                  )}

                                  {/* Message if can't update */}
                                  {!submission.marked && overdue && (
                                    <p className="text-xs text-red-500 mt-3">
                                      ⏰ Overdue - submission is locked. Contact your teacher if you need to make changes.
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          ) : (
                            /* Submit Form */
                            <div>
                              <p className="text-sm text-gray-600 mb-3">
                                Paste your Google Docs link below. Set sharing to <span className="font-medium">Anyone with link can edit</span>.
                              </p>
                              <form onSubmit={(e) => handleSubmitHomework(e, homework)} className="space-y-3">
                                <input
                                  type="url"
                                  value={googleDocsUrls[homework.id] || ''}
                                  onChange={(e) => setGoogleDocsUrls(prev => ({ ...prev, [homework.id]: e.target.value }))}
                                  placeholder="https://docs.google.com/document/d/..."
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                  disabled={isSubmitting}
                                  required
                                />
                                {submitMessage && submittingHomeworkId === homework.id && (
                                  <p className={`text-sm ${submitMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                                    {submitMessage}
                                  </p>
                                )}
                                <button
                                  type="submit"
                                  disabled={isSubmitting}
                                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                >
                                  {isSubmitting ? (
                                    <>
                                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                      Submitting...
                                    </>
                                  ) : (
                                    <>
                                      <Send className="h-4 w-4" />
                                      Submit
                                    </>
                                  )}
                                </button>
                              </form>
                            </div>
                          )}
                        </div>
                      </div>
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

