import { doc, getDoc } from 'firebase/firestore'

const TUTORIAL_STUDENT_EMAILS = new Set([
  'student@myschola.com'
])

export function isTutorialStudent(studentData) {
  const email = String(studentData?.email || '').trim().toLowerCase()
  return studentData?.tutorialAccess === true || TUTORIAL_STUDENT_EMAILS.has(email)
}

export function getStudentSubjectIds(studentData) {
  const directSubjects = Array.isArray(studentData?.subjects) ? studentData.subjects : []
  if (directSubjects.length > 0) {
    return directSubjects
  }

  const enrollments = Array.isArray(studentData?.enrollments) ? studentData.enrollments : []
  return enrollments
    .map((enrollment) => enrollment?.subjectId)
    .filter(Boolean)
}

export async function getAuthorizedStudentSubject(db, uid, subjectId) {
  if (!uid || !subjectId) {
    return { authorized: false, reason: 'missing-context' }
  }

  const studentSnapshot = await getDoc(doc(db, 'students', uid))
  if (!studentSnapshot.exists()) {
    return { authorized: false, reason: 'missing-student-profile' }
  }

  const studentData = studentSnapshot.data() || {}
  const enrolledSubjects = getStudentSubjectIds(studentData)

  if (!enrolledSubjects.includes(subjectId)) {
    return {
      authorized: false,
      reason: 'not-enrolled',
      student: studentData
    }
  }

  const subjectSnapshot = await getDoc(doc(db, 'subjects', subjectId))
  if (!subjectSnapshot.exists()) {
    return {
      authorized: false,
      reason: 'missing-subject',
      student: studentData
    }
  }

  return {
    authorized: true,
    student: studentData,
    subject: {
      id: subjectId,
      ...subjectSnapshot.data()
    }
  }
}
