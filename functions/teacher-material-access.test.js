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
