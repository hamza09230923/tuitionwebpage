const normalize = (value) => String(value || '').trim().toLowerCase()

const isFawwazTeacher = (teacher) => normalize(teacher?.email) === 'fawwaz@myschola.co.uk'

const assertTeacherClassMaterialAccess = (teacher, { subjectId, tier, examBoard, materialType, action }) => {
  const permissions = {
    upload: { recording: 'upload_recordings', homework: 'upload_homework', resource: 'upload_resources' },
    view: { recording: 'view_recordings', homework: 'view_homework', resource: 'view_resources' }
  }
  const permission = permissions[action]?.[materialType]
  if (!teacher || !Array.isArray(teacher.subjects) || !teacher.subjects.includes(subjectId)) {
    throw new Error('This teacher is not assigned to the selected class')
  }
  if (!isFawwazTeacher(teacher) && (materialType === 'resource' || (action === 'upload' && materialType === 'homework'))) {
    throw new Error('This teacher cannot upload homework or access learning resources')
  }
  if (!permission || !Array.isArray(teacher.permissions) || !teacher.permissions.includes(permission)) {
    throw new Error(`This teacher cannot ${action} ${materialType}s`)
  }
  const assignedTier = normalize((teacher.classTiers || teacher.allowedTiers || {})[subjectId])
  const requestedTier = subjectId.startsWith('english_') && !tier ? 'all-levels' : normalize(tier)
  if (!assignedTier || assignedTier !== requestedTier) {
    throw new Error('This teacher is not assigned to the selected class tier')
  }
  const assignedBoard = normalize(teacher.classBoards?.[subjectId])
  if ((isFawwazTeacher(teacher) || assignedBoard) && (!assignedBoard || assignedBoard !== normalize(examBoard))) {
    throw new Error('This teacher is not assigned to the selected exam board')
  }
}

module.exports = { assertTeacherClassMaterialAccess, isFawwazTeacher }
