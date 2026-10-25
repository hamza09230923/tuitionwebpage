// AQA GCSE specifications, "Specification at a glance":
// https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/specification-at-a-glance
// https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/specification-at-a-glance
// https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/specification-at-a-glance
const AQA_TOPICS = {
  physics: [
    'Energy', 'Electricity', 'Particle model of matter', 'Atomic structure',
    'Forces', 'Waves', 'Magnetism and electromagnetism', 'Space physics'
  ],
  biology: [
    'Cell biology', 'Organisation', 'Infection and response', 'Bioenergetics',
    'Homeostasis and response', 'Inheritance, variation and evolution', 'Ecology'
  ],
  chemistry: [
    'Atomic structure and the periodic table', 'Bonding, structure, and the properties of matter',
    'Quantitative chemistry', 'Chemical changes', 'Energy changes',
    'The rate and extent of chemical change', 'Organic chemistry', 'Chemical analysis',
    'Chemistry of the atmosphere', 'Using resources'
  ]
}

export function getAqaScienceSubject(subject, examBoard = '') {
  if (examBoard.trim() && examBoard.trim().toLowerCase() !== 'aqa') return null
  const identity = `${subject?.id || ''} ${subject?.name || ''}`.toLowerCase()
  return Object.keys(AQA_TOPICS).find((key) => new RegExp(`\\b${key}\\b`).test(identity.replaceAll('_', ' '))) || null
}

export function getAqaResourceTopics(subject, examBoard = '') {
  const science = getAqaScienceSubject(subject, examBoard)
  return (AQA_TOPICS[science] || []).map((name, index) => ({
    number: index + 1,
    name,
    paper: index < (science === 'chemistry' ? 5 : 4) ? 1 : 2
  }))
}

export function getAqaTopicTracker(subject, examBoard = '') {
  const science = getAqaScienceSubject(subject, examBoard)
  if (!science) return null
  const name = science.charAt(0).toUpperCase() + science.slice(1)
  return { name, fileName: `AQA_GCSE_${name}_Topic_Tracker.xlsx` }
}

const normalize = (value) => String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

export const RESOURCE_TYPES = [
  { id: 'notes', name: 'Notes' },
  { id: 'exam-questions', name: 'Exam Style Questions' },
  { id: 'required-practicals', name: 'Required Practical' }
]

const typePrefix = /^\s*(Notes|Exam Style Questions|Required Practical(?: Questions)?)\s*-\s*/i

export function getResourceType(resource) {
  if (RESOURCE_TYPES.some((type) => type.id === resource.resourceType)) return resource.resourceType
  const prefix = String(resource.title || '').match(typePrefix)?.[1]
  if (prefix) return /^required practical/i.test(prefix) ? 'required-practicals' : RESOURCE_TYPES.find((type) => type.name.toLowerCase() === prefix.toLowerCase()).id
  const label = normalize(`${resource.title || ''} ${resource.fileName || ''}`)
  if (/\brequired practicals?\b/.test(label)) return 'required-practicals'
  if (/\bexam(?: style)? questions?\b/.test(label)) return 'exam-questions'
  return 'notes'
}

export function getResourceTopicNumber(resource, topics) {
  const validNumber = (number) => topics.some((topic) => topic.number === number) ? number : null
  if (resource.topicNumber != null && resource.topicNumber !== '') {
    return validNumber(Number(resource.topicNumber))
  }
  // Prefer an explicit topic label; don't confuse paper numbers or years with topics.
  for (const value of [resource.title, resource.fileName]) {
    const text = String(value || '').replaceAll('_', ' ')
    if (/\btopics?\s*\d+\s*(?:[-–&,/]|and|to)\s*\d+/i.test(text)) return null
    const matches = [...text.matchAll(/\btopic\s*[:#-]?\s*0*(\d+)\b/gi)]
    if (matches.length) {
      const numbers = new Set(matches.map((match) => Number(match[1])))
      return numbers.size === 1 ? validNumber([...numbers][0]) : null
    }
  }
  // Only infer from complete topic names. Ambiguous/mixed resources stay general.
  const text = ` ${normalize(`${resource.title || ''} ${resource.fileName || ''}`)} `
  const matches = topics.filter((topic) => text.includes(` ${normalize(topic.name)} `))
  return matches.length === 1 ? matches[0].number : null
}

export function groupResourcesByTopic(resources, topics) {
  const groups = topics.map((topic) => ({ ...topic, resources: [] }))
  const general = { id: 'general', number: null, name: 'General resources', resources: [] }
  for (const resource of resources) {
    const number = getResourceTopicNumber(resource, topics)
    const group = groups.find((item) => item.number === number) || general
    group.resources.push(resource)
  }
  if (general.resources.length || !groups.length) groups.push(general)
  return groups.map((group) => ({
    ...group,
    sections: RESOURCE_TYPES.map((type) => ({
      ...type,
      resources: group.resources.filter((resource) => getResourceType(resource) === type.id)
    }))
  }))
}

export function resourceTitleWithTopic(title, topicNumber, resourceType = '') {
  const type = RESOURCE_TYPES.find((item) => item.id === resourceType)
  if (type) {
    return `${type.name} - ${resourceTitleWithTopic(title.replace(typePrefix, ''), topicNumber)}`
  }
  if (!topicNumber) return title
  return `Topic ${topicNumber} - ${title.replace(/^\s*topic\s*[:#-]?\s*\d+\s*[-–:.]?\s*/i, '').trim()}`
}
