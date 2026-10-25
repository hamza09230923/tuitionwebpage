import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getAqaResourceTopics, getResourceTopicNumber, getResourceType, groupResourcesByTopic, resourceTitleWithTopic } from './resourceTopics.js'

const physics = getAqaResourceTopics({ id: 'physics_001' }, 'AQA')

test('AQA science sections follow the assessed topic and paper boundaries', () => {
  assert.equal(physics.length, 8)
  assert.equal(physics[7].name, 'Space physics')
  assert.equal(physics[3].paper, 1)
  assert.equal(physics[4].paper, 2)
  assert.equal(getAqaResourceTopics({ name: 'Biology' }, 'aqa').length, 7)
  const chemistry = getAqaResourceTopics({ id: 'chemistry_001' }, 'AQA')
  assert.equal(chemistry.length, 10)
  assert.equal(chemistry[4].paper, 1)
  assert.equal(chemistry[5].paper, 2)
  assert.deepEqual(getAqaResourceTopics({ id: 'physics_001' }, 'Edexcel'), [])
  assert.deepEqual(getAqaResourceTopics({ id: 'maths_001' }, 'AQA'), [])
})

test('legacy titles and filenames group by explicit topic or complete topic name', () => {
  assert.equal(getResourceTopicNumber({ title: 'Topic 03 - notes' }, physics), 3)
  assert.equal(getResourceTopicNumber({ fileName: 'Topic_8_questions.pdf' }, physics), 8)
  assert.equal(getResourceTopicNumber({ title: 'Electricity revision' }, physics), 2)
  assert.equal(getResourceTopicNumber({ title: 'Topic 2', topicNumber: 5 }, physics), 5)
  assert.equal(getResourceTopicNumber({ title: 'Topic 8', fileName: 'Energy.pdf' }, physics), 8)
})

test('mixed, unknown and paper-wide resources are retained in General resources', () => {
  const resources = [
    { id: 'a', title: 'Paper 1 2025' },
    { id: 'b', title: 'Topics 1-4 revision' },
    { id: 'c', title: 'Energy and Electricity revision' },
    { id: 'd', title: 'Topic 99 notes' },
    { id: 'e', title: 'Topic 8 - practice' }
  ]
  const groups = groupResourcesByTopic(resources, physics)
  assert.deepEqual(groups.at(-1).resources.map((item) => item.id), ['a', 'b', 'c', 'd'])
  assert.equal(groups[7].resources[0].id, 'e')
  assert.equal(groups.flatMap((group) => group.resources).length, resources.length)
})

test('new uploads retain their selected topic through the existing title API', () => {
  assert.equal(resourceTitleWithTopic('Revision notes', '8'), 'Topic 8 - Revision notes')
  assert.equal(resourceTitleWithTopic('Topic 2 - Revision notes', '8'), 'Topic 8 - Revision notes')
  assert.equal(getResourceTopicNumber({ title: resourceTitleWithTopic('Revision notes', '8') }, physics), 8)
  assert.equal(resourceTitleWithTopic('Revision notes', ''), 'Revision notes')
})

test('every topic has notes, exam questions and practicals, including empty topics', () => {
  for (const topic of groupResourcesByTopic([], physics)) {
    assert.deepEqual(topic.sections.map((section) => section.name), ['Notes', 'Exam Style Questions', 'Required Practical'])
  }
  const resources = [
    { id: 'a', title: resourceTitleWithTopic('Resistance', '2', 'required-practicals') },
    { id: 'b', fileName: 'Required_Practical_1_Questions.pdf' },
    { id: 'c', title: 'Electricity revision notes' },
    { id: 'd', title: 'Topic 2 - Exam-style questions' },
    { id: 'e', title: 'Topic 5 - Exam questions' }
  ]
  const groups = groupResourcesByTopic(resources, physics)
  assert.deepEqual(groups[1].sections.map((section) => section.resources.map((item) => item.id)), [['c'], ['d'], ['a']])
  assert.equal(groups[4].sections[1].resources[0].id, 'e')
  assert.equal(groups.at(-1).sections[2].resources[0].id, 'b')
  assert.equal(groups.flatMap((group) => group.sections.flatMap((section) => section.resources)).length, resources.length)
  assert.equal(groupResourcesByTopic(resources, []).length, 1)
})

test('upload selection controls both topic and type without duplicating labels', () => {
  for (const type of ['notes', 'exam-questions', 'required-practicals']) {
    const title = resourceTitleWithTopic('Resistance', '2', type)
    assert.equal(getResourceTopicNumber({ title }, physics), 2)
    assert.equal(getResourceType({ title }), type)
    assert.equal(resourceTitleWithTopic(title, '2', type), title)
  }
  const title = resourceTitleWithTopic('Required Practical Questions - Topic 2 - Resistance', '5', 'notes')
  assert.equal(getResourceTopicNumber({ title }, physics), 5)
  assert.equal(getResourceType({ title, fileName: 'required-practical.pdf' }), 'notes')
})
