import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Video, FileText, BookOpen, Save, CheckCircle, Trash2, Download, Clock, ExternalLink, Users, ChevronDown, ChevronUp, Folder, Search, XCircle } from 'lucide-react'
import { auth, db } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { addDoc, arrayRemove, arrayUnion, collection, getDocs, serverTimestamp, doc, getDoc, updateDoc, query, where, orderBy, deleteDoc, writeBatch } from 'firebase/firestore'
import { createR2AdminUpload, createRecording, createHomework, createResource, getR2DownloadUrl, getTeacherClassRoster, migrateLegacyMaterialsToR2 } from '../api/functionsClient'
import { getCanonicalSubjectName, isCrashCourseSubject } from '../utils/subjectMetadata'
import {
  buildClassGroupRecords,
  buildStudentClassLists,
  normalizeTierLabel,
  resolveClassZoomLink
} from '../utils/classGroups'

const getStudentDisplayName = (student) => (
  student?.displayName || student?.name || student?.studentName || student?.email || student?.id || 'Unknown student'
)

const getRecordingCollection = (recording) => recording?.sourceCollection || 'recordings'
const getRecordingDeleteKey = (recordingId, collectionName = 'recordings') => `${collectionName}:${recordingId}`
const getHomeworkCollection = (homework) => homework?.sourceCollection || 'homeworks'
const getHomeworkDeleteKey = (homeworkId, collectionName = 'homeworks') => `${collectionName}:${homeworkId}`
const getSubjectOptionLabel = (subject) => `${getCanonicalSubjectName(subject)} (${subject.id})`
const getLockedExamBoard = (subject) => {
  const id = String(subject?.id || '').toLowerCase()
  const name = String(subject?.name || '').toLowerCase()
  if (name.includes('english') || id.startsWith('english_')) return 'AQA'
  if (name.includes('math') || name.includes('maths') || id.startsWith('maths')) return 'Edexcel'
  return ''
}
const isEnglishSubjectData = (subject) => {
  const id = String(subject?.id || '').toLowerCase()
  const name = String(subject?.name || '').toLowerCase()
  return name.includes('english') || id.startsWith('english_')
}
const normalizeAcademicRouteValue = (value) => String(value || '').trim().toLowerCase()
const isStudentOnSelectedRoute = (student, subjectId, examBoard, tier) => {
  const subjectIds = Array.isArray(student?.subjects) ? student.subjects : []
  if (!subjectIds.includes(subjectId)) return false

  const settings = student?.subjectSettings?.[subjectId]
  return normalizeAcademicRouteValue(settings?.examBoard) === normalizeAcademicRouteValue(examBoard) &&
    normalizeAcademicRouteValue(settings?.tier) === normalizeAcademicRouteValue(tier)
}
const getRecordingAccessKey = (recordingId, studentId, action) => `${action}:${recordingId}:${studentId}`
const getHomeworkAccessKey = (homeworkId, studentId, action) => `${action}:${homeworkId}:${studentId}`
const DEFAULT_UPLOAD_TIMEOUT_MS = 3 * 60 * 1000
const RECORDING_UPLOAD_TIMEOUT_MS = 20 * 60 * 1000

const TUTOR_HANDBOOK_FULL_SECTIONS = [
  {
    number: '01',
    title: 'Tutor Responsibilities',
    intro: 'MySchola tutors are responsible for delivering effective and engaging lessons that support student progress.',
    bullets: [
      'Preparing and delivering lessons',
      'Supporting students with their understanding',
      'Explaining concepts clearly',
      'Adapting teaching based on student needs',
      'Encouraging student participation',
      'Helping students develop exam skills',
      'Providing feedback and updates to the MySchola team',
      'Uploading lesson recordings after every lesson'
    ],
    outro: 'Tutors are trusted as subject specialists and are encouraged to use their own teaching experience and methods.'
  },
  {
    number: '02',
    title: 'Before Every Lesson',
    intro: 'Before every lesson, tutors should:',
    numbered: [
      'Review the cohort information before teaching.',
      'Understand the exam board and specification being followed.',
      'Prepare suitable lesson materials based on the topic and student needs.',
      'Ensure Zoom and required resources are ready.',
      'Join the lesson on time.'
    ],
    subheading: 'When students join',
    bullets: [
      'Accept students into the Zoom session.',
      'Check attendance before starting the lesson.',
      'Report any students who are missing to the MySchola admin team.'
    ],
    outro: 'The MySchola team will follow up with students or parents and take any necessary action.'
  },
  {
    number: '03',
    title: 'Lesson Delivery Expectations',
    paragraphs: [
      'At MySchola, we value each tutor’s teaching experience and approach.',
      'Tutors are free to teach using the methods and lesson structures they are most comfortable with.'
    ],
    subheading: 'Tutors may use their own',
    bullets: ['Teaching techniques', 'Lesson activities', 'Resources', 'Examples', 'Explanations'],
    outro: 'Lessons should remain engaging, structured, focused on student progress and aligned with GCSE requirements. If tutors or MySchola co-founders have feedback regarding lessons, this will be discussed openly as a team. The purpose of feedback is to work together and continuously improve the learning experience for students.'
  },
  {
    number: '04',
    title: 'Creating a Positive Learning Environment',
    intro: 'Tutors should create an environment where students feel comfortable learning and asking questions.',
    subheading: 'Tutors should',
    bullets: [
      'Encourage students to participate',
      'Be patient and supportive',
      'Build student confidence',
      'Explain mistakes clearly',
      'Encourage independent thinking'
    ],
    outro: 'Every student has different confidence levels and learning styles. Tutors should support students accordingly.'
  },
  {
    number: '05',
    title: 'Subject & Exam Board Requirements',
    intro: 'Tutors should ensure lessons match the correct GCSE requirements.',
    subsections: [
      { title: 'Maths', bullets: ['Edexcel GCSE Foundation', 'Edexcel GCSE Higher'], focus: ['Understanding methods', 'Problem-solving skills', 'Exam techniques', 'Applying knowledge to different question types'] },
      { title: 'English', bullets: ['AQA GCSE English Language', 'GCSE Literature depending on student requirements'], focus: ['Reading analysis', 'Writing skills', 'Exam structure', 'Assessment objectives', 'Developing strong responses'], extra: 'For English Literature, focus on the specific text being studied, themes and characters, analysing quotations, exploring the writer’s methods and developing structured exam answers. Texts may differ, but the same core Literature techniques apply across all texts.' },
      { title: 'Science', bullets: ['AQA', 'Edexcel', 'OCR'], focus: ['Scientific understanding', 'Exam questions', 'Required practicals', 'Key terminology'] }
    ]
  },
  {
    number: '06',
    title: 'Homework Process',
    paragraphs: [
      'Homework is managed by the MySchola co-founder team.',
      'Tutors do not directly assign homework.'
    ],
    subheading: 'Tutors should',
    bullets: [
      'Identify areas where students need additional practice',
      'Recommend topics or question types',
      'Inform the MySchola team about areas students need support with'
    ],
    outro: 'The MySchola team will review recommendations and assign suitable homework.',
    callout: 'If students are struggling with algebraic equations, please inform the MySchola team so appropriate practice can be provided.'
  },
  {
    number: '07',
    title: 'Lesson Recordings',
    intro: 'Lesson recordings are provided to students so they can review lessons and reinforce their learning.',
    subheading: 'After every lesson, tutors must',
    bullets: ['Upload the lesson recording', 'Use their MySchola tutor account login', 'Upload the recording to the correct cohort'],
    outro: 'Tutors are responsible for ensuring recordings are uploaded after every session.'
  },
  {
    number: '08',
    title: 'Attendance Management',
    intro: 'Attendance must be monitored during every lesson.',
    bullets: ['Check which students are attending', 'Identify students who are absent', 'Report missing students to the MySchola admin team'],
    outro: 'The admin team will contact students or parents where required.'
  },
  {
    number: '09',
    title: 'Parent Communication',
    paragraphs: [
      'The MySchola co-founders and admin team are responsible for all parent communication.',
      'Tutors should focus on delivering lessons and supporting students academically.'
    ],
    subheading: 'Direct parents to the MySchola team for',
    bullets: ['Payments', 'Timetables', 'Class changes', 'Enrolment', 'Account issues', 'Administrative queries'],
    subheadingTwo: 'Report to the MySchola team regarding',
    bulletsTwo: ['Student engagement', 'Learning progress', 'Areas for improvement', 'Behaviour concerns', 'Any issues affecting learning'],
    outro: 'The MySchola team will communicate with parents and manage any required actions.'
  },
  {
    number: '10',
    title: 'Zoom & Online Lesson Expectations',
    subheading: 'Tutors should',
    bullets: ['Join lessons on time', 'Ensure their audio works correctly', 'Be prepared before lessons begin', 'Maintain a professional teaching environment'],
    subheadingTwo: 'Students may participate through',
    bulletsTwo: ['Camera', 'Voice', 'Zoom chat'],
    outro: 'Some students may feel more comfortable using chat, and tutors should support different learning preferences.'
  },
  {
    number: '11',
    title: 'Tutor Absence & Cancellations',
    paragraphs: [
      'We understand unexpected situations can happen.',
      'However, consistency is important for students.'
    ],
    bullets: ['Provide at least 24 hours’ notice where possible so MySchola can find a replacement tutor.'],
    subheading: 'When informing MySchola, provide',
    bulletsTwo: ['Lesson date and time', 'Cohort affected', 'Any useful lesson information'],
    outro: 'If an emergency occurs and 24 hours’ notice is not possible, contact the MySchola team immediately.'
  },
  {
    number: '12',
    title: 'Professional Standards',
    intro: 'MySchola tutors are expected to:',
    bullets: ['Be reliable and punctual', 'Communicate professionally', 'Respect student confidentiality', 'Maintain appropriate boundaries', 'Deliver lessons to a high standard'],
    outro: 'Tutors represent MySchola and contribute towards the experience students and parents receive.'
  },
  {
    number: '13',
    title: 'Safeguarding & Student Protection',
    intro: 'Tutors must:',
    bullets: ['Maintain professional relationships with students', 'Keep communication through approved MySchola channels', 'Protect student information', 'Report concerns to the MySchola team'],
    outro: 'Student safety and wellbeing are always a priority.'
  },
  {
    number: '14',
    title: 'Tutor Checklist',
    checklist: [
      { title: 'Before Lesson', items: ['Review cohort information', 'Check exam board requirements', 'Prepare lesson materials', 'Ensure Zoom and resources are ready', 'Join on time'] },
      { title: 'During Lesson', items: ['Accept students into Zoom', 'Check attendance', 'Report missing students to admin', 'Deliver engaging teaching', 'Support student understanding'] },
      { title: 'After Lesson', items: ['Upload recording through MySchola account', 'Upload recording to correct cohort', 'Report student concerns or progress updates', 'Recommend homework areas if required'] }
    ]
  }
]

