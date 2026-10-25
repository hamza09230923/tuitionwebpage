import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getDriveExamResources } from './driveExamResources.js'
import { getAqaResourceTopics, groupResourcesByTopic } from './resourceTopics.js'
import { matchesStudentMaterialRoute } from './studentMaterialAccess.js'

test('all 37 Drive question packs appear once under the matching subject and topic', () => {
  const allIds = []
  for (const [science, expectedFiles, expectedTopics] of [['biology', 7, 7], ['chemistry', 10, 10], ['physics', 20, 8]]) {
    const subject = { id: `${science}_001` }
    const resources = getDriveExamResources(subject, 'AQA')
    assert.equal(resources.length, expectedFiles)
    const groups = groupResourcesByTopic(resources, getAqaResourceTopics(subject, 'AQA'))
    assert.equal(groups.length, expectedTopics)
    for (const group of groups) {
      assert.ok(group.resources.length > 0)
      assert.equal(group.sections[0].resources.length, 0)
      assert.equal(group.sections[1].resources.length, group.resources.length)
      assert.equal(group.sections[2].resources.length, 0)
      for (const resource of group.resources) {
        assert.equal(resource.subjectId, subject.id)
        assert.equal(resource.topicNumber, group.number)
        assert.match(resource.fileUrl, /^https:\/\/drive\.google\.com\/file\/d\/[\w-]+\/view$/)
        allIds.push(resource.id)
      }
    }
  }
  assert.equal(new Set(allIds).size, 37)
})

test('Physics parts stay in order under their AQA topic numbers', () => {
  const resources = getDriveExamResources({ id: 'physics_001' }, 'AQA')
  const counts = [3, 3, 2, 3, 3, 3, 1, 2]
  for (let topicNumber = 1; topicNumber <= 8; topicNumber += 1) {
    const parts = resources.filter((resource) => resource.topicNumber === topicNumber)
    assert.equal(parts.length, counts[topicNumber - 1])
    parts.forEach((resource, index) => assert.ok(resource.title.endsWith(`Part ${index + 1}`)))
  }
})

test('shared packs respect the existing subject and exam-board access filters', () => {
  const subject = { id: 'physics_001' }
  assert.deepEqual(getDriveExamResources(subject, 'Edexcel'), [])
  assert.deepEqual(getDriveExamResources({ id: 'maths_001' }, 'AQA'), [])
  const resource = getDriveExamResources(subject, 'AQA')[0]
  assert.equal(matchesStudentMaterialRoute(resource, { subjectSettings: { physics_001: { examBoard: 'AQA', tier: 'Foundation' } } }), true)
  assert.equal(matchesStudentMaterialRoute(resource, { subjectSettings: { physics_001: { examBoard: 'Edexcel' } } }), false)
  assert.equal(matchesStudentMaterialRoute(resource, {}), false)
})
