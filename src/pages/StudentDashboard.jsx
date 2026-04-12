import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  BookOpen, 
  LogOut, 
  Video, 
  FileText, 
  ExternalLink,
  Calculator,
  BookMarked,
  FlaskConical,
  Globe,
  Music,
  Palette,
  History,
  Languages,
  Atom,
  GraduationCap
} from 'lucide-react'
import { auth, db } from '../firebase'
import { signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { getStudentSubjectIds, isTutorialStudent } from '../utils/studentAccess'
import { getCanonicalSubjectName } from '../utils/subjectMetadata'

// Function to get subject icon based on subject name
const getSubjectIcon = (subjectName) => {
  const name = subjectName?.toLowerCase() || ''
  
  if (name.includes('math') || name.includes('maths')) {
    return Calculator
  } else if (name.includes('english') || name.includes('literature') || name.includes('language')) {
    return BookMarked
  } else if (name.includes('science') || name.includes('physics') || name.includes('chemistry') || name.includes('biology')) {
    return FlaskConical
  } else if (name.includes('geography') || name.includes('geography')) {
    return Globe
  } else if (name.includes('history')) {
    return History
  } else if (name.includes('music')) {
    return Music
  } else if (name.includes('art') || name.includes('design')) {
    return Palette
  } else if (name.includes('language') || name.includes('french') || name.includes('spanish') || name.includes('german')) {
    return Languages
  } else if (name.includes('computer') || name.includes('ict') || name.includes('it')) {
    return Atom
  } else {
    return GraduationCap
  }
}

// Function to get subject color based on subject name
const getSubjectColor = (subjectName) => {
  const name = subjectName?.toLowerCase() || ''
  
  if (name.includes('math') || name.includes('maths')) {
    return 'bg-blue-50 border-blue-200 text-blue-700'
  } else if (name.includes('english') || name.includes('literature') || name.includes('language')) {
    return 'bg-purple-50 border-purple-200 text-purple-700'
  } else if (name.includes('science') || name.includes('physics') || name.includes('chemistry') || name.includes('biology')) {
    return 'bg-green-50 border-green-200 text-green-700'
  } else if (name.includes('geography')) {
    return 'bg-cyan-50 border-cyan-200 text-cyan-700'
  } else if (name.includes('history')) {
    return 'bg-amber-50 border-amber-200 text-amber-700'
  } else if (name.includes('music')) {
    return 'bg-pink-50 border-pink-200 text-pink-700'
  } else if (name.includes('art') || name.includes('design')) {
    return 'bg-rose-50 border-rose-200 text-rose-700'
  } else {
    return 'bg-gray-50 border-gray-200 text-gray-700'
  }
}

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
const SCIENCE_SUBJECTS = ['biology', 'chemistry', 'physics']
const BIOLOGY_CHEMISTRY_CRASH_COURSE_ZOOM_LINK = 'https://us06web.zoom.us/s/81775136769?pwd=VxunmI72c7rCcPotVtzobCSZuuAESW.1#success'

const normalizeSubjectName = (subjectName) => String(subjectName || '').toLowerCase()
const normalizeSubjectId = (subjectId) => String(subjectId || '').toLowerCase()
const getSubjectBaseKey = (subjectOrId) => {
  if (typeof subjectOrId === 'string') {
    const id = normalizeSubjectId(subjectOrId)

    if (id.startsWith('biology_') || id === 'biology') {
      return 'biology'
    }
    if (id.startsWith('chemistry_') || id === 'chemistry') {
      return 'chemistry'
    }
    if (id.startsWith('physics_') || id === 'physics') {
      return 'physics'
    }

    return id
  }

  const id = normalizeSubjectId(subjectOrId?.id)
  const name = normalizeSubjectName(subjectOrId?.name)

  if (id.startsWith('biology_') || name.includes('biology')) {
    return 'biology'
  }
  if (id.startsWith('chemistry_') || name.includes('chemistry')) {
    return 'chemistry'
  }
  if (id.startsWith('physics_') || name.includes('physics')) {
    return 'physics'
  }

  return id || name
}

const getScienceCardTitle = (key) => key.charAt(0).toUpperCase() + key.slice(1)

const getScienceSubjectCard = (subjects, key) => {
  const exactSubject = subjects.find((subject) => {
    const id = normalizeSubjectId(subject.id)
    const name = normalizeSubjectName(subject.name)
    return id === `${key}_001` || id.startsWith(`${key}_`) || name.includes(key)
  })
  if (exactSubject) {
    return {
      key,
      subject: exactSubject,
      title: getScienceCardTitle(key),
      sourceLabel: null
    }
  }

  const fallbackSubject = subjects.find((subject) => {
    const name = normalizeSubjectName(subject.name)
    return name.includes('triple science') || name.includes('combined science')
  })

  if (fallbackSubject) {
    return {
      key,
      subject: fallbackSubject,
      title: getScienceCardTitle(key),
      sourceLabel: fallbackSubject.name
    }
  }

  return {
    key,
    subject: null,
    title: getScienceCardTitle(key),
    sourceLabel: null
  }
}

function StudentDashboard() {
  const navigate = useNavigate()
  const [student, setStudent] = useState(null)
  const [studentUid, setStudentUid] = useState('')
  const [subjects, setSubjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [debugInfo, setDebugInfo] = useState(null)
  const [tutorialAccess, setTutorialAccess] = useState(false)
  const [unlockedSubjects, setUnlockedSubjects] = useState(readAccessList())
  const [unlockSubjectId, setUnlockSubjectId] = useState(null)
  const [pinInput, setPinInput] = useState('')
  const [pinError, setPinError] = useState('')

  useEffect(() => {
    const loadStudentData = async () => {
      try {
        const user = auth.currentUser
        if (!user) {
          navigate('/login')
          return
        }
        setStudentUid(user.uid)

        // Get student document
        const studentDoc = await getDoc(doc(db, 'students', user.uid))
        if (!studentDoc.exists()) {
          setError('Student profile not found')
          setLoading(false)
          return
        }

        const studentData = studentDoc.data()
        setStudent(studentData)
        setTutorialAccess(isTutorialStudent(studentData))
        setDebugInfo(null)
        const studentSubjectIds = getStudentSubjectIds(studentData)

        // Debug: Log student data
        console.log('Student data:', studentData)
        console.log('Student subjects array:', studentSubjectIds)

        // Get enrolled subjects with better error handling
        if (studentSubjectIds.length > 0) {
          const subjectDocs = await Promise.all(
            studentSubjectIds.map(async (subjectId) => {
              try {
                const subjectDoc = await getDoc(doc(db, 'subjects', subjectId))
                if (!subjectDoc.exists()) {
                  console.warn(`Subject document not found for ID: ${subjectId}`)
                  return null
                }
                return { id: subjectDoc.id, ...subjectDoc.data() }
              } catch (err) {
                console.error(`Error fetching subject ${subjectId}:`, err)
                return null
              }
            })
          )
          
          // Filter out null values (subjects that don't exist)
          const subjectsData = subjectDocs.filter(subject => subject !== null)
          
          console.log('Loaded subjects:', subjectsData)
          console.log('Expected subjects:', studentSubjectIds)
          console.log('Missing subjects:', studentSubjectIds.filter(id => 
            !subjectsData.some(s => s.id === id)
          ))
          
          setSubjects(subjectsData)
          
          // Set debug info for troubleshooting
          if (subjectsData.length !== studentSubjectIds.length) {
            setDebugInfo({
              expected: studentSubjectIds.length,
              loaded: subjectsData.length,
              missing: studentSubjectIds.filter(id => 
                !subjectsData.some(s => s.id === id)
              ),
              mode: 'missing-subject-documents'
            })
          }
        } else {
          console.log('No subjects array found in student data')
          setDebugInfo({
            expected: 0,
            loaded: 0,
            missing: [],
            mode: 'empty-student-subjects'
          })
        }

        setLoading(false)
      } catch (err) {
        console.error('Error loading student data:', err)
        setError('Failed to load dashboard data')
        setLoading(false)
      }
    }

    loadStudentData()
  }, [navigate])


  const isUnlocked = (subject) => {
    const pin = String(getSubjectPin(subject) || '').trim()
    return tutorialAccess || !pin || unlockedSubjects.includes(subject.id)
  }

  const startUnlock = (subjectId) => {
    setUnlockSubjectId(subjectId)
    setPinInput('')
    setPinError('')
  }

  const confirmUnlock = (subject) => {
    const pin = String(getSubjectPin(subject) || '').trim()
    if (pin && pinInput.trim() !== pin) {
      setPinError('Incorrect PIN')
      return
    }

    const updated = Array.from(new Set([...unlockedSubjects, subject.id]))
    setUnlockedSubjects(updated)
    writeAccessList(updated)
    setUnlockSubjectId(null)
    setPinInput('')
    setPinError('')
  }

  const cancelUnlock = () => {
    setUnlockSubjectId(null)
    setPinInput('')
    setPinError('')
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      navigate('/login', { replace: true })
    } catch (err) {
      console.error('Error signing out:', err)
    }
  }

  const scienceSubjectCards = SCIENCE_SUBJECTS.map((key) => getScienceSubjectCard(subjects, key))
  const scienceSubjectIds = new Set(
    scienceSubjectCards
      .filter((card) => card.subject)
      .map((card) => card.subject.id)
  )
  const otherSubjects = subjects.filter((subject) => !scienceSubjectIds.has(subject.id))
  const assignedSubjectIds = getStudentSubjectIds(student)
  const scienceAccessKeys = new Set(
    assignedSubjectIds
      .map((subjectId) => getSubjectBaseKey(subjectId))
      .filter((key) => SCIENCE_SUBJECTS.includes(key))
  )
  const hasBiologyChemistryCrashCourse =
    scienceAccessKeys.has('biology') &&
    scienceAccessKeys.has('chemistry') &&
    !scienceAccessKeys.has('physics')

  const renderSubjectCard = (subject, options = {}) => {
    const displayName = options.displayName || getCanonicalSubjectName(subject)
    const cardKey = options.cardKey || subject.id
    const sourceLabel = options.sourceLabel || null
    const SubjectIcon = getSubjectIcon(displayName)
    const subjectColor = getSubjectColor(displayName)

    return (
      <article
        key={cardKey}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
        role="listitem"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${subjectColor}`}>
            <SubjectIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-gray-900">
              {displayName}
            </h3>
            {sourceLabel && sourceLabel !== displayName && (
              <p className="text-sm text-gray-500">
                Uses content from {sourceLabel}
              </p>
            )}
          </div>
        </div>
        
        <div className="space-y-3">
          {isUnlocked(subject) ? (
            <>
              {subject.zoomLink && (
                <a
                  href={subject.zoomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium"
                  aria-label={`Join Zoom session for ${displayName}`}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Join Zoom
                </a>
              )}

              <div className="grid grid-cols-2 gap-2">
                <Link
                  to={`/app/subject/${subject.id}/recordings`}
                  className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium"
                  aria-label={`View recordings for ${displayName}`}
                >
                  <Video className="h-4 w-4" aria-hidden="true" />
                  Recordings
                </Link>
                <Link
                  to={`/app/subject/${subject.id}/homework`}
                  className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium"
                  aria-label={`View homework for ${displayName}`}
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Homework
                </Link>
              </div>
            </>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-gray-600">This subject is locked. Enter the PIN to unlock.</p>
              {unlockSubjectId === subject.id ? (
                <div className="space-y-2">
                  <input
                    type="password"
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject PIN"
                  />
                  {pinError && (
                    <p className="text-sm text-red-600">{pinError}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => confirmUnlock(subject)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Unlock
                    </button>
                    <button
                      type="button"
                      onClick={cancelUnlock}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => startUnlock(subject.id)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Enter PIN
                </button>
              )}
            </div>
          )}
        </div>
      </article>
    )
  }

  const renderUnavailableScienceCard = (title) => {
    const SubjectIcon = getSubjectIcon(title)
    const subjectColor = getSubjectColor(title)

    return (
      <article
        key={title}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        role="listitem"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${subjectColor}`}>
            <SubjectIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 flex-1">
            {title}
          </h3>
        </div>

        <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-center">
          <p className="text-sm text-gray-600">This subject has not been added to this account yet.</p>
        </div>
      </article>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" role="status" aria-live="polite">
        <div className="text-center">
          <div 
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
            aria-hidden="true"
          ></div>
          <p className="mt-4 text-gray-600" aria-label="Loading dashboard">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={handleSignOut}
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Sign out and try again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-blue-600" aria-hidden="true" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">MySchola Student Dashboard</h1>
              <p className="text-sm text-gray-500">
                Hi, <span className="font-medium">{student?.name || 'Student'}</span>
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-3" aria-label="Dashboard navigation">
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition"
              aria-label="Return to homepage"
            >
              Back to site
            </Link>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
              aria-label="Sign out of your account"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Sign out
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Subjects</h2>
          <p className="text-gray-600">
            Select a subject to join Zoom sessions, watch recordings, or download homework.
          </p>
        </div>

        {/* Debug Info - Only show if there's a mismatch */}
        {debugInfo?.mode === 'missing-subject-documents' && (
          <div 
            className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4"
            role="alert"
            aria-live="polite"
          >
            <p className="text-sm text-yellow-800 font-medium mb-1">
              Some subjects may not be loading correctly
            </p>
            <p className="text-xs text-yellow-700">
              Expected {debugInfo.expected} subject(s), loaded {debugInfo.loaded}. 
              Please check the browser console for details.
            </p>
          </div>
        )}

        {hasBiologyChemistryCrashCourse && (
          <section
            className="mb-8 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-6 shadow-sm"
            aria-labelledby="crash-course-heading"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-emerald-600 p-3 text-white">
                <FlaskConical className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Crash Course
                </p>
                <h3 id="crash-course-heading" className="text-xl font-semibold text-gray-900 mt-1">
                  Biology and Chemistry
                </h3>
                <p className="text-gray-700 mt-2">
                  Your crash course runs on <span className="font-semibold">Sunday from 5:00 PM to 7:00 PM</span>.
                </p>
                <a
                  href={BIOLOGY_CHEMISTRY_CRASH_COURSE_ZOOM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Join Your Lesson
                </a>
                <p className="mt-3 text-sm text-emerald-800 break-all">
                  Zoom link:{' '}
                  <a
                    href={BIOLOGY_CHEMISTRY_CRASH_COURSE_ZOOM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline hover:text-emerald-900"
                  >
                    {BIOLOGY_CHEMISTRY_CRASH_COURSE_ZOOM_LINK}
                  </a>
                </p>
                <p className="mt-2 text-sm text-emerald-800">
                  Meeting ID: <span className="font-medium">817 7513 6769</span>
                </p>
                <p className="mt-1 text-sm text-emerald-800">
                  Passcode: <span className="font-medium">119761</span>
                </p>
              </div>
            </div>
          </section>
        )}

        {subjects.length === 0 ? (
          <div 
            className="bg-white rounded-lg shadow p-8 text-center"
            role="region"
            aria-labelledby="no-subjects-heading"
          >
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
            <h3 id="no-subjects-heading" className="text-lg font-semibold text-gray-900 mb-2">
              No Subjects Enrolled
            </h3>
            {debugInfo?.mode === 'missing-subject-documents' ? (
              <>
                <p className="text-gray-600 mb-2">
                  This account has subject IDs assigned, but the matching subject records could not be loaded.
                </p>
                {debugInfo.missing.length > 0 && (
                  <p className="text-sm text-red-600 mb-2">
                    Missing subject IDs: {debugInfo.missing.join(', ')}
                  </p>
                )}
                <p className="text-sm text-gray-500">
                  Check that those exact document IDs exist in the Firestore `subjects` collection.
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600 mb-2">You're not enrolled in any subjects yet.</p>
                <p className="text-sm text-gray-500">
                  Check the Firestore document at `students/{studentUid}` and make sure `subjects` is set to
                  `["biology_001", "chemistry_001"]`.
                </p>
              </>
            )}
          </div>
        ) : (
          <div className="space-y-10">
            <section>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Science Subjects</h3>
                <p className="text-sm text-gray-600">
                  Biology, Chemistry, and Physics are shown here.
                </p>
              </div>
              <div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                role="list"
                aria-label="Science subjects"
              >
                {scienceSubjectCards.map((card) => (
                  card.subject
                    ? renderSubjectCard(card.subject, {
                      cardKey: `${card.key}-${card.subject.id}`,
                      displayName: card.title,
                      sourceLabel: card.sourceLabel
                    })
                    : renderUnavailableScienceCard(card.title)
                ))}
              </div>
            </section>

            {otherSubjects.length > 0 && (
              <section>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Other Subjects</h3>
                </div>
                <div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  role="list"
                  aria-label="Other subjects"
                >
                  {otherSubjects.map((subject) => renderSubjectCard(subject))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default StudentDashboard

