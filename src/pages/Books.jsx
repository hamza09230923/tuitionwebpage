import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen, BookMarked } from 'lucide-react'
import { auth, db } from '../firebase'
import { getAuthorizedStudentSubject } from '../utils/studentAccess'
import { getCanonicalSubjectName } from '../utils/subjectMetadata'

function Books() {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  const [subject, setSubject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [accessDenied, setAccessDenied] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function loadBooks() {
      try {
        const user = auth.currentUser
        if (!user) {
          navigate('/login')
          return
        }

        const access = await getAuthorizedStudentSubject(db, user.uid, subjectId)
        const isEnglishLiterature = access.authorized
          && getCanonicalSubjectName(access.subject) === 'English Literature'

        if (!isEnglishLiterature) {
          if (!cancelled) {
            setAccessDenied(true)
            setError('Books are currently available for English Literature only.')
            setLoading(false)
          }
          return
        }

        if (!cancelled) {
          setSubject(access.subject)
          setAccessDenied(false)
          setLoading(false)
        }
      } catch (loadError) {
        console.error('Error loading books:', loadError)
        if (!cancelled) {
          setError('Failed to load books')
          setLoading(false)
        }
      }
    }

    loadBooks()
    return () => { cancelled = true }
  }, [navigate, subjectId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" role="status" aria-live="polite">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" aria-hidden="true" />
          <p className="mt-4 text-gray-600">Loading your books...</p>
        </div>
      </div>
    )
  }

  if (accessDenied || error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/app/dashboard" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Dashboard
          </Link>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h1 className="text-xl font-semibold text-gray-900 mb-2">Books unavailable</h1>
            <p className="text-gray-600">{error || 'This book collection is not available for this subject.'}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/app/dashboard" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Dashboard
        </Link>

        <header className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-6 w-6 text-purple-600" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-purple-700">{getCanonicalSubjectName(subject)}</p>
              <h1 className="text-2xl font-bold text-gray-900">Books</h1>
            </div>
          </div>
          <p className="text-gray-600">Open your literature books and study guides from one place.</p>
        </header>

        <section aria-labelledby="available-books-heading">
          <h2 id="available-books-heading" className="text-lg font-semibold text-gray-900 mb-3">Available books</h2>
          <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-50 border border-blue-100 p-3 text-blue-700">
                <BookMarked className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">An Inspector Calls</h3>
                <p className="text-sm text-gray-500 mt-1">J. B. Priestley · GCSE English Literature</p>
                <p className="text-gray-600 mt-3 max-w-2xl">Explore the story, characters, themes, important quotes, context and Priestley&apos;s methods.</p>
              </div>
            </div>
            <Link
              to="/app/literature/an-inspector-calls"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Open book
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Books
