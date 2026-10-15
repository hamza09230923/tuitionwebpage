const { test } = require('node:test')
const assert = require('node:assert/strict')
const { assertR2FileType, resolveR2ContentType } = require('./material-file-types')

test('homework accepts videos and existing document formats', () => {
  for (const [fileName, contentType] of [
    ['lesson.MP4', 'video/mp4'], ['lesson.webm', 'video/webm'],
    ['lesson.mov', ''], ['lesson.mkv', 'application/octet-stream'],
    ['worksheet.pdf', 'application/pdf'], ['worksheet.docx', '']
  ]) {
    assert.doesNotThrow(() => assertR2FileType({ uploadType: 'homework', fileName, contentType }))
  }
  assert.equal(resolveR2ContentType('lesson.MP4', ''), 'video/mp4')
  assert.equal(resolveR2ContentType('lesson.webm', 'application/octet-stream'), 'video/webm')
  assert.equal(resolveR2ContentType('worksheet.pdf', 'application/pdf'), 'application/pdf')
})

test('unsupported homework, document-only resources and video-only lessons stay restricted', () => {
  for (const payload of [
    { uploadType: 'homework', fileName: 'script.html', contentType: 'text/html' },
    { uploadType: 'homework', fileName: 'script.mp4', contentType: 'text/html' },
    { uploadType: 'resource', fileName: 'lesson.mp4', contentType: 'video/mp4' },
    { uploadType: 'recording', fileName: 'worksheet.pdf', contentType: 'application/pdf' },
    { uploadType: 'unknown', fileName: 'worksheet.pdf' }
  ]) assert.throws(() => assertR2FileType(payload))
})
