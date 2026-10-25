import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getChemistryPracticalResources } from './chemistryPracticalResources.js'
import { getAqaResourceTopics, groupResourcesByTopic } from './resourceTopics.js'

const subject = { id: 'chemistry_001' }

test('all eight Chemistry practicals appear under their AQA topics with notes, questions and answers', () => {
  const resources = getChemistryPracticalResources(subject, 'AQA', 'Foundation')
  assert.equal(resources.length, 8)
  assert.equal(new Set(resources.map((resource) => resource.id)).size, 8)
  assert.deepEqual(resources.map((resource) => resource.topicNumber), [4, 4, 4, 5, 6, 8, 8, 10])
  const groups = groupResourcesByTopic(resources, getAqaResourceTopics(subject, 'AQA'))
  for (const resource of resources) {
    const section = groups.find((group) => group.number === resource.topicNumber).sections.find((item) => item.id === 'required-practicals')
    assert.ok(section.resources.includes(resource))
    assert.equal(resource.links.length, 3)
    assert.equal(resource.links[1].label, 'Questions')
    assert.equal(resource.links[2].label, 'Mark scheme')
    assert.ok(resource.links.every((link) => new URL(link.url).hostname === 'pmt.physicsandmathstutor.com'))
  }
})

test('Neutralisation notes match the student tier without mixing Foundation and Higher', () => {
  for (const tier of ['foundation', 'higher']) {
    const practical = getChemistryPracticalResources(subject, 'AQA', ` ${tier.toUpperCase()} `)[1]
    assert.deepEqual(practical.links.filter((link) => link.tier).map((link) => link.tier), [tier])
  }
  const practical = getChemistryPracticalResources(subject, 'AQA')[1]
  assert.ok(practical.links.every((link) => !link.tier))
})

test('Chemistry practicals are not added to other subjects or exam boards', () => {
  assert.deepEqual(getChemistryPracticalResources({ id: 'physics_001' }, 'AQA', 'Foundation'), [])
  assert.deepEqual(getChemistryPracticalResources(subject, 'Edexcel', 'Foundation'), [])
})

test('Chemistry practical labels distinguish shared activities from Triple-only ones', () => {
  const resources = getChemistryPracticalResources(subject, 'AQA')
  assert.deepEqual(resources.filter((resource) => resource.courseLabel === 'Triple only').map((resource) => resource.title), ['RP 2: Neutralisation', 'RP 7: Identifying Ions'])
  const shared = resources.filter((resource) => resource.courseLabel === 'Combined & Triple')
  assert.equal(shared.length, 6)
  shared.forEach((resource, index) => assert.ok(resource.description.includes(`Combined Trilogy RP ${8 + index};`)))
})
