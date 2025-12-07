import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BookOpen, Target, Clock, ArrowRight, CheckCircle2, LogOut } from 'lucide-react'
import { auth } from './firebase'

const subjects = [
  {
    name: 'Maths',
    description: 'Foundation & Higher GCSE',
    focus: ['Algebra & Graphs', 'Geometry & Trigonometry', 'Exam practice'],
    progress: 72,
    color: 'blue'
  },
  {
    name: 'Combined Science',
    description: 'Trilogy & Synergy',
    focus: ['Biology essentials', 'Chemistry core', 'Physics calculations'],
    progress: 64,
    color: 'green'
  },
  {
    name: 'Triple Science',
    description: 'Biology, Chemistry, Physics',
    focus: ['Required practicals', 'Maths in science', 'Past paper drills'],
    progress: 55,
    color: 'purple'
  },
  {
    name: 'English Language',
    description: 'Reading & writing mastery',
    focus: ['Comprehension', 'Creative writing', 'Analysis techniques'],
    progress: 78,
    color: 'amber'
  },
  {
    name: 'English Literature',
    description: 'Poetry, prose, drama',
    focus: ['Themes & context', 'Quotes recall', 'Essay planning'],
    progress: 61,
    color: 'rose'
  }
]

const colorMap = {
  blue: 'from-blue-500 to-blue-600 border-blue-200 text-blue-700',
  green: 'from-green-500 to-green-600 border-green-200 text-green-700',
  purple: 'from-purple-500 to-purple-600 border-purple-200 text-purple-700',
  amber: 'from-amber-500 to-amber-600 border-amber-200 text-amber-700',
  rose: 'from-rose-500 to-rose-600 border-rose-200 text-rose-700'
}

function Dashboard() {
  const navigate = useNavigate()
  const userEmail = useMemo(() => auth.currentUser?.email || 'Student', [])

  const handleSignOut = async () => {
    await auth.signOut()
    navigate('/login', { replace: true })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-xs text-gray-500">Welcome back</p>
              <h1 className="text-xl font-semibold text-gray-900">{userEmail}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-gray-900 underline"
            >
              Back to site
            </Link>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-blue-100 text-sm uppercase tracking-wide">GCSE progress</p>
              <h2 className="text-3xl font-bold mt-1">Your learning dashboard</h2>
              <p className="mt-2 text-blue-100 max-w-2xl">
                Jump into any subject to view tasks, join the next Zoom session, or keep practicing with past paper drills.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm bg-white/10 px-4 py-3 rounded-xl border border-white/20">
              <Clock className="h-5 w-5 text-white" />
              <div>
                <p className="text-blue-50">Next available slot</p>
                <p className="font-semibold">Today · 6:00 PM</p>
              </div>
              <button className="ml-3 inline-flex items-center gap-1 bg-white text-blue-700 px-3 py-2 rounded-lg text-sm font-semibold shadow hover:shadow-md transition">
                Book a session
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Subjects</p>
              <h3 className="text-2xl font-semibold text-gray-900">Pick a subject to continue</h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Interactive cards—hover to reveal quick actions
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${colorMap[subject.color]}`} />
                <div className="p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500">{subject.description}</p>
                      <h4 className="text-xl font-semibold text-gray-900">{subject.name}</h4>
                    </div>
                    <Target className="h-6 w-6 text-gray-400 group-hover:text-gray-600" />
                  </div>

                  <div className="space-y-2">
                    {subject.focus.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-gray-900">{subject.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        style={{ width: `${subject.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button className="text-blue-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition">
                      Continue lesson
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 text-sm underline hover:text-gray-900">
                      View resources
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-indigo-500" />
              <h4 className="text-lg font-semibold text-gray-900">Upcoming sessions</h4>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center justify-between">
                <span>Maths · Algebra foundations</span>
                <span className="text-gray-500">Today · 6:00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>English Lit · Poetry analysis</span>
                <span className="text-gray-500">Tomorrow · 5:30 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Combined Science · Chemistry core</span>
                <span className="text-gray-500">Sat · 11:00 AM</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-900">Quick actions</h4>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <button className="border border-gray-200 rounded-xl px-4 py-3 text-left hover:border-blue-500 hover:shadow transition">
                <p className="text-sm text-gray-500">Practice</p>
                <p className="font-semibold text-gray-900">Past papers</p>
              </button>
              <button className="border border-gray-200 rounded-xl px-4 py-3 text-left hover:border-blue-500 hover:shadow transition">
                <p className="text-sm text-gray-500">Resources</p>
                <p className="font-semibold text-gray-900">Download revision packs</p>
              </button>
              <button className="border border-gray-200 rounded-xl px-4 py-3 text-left hover:border-blue-500 hover:shadow transition">
                <p className="text-sm text-gray-500">1:1 Help</p>
                <p className="font-semibold text-gray-900">Message your tutor</p>
              </button>
              <button className="border border-gray-200 rounded-xl px-4 py-3 text-left hover:border-blue-500 hover:shadow transition">
                <p className="text-sm text-gray-500">Schedule</p>
                <p className="font-semibold text-gray-900">Book a session</p>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
