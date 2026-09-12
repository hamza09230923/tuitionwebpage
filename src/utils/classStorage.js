export const SUBJECTS = Object.freeze([
  'maths',
  'physics',
  'biology',
  'chemistry',
  'english-language',
  'english-literature'
])

export const EXAM_BOARDS = Object.freeze(['aqa', 'edexcel'])

const FOUNDATION_SUBJECTS = new Set(['maths', 'physics', 'biology', 'chemistry'])
const MATERIAL_TYPES = new Set(['homework', 'videos', 'learning-resources', 'submissions'])

const safeSegment = (value, label) => {
  const segment = String(value || '').trim().toLowerCase()
  if (!segment || segment.includes('/') || segment.includes('..')) {
    throw new Error(`Invalid ${label}`)
  }
  return segment.replace(/[^a-z0-9._-]/g, '-')
}

export const validTiersFor = (subject) => (
  FOUNDATION_SUBJECTS.has(subject) ? ['foundation', 'higher'] : ['all-levels']
)

// R2 folders are virtual. A path is created automatically when the first
// material is uploaded, so no public folder objects need to be created.
export const buildClassStorageKey = ({
  classId,
  subject,
  examBoard,
  tier,
  materialType,
  fileName,
  studentId
}) => {
  if (!SUBJECTS.includes(subject)) throw new Error('Unsupported subject')
  if (!EXAM_BOARDS.includes(examBoard)) throw new Error('Unsupported exam board')
  if (!validTiersFor(subject).includes(tier)) throw new Error('Unsupported tier')
  if (!MATERIAL_TYPES.has(materialType)) throw new Error('Unsupported material type')

  const base = [
    'classes',
    safeSegment(classId, 'class ID'),
    subject,
    examBoard,
    tier,
    materialType
  ]

  if (materialType === 'submissions') {
    base.push(safeSegment(studentId, 'student ID'))
  }

  base.push(`${crypto.randomUUID()}-${safeSegment(fileName, 'file name')}`)
  return base.join('/')
}

export const classFolderTemplate = ({ classId, subject, examBoard, tier }) => (
  `classes/${safeSegment(classId, 'class ID')}/${subject}/${examBoard}/${tier}/`
)
