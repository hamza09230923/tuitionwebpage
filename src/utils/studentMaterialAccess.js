const normalizeRouteValue = (value) => String(value || '').trim().toLowerCase()

export function matchesStudentMaterialRoute(material, student) {
  const settings = student?.subjectSettings?.[material.subjectId]
  const board = normalizeRouteValue(material.examBoard)
  const tier = normalizeRouteValue(material.tier)
  const studentBoard = normalizeRouteValue(settings?.examBoard)
  const studentTier = normalizeRouteValue(settings?.tier)

  // A missing student setting must never grant access to a different course.
  if (board && board !== studentBoard) return false
  if (tier && tier !== 'all-levels' && tier !== studentTier) return false

  // Private uploads require a complete route, just like the download service.
  if (material.r2Key) {
    if (!board || !studentBoard) return false
    const isEnglish = /^english[_-]/.test(normalizeRouteValue(material.subjectId))
    if (isEnglish) return !tier || tier === 'all-levels'
    return ['foundation', 'higher'].includes(tier) && tier === studentTier
  }

  // Older materials with no course restriction remain shared.
  return true
}