function renderTutorHandbookPanel(onOpen, isOpen) {
  return (
    <section className="mb-6 rounded-xl border border-blue-100 border-l-4 border-l-blue-600 bg-white p-5 shadow-sm sm:p-6" aria-labelledby="tutor-handbook-panel-title">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 ring-1 ring-blue-100">
            <BookOpen className="h-5 w-5 text-blue-600" aria-hidden="true" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Tutor resources</p>
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">Quick reference</span>
            </div>
            <h2 id="tutor-handbook-panel-title" className="mt-1 text-xl font-bold tracking-tight text-gray-900">MySchola Tutor Handbook</h2>
            <p className="mt-1 text-sm text-gray-600">A short guide to planning lessons, recordings and getting support.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onOpen}
          aria-expanded={isOpen}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Open handbook
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

const getHiddenRecordingIds = (student) => {
  const hiddenIds = Array.isArray(student?.hiddenRecordingIds) ? student.hiddenRecordingIds : []
  return new Set(hiddenIds.map((id) => String(id)))
}

const getHiddenRecordingTitleKeywords = (student) => {
  const keywords = Array.isArray(student?.hiddenRecordingTitleKeywords)
    ? student.hiddenRecordingTitleKeywords
    : []

  return keywords
    .map((keyword) => String(keyword || '').trim().toLowerCase())
    .filter(Boolean)
}

const isRecordingHiddenByTitleKeyword = (recording, student) => {
  const title = String(recording.title || '').toLowerCase()
  return title
    ? getHiddenRecordingTitleKeywords(student).some((keyword) => title.includes(keyword))
    : false
}

const isRecordingHiddenForStudent = (recording, student) => {
  if (!student?.id) {
    return false
  }

  if (getHiddenRecordingIds(student).has(String(recording.id))) {
    return true
  }

  return isRecordingHiddenByTitleKeyword(recording, student)
}

const getRecordingTargetStudents = (recording, students) => {
  if (recording.visibility !== 'student') {
    return students
  }

  const targetStudent = students.find((student) => student.id === recording.studentId)
  if (targetStudent) {
    return [targetStudent]
  }

  if (!recording.studentId) {
    return []
  }

  return [{
    id: recording.studentId,
    displayName: recording.studentName || recording.studentEmail || recording.studentId,
    email: recording.studentEmail || ''
  }]
}

const getHiddenHomeworkIds = (student) => {
  const hiddenIds = Array.isArray(student?.hiddenHomeworkIds) ? student.hiddenHomeworkIds : []
  return new Set(hiddenIds.map((id) => String(id)))
}

const getHiddenHomeworkTitleKeywords = (student) => {
  const keywords = Array.isArray(student?.hiddenHomeworkTitleKeywords)
    ? student.hiddenHomeworkTitleKeywords
    : []

  return keywords
    .map((keyword) => String(keyword || '').trim().toLowerCase())
    .filter(Boolean)
}

const isHomeworkHiddenByTitleKeyword = (homework, student) => {
  const title = String(homework.title || '').toLowerCase()
  return title
    ? getHiddenHomeworkTitleKeywords(student).some((keyword) => title.includes(keyword))
    : false
}

const isHomeworkHiddenForStudent = (homework, student) => {
  if (!student?.id) {
    return false
  }

  if (getHiddenHomeworkIds(student).has(String(homework.id))) {
    return true
  }

  return isHomeworkHiddenByTitleKeyword(homework, student)
}

const getHomeworkTargetStudents = (homework, students) => {
  if (homework.visibility !== 'student') {
    return students
  }

  const targetStudent = students.find((student) => student.id === homework.studentId)
  if (targetStudent) {
    return [targetStudent]
  }

  if (!homework.studentId) {
    return []
  }

  return [{
    id: homework.studentId,
    displayName: homework.studentName || homework.studentEmail || homework.studentId,
    email: homework.studentEmail || ''
  }]
}

const getHomeworkDueKey = (dueDate) => {
  if (!dueDate) return 'no-due'
  const date = dueDate.toDate ? dueDate.toDate() : new Date(dueDate)
  if (Number.isNaN(date.getTime())) return 'no-due'
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

const getHomeworkGroupKey = (homework) => {
  const sourceId = homework.sourceHomeworkId || homework.parentHomeworkId || homework.originalHomeworkId
  if (sourceId) return `source:${sourceId}`
  const title = String(homework.title || 'untitled').trim().toLowerCase().replace(/\s+/g, ' ')
  return `title:${title}|due:${getHomeworkDueKey(homework.dueDate)}`
}

const groupHomeworksForSubmissions = (homeworks) => {
  const groups = new Map()
  for (const homework of homeworks) {
    const key = getHomeworkGroupKey(homework)
    const existing = groups.get(key)
    if (!existing) {
      groups.set(key, {
        key,
        items: [homework],
        title: homework.title || 'Untitled Homework',
        dueDate: homework.dueDate || null
      })
    } else {
      existing.items.push(homework)
      if (!existing.dueDate && homework.dueDate) existing.dueDate = homework.dueDate
    }
  }
  return Array.from(groups.values())
}

const getGroupedHomeworkStudents = (group, students) => {
  const studentMap = new Map()
  group.items.forEach((homework) => {
    getHomeworkTargetStudents(homework, students).forEach((student) => {
      if (isHomeworkHiddenForStudent(homework, student)) return
      if (!studentMap.has(student.id)) studentMap.set(student.id, student)
    })
  })
  return Array.from(studentMap.values()).sort((a, b) => (
    String(a.displayName || a.name || '').localeCompare(String(b.displayName || b.name || ''))
  ))
}

const getHomeworkForStudentInGroup = (group, studentId) => {
  const personal = group.items.find((item) => (
    String(item.studentId || '') === String(studentId)
  ))
  if (personal) return personal
  return group.items.find((item) => item.sourceCollection !== 'studentHomeworks') || group.items[0] || null
}

function Admin() {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState(null)
  const [teacherProfile, setTeacherProfile] = useState(null)
  const [teacherRosters, setTeacherRosters] = useState({})
  const [teacherRostersLoading, setTeacherRostersLoading] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedSubjectData, setSelectedSubjectData] = useState(null)
  const [activeTab, setActiveTab] = useState('recording') // 'recording', 'homework', 'approve', 'manage', 'manage-homework', or 'view-submissions'
  const [showTutorHandbook, setShowTutorHandbook] = useState(false)
  
  // Recording form
  const [recordingTitle, setRecordingTitle] = useState('')
  const [recordingFile, setRecordingFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [examBoard, setExamBoard] = useState('')
  const [tier, setTier] = useState('')
  const [recordingAudience, setRecordingAudience] = useState('subject')
  const [selectedRecordingStudentId, setSelectedRecordingStudentId] = useState('')
  
  // Approval
  const [pendingRecordings, setPendingRecordings] = useState([])
  const [pendingRecordingsLoading, setPendingRecordingsLoading] = useState(false)
  const [managedRecordings, setManagedRecordings] = useState([])
  const [managedRecordingsLoading, setManagedRecordingsLoading] = useState(false)
  const [deletingRecordingId, setDeletingRecordingId] = useState('')
  const [updatingRecordingAccessKey, setUpdatingRecordingAccessKey] = useState('')
  
  // Homework form
  const [homeworkTitle, setHomeworkTitle] = useState('')
  const [homeworkDescription, setHomeworkDescription] = useState('')
  const [homeworkDueDate, setHomeworkDueDate] = useState('')
  const [homeworkFile, setHomeworkFile] = useState(null)
  const [homeworkUploadProgress, setHomeworkUploadProgress] = useState(0)
  const [homeworkUploadStage, setHomeworkUploadStage] = useState('')
  const [homeworkAudience, setHomeworkAudience] = useState('subject')
  const [selectedHomeworkStudentIds, setSelectedHomeworkStudentIds] = useState([])
  const [managedHomeworks, setManagedHomeworks] = useState([])
  const [managedHomeworksLoading, setManagedHomeworksLoading] = useState(false)
  const [deletingHomeworkId, setDeletingHomeworkId] = useState('')
  const [updatingHomeworkAccessKey, setUpdatingHomeworkAccessKey] = useState('')
  
  // Resource form
  const [resourceTitle, setResourceTitle] = useState('')
  const [resourceDescription, setResourceDescription] = useState('')
  const [resourceFile, setResourceFile] = useState(null)
  const [resourceUploadProgress, setResourceUploadProgress] = useState(0)
  const [resourceAudience, setResourceAudience] = useState('subject')
  const [selectedResourceStudentIds, setSelectedResourceStudentIds] = useState([])

  // Student submissions
  const [submissions, setSubmissions] = useState([])
  const [homeworks, setHomeworks] = useState([])
  const [enrolledStudents, setEnrolledStudents] = useState([])
  const [subjectStudentsLoading, setSubjectStudentsLoading] = useState(false)
  const [submissionsLoading, setSubmissionsLoading] = useState(false)
  const [markingSubmissionId, setMarkingSubmissionId] = useState(null)
  const [togglingHomeworkCompletionKey, setTogglingHomeworkCompletionKey] = useState('')
  const [submissionFilter, setSubmissionFilter] = useState('all') // 'all', 'pending', 'marked'
  const [rosterFilter, setRosterFilter] = useState('all') // 'all', 'submitted', 'missing'
  const [expandedHomework, setExpandedHomework] = useState({})
  const [classGroups, setClassGroups] = useState([])
  const [studentClassLists, setStudentClassLists] = useState([])
  const [classGroupsLoading, setClassGroupsLoading] = useState(false)
  const [classGroupsSaving, setClassGroupsSaving] = useState(false)
  const [classGroupSearch, setClassGroupSearch] = useState('')
  const [classGroupTierFilter, setClassGroupTierFilter] = useState('all')
  const [expandedClassGroups, setExpandedClassGroups] = useState({})
  
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [migrationLoading, setMigrationLoading] = useState(false)
  const [migrationSummary, setMigrationSummary] = useState(null)
  const [openingMaterialKey, setOpeningMaterialKey] = useState('')
  const isAdmin = userRole === 'admin'
  const isTeacher = userRole === 'teacher'
  const isFawwazTeacher = isTeacher && String(auth.currentUser?.email || teacherProfile?.email || '').trim().toLowerCase() === 'fawwaz@myschola.co.uk'

  useEffect(() => {
    if (!showTutorHandbook) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setShowTutorHandbook(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [showTutorHandbook])
  const teacherSubjects = Array.isArray(teacherProfile?.subjects) ? teacherProfile.subjects : []
  const teacherPermissions = Array.isArray(teacherProfile?.permissions) ? teacherProfile.permissions : []
  const teacherClasses = isTeacher
    ? subjects.map((subject) => {
        const tier = normalizeTierLabel(
          subject.id,
          teacherProfile?.classTiers?.[subject.id]
        )
        return {
          id: subject.id,
          name: getCanonicalSubjectName(subject),
          tier,
          examBoard: teacherProfile?.classBoards?.[subject.id] || '',
          zoomLink: resolveClassZoomLink(subject, subject.id, tier)
        }
      })
    : []

  useEffect(() => {
    if (!authenticated || !isFawwazTeacher || !teacherProfile) {
      setTeacherRosters({})
      setTeacherRostersLoading(false)
      return
    }

    let cancelled = false
    const assignedFoundationSubjects = (Array.isArray(teacherProfile.subjects) ? teacherProfile.subjects : [])
      .filter((subjectId) => String(teacherProfile.classTiers?.[subjectId] || '').trim().toLowerCase() === 'foundation')

    setTeacherRostersLoading(true)
    Promise.all(assignedFoundationSubjects.map(async (subjectId) => {
      try {
        const result = await getTeacherClassRoster({ subjectId })
        return [subjectId, { students: Array.isArray(result.students) ? result.students : [], error: '' }]
      } catch (err) {
        return [subjectId, { students: [], error: err?.message || 'Unable to load students' }]
      }
    })).then((entries) => {
      if (!cancelled) setTeacherRosters(Object.fromEntries(entries))
    }).finally(() => {
      if (!cancelled) setTeacherRostersLoading(false)
    })

    return () => {
      cancelled = true
    }
  }, [authenticated, isFawwazTeacher, teacherProfile])

  const teacherCanUseSubject = (subjectId) => !isTeacher || teacherSubjects.includes(subjectId)
  const teacherCanUpload = (materialType) => {
    if (isAdmin) return true
    if (materialType === 'homework') return false
    if (!isTeacher || !teacherCanUseSubject(selectedSubject)) return false
    const permission = 'upload_recordings'
    return teacherPermissions.includes(permission) &&
      String(teacherProfile?.classTiers?.[selectedSubject] || '').toLowerCase() === 'foundation'
  }
  const recipientRosterRequiresRoute = ['recording', 'homework', 'resource'].includes(activeTab) &&
    !isEnglishSubjectData(selectedSubjectData)
  const recipientRosterReady = !recipientRosterRequiresRoute || Boolean(examBoard && tier)
  const selectedHomeworkStudents = enrolledStudents.filter((student) => (
    selectedHomeworkStudentIds.includes(student.id)
  ))
  const allHomeworkStudentsSelected = enrolledStudents.length > 0 && (
    selectedHomeworkStudents.length === enrolledStudents.length
  )
  const selectedResourceStudents = enrolledStudents.filter((student) => (
    selectedResourceStudentIds.includes(student.id)
  ))
  const allResourceStudentsSelected = enrolledStudents.length > 0 && (
    selectedResourceStudents.length === enrolledStudents.length
  )
  const groupedHomeworks = groupHomeworksForSubmissions(homeworks)

  const openManagedMaterial = async (material, materialType) => {
    const collectionName = materialType === 'recording'
      ? getRecordingCollection(material)
      : getHomeworkCollection(material)
    const urlField = materialType === 'recording' ? 'videoUrl' : 'attachmentUrl'
    if (material[urlField]) {
      window.open(material[urlField], '_blank', 'noopener,noreferrer')
      return
    }
    if (!material.r2Key) {
      setMessage('This material does not have an available file')
      return
    }

    const key = `${materialType}:${collectionName}:${material.id}`
    setOpeningMaterialKey(key)
    try {
      const result = await getR2DownloadUrl({ collection: collectionName, documentId: material.id })
      if (!result?.downloadUrl) throw new Error('Download link was not returned')
      window.open(result.downloadUrl, '_blank', 'noopener,noreferrer')
    } catch (err) {
      setMessage(err?.message || 'Unable to open this material')
    } finally {
      setOpeningMaterialKey('')
    }
  }

  const runLegacyMigration = async (mode) => {
    if (!isAdmin || migrationLoading) return
    if (mode === 'migrate' && !window.confirm('Copy every eligible legacy file into private R2 storage now? Records missing a subject route will be skipped.')) return

    setMigrationLoading(true)
    setMessage('')
    try {
      const result = await migrateLegacyMaterialsToR2({ mode })
      setMigrationSummary(result)
      setMessage(mode === 'migrate'
        ? `Migration complete: ${result.migrated} file(s) moved; ${result.excludedCombined || 0} combined and ${result.excludedOlderThan30Days || 0} older file(s) were not moved.`
        : `Migration check complete: ${result.ready} file(s) are ready to move; ${result.excludedCombined || 0} combined and ${result.excludedOlderThan30Days || 0} older file(s) will not be moved.`)
    } catch (err) {
      setMessage(err?.message || 'Unable to run the legacy migration')
    } finally {
      setMigrationLoading(false)
    }
  }

  const toggleHomeworkStudent = (studentId) => {
    setSelectedHomeworkStudentIds((currentIds) => (
      currentIds.includes(studentId)
        ? currentIds.filter((id) => id !== studentId)
        : [...currentIds, studentId]
    ))
  }

  const toggleResourceStudent = (studentId) => {
    setSelectedResourceStudentIds((currentIds) => (
      currentIds.includes(studentId)
        ? currentIds.filter((id) => id !== studentId)
      : [...currentIds, studentId]
    ))
  }

  // Require a signed-in user with admin or teacher role document
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAuthenticated(false)
        setTeacherProfile(null)
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
          setTeacherProfile(teacherDoc?.exists() ? teacherDoc.data() : null)
        } else {
          setAuthenticated(false)
          setUserRole(null)
          setTeacherProfile(null)
          navigate('/login', { replace: true })
        }
      } catch (err) {
        console.error('Error verifying role:', err)
        setAuthenticated(false)
        setUserRole(null)
        setTeacherProfile(null)
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
        let subjectsData
        if (isTeacher) {
          const teacherSubjectIds = Array.isArray(teacherProfile?.subjects) ? teacherProfile.subjects : []
          const subjectSnapshots = await Promise.all(
            teacherSubjectIds.map((subjectId) => getDoc(doc(db, 'subjects', subjectId)))
          )
          subjectsData = subjectSnapshots
            .filter((subjectDoc) => subjectDoc.exists())
            .map((subjectDoc) => ({ id: subjectDoc.id, ...subjectDoc.data() }))
        } else {
          const subjectsSnapshot = await getDocs(collection(db, 'subjects'))
          subjectsData = subjectsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        }
        subjectsData = subjectsData
          .filter((subject) => !isCrashCourseSubject(subject))
          .sort((a, b) => {
            const nameSort = getCanonicalSubjectName(a).localeCompare(getCanonicalSubjectName(b))
            return nameSort || a.id.localeCompare(b.id)
          })
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
  }, [authenticated, isTeacher, teacherProfile])

  useEffect(() => {
    const loadPendingRecordings = async () => {
      if (activeTab === 'approve' && authenticated && isAdmin) {
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
  }, [activeTab, authenticated, subjects, isAdmin])

  useEffect(() => {
    const loadManagedRecordings = async () => {
      if (activeTab !== 'manage' || !authenticated || !selectedSubject) {
        return
      }

      setManagedRecordingsLoading(true)
      try {
        let recordingsSnapshot
        try {
          const recordingsQuery = query(
            collection(db, 'recordings'),
            where('subjectId', '==', selectedSubject),
            ...(isTeacher ? [where('tier', '==', 'Foundation')] : []),
            orderBy('date', 'desc')
          )
          recordingsSnapshot = await getDocs(recordingsQuery)
        } catch (err) {
          console.warn('Ordered recordings query failed, using scoped query:', err)
          const recordingsQuery = query(
            collection(db, 'recordings'),
            where('subjectId', '==', selectedSubject),
            ...(isTeacher ? [where('tier', '==', 'Foundation')] : [])
          )
          recordingsSnapshot = await getDocs(recordingsQuery)
        }

        const subjectRecordingsData = recordingsSnapshot.docs
          .map((recordingDoc) => ({
            id: recordingDoc.id,
            sourceCollection: 'recordings',
            visibility: 'subject',
            ...recordingDoc.data()
          }))

        let studentRecordingsData = []
        if (!isFawwazTeacher) {
          try {
            const studentRecordingsQuery = query(
              collection(db, 'studentRecordings'),
              where('subjectId', '==', selectedSubject),
              ...(isTeacher ? [where('tier', '==', 'Foundation')] : [])
            )
            const studentRecordingsSnapshot = await getDocs(studentRecordingsQuery)
            studentRecordingsData = studentRecordingsSnapshot.docs
              .map((recordingDoc) => ({
                id: recordingDoc.id,
                sourceCollection: 'studentRecordings',
                visibility: 'student',
                ...recordingDoc.data()
              }))
          } catch (err) {
            console.warn('Student-specific recordings could not be loaded:', err)
          }
        }

        const recordingsData = [...subjectRecordingsData, ...studentRecordingsData]
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
  }, [activeTab, authenticated, selectedSubject, isTeacher, isFawwazTeacher])

  useEffect(() => {
    const shouldLoadStudents = isAdmin && ['recording', 'homework', 'resource', 'manage', 'manage-homework', 'view-submissions'].includes(activeTab)
    if (!authenticated || !selectedSubject || !shouldLoadStudents) {
      return
    }

    const loadSubjectStudents = async () => {
      setSubjectStudentsLoading(true)
      setEnrolledStudents([])
      try {
        const filterRecipientRosterByRoute = ['recording', 'homework', 'resource'].includes(activeTab) &&
          !isEnglishSubjectData(selectedSubjectData)
        const studentsQuery = query(
          collection(db, 'students'),
          where('subjects', 'array-contains', selectedSubject)
        )
        const studentsSnapshot = await getDocs(studentsQuery)
        const studentsData = studentsSnapshot.docs
          .map((studentDoc) => {
            const data = studentDoc.data()
            return {
              id: studentDoc.id,
              ...data,
              displayName: data.name || data.displayName || data.email || data.studentName || studentDoc.id
            }
          })
          .filter((student) => !filterRecipientRosterByRoute || (
            recipientRosterReady && isStudentOnSelectedRoute(student, selectedSubject, examBoard, tier)
          ))
          .sort((a, b) => getStudentDisplayName(a).localeCompare(getStudentDisplayName(b)))

        setEnrolledStudents(studentsData)
        const availableStudentIds = new Set(studentsData.map((student) => student.id))
        setSelectedRecordingStudentId((currentId) => (
          availableStudentIds.has(currentId) ? currentId : ''
        ))
        setSelectedHomeworkStudentIds((currentIds) => (
          currentIds.filter((id) => availableStudentIds.has(id))
        ))
        setSelectedResourceStudentIds((currentIds) => (
          currentIds.filter((id) => availableStudentIds.has(id))
        ))
      } catch (err) {
        console.error('Error loading students for subject:', err)
        setMessage('Failed to load students for this subject')
      } finally {
        setSubjectStudentsLoading(false)
      }
    }

    loadSubjectStudents()
  }, [activeTab, authenticated, isAdmin, selectedSubject, selectedSubjectData, examBoard, tier, recipientRosterReady])

  useEffect(() => {
    const loadManagedHomeworks = async () => {
      if (activeTab !== 'manage-homework' || !authenticated || !selectedSubject) {
        return
      }

      setManagedHomeworksLoading(true)
      try {
        const homeworksQuery = query(
          collection(db, 'homeworks'),
          where('subjectId', '==', selectedSubject),
          ...(isTeacher ? [where('tier', '==', 'Foundation')] : [])
        )

        const homeworksSnapshot = await getDocs(homeworksQuery)
        const subjectHomeworksData = homeworksSnapshot.docs
          .map((homeworkDoc) => ({
            id: homeworkDoc.id,
            sourceCollection: 'homeworks',
            visibility: 'subject',
            ...homeworkDoc.data()
          }))

        let studentHomeworksData = []
        if (!isFawwazTeacher) {
          try {
            const studentHomeworksQuery = query(
              collection(db, 'studentHomeworks'),
              where('subjectId', '==', selectedSubject),
              ...(isTeacher ? [where('tier', '==', 'Foundation')] : [])
            )
            const studentHomeworksSnapshot = await getDocs(studentHomeworksQuery)
            studentHomeworksData = studentHomeworksSnapshot.docs
              .map((homeworkDoc) => ({
                id: homeworkDoc.id,
                sourceCollection: 'studentHomeworks',
                visibility: 'student',
                ...homeworkDoc.data()
              }))
          } catch (err) {
            console.warn('Student-specific homework could not be loaded:', err)
          }
        }

        const homeworksData = [...subjectHomeworksData, ...studentHomeworksData]
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
  }, [activeTab, authenticated, selectedSubject, isTeacher, isFawwazTeacher])

  useEffect(() => {
    const loadSubmissions = async () => {
      if (activeTab !== 'view-submissions' || !authenticated || !isAdmin || !selectedSubject) {
        return
      }

      setSubmissionsLoading(true)
      setHomeworks([])
      setSubmissions([])
      try {
        // Load homeworks for this subject
        const homeworksQuery = query(
          collection(db, 'homeworks'),
          where('subjectId', '==', selectedSubject)
        )
        const homeworksSnapshot = await getDocs(homeworksQuery)
        const subjectHomeworksData = homeworksSnapshot.docs.map((doc) => ({
          id: doc.id,
          sourceCollection: 'homeworks',
          visibility: 'subject',
          ...doc.data()
        }))
        let studentHomeworksData = []
        try {
          const studentHomeworksQuery = query(
            collection(db, 'studentHomeworks'),
            where('subjectId', '==', selectedSubject)
          )
          const studentHomeworksSnapshot = await getDocs(studentHomeworksQuery)
          studentHomeworksData = studentHomeworksSnapshot.docs.map((doc) => ({
            id: doc.id,
            sourceCollection: 'studentHomeworks',
            visibility: 'student',
            ...doc.data()
          }))
        } catch (err) {
          console.warn('Student-specific homework could not be loaded for submissions:', err)
        }
        const homeworksData = [...subjectHomeworksData, ...studentHomeworksData]
        setHomeworks(homeworksData)

        // Load enrolled students for this subject
        const studentsQuery = query(
          collection(db, 'students'),
          where('subjects', 'array-contains', selectedSubject)
        )
        const studentsSnapshot = await getDocs(studentsQuery)
        const studentsData = studentsSnapshot.docs.map((doc) => {
          const data = doc.data()
          console.log('Student data:', doc.id, data) // Debug logging
          return {
            id: doc.id,
            ...data,
            // Ensure we have a display name
            displayName: data.name || data.displayName || data.email || data.studentName || doc.id
          }
        })
        console.log('Total students loaded:', studentsData.length) // Debug logging
        setEnrolledStudents(studentsData)

        // Load submissions
        const submissionsQuery = query(
          collection(db, 'submissions'),
          where('subjectId', '==', selectedSubject)
        )
        const submissionsSnapshot = await getDocs(submissionsQuery)
        const submissionsData = submissionsSnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))

        setSubmissions(submissionsData)
      } catch (err) {
        console.error('Error loading submissions:', err)
        setMessage('Failed to load student submissions')
      } finally {
        setSubmissionsLoading(false)
      }
    }

    loadSubmissions()
  }, [activeTab, authenticated, isAdmin, selectedSubject])

  const persistClassDirectory = async (groups, lists) => {
    const ops = []
    const [existingGroups, existingLists] = await Promise.all([
      getDocs(collection(db, 'classGroups')),
      getDocs(collection(db, 'studentClassLists'))
    ])
    const nextGroupIds = new Set(groups.map((group) => group.id))
    const nextListIds = new Set(lists.map((student) => student.id))
    existingGroups.docs.forEach((snap) => {
      if (!nextGroupIds.has(snap.id)) ops.push({ type: 'delete', ref: snap.ref })
    })
    existingLists.docs.forEach((snap) => {
      if (!nextListIds.has(snap.id)) ops.push({ type: 'delete', ref: snap.ref })
    })
    groups.forEach((group) => {
      ops.push({
        type: 'set',
        ref: doc(db, 'classGroups', group.id),
        data: { ...group, updatedAt: serverTimestamp() }
      })
    })
    lists.forEach((student) => {
      ops.push({
        type: 'set',
        ref: doc(db, 'studentClassLists', student.id),
        data: { ...student, updatedAt: serverTimestamp() }
      })
    })
    for (let i = 0; i < ops.length; i += 400) {
      const batch = writeBatch(db)
      ops.slice(i, i + 400).forEach((op) => {
        if (op.type === 'delete') batch.delete(op.ref)
        else batch.set(op.ref, op.data)
      })
      await batch.commit()
    }
  }

  const loadClassDirectory = async (persist = true) => {
    setClassGroupsLoading(true)
    try {
      const [studentsSnap, subjectsSnap] = await Promise.all([
        getDocs(collection(db, 'students')),
        getDocs(collection(db, 'subjects'))
      ])
      const studentsData = studentsSnap.docs.map((snap) => ({ id: snap.id, ...snap.data() }))
      const subjectsData = subjectsSnap.docs.map((snap) => ({ id: snap.id, ...snap.data() }))
      const groups = buildClassGroupRecords(studentsData, subjectsData)
      const lists = buildStudentClassLists(studentsData, subjectsData)
      setClassGroups(groups)
      setStudentClassLists(lists)
      setExpandedClassGroups((current) => {
        const next = { ...current }
        groups.forEach((group) => {
          if (next[group.id] === undefined) next[group.id] = true
        })
        return next
      })
      if (persist) {
        setClassGroupsSaving(true)
        await persistClassDirectory(groups, lists)
      }
    } catch (err) {
      console.error('Error loading class groups:', err)
      setMessage(err?.message || 'Failed to load class groups')
    } finally {
      setClassGroupsLoading(false)
      setClassGroupsSaving(false)
    }
  }

  useEffect(() => {
    if (activeTab !== 'class-groups' || !authenticated || !isAdmin) return
    loadClassDirectory(true)
  }, [activeTab, authenticated, isAdmin])

  useEffect(() => {
    // Update selected subject data when subject changes
    const subject = subjects.find(s => s.id === selectedSubject)
    setSelectedSubjectData(subject || null)
    setExamBoard(teacherProfile?.classBoards?.[selectedSubject] || getLockedExamBoard(subject) || '')
    setTier(isTeacher ? (isFawwazTeacher ? 'Foundation' : (teacherProfile?.classTiers?.[selectedSubject] || '')) : '')
    setSelectedRecordingStudentId('')
    setSelectedHomeworkStudentIds([])
    setSelectedResourceStudentIds([])
    setRosterFilter('all')
    setSubmissionFilter('all')
  }, [selectedSubject, subjects, isTeacher, isFawwazTeacher, teacherProfile])

  // Check if subject is English (no tier needed)
  const isEnglishSubject = () => {
    return isEnglishSubjectData(selectedSubjectData)
  }
  const lockedExamBoard = getLockedExamBoard(selectedSubjectData)
  const examBoardOptions = lockedExamBoard ? [lockedExamBoard] : ['AQA', 'Edexcel']

  const uploadFileWithProgress = (
    file,
    uploadConfig,
    onProgress,
    timeoutMs = DEFAULT_UPLOAD_TIMEOUT_MS
  ) => new Promise((resolve, reject) => {
    if (!uploadConfig?.uploadUrl) {
      reject(new Error('Upload URL is missing'))
      return
    }

    const xhr = new XMLHttpRequest()
    xhr.open(uploadConfig.method || 'PUT', uploadConfig.uploadUrl, true)
    // Keep the response as text so responseText is available for both success
    // and error responses. Reading responseText is invalid when responseType is
    // "json" and causes a second InvalidStateError that hides the real upload
    // failure.
    xhr.responseType = 'text'
    xhr.timeout = timeoutMs

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
        let responseData = null
        if (xhr.responseText) {
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
    if (!teacherCanUpload('recording')) {
      setMessage('You are not assigned to upload recordings for this class')
      return
    }
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
    if (isTeacher && tier !== 'Foundation') {
      setMessage('This teacher account can only upload Foundation class recordings')
      return
    }

    if (recordingAudience === 'student' && !selectedRecordingStudentId) {
      setMessage('Please select the student who should receive this recording')
      return
    }

    setLoading(true)
    setMessage('')
    setHomeworkUploadStage('Preparing a secure R2 upload…')
    try {
      const selectedRecordingStudent = enrolledStudents.find((student) => student.id === selectedRecordingStudentId)
      setUploadProgress(0)
      const uploadConfig = await createR2AdminUpload({
        subjectId: selectedSubject,
        examBoard,
        tier: isEnglishSubject() ? 'all-levels' : tier,
        fileName: recordingFile.name,
        contentType: recordingFile.type,
        uploadType: 'recording',
        studentIds: recordingAudience === 'student' ? [selectedRecordingStudentId] : []
      })

      await uploadFileWithProgress(
        recordingFile,
        uploadConfig,
        setUploadProgress,
        RECORDING_UPLOAD_TIMEOUT_MS
      )
      const pendingRecording = {
        subjectId: selectedSubject,
        title: recordingTitle,
        examBoard: examBoard,
        tier: isEnglishSubject() ? null : tier,
        r2Key: uploadConfig.r2Key,
        fileName: recordingFile.name,
        visibility: recordingAudience,
        studentId: recordingAudience === 'student' ? selectedRecordingStudentId : null,
        studentName: recordingAudience === 'student' ? getStudentDisplayName(selectedRecordingStudent) : null,
        studentEmail: recordingAudience === 'student' ? selectedRecordingStudent?.email || null : null
      }

      await createRecording(pendingRecording)

      setRecordingTitle('')
      setRecordingFile(null)
      setUploadProgress(0)
      setExamBoard(teacherProfile?.classBoards?.[selectedSubject] || getLockedExamBoard(selectedSubjectData) || '')
      setTier(isTeacher ? (isFawwazTeacher ? 'Foundation' : (teacherProfile?.classTiers?.[selectedSubject] || '')) : '')
      setRecordingAudience('subject')
      setSelectedRecordingStudentId('')

      setMessage('Recording uploaded and published successfully!')
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

  const handleDeleteRecording = async (recordingId, recordingTitle, collectionName = 'recordings') => {
    if (!isAdmin) {
      setMessage('Only admins can delete recordings')
      return
    }

    const isStudentRecording = collectionName === 'studentRecordings'
    const confirmed = window.confirm(
      `Delete "${recordingTitle}"? This removes the ${isStudentRecording ? 'student-specific ' : ''}recording from Firestore and students will lose access immediately.`
    )

    if (!confirmed) {
      return
    }

    const deleteKey = getRecordingDeleteKey(recordingId, collectionName)
    setDeletingRecordingId(deleteKey)
    try {
      await deleteDoc(doc(db, collectionName, recordingId))
      setPendingRecordings((current) => current.filter((recording) => recording.id !== recordingId))
      setManagedRecordings((current) => current.filter((recording) => (
        recording.id !== recordingId || getRecordingCollection(recording) !== collectionName
      )))
      setMessage('Recording deleted successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error deleting recording:', err)
      setMessage('Failed to delete recording')
    } finally {
      setDeletingRecordingId('')
    }
  }

  const updateLocalStudentRecordingAccess = (studentId, recordingId, shouldHide) => {
    setEnrolledStudents((current) => current.map((student) => {
      if (student.id !== studentId) {
        return student
      }

      const existingIds = Array.isArray(student.hiddenRecordingIds) ? student.hiddenRecordingIds : []
      const nextIds = shouldHide
        ? Array.from(new Set([...existingIds.map(String), String(recordingId)]))
        : existingIds.filter((id) => String(id) !== String(recordingId))

      return {
        ...student,
        hiddenRecordingIds: nextIds
      }
    }))
  }

  const handleRemoveRecordingAccess = async (recording, student) => {
    if (!isAdmin) {
      setMessage('Only admins can remove recording access')
      return
    }

    const confirmed = window.confirm(
      `Remove ${getStudentDisplayName(student)}'s access to "${recording.title}"?`
    )

    if (!confirmed) {
      return
    }

    const updateKey = getRecordingAccessKey(recording.id, student.id, 'remove')
    setUpdatingRecordingAccessKey(updateKey)
    try {
      await updateDoc(doc(db, 'students', student.id), {
        hiddenRecordingIds: arrayUnion(recording.id),
        updatedAt: serverTimestamp()
      })
      updateLocalStudentRecordingAccess(student.id, recording.id, true)
      setMessage('Recording access removed successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error removing recording access:', err)
      setMessage('Failed to remove recording access')
    } finally {
      setUpdatingRecordingAccessKey('')
    }
  }

  const handleRestoreRecordingAccess = async (recording, student) => {
    if (!isAdmin) {
      setMessage('Only admins can restore recording access')
      return
    }

    const updateKey = getRecordingAccessKey(recording.id, student.id, 'restore')
    setUpdatingRecordingAccessKey(updateKey)
    try {
      await updateDoc(doc(db, 'students', student.id), {
        hiddenRecordingIds: arrayRemove(recording.id),
        updatedAt: serverTimestamp()
      })
      updateLocalStudentRecordingAccess(student.id, recording.id, false)
      setMessage('Recording access restored successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error restoring recording access:', err)
      setMessage('Failed to restore recording access')
    } finally {
      setUpdatingRecordingAccessKey('')
    }
  }

  const handleDeleteHomework = async (homeworkId, homeworkTitle, collectionName = 'homeworks') => {
    const isStudentHomework = collectionName === 'studentHomeworks'
    const confirmed = window.confirm(
      `Delete "${homeworkTitle}"? Students will no longer be able to access this ${isStudentHomework ? 'student-specific ' : ''}homework.`
    )

    if (!confirmed) {
      return
    }

    const deleteKey = getHomeworkDeleteKey(homeworkId, collectionName)
    setDeletingHomeworkId(deleteKey)
    try {
      await deleteDoc(doc(db, collectionName, homeworkId))
      setManagedHomeworks((current) => current.filter((homework) => (
        homework.id !== homeworkId || getHomeworkCollection(homework) !== collectionName
      )))
      setMessage('Homework deleted successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error deleting homework:', err)
      setMessage('Failed to delete homework')
    } finally {
      setDeletingHomeworkId('')
    }
  }

  const updateLocalStudentHomeworkAccess = (studentId, homeworkId, shouldHide) => {
    setEnrolledStudents((current) => current.map((student) => {
      if (student.id !== studentId) {
        return student
      }

      const existingIds = Array.isArray(student.hiddenHomeworkIds) ? student.hiddenHomeworkIds : []
      const nextIds = shouldHide
        ? Array.from(new Set([...existingIds.map(String), String(homeworkId)]))
        : existingIds.filter((id) => String(id) !== String(homeworkId))

      return {
        ...student,
        hiddenHomeworkIds: nextIds
      }
    }))
  }

  const handleRemoveHomeworkAccess = async (homework, student) => {
    if (!isAdmin) {
      setMessage('Only admins can remove homework access')
      return
    }

    const confirmed = window.confirm(
      `Remove ${getStudentDisplayName(student)}'s access to "${homework.title}"?`
    )

    if (!confirmed) {
      return
    }

    const updateKey = getHomeworkAccessKey(homework.id, student.id, 'remove')
    setUpdatingHomeworkAccessKey(updateKey)
    try {
      await updateDoc(doc(db, 'students', student.id), {
        hiddenHomeworkIds: arrayUnion(homework.id),
        updatedAt: serverTimestamp()
      })
      updateLocalStudentHomeworkAccess(student.id, homework.id, true)
      setMessage('Homework access removed successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error removing homework access:', err)
      setMessage('Failed to remove homework access')
    } finally {
      setUpdatingHomeworkAccessKey('')
    }
  }

  const handleRestoreHomeworkAccess = async (homework, student) => {
    if (!isAdmin) {
      setMessage('Only admins can restore homework access')
      return
    }

    const updateKey = getHomeworkAccessKey(homework.id, student.id, 'restore')
    setUpdatingHomeworkAccessKey(updateKey)
    try {
      await updateDoc(doc(db, 'students', student.id), {
        hiddenHomeworkIds: arrayRemove(homework.id),
        updatedAt: serverTimestamp()
      })
      updateLocalStudentHomeworkAccess(student.id, homework.id, false)
      setMessage('Homework access restored successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Error restoring homework access:', err)
      setMessage('Failed to restore homework access')
    } finally {
      setUpdatingHomeworkAccessKey('')
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

  const refreshSubmissions = async () => {
    if (!selectedSubject) return
    const submissionsQuery = query(
      collection(db, 'submissions'),
      where('subjectId', '==', selectedSubject)
    )
    const submissionsSnapshot = await getDocs(submissionsQuery)
    const submissionsData = submissionsSnapshot.docs.map((submissionDoc) => ({
      id: submissionDoc.id,
      ...submissionDoc.data()
    }))
    setSubmissions(submissionsData)
  }

  const handleMarkSubmission = async (submissionId) => {
    setMarkingSubmissionId(submissionId)
    try {
      await updateDoc(doc(db, 'submissions', submissionId), {
        marked: true,
        markedAt: serverTimestamp(),
        markedBy: auth.currentUser?.uid || null
      })
      await refreshSubmissions()
      setMessage('Submission marked successfully')
    } catch (err) {
      console.error('Error marking submission:', err)
      setMessage('Failed to mark submission')
    } finally {
      setMarkingSubmissionId(null)
    }
  }

  const handleMarkStudentHomeworkDone = async (student, group) => {
    const homework = getHomeworkForStudentInGroup(group, student.id)
    if (!selectedSubject || !homework?.id) {
      setMessage('Could not find this homework for the student')
      return
    }

    const completionKey = `done:${group.key}:${student.id}`
    setTogglingHomeworkCompletionKey(completionKey)
    try {
      await addDoc(collection(db, 'submissions'), {
        studentId: student.id,
        studentName: getStudentDisplayName(student),
        subjectId: selectedSubject,
        homeworkId: homework.id,
        homeworkTitle: group.title || homework.title || 'Untitled Homework',
        googleDocsUrl: '',
        submittedAt: serverTimestamp(),
        completedByAdmin: true,
        marked: true,
        markedAt: serverTimestamp(),
        markedBy: auth.currentUser?.uid || null
      })
      await refreshSubmissions()
      setMessage(`${getStudentDisplayName(student)} marked as done`)
    } catch (err) {
      console.error('Error marking homework as done:', err)
      setMessage('Failed to mark homework as done')
    } finally {
      setTogglingHomeworkCompletionKey('')
    }
  }

  const handleMarkStudentHomeworkNotDone = async (student, submission) => {
    if (!submission?.id) return

    const hasFile = Boolean(String(submission.googleDocsUrl || '').trim())
    const confirmMessage = hasFile
      ? `Mark ${getStudentDisplayName(student)} as not done? This will also remove their submitted file link.`
      : `Mark ${getStudentDisplayName(student)} as not done?`

    if (!window.confirm(confirmMessage)) {
      return
    }

    const completionKey = `undone:${submission.id}`
    setTogglingHomeworkCompletionKey(completionKey)
    try {
      await deleteDoc(doc(db, 'submissions', submission.id))
      await refreshSubmissions()
      setMessage(`${getStudentDisplayName(student)} marked as not done`)
    } catch (err) {
      console.error('Error marking homework as not done:', err)
      setMessage('Failed to mark homework as not done')
    } finally {
      setTogglingHomeworkCompletionKey('')
    }
  }

  const handleSubmitHomework = async (e) => {
    e.preventDefault()
    if (!isAdmin) {
      setMessage('Only MySchola admins can assign homework')
      return
    }
    if (!selectedSubject || !homeworkTitle) {
      setMessage('Please fill in all required fields')
      return
    }

    if (!homeworkFile) {
      setMessage('Please upload a homework file')
      return
    }

    if (!examBoard || (!isEnglishSubject() && !tier)) {
      setMessage('Select the exam board and Foundation or Higher tier before uploading')
      return
    }
    if (isTeacher && tier !== 'Foundation') {
      setMessage('This teacher account can only upload Foundation class homework')
      return
    }

    if (homeworkAudience === 'students' && selectedHomeworkStudents.length === 0) {
      setMessage('Please select at least one student who should receive this homework')
      return
    }

    if (homeworkAudience === 'students' && selectedHomeworkStudents.length !== selectedHomeworkStudentIds.length) {
      setMessage('One or more selected students are no longer enrolled in this subject')
      return
    }

    setLoading(true)
    setMessage('')
    try {
      let r2Key = null
      let attachmentName = null
      let attachmentContentType = null
      let attachmentSize = null

      if (homeworkFile) {
        setHomeworkUploadProgress(0)
        const uploadConfig = await createR2AdminUpload({
          subjectId: selectedSubject,
          examBoard,
          tier: isEnglishSubject() ? 'all-levels' : tier,
          fileName: homeworkFile.name,
          contentType: homeworkFile.type,
          uploadType: 'homework',
          studentIds: homeworkAudience === 'students'
            ? selectedHomeworkStudents.map((student) => student.id)
            : []
        })

        setHomeworkUploadStage('Uploading homework to R2…')
        await uploadFileWithProgress(
          homeworkFile,
          uploadConfig,
          setHomeworkUploadProgress
        )
        r2Key = uploadConfig.r2Key
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
        r2Key,
        examBoard,
        tier: isEnglishSubject() ? null : tier,
        fileName: homeworkFile.name,
        visibility: homeworkAudience,
        studentIds: homeworkAudience === 'students'
          ? selectedHomeworkStudents.map((student) => student.id)
          : [],
        studentNames: homeworkAudience === 'students'
          ? selectedHomeworkStudents.map((student) => getStudentDisplayName(student))
          : [],
        studentId: null,
        studentName: null,
        studentEmail: null
      }

      await createHomework(pendingHomework)
      setHomeworkTitle('')
      setHomeworkDescription('')
      setHomeworkDueDate('')
      setHomeworkFile(null)
      setHomeworkUploadProgress(0)
      setHomeworkUploadStage('Upload complete and published.')
      setHomeworkAudience('subject')
      setSelectedHomeworkStudentIds([])
      setMessage('Homework uploaded and published successfully!')
    } catch (err) {
      console.error('Error adding homework:', err)
      const errorMessage = err?.message === 'Upload timed out'
        ? 'R2 did not finish the upload within 3 minutes. Check your connection, then try again.'
        : err?.message || 'Failed to add homework'
      setMessage(errorMessage)
      setHomeworkUploadStage('')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmitResource = async (e) => {
    e.preventDefault()
    if (!isAdmin) {
      setMessage('Only admins can upload lessons, homework, or learning resources')
      return
    }
    if (!selectedSubject || !resourceTitle) {
      setMessage('Please fill in all required fields')
      return
    }

    if (!resourceFile) {
      setMessage('Please upload a resource file')
      return
    }

    if (!examBoard || (!isEnglishSubject() && !tier)) {
      setMessage('Select the exam board and Foundation or Higher tier before uploading')
      return
    }

    if (resourceAudience === 'students' && selectedResourceStudents.length === 0) {
      setMessage('Please select at least one student who should receive this resource')
      return
    }

    if (resourceAudience === 'students' && selectedResourceStudents.length !== selectedResourceStudentIds.length) {
      setMessage('One or more selected students are no longer enrolled in this subject')
      return
    }

    setLoading(true)
    setMessage('')
    try {
      setResourceUploadProgress(0)
      const uploadConfig = await createR2AdminUpload({
        subjectId: selectedSubject,
        examBoard,
        tier: isEnglishSubject() ? 'all-levels' : tier,
        fileName: resourceFile.name,
        contentType: resourceFile.type,
        uploadType: 'resource',
        studentIds: resourceAudience === 'students'
          ? selectedResourceStudents.map((student) => student.id)
          : []
      })

      await uploadFileWithProgress(
        resourceFile,
        uploadConfig,
        setResourceUploadProgress
      )
      const pendingResource = {
        subjectId: selectedSubject,
        title: resourceTitle,
        description: resourceDescription,
        fileName: resourceFile.name,
        fileContentType: resourceFile.type,
        fileSize: resourceFile.size,
        r2Key: uploadConfig.r2Key,
        examBoard,
        tier: isEnglishSubject() ? null : tier,
        visibility: resourceAudience,
        studentIds: resourceAudience === 'students'
          ? selectedResourceStudents.map((student) => student.id)
          : [],
        studentNames: resourceAudience === 'students'
          ? selectedResourceStudents.map((student) => getStudentDisplayName(student))
          : [],
        studentId: null,
        studentName: null,
        studentEmail: null
      }

      await createResource(pendingResource)
      setResourceTitle('')
      setResourceDescription('')
      setResourceFile(null)
      setResourceUploadProgress(0)
      setResourceAudience('subject')
      setSelectedResourceStudentIds([])
      setMessage('Resource uploaded and published successfully!')
    } catch (err) {
      console.error('Error adding resource:', err)
      setMessage(err?.message || 'Failed to add resource')
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
        {isTeacher && renderTutorHandbookPanel(() => setShowTutorHandbook(true), showTutorHandbook)}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{isAdmin ? 'Admin Panel' : 'Teacher Panel'}</h1>
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
          {isAdmin && (
            <div className="mt-4 rounded-md border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950">
              <p className="font-medium">R2 migration</p>
              <p className="mt-1">Check old files first. Only non-combined material uploaded in the last 30 days, with a complete subject, exam-board and tier route, can be copied privately without changing student access.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => runLegacyMigration('dry-run')}
                  disabled={migrationLoading}
                  className="rounded-md border border-blue-300 bg-white px-3 py-2 font-medium text-blue-800 disabled:opacity-50"
                >
                  {migrationLoading ? 'Checking…' : 'Check legacy files'}
                </button>
                <button
                  type="button"
                  onClick={() => runLegacyMigration('migrate')}
                  disabled={migrationLoading || (migrationSummary && migrationSummary.ready === 0)}
                  className="rounded-md bg-blue-700 px-3 py-2 font-medium text-white disabled:opacity-50"
                >
                  Migrate eligible files to R2
                </button>
              </div>
              {migrationSummary && (
                <p className="mt-3 text-blue-900">
                  {migrationSummary.scanned} scanned · {migrationSummary.mode === 'migrate' ? `${migrationSummary.migrated} migrated` : `${migrationSummary.ready} ready`} · {migrationSummary.excludedCombined || 0} combined excluded · {migrationSummary.excludedOlderThan30Days || 0} older excluded · {migrationSummary.skipped.length} skipped · {migrationSummary.failed.length} failed
                </p>
              )}
            </div>
          )}
          {isTeacher && (
            <>
              <div className="mt-4 rounded-md border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950">
                You can upload recordings and view homework for your assigned Foundation classes. The MySchola team assigns homework.
              </div>
              <section className="mt-4 rounded-xl border border-gray-200 bg-white p-5" aria-labelledby="teacher-classes-heading">
                <h2 id="teacher-classes-heading" className="text-lg font-semibold text-gray-900">
                  Your classes and Zoom links
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Your assigned subjects, exam boards, and class meeting links.
                </p>
                {teacherClasses.length === 0 ? (
                  <p className="mt-4 text-sm text-gray-600">No classes are assigned to this account.</p>
                ) : (
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {teacherClasses.map((classItem) => (
                      <li key={classItem.id} className="rounded-lg border border-gray-200 p-4">
                        <h3 className="font-semibold text-gray-900">{classItem.name}</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {[classItem.tier, classItem.examBoard].filter(Boolean).join(' · ') || 'Class details unavailable'}
                        </p>
                        {classItem.zoomLink ? (
                          <a
                            href={classItem.zoomLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                          >
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            Join Zoom class
                          </a>
                        ) : (
                          <p className="mt-3 text-sm text-amber-700">Zoom link not set for this class.</p>
                        )}
                        {isFawwazTeacher && (
                          <div className="mt-4 border-t border-gray-100 pt-3">
                            <h4 className="text-sm font-medium text-gray-800">Students in this class</h4>
                            {teacherRostersLoading ? (
                              <p className="mt-1 text-sm text-gray-500">Loading students...</p>
                            ) : teacherRosters[classItem.id]?.error ? (
                              <p className="mt-1 text-sm text-red-600">Could not load this class roster.</p>
                            ) : teacherRosters[classItem.id]?.students?.length ? (
                              <ul className="mt-1 space-y-1 text-sm text-gray-600">
                                {teacherRosters[classItem.id].students.map((student) => (
                                  <li key={student.id}>{student.name}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="mt-1 text-sm text-gray-500">No students are currently enrolled in this class.</p>
                            )}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </>
          )}
        </div>

        {isTeacher && showTutorHandbook && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-3 backdrop-blur-sm sm:p-6"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setShowTutorHandbook(false)
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="tutor-handbook-title"
              className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
            >
              <div className="shrink-0 border-b border-blue-100 border-t-4 border-t-blue-600 bg-white px-5 py-5 sm:px-8 sm:py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-blue-50 p-2.5 ring-1 ring-blue-100">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">MySchola tutor resources</p>
                      <h2 id="tutor-handbook-title" className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Tutor Handbook</h2>
                      <p className="mt-1 text-sm text-gray-600">The essential expectations for every MySchola lesson.</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowTutorHandbook(false)}
                    aria-label="Close Tutor Handbook"
                    className="rounded-lg p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <XCircle className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto bg-gray-50 px-5 py-6 sm:px-8">
                <div className="rounded-lg border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-gray-700">
                  <h3 className="font-semibold text-gray-900">Welcome to MySchola</h3>
                  <p className="mt-2">Welcome to the MySchola tutor team. MySchola provides online GCSE tuition through small group and 1-to-1 lessons, helping students improve their understanding, confidence and exam performance.</p>
                  <p className="mt-2">Our aim is to provide students with high-quality teaching, structured support and a consistent learning experience. As a MySchola tutor, your role is to deliver excellent lessons and support students academically, while the MySchola co-founder and admin team manage operations, parent communication and student administration.</p>
                </div>

                <div className="mt-5 space-y-4">
                  {TUTOR_HANDBOOK_FULL_SECTIONS.map((section) => (
                    <article key={section.number} className="rounded-lg border border-gray-200 bg-white p-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-600 text-xs font-bold text-white">{section.number}</span>
                        <h3 className="text-base font-semibold text-gray-900">{section.title}</h3>
                      </div>
                      {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-3 text-sm leading-6 text-gray-600">{paragraph}</p>)}
                      {section.intro && <p className="mt-3 text-sm leading-6 text-gray-600">{section.intro}</p>}
                      {section.numbered && <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-gray-700">{section.numbered.map((item) => <li key={item}>{item}</li>)}</ol>}
                      {section.subheading && <h4 className="mt-4 text-sm font-bold text-gray-900">{section.subheading}</h4>}
                      {section.bullets && <ul className="mt-3 space-y-2">{section.bullets.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-700"><CheckCircle className="mt-1 h-4 w-4 shrink-0 text-green-500" aria-hidden="true" /><span>{item}</span></li>)}</ul>}
                      {section.subheadingTwo && <h4 className="mt-5 text-sm font-bold text-gray-900">{section.subheadingTwo}</h4>}
                      {section.bulletsTwo && <ul className="mt-3 space-y-2">{section.bulletsTwo.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-700"><CheckCircle className="mt-1 h-4 w-4 shrink-0 text-green-500" aria-hidden="true" /><span>{item}</span></li>)}</ul>}
                      {section.subsections && <div className="mt-4 grid gap-4 md:grid-cols-3">{section.subsections.map((subsection) => <div key={subsection.title} className="rounded-lg bg-slate-50 p-4"><h4 className="font-semibold text-slate-900">{subsection.title}</h4><p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Current focus</p><ul className="mt-2 space-y-1.5 text-sm text-slate-600">{subsection.bullets.map((item) => <li key={item}>• {item}</li>)}</ul><p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Lessons should focus on</p><ul className="mt-2 space-y-1.5 text-sm text-slate-600">{subsection.focus.map((item) => <li key={item}>• {item}</li>)}</ul>{subsection.extra && <p className="mt-3 text-sm leading-6 text-slate-600">{subsection.extra}</p>}</div>)}</div>}
                      {section.checklist && <div className="mt-4 grid gap-3 md:grid-cols-3">{section.checklist.map((group) => <div key={group.title} className="rounded-lg border border-emerald-100 bg-emerald-50 p-4"><h4 className="font-semibold text-emerald-950">{group.title}</h4><ul className="mt-3 space-y-2 text-sm text-emerald-900">{group.items.map((item) => <li key={item} className="flex gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{item}</li>)}</ul></div>)}</div>}
                      {section.callout && <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><span className="font-semibold">Example: </span>“{section.callout}”</p>}
                      {section.outro && <p className="mt-4 text-sm leading-6 text-gray-600">{section.outro}</p>}
                    </article>
                  ))}
                </div>

                <div className="mt-5 rounded-lg border border-blue-100 bg-blue-50 p-5 text-center text-sm text-gray-700">
                  <h3 className="font-semibold text-gray-900">Thank you for being part of the MySchola tutor team.</h3>
                  <p className="mt-2 leading-6">By working together, tutors and the MySchola team can provide students with a high-quality GCSE learning experience and help them achieve their goals.</p>
                </div>
              </div>
            </div>
          </div>
        )}

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
          {isAdmin && (
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
          )}
          <button
            onClick={() => setActiveTab('resource')}
            className={`${!isAdmin ? 'hidden ' : ''} flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeTab === 'resource'
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            Add Resource
          </button>
          <button
            onClick={() => setActiveTab('approve')}
            className={`${!isAdmin ? 'hidden ' : ''} flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${
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
            {isAdmin ? 'Manage Homework' : 'View Homework'}
          </button>
          <button
            onClick={() => setActiveTab('view-submissions')}
            className={`${!isAdmin ? 'hidden ' : ''} flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeTab === 'view-submissions'
                ? 'bg-purple-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Users className="h-4 w-4" />
            View Submissions
          </button>
          <button
            onClick={() => setActiveTab('class-groups')}
            className={`${!isAdmin ? 'hidden ' : ''} flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeTab === 'class-groups'
                ? 'bg-indigo-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Users className="h-4 w-4" />
            Class groups
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
        {activeTab !== 'class-groups' && (
        <div className={`rounded-lg shadow-sm border p-6 mb-6 ${
          activeTab === 'view-submissions'
            ? 'bg-purple-50 border-purple-200'
            : 'bg-white border-gray-200'
        }`}>
          <label className={`block text-sm font-medium mb-2 ${
            activeTab === 'view-submissions' ? 'text-purple-900' : 'text-gray-700'
          }`}>
            {activeTab === 'view-submissions' ? 'Homework subject' : 'Select Subject'}
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value)
              setSelectedHomeworkStudentIds([])
              setSelectedResourceStudentIds([])
            }}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              activeTab === 'view-submissions'
                ? 'border-purple-300 bg-white focus:ring-purple-500 font-semibold'
                : 'border-gray-300 focus:ring-blue-500'
            }`}
          >
            {subjects.filter((subject) => !isCrashCourseSubject(subject)).map(subject => (
              <option key={subject.id} value={subject.id}>
                {getSubjectOptionLabel(subject)}
              </option>
            ))}
          </select>
          {activeTab === 'view-submissions' ? (
            <p className="mt-2 text-sm text-purple-800">
              Showing who submitted and who has not for <strong>{selectedSubjectData ? getCanonicalSubjectName(selectedSubjectData) : 'this subject'}</strong> only. Switch subjects here to review another class.
            </p>
          ) : selectedSubject ? (
            <p className="mt-2 text-xs text-gray-500">
              Selected subject ID: <code>{selectedSubject}</code>
            </p>
          ) : null}
        </div>
        )}

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
                  {!lockedExamBoard && <option value="">Select Exam Board</option>}
                  {examBoardOptions.map((board) => (
                    <option key={board} value={board}>{board}</option>
                  ))}
                </select>
                {lockedExamBoard && (
                  <p className="mt-1 text-xs text-gray-500">{lockedExamBoard} is the only exam board for this subject.</p>
                )}
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
                    {!isFawwazTeacher && <option value="Higher">Higher</option>}
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

              {isAdmin && (
                <div className="space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Who can see this recording?
                    </label>
                    <select
                      value={recordingAudience}
                      onChange={(e) => {
                        setRecordingAudience(e.target.value)
                        if (e.target.value === 'subject') {
                          setSelectedRecordingStudentId('')
                        }
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="subject">All students enrolled in this subject</option>
                      <option value="student">One specific student only</option>
                    </select>
                  </div>

                  {recordingAudience === 'student' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Student *
                      </label>
                      <select
                        value={selectedRecordingStudentId}
                        onChange={(e) => setSelectedRecordingStudentId(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        required
                        disabled={subjectStudentsLoading || !recipientRosterReady}
                      >
                        <option value="">
                          {subjectStudentsLoading
                            ? 'Loading students...'
                            : recipientRosterReady
                              ? 'Select student'
                              : 'Select the exam board and tier first'}
                        </option>
                        {enrolledStudents.map((student) => (
                          <option key={student.id} value={student.id}>
                            {getStudentDisplayName(student)}{student.email ? ` (${student.email})` : ''}
                          </option>
                        ))}
                      </select>
                      {!subjectStudentsLoading && !recipientRosterReady && (
                        <p className="mt-2 text-sm text-blue-700">
                          Select the exam board and tier to show only students on that course route.
                        </p>
                      )}
                      {!subjectStudentsLoading && recipientRosterReady && enrolledStudents.length === 0 && (
                        <p className="mt-2 text-sm text-red-600">
                          No students are enrolled in subject ID <code>{selectedSubject}</code> yet.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
              
              <div className="bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700">
                Your video is stored privately in R2; save it on the next page to publish it.
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
        {activeTab === 'approve' && isAdmin && (
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
                          {recording.visibility === 'student' && (
                            <p>
                              <span className="font-medium">Student:</span>{' '}
                              {recording.studentName || recording.studentEmail || recording.studentId || 'Specific student'}
                            </p>
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
                            disabled={deletingRecordingId === getRecordingDeleteKey(recording.id)}
                            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition flex items-center gap-2 disabled:opacity-50"
                          >
                            <Trash2 className="h-4 w-4" />
                            {deletingRecordingId === getRecordingDeleteKey(recording.id) ? 'Deleting...' : 'Delete'}
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
                  Review subject-wide and student-specific recordings for the selected subject.
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
                {managedRecordings.map((recording) => {
                  const targetStudents = getRecordingTargetStudents(recording, enrolledStudents)
                  const accessStudents = targetStudents.filter((student) => !isRecordingHiddenForStudent(recording, student))
                  const removedStudents = targetStudents.filter((student) => isRecordingHiddenForStudent(recording, student))

                  return (
                    <div
                      key={`${getRecordingCollection(recording)}-${recording.id}`}
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
                            {recording.visibility === 'student' && (
                              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
                                Specific student
                              </span>
                            )}
                          </div>

                          <div className="space-y-1 text-sm text-gray-600">
                            <p>
                              <span className="font-medium">Access:</span>{' '}
                              {recording.visibility === 'student'
                                ? isFawwazTeacher ? 'Specific student' : recording.studentName || recording.studentEmail || recording.studentId || 'Specific student'
                                : isAdmin
                                  ? `${accessStudents.length} student${accessStudents.length === 1 ? '' : 's'} can see this`
                                  : `All enrolled ${recording.tier ? `${recording.tier} ` : ''}students in this class`}
                              {isAdmin && removedStudents.length > 0 && (
                                <span className="text-red-600">, {removedStudents.length} removed</span>
                              )}
                            </p>
                            <p><span className="font-medium">Exam Board:</span> {recording.examBoard || 'N/A'}</p>
                            {recording.tier && (
                              <p><span className="font-medium">Tier:</span> {recording.tier}</p>
                            )}
                            <p><span className="font-medium">Date:</span> {formatRecordingDate(recording.date || recording.createdAt)}</p>
                            {recording.createdByRole && (
                              <p><span className="font-medium">Uploaded by:</span> {recording.createdByRole}</p>
                            )}
                          </div>

                          {(recording.videoUrl || recording.r2Key) && (
                            <button
                              type="button"
                              onClick={() => openManagedMaterial(recording, 'recording')}
                              disabled={openingMaterialKey === `recording:${getRecordingCollection(recording)}:${recording.id}`}
                              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-3 disabled:opacity-50"
                            >
                              <Video className="h-4 w-4" />
                              {openingMaterialKey === `recording:${getRecordingCollection(recording)}:${recording.id}` ? 'Opening…' : 'Preview Video'}
                            </button>
                          )}

                          {isAdmin && (
                          <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-3">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                              <h4 className="text-sm font-semibold text-gray-900">Student Access</h4>
                              <span className="text-xs text-gray-500">
                                {accessStudents.length} active / {targetStudents.length} total
                              </span>
                            </div>

                            {subjectStudentsLoading ? (
                              <p className="text-sm text-gray-600">Loading students...</p>
                            ) : targetStudents.length === 0 ? (
                              <p className="text-sm text-gray-600">No matching students found for this recording.</p>
                            ) : (
                              <div className="space-y-2">
                                {targetStudents.map((student) => {
                                  const isHidden = isRecordingHiddenForStudent(recording, student)
                                  const hiddenByKeyword = isRecordingHiddenByTitleKeyword(recording, student)
                                  const removeKey = getRecordingAccessKey(recording.id, student.id, 'remove')
                                  const restoreKey = getRecordingAccessKey(recording.id, student.id, 'restore')

                                  return (
                                    <div key={student.id} className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-white px-3 py-2 border border-gray-200">
                                      <div className="min-w-0">
                                        <p className="text-sm font-medium text-gray-900">{getStudentDisplayName(student)}</p>
                                        {student.email && (
                                          <p className="text-xs text-gray-500">{student.email}</p>
                                        )}
                                      </div>
                                      <div className="flex flex-wrap items-center gap-2">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                                          isHidden ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                        }`}>
                                          {isHidden ? 'Access removed' : 'Can access'}
                                        </span>
                                        {isAdmin && !isHidden && (
                                          <button
                                            type="button"
                                            onClick={() => handleRemoveRecordingAccess(recording, student)}
                                            disabled={updatingRecordingAccessKey === removeKey}
                                            className="text-xs font-medium text-red-700 hover:text-red-800 disabled:opacity-50"
                                          >
                                            {updatingRecordingAccessKey === removeKey ? 'Removing...' : 'Remove access'}
                                          </button>
                                        )}
                                        {isAdmin && isHidden && !hiddenByKeyword && (
                                          <button
                                            type="button"
                                            onClick={() => handleRestoreRecordingAccess(recording, student)}
                                            disabled={updatingRecordingAccessKey === restoreKey}
                                            className="text-xs font-medium text-blue-700 hover:text-blue-800 disabled:opacity-50"
                                          >
                                            {updatingRecordingAccessKey === restoreKey ? 'Restoring...' : 'Restore access'}
                                          </button>
                                        )}
                                        {isAdmin && isHidden && hiddenByKeyword && (
                                          <span className="text-xs text-gray-500">Hidden by title keyword</span>
                                        )}
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                          )}
                        </div>

                        {isAdmin && (
                          <button
                            onClick={() => handleDeleteRecording(recording.id, recording.title, getRecordingCollection(recording))}
                            disabled={deletingRecordingId === getRecordingDeleteKey(recording.id, getRecordingCollection(recording))}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 whitespace-nowrap"
                          >
                            <Trash2 className="h-4 w-4" />
                            {deletingRecordingId === getRecordingDeleteKey(recording.id, getRecordingCollection(recording)) ? 'Deleting...' : 'Delete'}
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
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
                  const targetStudents = getHomeworkTargetStudents(homework, enrolledStudents)
                  const accessStudents = targetStudents.filter((student) => !isHomeworkHiddenForStudent(homework, student))
                  const removedStudents = targetStudents.filter((student) => isHomeworkHiddenForStudent(homework, student))

                  return (
                    <div
                      key={`${getHomeworkCollection(homework)}-${homework.id}`}
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
                            {homework.visibility === 'student' && (
                              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
                                Specific student
                              </span>
                            )}
                          </div>

                          {homework.description && (
                            <p className="text-sm text-gray-600 mb-3">
                              {homework.description}
                            </p>
                          )}

                          <div className="space-y-1 text-sm text-gray-600">
                            <p>
                              <span className="font-medium">Access:</span>{' '}
                              {homework.visibility === 'student'
                                ? isFawwazTeacher ? 'Specific student' : homework.studentName || homework.studentEmail || homework.studentId || 'Specific student'
                                : isAdmin
                                  ? `${accessStudents.length} student${accessStudents.length === 1 ? '' : 's'} can see this`
                                  : `All enrolled ${homework.tier ? `${homework.tier} ` : ''}students in this class`}
                              {isAdmin && removedStudents.length > 0 && (
                                <span className="text-red-600">, {removedStudents.length} removed</span>
                              )}
                            </p>
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

                          {(homework.attachmentUrl || homework.r2Key) && (
                            <button
                              type="button"
                              onClick={() => openManagedMaterial(homework, 'homework')}
                              disabled={openingMaterialKey === `homework:${getHomeworkCollection(homework)}:${homework.id}`}
                              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 text-sm mt-3 disabled:opacity-50"
                            >
                              <Download className="h-4 w-4" />
                              {openingMaterialKey === `homework:${getHomeworkCollection(homework)}:${homework.id}` ? 'Opening…' : 'Open Attachment'}
                            </button>
                          )}

                          {isAdmin && (
                          <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-3">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                              <h4 className="text-sm font-semibold text-gray-900">Student Access</h4>
                              <span className="text-xs text-gray-500">
                                {accessStudents.length} active / {targetStudents.length} total
                              </span>
                            </div>

                            {subjectStudentsLoading ? (
                              <p className="text-sm text-gray-600">Loading students...</p>
                            ) : targetStudents.length === 0 ? (
                              <p className="text-sm text-gray-600">No matching students found for this homework.</p>
                            ) : (
                              <div className="space-y-2">
                                {targetStudents.map((student) => {
                                  const isHidden = isHomeworkHiddenForStudent(homework, student)
                                  const hiddenByKeyword = isHomeworkHiddenByTitleKeyword(homework, student)
                                  const removeKey = getHomeworkAccessKey(homework.id, student.id, 'remove')
                                  const restoreKey = getHomeworkAccessKey(homework.id, student.id, 'restore')

                                  return (
                                    <div key={student.id} className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-white px-3 py-2 border border-gray-200">
                                      <div className="min-w-0">
                                        <p className="text-sm font-medium text-gray-900">{getStudentDisplayName(student)}</p>
                                        {student.email && (
                                          <p className="text-xs text-gray-500">{student.email}</p>
                                        )}
                                      </div>
                                      <div className="flex flex-wrap items-center gap-2">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                                          isHidden ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                        }`}>
                                          {isHidden ? 'Access removed' : 'Can access'}
                                        </span>
                                        {isAdmin && !isHidden && (
                                          <button
                                            type="button"
                                            onClick={() => handleRemoveHomeworkAccess(homework, student)}
                                            disabled={updatingHomeworkAccessKey === removeKey}
                                            className="text-xs font-medium text-red-700 hover:text-red-800 disabled:opacity-50"
                                          >
                                            {updatingHomeworkAccessKey === removeKey ? 'Removing...' : 'Remove access'}
                                          </button>
                                        )}
                                        {isAdmin && isHidden && !hiddenByKeyword && (
                                          <button
                                            type="button"
                                            onClick={() => handleRestoreHomeworkAccess(homework, student)}
                                            disabled={updatingHomeworkAccessKey === restoreKey}
                                            className="text-xs font-medium text-blue-700 hover:text-blue-800 disabled:opacity-50"
                                          >
                                            {updatingHomeworkAccessKey === restoreKey ? 'Restoring...' : 'Restore access'}
                                          </button>
                                        )}
                                        {isAdmin && isHidden && hiddenByKeyword && (
                                          <span className="text-xs text-gray-500">Hidden by title keyword</span>
                                        )}
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                          )}
                        </div>

                        <button
                          onClick={() => handleDeleteHomework(homework.id, homework.title, getHomeworkCollection(homework))}
                          disabled={deletingHomeworkId === getHomeworkDeleteKey(homework.id, getHomeworkCollection(homework))}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 whitespace-nowrap"
                        >
                          <Trash2 className="h-4 w-4" />
                          {deletingHomeworkId === getHomeworkDeleteKey(homework.id, getHomeworkCollection(homework)) ? 'Deleting...' : 'Delete'}
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
        {isAdmin && activeTab === 'homework' && (
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

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Exam Board *</label>
                  <select value={examBoard} onChange={(e) => setExamBoard(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    {!lockedExamBoard && <option value="">Select Exam Board</option>}
                    {examBoardOptions.map((board) => (
                      <option key={board} value={board}>{board}</option>
                    ))}
                  </select>
                  {lockedExamBoard && (
                    <p className="mt-1 text-xs text-gray-500">{lockedExamBoard} is the only exam board for this subject.</p>
                  )}
                </div>
                {!isEnglishSubject() && <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tier *</label>
                  <select value={tier} onChange={(e) => setTier(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option value="">Select Tier</option>
                    <option value="Foundation">Foundation</option>
                    {!isFawwazTeacher && <option value="Higher">Higher</option>}
                  </select>
                </div>}
              </div>

              {isAdmin && (
                <div className="space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Who can see this homework?
                    </label>
                    <select
                      value={homeworkAudience}
                      onChange={(e) => {
                        setHomeworkAudience(e.target.value)
                        if (e.target.value === 'subject') {
                          setSelectedHomeworkStudentIds([])
                        }
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                    >
                      <option value="subject">All students enrolled in this subject</option>
                      <option value="students">Selected students only</option>
                    </select>
                  </div>

                  {homeworkAudience === 'students' && (
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-700 mb-2">
                        Students *
                      </legend>
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <span className="text-xs font-medium text-gray-600">
                          {selectedHomeworkStudents.length} selected
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Choose one or more students enrolled in this subject.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <button
                          type="button"
                          onClick={() => setSelectedHomeworkStudentIds(enrolledStudents.map((student) => student.id))}
                          disabled={subjectStudentsLoading || !recipientRosterReady || enrolledStudents.length === 0 || allHomeworkStudentsSelected}
                          className="px-3 py-1.5 text-sm font-medium text-green-700 border border-green-200 rounded-md hover:bg-green-50 disabled:opacity-50"
                        >
                          Select all
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedHomeworkStudentIds([])}
                          disabled={selectedHomeworkStudentIds.length === 0}
                          className="px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-white disabled:opacity-50"
                        >
                          Clear
                        </button>
                      </div>
                      <div className="max-h-64 space-y-2 overflow-y-auto rounded-md border border-gray-300 bg-white p-3">
                        {subjectStudentsLoading ? (
                          <p className="text-sm text-gray-600">Loading students...</p>
                        ) : !recipientRosterReady ? (
                          <p className="text-sm text-blue-700">
                            Select the exam board and tier to show only students on that course route.
                          </p>
                        ) : enrolledStudents.length === 0 ? (
                          <p className="text-sm text-red-600">
                            No students are enrolled in subject ID <code>{selectedSubject}</code> yet.
                          </p>
                        ) : (
                          enrolledStudents.map((student) => (
                            <label
                              key={student.id}
                              className="flex cursor-pointer items-start gap-3 rounded-md px-2 py-2 hover:bg-green-50"
                            >
                              <input
                                type="checkbox"
                                checked={selectedHomeworkStudentIds.includes(student.id)}
                                onChange={() => toggleHomeworkStudent(student.id)}
                                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                              />
                              <span className="text-sm text-gray-800">
                                {getStudentDisplayName(student)}
                                {student.email ? ` (${student.email})` : ''}
                              </span>
                            </label>
                          ))
                        )}
                      </div>
                    </fieldset>
                  )}
                </div>
              )}

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
                    setHomeworkUploadStage('')
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {loading && homeworkUploadStage && (
                  <p className="text-sm text-gray-600 mt-2" role="status">
                    {homeworkUploadStage}
                    {homeworkUploadProgress > 0 && homeworkUploadProgress < 100
                      ? ` ${homeworkUploadProgress}%`
                      : ''}
                  </p>
                )}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700">
                Your file is stored privately in R2 and will publish automatically when the upload finishes.
              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Save className="h-4 w-4" />
              {loading
                ? homeworkUploadStage.startsWith('Preparing')
                  ? 'Preparing upload…'
                  : 'Uploading to R2…'
                : 'Add Homework'}
            </button>
          </form>
        )}

        {/* Resource Form */}
        {activeTab === 'resource' && isAdmin && (
          <form onSubmit={handleSubmitResource} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Revision Resource</h2>
            <p className="text-sm text-gray-600 mb-6">
              Upload PDFs or Word documents for students to download.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={resourceTitle}
                  onChange={(e) => setResourceTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., Topic 3 Revision Notes"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={resourceDescription}
                  onChange={(e) => setResourceDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="3"
                  placeholder="Optional description for students"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Exam Board *</label>
                  <select value={examBoard} onChange={(e) => setExamBoard(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    {!lockedExamBoard && <option value="">Select Exam Board</option>}
                    {examBoardOptions.map((board) => (
                      <option key={board} value={board}>{board}</option>
                    ))}
                  </select>
                  {lockedExamBoard && (
                    <p className="mt-1 text-xs text-gray-500">{lockedExamBoard} is the only exam board for this subject.</p>
                  )}
                </div>
                {!isEnglishSubject() && <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tier *</label>
                  <select value={tier} onChange={(e) => setTier(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option value="">Select Tier</option>
                    <option value="Foundation">Foundation</option>
                    {!isFawwazTeacher && <option value="Higher">Higher</option>}
                  </select>
                </div>}
              </div>

              {isAdmin && (
                <div className="space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Who can see this resource?
                    </label>
                    <select
                      value={resourceAudience}
                      onChange={(e) => {
                        setResourceAudience(e.target.value)
                        if (e.target.value === 'subject') {
                          setSelectedResourceStudentIds([])
                        }
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    >
                      <option value="subject">All students enrolled in this subject</option>
                      <option value="students">Selected students only</option>
                    </select>
                  </div>

                  {resourceAudience === 'students' && (
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-700 mb-2">
                        Students *
                      </legend>
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <span className="text-xs font-medium text-gray-600">
                          {selectedResourceStudents.length} selected
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Choose one or more students enrolled in this subject.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <button
                          type="button"
                          onClick={() => setSelectedResourceStudentIds(enrolledStudents.map((student) => student.id))}
                          disabled={subjectStudentsLoading || !recipientRosterReady || enrolledStudents.length === 0 || allResourceStudentsSelected}
                          className="px-3 py-1.5 text-sm font-medium text-purple-700 border border-purple-200 rounded-md hover:bg-purple-50 disabled:opacity-50"
                        >
                          Select all
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedResourceStudentIds([])}
                          disabled={selectedResourceStudentIds.length === 0}
                          className="px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-white disabled:opacity-50"
                        >
                          Clear
                        </button>
                      </div>
                      <div className="max-h-64 space-y-2 overflow-y-auto rounded-md border border-gray-300 bg-white p-3">
                        {subjectStudentsLoading ? (
                          <p className="text-sm text-gray-600">Loading students...</p>
                        ) : !recipientRosterReady ? (
                          <p className="text-sm text-blue-700">
                            Select the exam board and tier to show only students on that course route.
                          </p>
                        ) : enrolledStudents.length === 0 ? (
                          <p className="text-sm text-red-600">
                            No students are enrolled in subject ID <code>{selectedSubject}</code> yet.
                          </p>
                        ) : (
                          enrolledStudents.map((student) => (
                            <label
                              key={student.id}
                              className="flex cursor-pointer items-start gap-3 rounded-md px-2 py-2 hover:bg-purple-50"
                            >
                              <input
                                type="checkbox"
                                checked={selectedResourceStudentIds.includes(student.id)}
                                onChange={() => toggleResourceStudent(student.id)}
                                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="text-sm text-gray-800">
                                {getStudentDisplayName(student)}
                                {student.email ? ` (${student.email})` : ''}
                              </span>
                            </label>
                          ))
                        )}
                      </div>
                    </fieldset>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resource File * (PDF, Word, etc.)
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                  required
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null
                    setResourceFile(file)
                    setResourceUploadProgress(0)
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {resourceUploadProgress > 0 && resourceUploadProgress < 100 && (
                  <p className="text-sm text-gray-600 mt-2">Uploading... {resourceUploadProgress}%</p>
                )}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700">
                Your file is stored privately in R2; save it on the next page to publish it.
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Save className="h-4 w-4" />
              {loading ? 'Adding...' : 'Add Resource'}
            </button>
          </form>
        )}

        {/* View Submissions */}
        {activeTab === 'view-submissions' && isAdmin && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="mb-4 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">Selected subject</p>
                <p className="mt-1 text-lg font-bold text-purple-950">
                  {selectedSubjectData ? getCanonicalSubjectName(selectedSubjectData) : 'Choose a subject above'}
                </p>
                <p className="text-sm text-purple-800">
                  {enrolledStudents.length} enrolled student{enrolledStudents.length === 1 ? '' : 's'} in this subject
                </p>
              </div>
              <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Homework submissions</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    For this subject only: see who has done each homework, and mark a student as done or not done.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <button 
                  onClick={() => { setSubmissionFilter('all'); setRosterFilter('all') }}
                  className={`rounded-lg p-4 text-center transition ${
                    submissionFilter === 'all' && rosterFilter === 'all'
                      ? 'bg-blue-100 border-2 border-blue-400' 
                      : 'bg-blue-50 border border-blue-200 hover:bg-blue-100'
                  }`}
                >
                  <p className="text-2xl font-bold text-blue-600">{groupedHomeworks.length}</p>
                  <p className="text-sm text-gray-600">Homework in this subject</p>
                </button>
                <button 
                  onClick={() => { setRosterFilter('submitted'); setSubmissionFilter('all') }}
                  className={`rounded-lg p-4 text-center transition ${
                    rosterFilter === 'submitted'
                      ? 'bg-emerald-100 border-2 border-emerald-400' 
                      : 'bg-emerald-50 border border-emerald-200 hover:bg-emerald-100'
                  }`}
                >
                  <p className="text-2xl font-bold text-emerald-700">{submissions.length}</p>
                  <p className="text-sm text-gray-600">Submitted</p>
                </button>
                <button 
                  onClick={() => { setRosterFilter('missing'); setSubmissionFilter('all') }}
                  className={`rounded-lg p-4 text-center transition ${
                    rosterFilter === 'missing'
                      ? 'bg-rose-100 border-2 border-rose-400' 
                      : 'bg-rose-50 border border-rose-200 hover:bg-rose-100'
                  }`}
                >
                  <p className="text-2xl font-bold text-rose-700">Missing</p>
                  <p className="text-sm text-gray-600">Not submitted</p>
                </button>
                <button 
                  onClick={() => { setSubmissionFilter('pending'); setRosterFilter('submitted') }}
                  className={`rounded-lg p-4 text-center transition ${
                    submissionFilter === 'pending' 
                      ? 'bg-yellow-100 border-2 border-yellow-400' 
                      : 'bg-yellow-50 border border-yellow-200 hover:bg-yellow-100'
                  }`}
                >
                  <p className="text-2xl font-bold text-yellow-600">
                    {submissions.filter(s => !s.marked).length}
                  </p>
                  <p className="text-sm text-gray-600">Pending review</p>
                </button>
              </div>
            </div>

            {submissionsLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                <p className="text-gray-600 mt-2">Loading...</p>
              </div>
            ) : (
              /* Group by Homework - Show ALL homeworks with ALL enrolled students */
              (() => {
                // Helper to check if homework is overdue
                const isHomeworkOverdue = (dueDate) => {
                  if (!dueDate) return false
                  const date = dueDate.toDate ? dueDate.toDate() : new Date(dueDate)
                  return date < new Date()
                }

                // Helper to get submission for a student and homework
                const getSubmission = (studentId, homeworkIds) => {
                  return submissions.find((s) => s.studentId === studentId && homeworkIds.has(String(s.homeworkId)))
                }

                const getStudentStatus = (student, homeworkIds, dueDate) => {
                  const submission = getSubmission(student.id, homeworkIds)
                  const overdue = isHomeworkOverdue(dueDate)
                  
                  if (!submission) {
                    return { 
                      status: overdue ? 'overdue' : 'not-submitted', 
                      label: overdue ? 'Overdue' : 'Not Submitted',
                      color: overdue ? 'red' : 'gray',
                      submission: null 
                    }
                  }
                  
                  if (submission.marked) {
                    return { 
                      status: 'marked', 
                      label: 'Marked', 
                      color: 'green',
                      submission 
                    }
                  }
                  
                  return { 
                    status: 'submitted', 
                    label: 'Submitted', 
                    color: 'yellow',
                    submission 
                  }
                }

                if (groupedHomeworks.length === 0) {
                  return (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                      <Folder className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No homework assignments for this subject yet.</p>
                    </div>
                  )
                }

                return groupedHomeworks.map((group) => {
                  const homeworkIds = new Set(group.items.map((item) => String(item.id)))
                  const hwId = group.key
                  const isExpanded = expandedHomework[hwId] !== false
                  const overdue = isHomeworkOverdue(group.dueDate)
                  const homeworkStudents = getGroupedHomeworkStudents(group, enrolledStudents)
                  
                  let submittedCount = 0
                  let markedCount = 0
                  let overdueCount = 0
                  
                  homeworkStudents.forEach(student => {
                    const status = getStudentStatus(student, homeworkIds, group.dueDate)
                    if (status.status === 'marked') markedCount++
                    else if (status.status === 'submitted') submittedCount++
                    else if (status.status === 'overdue') overdueCount++
                  })
                  
                  const notSubmittedCount = homeworkStudents.length - submittedCount - markedCount
                  const studentsWithStatus = homeworkStudents.map((student) => ({
                    student,
                    ...getStudentStatus(student, homeworkIds, group.dueDate)
                  }))
                  const submittedStudents = studentsWithStatus.filter((item) => {
                    if (item.status !== 'submitted' && item.status !== 'marked') return false
                    if (submissionFilter === 'pending') return item.status === 'submitted'
                    if (submissionFilter === 'marked') return item.status === 'marked'
                    return true
                  })
                  const missingStudents = studentsWithStatus.filter((item) => (
                    item.status === 'not-submitted' || item.status === 'overdue'
                  ))
                  const showSubmittedColumn = rosterFilter !== 'missing'
                  const showMissingColumn = rosterFilter !== 'submitted'

                  const renderStudentRow = (item) => {
                    const { student, submission } = item
                    const hasFile = Boolean(String(submission?.googleDocsUrl || '').trim())
                    const doneKey = `done:${hwId}:${student.id}`
                    const undoneKey = submission ? `undone:${submission.id}` : ''
                    const isTogglingDone = togglingHomeworkCompletionKey === doneKey
                    const isTogglingNotDone = togglingHomeworkCompletionKey === undoneKey
                    const statusColors = {
                      'marked': 'bg-green-50',
                      'submitted': 'bg-yellow-50',
                      'overdue': 'bg-red-50',
                      'not-submitted': 'bg-gray-50'
                    }
                    const badgeColors = {
                      'marked': 'bg-green-100 text-green-700',
                      'submitted': 'bg-yellow-100 text-yellow-700',
                      'overdue': 'bg-red-100 text-red-700',
                      'not-submitted': 'bg-gray-100 text-gray-600'
                    }

                    return (
                      <div
                        key={student.id}
                        className={`p-4 flex items-start justify-between gap-4 ${statusColors[item.status]}`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <p className="text-sm font-medium text-gray-900">{student.displayName}</p>
                            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${badgeColors[item.status]}`}>
                              {item.status === 'marked' && <CheckCircle className="h-3 w-3 mr-1" />}
                              {item.label}
                            </span>
                          </div>
                          {submission && (
                            <div className="space-y-1 text-sm text-gray-600">
                              <p>
                                <span className="font-medium text-gray-700">
                                  {submission.completedByAdmin && !hasFile ? 'Marked done:' : 'Submitted:'}
                                </span>{' '}
                                {submission.submittedAt?.toDate
                                  ? submission.submittedAt.toDate().toLocaleString('en-GB')
                                  : 'Pending'}
                              </p>
                              {submission.markedAt && (
                                <p className="text-green-600">
                                  <span className="font-medium">Marked:</span>{' '}
                                  {submission.markedAt?.toDate
                                    ? submission.markedAt.toDate().toLocaleString('en-GB')
                                    : 'Yes'}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap justify-end">
                          {submission ? (
                            <>
                              {hasFile && (
                                <a
                                  href={submission.googleDocsUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium whitespace-nowrap"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  Open Doc
                                </a>
                              )}
                              {!submission.marked && (
                                <button
                                  onClick={() => handleMarkSubmission(submission.id)}
                                  disabled={markingSubmissionId === submission.id}
                                  className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition text-sm font-medium whitespace-nowrap disabled:opacity-50"
                                >
                                  {markingSubmissionId === submission.id ? (
                                    <>
                                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                      Marking...
                                    </>
                                  ) : (
                                    <>
                                      <CheckCircle className="h-4 w-4" />
                                      Mark Done
                                    </>
                                  )}
                                </button>
                              )}
                              <button
                                onClick={() => handleMarkStudentHomeworkNotDone(student, submission)}
                                disabled={isTogglingNotDone}
                                className="inline-flex items-center gap-2 bg-white text-rose-700 border border-rose-200 px-3 py-2 rounded-lg hover:bg-rose-50 transition text-sm font-medium whitespace-nowrap disabled:opacity-50"
                              >
                                {isTogglingNotDone ? (
                                  <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-rose-700"></div>
                                    Updating...
                                  </>
                                ) : (
                                  <>
                                    <XCircle className="h-4 w-4" />
                                    Mark as not done
                                  </>
                                )}
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => handleMarkStudentHomeworkDone(student, group)}
                              disabled={isTogglingDone}
                              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-3 py-2 rounded-lg hover:bg-emerald-700 transition text-sm font-medium whitespace-nowrap disabled:opacity-50"
                            >
                              {isTogglingDone ? (
                                <>
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                  Updating...
                                </>
                              ) : (
                                <>
                                  <CheckCircle className="h-4 w-4" />
                                  Mark as done
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  }

                  return (
                    <div key={hwId} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <button
                        onClick={() => setExpandedHomework(prev => ({ ...prev, [hwId]: !isExpanded }))}
                        className={`w-full p-4 transition flex items-center justify-between ${
                          isExpanded 
                            ? 'bg-blue-50 border-b-2 border-blue-200' 
                            : 'bg-gray-50 border-b border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className={`p-2 rounded-lg ${isExpanded ? 'bg-blue-100' : 'bg-white'}`}>
                            <Folder className={`h-5 w-5 ${isExpanded ? 'text-blue-700' : 'text-gray-600'}`} />
                          </div>
                          <div className="text-left flex-1 min-w-0">
                            <h3 className={`font-semibold truncate ${isExpanded ? 'text-blue-900' : 'text-gray-900'}`}>
                              {group.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {selectedSubjectData ? getCanonicalSubjectName(selectedSubjectData) : 'This subject'} · Due: {group.dueDate ? new Date(group.dueDate.toDate ? group.dueDate.toDate() : group.dueDate).toLocaleDateString('en-GB') : 'No due date'}
                              {overdue && ' • Overdue'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-3 flex-wrap justify-end">
                          <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700">
                            {homeworkStudents.length} students
                          </span>
                          <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800">
                            {submittedCount + markedCount} submitted
                          </span>
                          {notSubmittedCount > 0 && (
                            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-rose-100 text-rose-700">
                              {notSubmittedCount} not submitted
                            </span>
                          )}
                          {overdueCount > 0 && (
                            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-100 text-red-700">
                              {overdueCount} overdue
                            </span>
                          )}
                          {submittedCount > 0 && (
                            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700">
                              {submittedCount} pending
                            </span>
                          )}
                          {markedCount > 0 && (
                            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                              {markedCount} marked
                            </span>
                          )}
                          <div className={`p-1 rounded-full transition-transform duration-200 ml-1 ${isExpanded ? 'bg-blue-200' : 'bg-gray-200'}`}>
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5 text-blue-700" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                        </div>
                      </button>

                      <div 
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isExpanded ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {homeworkStudents.length === 0 ? (
                          <div className="p-4 text-center text-gray-500">
                            No students currently have access to this homework.
                          </div>
                        ) : (
                          <div className={`grid gap-0 ${showSubmittedColumn && showMissingColumn ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
                            {showSubmittedColumn && (
                              <div className="border-t border-gray-200 lg:border-r">
                                <div className="bg-emerald-50 px-4 py-2 border-b border-emerald-100">
                                  <p className="text-sm font-semibold text-emerald-900">
                                    Submitted ({submittedStudents.length})
                                  </p>
                                </div>
                                <div className="divide-y divide-gray-200">
                                  {submittedStudents.length === 0 ? (
                                    <p className="p-4 text-sm text-gray-500">Nobody in this subject has submitted this homework yet.</p>
                                  ) : (
                                    submittedStudents.map(renderStudentRow)
                                  )}
                                </div>
                              </div>
                            )}
                            {showMissingColumn && (
                              <div className="border-t border-gray-200">
                                <div className="bg-rose-50 px-4 py-2 border-b border-rose-100">
                                  <p className="text-sm font-semibold text-rose-900">
                                    Not submitted ({missingStudents.length})
                                  </p>
                                </div>
                                <div className="divide-y divide-gray-200">
                                  {missingStudents.length === 0 ? (
                                    <p className="p-4 text-sm text-gray-500">Everyone in this subject has submitted.</p>
                                  ) : (
                                    missingStudents.map(renderStudentRow)
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })
              })()
            )}
          </div>
        )}

        {activeTab === 'class-groups' && isAdmin && (() => {
          const queryText = classGroupSearch.trim().toLowerCase()
          const matchingStudents = queryText
            ? studentClassLists.filter((student) => (
              student.name.toLowerCase().includes(queryText)
              || student.email.toLowerCase().includes(queryText)
            ))
            : []
          const visibleGroups = classGroups.filter((group) => {
            if (classGroupTierFilter === 'foundation' && group.tier !== 'Foundation') return false
            if (classGroupTierFilter === 'higher' && group.tier !== 'Higher') return false
            if (classGroupTierFilter === 'english' && group.tier) return false
            if (!queryText) return true
            if (group.subjectName.toLowerCase().includes(queryText)) return true
            return group.students.some((student) => (
              student.name.toLowerCase().includes(queryText)
              || student.email.toLowerCase().includes(queryText)
            ))
          })

          return (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Class groups</h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Every group student, their subject, Higher/Foundation, and the Zoom link for that class. This is stored in Firestore for recall.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => loadClassDirectory(true)}
                    disabled={classGroupsLoading || classGroupsSaving}
                    className="inline-flex items-center justify-center rounded-lg bg-indigo-700 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-800 disabled:opacity-50"
                  >
                    {classGroupsSaving ? 'Saving…' : classGroupsLoading ? 'Loading…' : 'Refresh and save'}
                  </button>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <label className="relative sm:col-span-2">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="search"
                      value={classGroupSearch}
                      onChange={(e) => setClassGroupSearch(e.target.value)}
                      placeholder="Search student, email, or subject"
                      className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </label>
                  <select
                    value={classGroupTierFilter}
                    onChange={(e) => setClassGroupTierFilter(e.target.value)}
                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All classes</option>
                    <option value="foundation">Foundation only</option>
                    <option value="higher">Higher only</option>
                    <option value="english">English (no tier)</option>
                  </select>
                </div>
              </div>

              {classGroupsLoading && classGroups.length === 0 ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
                  <p className="text-gray-600 mt-2">Loading class groups...</p>
                </div>
              ) : (
                <>
                  {matchingStudents.length > 0 && (
                    <div className="space-y-4">
                      {matchingStudents.map((student) => (
                        <div key={student.id} className="bg-indigo-50 border border-indigo-200 rounded-lg p-5">
                          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">Student lookup</p>
                          <h3 className="mt-1 text-lg font-semibold text-indigo-950">{student.name}</h3>
                          <p className="text-sm text-indigo-800">{student.email}</p>
                          <div className="mt-3 overflow-x-auto">
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="text-left text-indigo-800">
                                  <th className="py-2 pr-4">Subject</th>
                                  <th className="py-2 pr-4">Tier</th>
                                  <th className="py-2 pr-4">Exam board</th>
                                  <th className="py-2">Zoom</th>
                                </tr>
                              </thead>
                              <tbody>
                                {student.classes.map((item) => (
                                  <tr key={`${student.id}-${item.groupId}`} className="border-t border-indigo-100">
                                    <td className="py-2 pr-4 font-medium text-gray-900">{item.subjectName}</td>
                                    <td className="py-2 pr-4">{item.tier || 'All'}</td>
                                    <td className="py-2 pr-4">{item.examBoard || '—'}</td>
                                    <td className="py-2">
                                      {item.zoomLink ? (
                                        <a href={item.zoomLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-700 hover:underline">
                                          <ExternalLink className="h-3.5 w-3.5" />
                                          Open Zoom
                                        </a>
                                      ) : 'No Zoom link'}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {visibleGroups.length === 0 ? (
                    <div className="bg-white rounded-lg border border-gray-200 p-8 text-center text-gray-600">
                      No class groups match this search.
                    </div>
                  ) : visibleGroups.map((group) => {
                    const isExpanded = expandedClassGroups[group.id] !== false
                    return (
                      <div key={group.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setExpandedClassGroups((prev) => ({ ...prev, [group.id]: !isExpanded }))}
                          className="w-full p-4 flex items-center justify-between gap-3 text-left hover:bg-gray-50"
                        >
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {group.subjectName}
                              {group.tier ? ` · ${group.tier}` : ''}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {group.examBoard || 'Exam board not set'} · {group.studentCount} student{group.studentCount === 1 ? '' : 's'}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {group.tier && (
                              <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                                group.tier === 'Foundation' ? 'bg-amber-100 text-amber-800' :
                                group.tier === 'Higher' ? 'bg-blue-100 text-blue-800' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {group.tier}
                              </span>
                            )}
                            {isExpanded ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                          </div>
                        </button>
                        {isExpanded && (
                          <div className="border-t border-gray-200 p-4 space-y-4">
                            <div className="rounded-lg bg-slate-50 border border-slate-200 px-4 py-3">
                              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Zoom link</p>
                              {group.zoomLink ? (
                                <div className="mt-1 flex flex-wrap items-center gap-3">
                                  <a href={group.zoomLink} target="_blank" rel="noopener noreferrer" className="break-all text-sm font-medium text-indigo-700 hover:underline">
                                    {group.zoomLink}
                                  </a>
                                  <button
                                    type="button"
                                    onClick={() => navigator.clipboard.writeText(group.zoomLink)}
                                    className="text-xs font-medium text-slate-600 hover:text-slate-900"
                                  >
                                    Copy
                                  </button>
                                </div>
                              ) : (
                                <p className="mt-1 text-sm text-rose-700">No Zoom link stored for this class yet.</p>
                              )}
                            </div>
                            <div className="overflow-x-auto">
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="text-left text-gray-500">
                                    <th className="py-2 pr-4">Student</th>
                                    <th className="py-2 pr-4">Email</th>
                                    <th className="py-2">Exam board</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {group.students.map((student) => (
                                    <tr key={student.id} className="border-t border-gray-100">
                                      <td className="py-2 pr-4 font-medium text-gray-900">{student.name}</td>
                                      <td className="py-2 pr-4 text-gray-600">{student.email || '—'}</td>
                                      <td className="py-2 text-gray-600">{student.examBoard || '—'}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </>
              )}
            </div>
          )
        })()}
      </div>
    </div>
  )
}

export default Admin
