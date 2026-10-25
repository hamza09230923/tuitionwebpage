import practicals from '../data/chemistryPracticals.json' with { type: 'json' }
import { getAqaScienceSubject } from './resourceTopics.js'

// PMT practical resources, grouped using the AQA 8462 subject-content sections.
export const CHEMISTRY_PRACTICAL_SOURCE = 'https://www.physicsandmathstutor.com/chemistry-revision/gcse-aqa/practical-skills/'

// Neutralisation (RP 2) and identifying ions (RP 7) are separate Chemistry only.
// The other practicals match AQA Combined Science: Trilogy 8464 RPs 8-13.
const COMBINED_PRACTICAL_NUMBERS = { 1: 8, 3: 9, 4: 10, 5: 11, 6: 12, 8: 13 }

export function getChemistryPracticalResources(subject, examBoard, studentTier = '') {
  if (getAqaScienceSubject(subject, examBoard) !== 'chemistry') return []
  const tier = String(studentTier || '').trim().toLowerCase()
  return practicals.map((practical) => ({
    id: `pmt-chemistry-rp-${practical.practicalNumber}`,
    sourceCollection: 'chemistryPracticals',
    subjectId: subject.id,
    examBoard: 'AQA',
    topicNumber: practical.topicNumber,
    resourceType: 'required-practicals',
    title: `RP ${practical.practicalNumber}: ${practical.name}`,
    courseLabel: COMBINED_PRACTICAL_NUMBERS[practical.practicalNumber] ? 'Combined & Triple' : 'Triple only',
    description: COMBINED_PRACTICAL_NUMBERS[practical.practicalNumber]
      ? `Combined Trilogy RP ${COMBINED_PRACTICAL_NUMBERS[practical.practicalNumber]}; Triple Chemistry RP ${practical.practicalNumber}.`
      : '',
    sourceName: 'Physics & Maths Tutor',
    sourceUrl: CHEMISTRY_PRACTICAL_SOURCE,
    links: practical.links.filter((link) => !link.tier || link.tier === tier)
  }))
}
