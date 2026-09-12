import { getCanonicalSubjectName, isCrashCourseSubject } from './subjectMetadata.js'

export const FOUNDATION_TIER_ZOOM_LINKS = {
  biology: 'https://us06web.zoom.us/j/81397109206',
  chemistry: 'https://us06web.zoom.us/j/89250640537',
  physics: 'https://us06web.zoom.us/j/89820960530',
  maths: 'https://us06web.zoom.us/j/88584874798'
}

const TIERED_PREFIXES = ['maths_', 'biology_', 'chemistry_', 'physics_']

export const getStudentDisplayName = (student) => (
  student?.displayName || student?.name || student?.studentName || student?.email || student?.id || 'Unknown student'
)

export const isEnglishSubjectId = (subjectId) => String(subjectId || '').startsWith('english_')

export const isTieredSubjectId = (subjectId) => (
  TIERED_PREFIXES.some((prefix) => String(subjectId || '').startsWith(prefix))
)

const getTieredSubjectKey = (subjectId) => {
  const id = String(subjectId || '').toLowerCase()
  if (id.startsWith('biology_')) return 'biology'
  if (id.startsWith('chemistry_')) return 'chemistry'
  if (id.startsWith('physics_')) return 'physics'
  if (id.startsWith('maths_')) return 'maths'
  return null
}

export const normalizeTierLabel = (subjectId, tier) => {
  if (isEnglishSubjectId(subjectId)) return null
  const value = String(tier || '').trim().toLowerCase()
  if (value === 'foundation') return 'Foundation'
  if (value === 'higher') return 'Higher'
  return isTieredSubjectId(subjectId) ? 'Unassigned' : null
}

export const getClassGroupId = (subjectId, tierLabel) => {
  const safeSubject = String(subjectId || 'subject').replace(/[^\w-]+/g, '_')
  if (!tierLabel || tierLabel === 'All') return `${safeSubject}_all`
  return `${safeSubject}_${tierLabel.toLowerCase()}`
}

export const resolveClassZoomLink = (subject, subjectId, tierLabel) => {
  if (isEnglishSubjectId(subjectId) || !tierLabel || tierLabel === 'All') {
    return String(subject?.zoomLink || '').trim() || null
  }
  if (tierLabel === 'Foundation') {
    return String(subject?.foundationZoomLink || '').trim()
      || FOUNDATION_TIER_ZOOM_LINKS[getTieredSubjectKey(subjectId)]
      || null
  }
  if (tierLabel === 'Higher') {
    return String(subject?.zoomLink || '').trim() || null
  }
  return null
}

export const buildClassGroupRecords = (students, subjects) => {
  const subjectById = new Map((subjects || []).map((subject) => [subject.id, subject]))
  const groups = new Map()

  for (const student of students || []) {
    const enrolled = Array.isArray(student.subjects) ? student.subjects : []
    const settings = student.subjectSettings || {}

    for (const subjectId of enrolled) {
      const subject = subjectById.get(subjectId)
      if (!subject || isCrashCourseSubject(subject) || isCrashCourseSubject(subjectId)) continue

      const setting = settings[subjectId] || {}
      const tierLabel = normalizeTierLabel(subjectId, setting.tier) || (isEnglishSubjectId(subjectId) ? 'All' : 'Unassigned')
      const examBoard = String(setting.examBoard || '').trim() || null
      const groupId = getClassGroupId(subjectId, tierLabel)
      const existing = groups.get(groupId) || {
        id: groupId,
        subjectId,
        subjectName: getCanonicalSubjectName(subject),
        tier: tierLabel === 'All' ? null : tierLabel,
        examBoard: examBoard,
        zoomLink: resolveClassZoomLink(subject, subjectId, tierLabel),
        students: []
      }

      if (!existing.examBoard && examBoard) existing.examBoard = examBoard
      existing.students.push({
        id: student.id,
        name: getStudentDisplayName(student),
        email: student.email || '',
        examBoard,
        tier: tierLabel === 'All' ? null : tierLabel
      })
      groups.set(groupId, existing)
    }
  }

  return Array.from(groups.values())
    .map((group) => ({
      ...group,
      students: group.students.sort((a, b) => a.name.localeCompare(b.name)),
      studentCount: group.students.length
    }))
    .sort((a, b) => {
      const subjectSort = a.subjectName.localeCompare(b.subjectName)
      if (subjectSort) return subjectSort
      const tierOrder = { Foundation: 0, Higher: 1, Unassigned: 2 }
      return (tierOrder[a.tier] ?? 3) - (tierOrder[b.tier] ?? 3)
    })
}

export const buildStudentClassLists = (students, subjects) => {
  const groups = buildClassGroupRecords(students, subjects)
  const byStudent = new Map()

  for (const group of groups) {
    for (const student of group.students) {
      const current = byStudent.get(student.id) || {
        id: student.id,
        name: student.name,
        email: student.email,
        classes: []
      }
      current.classes.push({
        groupId: group.id,
        subjectId: group.subjectId,
        subjectName: group.subjectName,
        examBoard: student.examBoard || group.examBoard,
        tier: group.tier,
        zoomLink: group.zoomLink
      })
      byStudent.set(student.id, current)
    }
  }

  return Array.from(byStudent.values())
    .map((student) => ({
      ...student,
      classes: student.classes.sort((a, b) => a.subjectName.localeCompare(b.subjectName)),
      classCount: student.classes.length
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
