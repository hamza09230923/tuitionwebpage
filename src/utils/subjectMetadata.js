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

const getSubjectPrefix = (subjectId) => {
  const normalizedId = String(subjectId || '').toLowerCase()

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
