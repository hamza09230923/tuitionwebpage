import practicals from '../data/biologyPracticals.json' with { type: 'json' }
import { getAqaScienceSubject } from './resourceTopics.js'

// AQA 8461 practicals 2, 8 and 10 are Biology only; the other seven match
// AQA Combined Science: Trilogy 8464 practicals 1-7.
// https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/practical-assessment
export function getBiologyPracticalResources(subject, examBoard) {
  if (getAqaScienceSubject(subject, examBoard) !== 'biology') return []
  return practicals.map((practical) => ({
    id: `pmt-biology-rp-${practical.practicalNumber}`,
    sourceCollection: 'biologyPracticals',
    subjectId: subject.id,
    examBoard: 'AQA',
    topicNumber: practical.topicNumber,
    resourceType: 'required-practicals',
    title: `RP ${practical.practicalNumber}: ${practical.name}`,
    courseLabel: practical.combinedPracticalNumber ? 'Combined & Triple' : 'Triple only',
    description: practical.combinedPracticalNumber
      ? `Combined Trilogy RP ${practical.combinedPracticalNumber}; Triple Biology RP ${practical.practicalNumber}.`
      : '',
    links: practical.links
  }))
}
