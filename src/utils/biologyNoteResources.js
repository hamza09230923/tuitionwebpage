import { getAqaScienceSubject } from './resourceTopics.js'

const notes = [
  { topicNumber: 1, name: 'Cell Biology', fileName: 'MySchola_AQA_Biology_Topic_1_Cell_Biology_Notes.pdf' },
  { topicNumber: 2, name: 'Organisation', fileName: 'MySchola_AQA_Biology_Topic_2_Organisation_Notes.pdf' },
  { topicNumber: 3, name: 'Infection and Response', fileName: 'MySchola_AQA_Biology_Topic_3_Infection_and_Response_Notes.pdf' }
]

export function getBiologyNoteResources(subject, examBoard, baseUrl = '/') {
  if (getAqaScienceSubject(subject, examBoard) !== 'biology') return []
  return notes.map((note) => ({
    id: `myschola-biology-notes-${note.topicNumber}`,
    sourceCollection: 'biologyNotes',
    subjectId: subject.id,
    examBoard: 'AQA',
    topicNumber: note.topicNumber,
    resourceType: 'notes',
    title: `Topic ${note.topicNumber}: ${note.name} — Notes`,
    fileName: note.fileName,
    fileUrl: `${baseUrl}notes/aqa-biology/${note.fileName}`
  }))
}
