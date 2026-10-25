import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Download, ChevronDown, FlaskConical, ExternalLink } from 'lucide-react'
import { auth, db } from '../firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { getAuthorizedStudentSubject } from '../utils/studentAccess'
import { matchesStudentMaterialRoute } from '../utils/studentMaterialAccess'
import { getCanonicalSubjectName } from '../utils/subjectMetadata'
import { openR2Material } from '../utils/r2MaterialAccess'
import { getAqaResourceTopics, getAqaTopicTracker, groupResourcesByTopic } from '../utils/resourceTopics'
import { getDriveExamResources } from '../utils/driveExamResources'
import { getChemistryPracticalResources } from '../utils/chemistryPracticalResources'
import { getPhysicsPracticalResources } from '../utils/physicsPracticalResources'
import { getBiologyPracticalResources } from '../utils/biologyPracticalResources'
import { getBiologyNoteResources } from '../utils/biologyNoteResources'

const getHiddenResourceIds = (studentData) => {
  const hiddenIds = Array.isArray(studentData?.hiddenResourceIds)
    ? studentData.hiddenResourceIds
    : []
  return new Set(hiddenIds.map((id) => String(id)))
}

const getHiddenResourceTitleKeywords = (studentData) => {
  const keywords = Array.isArray(studentData?.hiddenResourceTitleKeywords)
    ? studentData.hiddenResourceTitleKeywords
    : []
  return keywords
    .map((keyword) => String(keyword || '').trim().toLowerCase())
    .filter(Boolean)
}

const isResourceHiddenForStudent = (resource, studentData) => {
  if (getHiddenResourceIds(studentData).has(String(resource.id))) return true
  const title = String(resource.title || '').toLowerCase()
  return title
    ? getHiddenResourceTitleKeywords(studentData).some((kw) => title.includes(kw))
    : false
}

