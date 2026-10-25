import files from '../data/driveExamQuestions.json' with { type: 'json' }
import { getAqaResourceTopics, getAqaScienceSubject } from './resourceTopics.js'

// Public question packs supplied by the site owner:
// https://drive.google.com/drive/folders/1Ca1ZDJ8uuXcCFcnsrc8Ev5__RoAutWZh
export function getDriveExamResources(subject, examBoard) {
  const science = getAqaScienceSubject(subject, examBoard)
  const topics = getAqaResourceTopics(subject, examBoard)
  return files.filter((file) => file.subject === science).map((file) => {
    const topic = topics.find((item) => item.number === file.topicNumber)
    return {
      id: `drive-${file.driveFileId}`,
      sourceCollection: 'driveExamQuestions',
      subjectId: subject.id,
      examBoard: 'AQA',
      topicNumber: file.topicNumber,
      resourceType: 'exam-questions',
      title: `${topic.name} - Exam Style Questions${file.part ? ` - Part ${file.part}` : ''}`,
      description: `AQA ${science.charAt(0).toUpperCase() + science.slice(1)}: Topic ${topic.number}, ${topic.name}. Opens the original question pack in Google Drive.`,
      fileName: file.fileName,
      fileUrl: `https://drive.google.com/file/d/${file.driveFileId}/view`,
      externalSource: true
    }
  })
}
