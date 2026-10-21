const assert = require('node:assert/strict')
const { test } = require('node:test')
const { assertTeacherClassMaterialAccess } = require('./teacher-material-access')

const teacher = {
  email: 'fawwaz@myschola.co.uk',
  subjects: ['physics_001', 'chemistry_001', 'biology_001', 'maths_001'],
  classTiers: { physics_001: 'Foundation', chemistry_001: 'Foundation', biology_001: 'Foundation', maths_001: 'Foundation' },
  classBoards: { physics_001: 'AQA', chemistry_001: 'AQA', biology_001: 'AQA', maths_001: 'Edexcel' },
  permissions: ['view_recordings', 'upload_recordings', 'view_homework', 'upload_homework', 'view_resources', 'upload_resources']
}

test('recording cutoff includes London midnight and rejects older or undated videos only', () => {
  const cutoff = Date.parse('2026-10-20T23:00:00Z')
  const lionel = { ...teacher, email: 'lionel@myschola.co.uk', recordingsVisibleAfter: { toMillis: () => cutoff } }
  const material = { subjectId: 'physics_001', tier: 'Foundation', examBoard: 'AQA', materialType: 'recording', action: 'view' }
  for (const date of [undefined, { toMillis: () => cutoff - 1 }]) {
    assert.throws(() => assertTeacherClassMaterialAccess(lionel, { ...material, date }))
  }
  for (const time of [cutoff, cutoff + 1]) {
    assert.doesNotThrow(() => assertTeacherClassMaterialAccess(lionel, { ...material, date: { toMillis: () => time } }))
  }
  assert.doesNotThrow(() => assertTeacherClassMaterialAccess(teacher, material))
  assert.doesNotThrow(() => assertTeacherClassMaterialAccess(lionel, { ...material, action: 'upload' }))
  assert.doesNotThrow(() => assertTeacherClassMaterialAccess(lionel, { ...material, materialType: 'homework' }))
})

test('Fawwaz can view and upload all three material types for each assigned class', () => {
  for (const subjectId of teacher.subjects) {
    for (const materialType of ['recording', 'homework', 'resource']) {
      for (const action of ['view', 'upload']) {
        assert.doesNotThrow(() => assertTeacherClassMaterialAccess(teacher, {
          subjectId, tier: 'Foundation', examBoard: teacher.classBoards[subjectId], materialType, action
        }))
      }
    }
  }
})

test('every material type rejects unassigned subjects, Higher tier and other exam boards', () => {
  for (const materialType of ['recording', 'homework', 'resource']) {
    for (const action of ['view', 'upload']) {
      const material = { subjectId: 'physics_001', tier: 'Foundation', examBoard: 'AQA', materialType, action }
      for (const invalid of [{ subjectId: 'english_lang_001' }, { tier: 'Higher' }, { tier: null }, { examBoard: 'Edexcel' }, { examBoard: null }]) {
        assert.throws(() => assertTeacherClassMaterialAccess(teacher, { ...material, ...invalid }))
      }
    }
  }
})

test('permissions remain required and other tutor accounts do not gain uploads', () => {
  const material = { subjectId: 'physics_001', tier: 'Foundation', examBoard: 'AQA', materialType: 'homework', action: 'upload' }
  assert.throws(() => assertTeacherClassMaterialAccess({ ...teacher, permissions: [] }, material))
  assert.throws(() => assertTeacherClassMaterialAccess({ ...teacher, email: 'jafren@myschola.co.uk' }, material))
  assert.throws(() => assertTeacherClassMaterialAccess(null, material))
  assert.throws(() => assertTeacherClassMaterialAccess(teacher, { ...material, materialType: 'invalid' }))
})

test('Lionel has the same material permissions limited to Physics and Chemistry Foundation', () => {
  const lionel = { ...teacher, email: 'lionel@myschola.co.uk', subjects: ['physics_001', 'chemistry_001'] }
  for (const materialType of ['recording', 'homework', 'resource']) {
    for (const action of ['view', 'upload']) {
      const material = { subjectId: 'physics_001', tier: 'Foundation', examBoard: 'AQA', materialType, action }
      for (const subjectId of lionel.subjects) {
        assert.doesNotThrow(() => assertTeacherClassMaterialAccess(lionel, { ...material, subjectId }))
      }
      for (const invalid of [{ subjectId: 'biology_001' }, { subjectId: 'maths_001' }, { tier: 'Higher' }, { examBoard: 'Edexcel' }]) {
        assert.throws(() => assertTeacherClassMaterialAccess(lionel, { ...material, ...invalid }))
      }
    }
  }
})