function Resources() {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  const [resources, setResources] = useState([])
  const [subject, setSubject] = useState(null)
  const [examBoard, setExamBoard] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [accessDenied, setAccessDenied] = useState(false)

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
        setExamBoard(access.student?.subjectSettings?.[subjectId]?.examBoard || '')

        const subjectQuery = query(
          collection(db, 'resources'),
          where('subjectId', '==', subjectId)
        )
        const subjectSnap = await getDocs(subjectQuery)
        const subjectResources = subjectSnap.docs.map((doc) => ({
          id: doc.id,
          sourceCollection: 'resources',
          ...doc.data()
        }))

        let studentResources = []
        try {
          const studentQuery = query(
            collection(db, 'studentResources'),
            where('subjectId', '==', subjectId),
            where('studentId', '==', user.uid)
          )
          const studentSnap = await getDocs(studentQuery)
          studentResources = studentSnap.docs.map((doc) => ({
            id: doc.id,
            sourceCollection: 'studentResources',
            ...doc.data()
          }))
        } catch (err) {
          console.warn('Student-specific resources could not be loaded:', err)
        }

        const examResources = getDriveExamResources(
          access.subject,
          access.student?.subjectSettings?.[subjectId]?.examBoard || ''
        )
        const practicalResources = getChemistryPracticalResources(
          access.subject,
          access.student?.subjectSettings?.[subjectId]?.examBoard || '',
          access.student?.subjectSettings?.[subjectId]?.tier || ''
        )
        const physicsPracticals = getPhysicsPracticalResources(
          access.subject,
          access.student?.subjectSettings?.[subjectId]?.examBoard || ''
        )
        const biologyPracticals = getBiologyPracticalResources(
          access.subject,
          access.student?.subjectSettings?.[subjectId]?.examBoard || ''
        )
        const biologyNotes = getBiologyNoteResources(
          access.subject,
          access.student?.subjectSettings?.[subjectId]?.examBoard || '',
          import.meta.env.BASE_URL
        )
        const all = [...subjectResources, ...studentResources, ...examResources, ...practicalResources, ...physicsPracticals, ...biologyPracticals, ...biologyNotes]
          .filter((r) => !('approvalStatus' in r) || r.approvalStatus === 'approved')
          .filter((r) => matchesStudentMaterialRoute(r, access.student))
          .filter((r) => !isResourceHiddenForStudent(r, access.student))

        setResources(all)
        setError('')
        setLoading(false)
      } catch (err) {
        console.error('Error loading resources:', err)
        setError('Failed to load resources')
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading resources...</p>
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
              You can only open resources for subjects assigned to your account.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const topics = getAqaResourceTopics(subject, examBoard)
  const resourceGroups = groupResourcesByTopic(resources, topics)
  const tracker = getAqaTopicTracker(subject, examBoard)

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
            <BookOpen className="h-6 w-6 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Revision Resources - {subject ? getCanonicalSubjectName(subject) : 'Subject'}
            </h1>
          </div>
          <p className="text-gray-600">
            {topics.length ? 'Open an AQA topic to find notes, exam style questions and required practical resources.' : 'Download revision materials and resources.'}
          </p>
          {resources.some((resource) => resource.courseLabel) && (
            <p className="mt-2 text-sm text-gray-500">Practical labels show whether you need them for Combined Science (AQA Trilogy), Triple Science, or both.</p>
          )}
        </div>

        {tracker && (
          <div className="mb-6 flex flex-col gap-3 rounded-xl border border-purple-200 bg-purple-50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-gray-900">{tracker.name} Topic Tracker</h2>
              <p className="mt-1 text-sm text-gray-600">Download your Excel tracker to keep track of your revision.</p>
            </div>
            <a href={`${import.meta.env.BASE_URL}topic-trackers/${tracker.fileName}`} download className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download tracker (.xlsx)
            </a>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {resources.length === 0 && topics.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No revision resources available yet.</p>
            </div>
          ) : (
            resourceGroups.map((group) => (
              <details key={group.number || group.id} className="group/topic rounded-xl border border-gray-200 bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-center gap-3 rounded-xl p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600 [&::-webkit-details-marker]:hidden">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 font-bold text-purple-800">
                    {group.number || <BookOpen className="h-5 w-5" aria-hidden="true" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-gray-900">{group.number ? `Topic ${group.number}: ${group.name}` : group.name}</span>
                    <span className="text-sm text-gray-500">
                      {group.paper ? `Paper ${group.paper} · ` : ''}{group.resources.length} {group.resources.length === 1 ? 'resource' : 'resources'}
                    </span>
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-purple-600 transition group-open/topic:rotate-180" aria-hidden="true" />
                </summary>
                <div className="space-y-6 border-t border-gray-100 p-4 sm:p-5">
                  {group.sections.map((section) => (
                    <section key={section.id} aria-labelledby={`topic-${group.number || group.id}-${section.id}`}>
                      <div className="mb-3 flex items-center gap-2">
                        {section.id === 'required-practicals' && <FlaskConical className="h-5 w-5 shrink-0 text-purple-700" aria-hidden="true" />}
                        <h2 id={`topic-${group.number || group.id}-${section.id}`} className="font-semibold text-gray-900">{section.name}</h2>
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{section.resources.length}</span>
                      </div>
                      <div className="space-y-3">
                        {section.resources.length === 0 && <p className="text-sm text-gray-500">No {section.name.toLowerCase()} uploaded yet.</p>}
                        {section.resources.map((resource) => {
                          const resourceKey = `${resource.sourceCollection}-${resource.id}`
                          return (
                            <article
                              key={resourceKey}
                              className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                            >
                              <div className="min-w-0 flex-1 space-y-1">
                                <h3 className="break-words font-medium text-gray-900">{resource.title}</h3>
                                {resource.courseLabel && (
                                  <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${resource.courseLabel === 'Triple only' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-800'}`}>{resource.courseLabel}</span>
                                )}
                                  {resource.description && (
                                    <p className="text-gray-600 text-sm">{resource.description}</p>
                                  )}
                                  {resource.fileName && !resource.externalSource && (
                                    <p className="break-words text-xs text-gray-500">{resource.fileName}</p>
                                  )}
                              </div>
                                  {resource.links?.length ? (
                                    <div className="flex shrink-0 flex-wrap gap-2 sm:max-w-sm sm:justify-end">
                                      {resource.links.map((link) => (
                                        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.label}: ${resource.title}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-50 px-3 py-2 text-sm font-medium text-purple-700 hover:bg-purple-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600">
                                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                          {link.label}
                                        </a>
                                      ))}
                                    </div>
                                  ) : resource.fileUrl || resource.r2Key ? (
                                    <a
                                      href={resource.r2Key ? '#' : resource.fileUrl}
                                      onClick={(event) => {
                                        if (resource.r2Key) {
                                          event.preventDefault()
                                          openR2Material(resource.sourceCollection || 'resources', resource.id)
                                        }
                                      }}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-purple-50 px-3 py-2 text-sm font-medium text-purple-700 hover:bg-purple-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600"
                                      aria-label={`${resource.externalSource ? 'Open' : 'Download'} ${resource.title || resource.fileName || 'resource'}`}
                                    >
                                      {resource.externalSource ? <ExternalLink className="h-4 w-4" /> : <Download className="h-4 w-4" />}
                                      {resource.externalSource ? 'Open PDF' : 'Download'}
                                    </a>
                                  ) : (
                                    <p className="text-sm text-gray-500">No file attached.</p>
                                  )}
                            </article>
                          )
                        })}
                      </div>
                    </section>
                  ))}
                </div>
              </details>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Resources
