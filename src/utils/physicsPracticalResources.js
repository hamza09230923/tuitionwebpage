import practicals from '../data/physicsPracticals.json' with { type: 'json' }
import { getAqaScienceSubject } from './resourceTopics.js'

// AQA 8463 practicals 2 and 9 are Physics only. The remaining eight match
// AQA Combined Science: Trilogy 8464 practicals 14-21.
// https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/practical-assessment
// https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/practical-assessment
export function getPhysicsPracticalResources(subject, examBoard) {
  if (getAqaScienceSubject(subject, examBoard) !== 'physics') return []
  return practicals.map((practical) => ({
    id: `pmt-physics-rp-${practical.practicalNumber}`,
    sourceCollection: 'physicsPracticals',
    subjectId: subject.id,
    examBoard: 'AQA',
    topicNumber: practical.topicNumber,
    resourceType: 'required-practicals',
    title: `RP ${practical.practicalNumber}: ${practical.name}`,
    courseLabel: practical.combinedPracticalNumber ? 'Combined & Triple' : 'Triple only',
    description: practical.combinedPracticalNumber
      ? `Combined Trilogy RP ${practical.combinedPracticalNumber}; Triple Physics RP ${practical.practicalNumber}.`
      : '',
    links: practical.links
  }))
}
