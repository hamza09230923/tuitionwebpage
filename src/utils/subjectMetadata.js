const SUBJECT_NAME_BY_PREFIX = {
  biology: 'Biology',
  chemistry: 'Chemistry',
  physics: 'Physics',
  maths: 'Maths',
  english_lang: 'English Language',
  english_lit: 'English Literature',
  combined_science: 'Combined Science',
  triple_science: 'Triple Science'
}

export function isCrashCourseSubject(subjectOrId) {
  if (typeof subjectOrId === 'string') {
    return String(subjectOrId).toLowerCase().includes('crash')
  }

  const id = String(subjectOrId?.id || '').toLowerCase()
  const name = String(subjectOrId?.name || '').toLowerCase()
  return id.includes('crash') || name.includes('crash')
}

const getSubjectPrefix = (subjectId) => {
  const normalizedId = String(subjectId || '').toLowerCase()
  if (normalizedId.includes('crash')) {
    return null
  }

  return Object.keys(SUBJECT_NAME_BY_PREFIX).find((prefix) =>
    normalizedId === `${prefix}_001` || normalizedId.startsWith(`${prefix}_`)
  ) || null
}

export function getCanonicalSubjectName(subject) {
  const prefix = getSubjectPrefix(subject?.id)
  if (prefix) {
    return SUBJECT_NAME_BY_PREFIX[prefix]
  }

  return String(subject?.name || 'Subject')
}
