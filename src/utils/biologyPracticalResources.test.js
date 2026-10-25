import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getBiologyPracticalResources } from './biologyPracticalResources.js'
import { getAqaResourceTopics, groupResourcesByTopic } from './resourceTopics.js'

const subject = { id: 'biology_001' }

test('all ten Biology practicals appear in the correct topic with notes and flashcards', () => {
  const resources = getBiologyPracticalResources(subject, 'AQA')
  assert.equal(resources.length, 10)
  assert.equal(new Set(resources.map((resource) => resource.id)).size, 10)
  assert.deepEqual(resources.map((resource) => resource.topicNumber), [1, 1, 1, 2, 2, 4, 5, 5, 7, 7])
  const groups = groupResourcesByTopic(resources, getAqaResourceTopics(subject, 'AQA'))
  for (const resource of resources) {
    assert.ok(groups.find((group) => group.number === resource.topicNumber).sections[2].resources.includes(resource))
    assert.deepEqual(resource.links.map((link) => link.label), ['Notes', 'Flashcards'])
    for (const link of resource.links) assert.ok(new URL(link.url).hostname.endsWith('.physicsandmathstutor.com'))
  }
})

test('Biology-only practicals have Triple labels and shared practicals use Combined numbering', () => {
  const resources = getBiologyPracticalResources(subject, 'AQA')
  assert.deepEqual(resources.filter((resource) => resource.courseLabel === 'Triple only').map((resource) => resource.title), ['RP 2: Microbiology', 'RP 8: Plant Responses', 'RP 10: Decay'])
  const shared = resources.filter((resource) => resource.courseLabel === 'Combined & Triple')
  assert.equal(shared.length, 7)
  shared.forEach((resource, index) => assert.ok(resource.description.includes(`Combined Trilogy RP ${index + 1};`)))
  assert.deepEqual(getBiologyPracticalResources(subject, 'Edexcel'), [])
  assert.deepEqual(getBiologyPracticalResources({ id: 'chemistry_001' }, 'AQA'), [])
})
