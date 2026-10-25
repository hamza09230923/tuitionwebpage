import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getPhysicsPracticalResources } from './physicsPracticalResources.js'
import { getAqaResourceTopics, groupResourcesByTopic } from './resourceTopics.js'

const subject = { id: 'physics_001' }

test('all ten Physics practicals are grouped by topic with usable notes and flashcard links', () => {
  const resources = getPhysicsPracticalResources(subject, 'AQA')
  assert.equal(resources.length, 10)
  assert.equal(new Set(resources.map((resource) => resource.id)).size, 10)
  assert.deepEqual(resources.map((resource) => resource.topicNumber), [1, 1, 2, 2, 3, 5, 5, 6, 6, 6])
  const groups = groupResourcesByTopic(resources, getAqaResourceTopics(subject, 'AQA'))
  for (const resource of resources) {
    assert.ok(groups.find((group) => group.number === resource.topicNumber).sections[2].resources.includes(resource))
    assert.deepEqual(resource.links.map((link) => link.label), ['Notes', 'Flashcards'])
    for (const link of resource.links) assert.ok(new URL(link.url).hostname.endsWith('.physicsandmathstutor.com'))
  }
})

test('only the two separate-Physics practicals are marked Triple only', () => {
  const resources = getPhysicsPracticalResources(subject, 'AQA')
  assert.deepEqual(resources.filter((resource) => resource.courseLabel === 'Triple only').map((resource) => resource.title), ['RP 2: Thermal Insulation', 'RP 9: Light'])
  const shared = resources.filter((resource) => resource.courseLabel === 'Combined & Triple')
  assert.equal(shared.length, 8)
  shared.forEach((resource, index) => assert.ok(resource.description.includes(`Combined Trilogy RP ${14 + index};`)))
  assert.deepEqual(getPhysicsPracticalResources(subject, 'Edexcel'), [])
  assert.deepEqual(getPhysicsPracticalResources({ id: 'chemistry_001' }, 'AQA'), [])
})
