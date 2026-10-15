import assert from 'node:assert/strict'
import { test } from 'node:test'
import { matchesStudentMaterialRoute } from './studentMaterialAccess.js'

const subjectId = 'maths_001'
const studentOnRoute = (tier, examBoard = 'Edexcel') => ({
  subjectSettings: { [subjectId]: { tier, examBoard } }
})

for (const r2Key of [null, 'maths/edexcel/foundation/file']) {
  test(`Foundation and Higher stay separate for ${r2Key ? 'private' : 'legacy/inline'} materials`, () => {
    for (const tier of ['Foundation', 'Higher']) {
      const material = { subjectId, examBoard: 'Edexcel', tier, r2Key }
      assert.equal(matchesStudentMaterialRoute(material, studentOnRoute(tier)), true)
      assert.equal(matchesStudentMaterialRoute(material, studentOnRoute(tier === 'Foundation' ? 'Higher' : 'Foundation')), false)
      assert.equal(matchesStudentMaterialRoute(material, studentOnRoute(undefined)), false)
      assert.equal(matchesStudentMaterialRoute(material, {}), false)
      assert.equal(matchesStudentMaterialRoute(material, studentOnRoute(tier, 'AQA')), false)
      assert.equal(matchesStudentMaterialRoute(material, studentOnRoute(tier, '')), false)
    }
  })
}

test('route matching tolerates capitalization and surrounding whitespace', () => {
  assert.equal(matchesStudentMaterialRoute(
    { subjectId, examBoard: ' edexcel ', tier: ' foundation ', r2Key: 'file' },
    studentOnRoute(' FOUNDATION ', ' EDEXCEL ')
  ), true)
})

test('a student tier from another subject cannot grant access', () => {
  assert.equal(matchesStudentMaterialRoute(
    { subjectId, tier: 'Foundation' },
    { subjectSettings: { biology_001: { tier: 'Foundation' } } }
  ), false)
})

test('private tiered materials with an incomplete route stay hidden', () => {
  for (const tier of [null, '', 'all-levels', 'Other']) {
    assert.equal(matchesStudentMaterialRoute(
      { subjectId, examBoard: 'Edexcel', tier, r2Key: 'file' },
      studentOnRoute('Higher')
    ), false)
  }
  assert.equal(matchesStudentMaterialRoute(
    { subjectId, tier: 'Higher', r2Key: 'file' },
    studentOnRoute('Higher')
  ), false)
})

test('English remains available without Foundation/Higher tiers on the matching board', () => {
  for (const englishId of ['english_lang_001', 'english_lit_001', 'english-language', 'english-literature']) {
    for (const tier of [null, 'all-levels']) {
      const material = { subjectId: englishId, examBoard: 'AQA', tier, r2Key: 'file' }
      assert.equal(matchesStudentMaterialRoute(material, {
        subjectSettings: { [englishId]: { examBoard: 'AQA' } }
      }), true)
      assert.equal(matchesStudentMaterialRoute(material, {
        subjectSettings: { [englishId]: { examBoard: 'Edexcel' } }
      }), false)
    }
  }
})

test('unrestricted older materials remain shared', () => {
  assert.equal(matchesStudentMaterialRoute({ subjectId }, {}), true)
  assert.equal(matchesStudentMaterialRoute({ subjectId, tier: 'all-levels' }, studentOnRoute('Higher')), true)
})
