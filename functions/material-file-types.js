const DOCUMENT_EXTENSIONS = new Set(['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'])
const VIDEO_TYPES = {
  mp4: 'video/mp4', m4v: 'video/mp4', webm: 'video/webm',
  mov: 'video/quicktime', avi: 'video/x-msvideo', mkv: 'video/x-matroska'
}

const extensionOf = (fileName) => String(fileName || '').split('.').pop().toLowerCase()

const assertR2FileType = ({ uploadType, fileName, contentType }) => {
  const type = String(uploadType || '').trim().toLowerCase()
  const extension = extensionOf(fileName)
  const mime = String(contentType || '').toLowerCase()
  if (!['homework', 'recording', 'resource'].includes(type)) {
    throw new Error('uploadType must be homework, recording, or resource')
  }
  if (type === 'homework') {
    const isVideo = Object.hasOwn(VIDEO_TYPES, extension) &&
      (!mime || mime === 'application/octet-stream' || mime.startsWith('video/'))
    if (!DOCUMENT_EXTENSIONS.has(extension) && !isVideo) {
      throw new Error('Homework must be a PDF, Office document or video (MP4, WebM, MOV, M4V, AVI or MKV)')
    }
  }
  if (type === 'resource' && !DOCUMENT_EXTENSIONS.has(extension)) {
    throw new Error('Learning resources must be PDF or Office documents')
  }
  if (type === 'recording' && mime && !mime.startsWith('video/')) {
    throw new Error('Lessons must be uploaded as video files')
  }
}

const resolveR2ContentType = (fileName, contentType) => {
  if (contentType && contentType !== 'application/octet-stream') return contentType
  return VIDEO_TYPES[extensionOf(fileName)] || contentType || 'application/octet-stream'
}

module.exports = { assertR2FileType, resolveR2ContentType }
