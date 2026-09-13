import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

function Careers() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader activePath="/careers" />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.16em] text-blue-600">Join the MySchola team</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Careers at MySchola</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">Help us create lessons that students feel confident, motivated and excited to attend.</p>
        </div>

        <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-10" aria-labelledby="english-teacher-role">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">Teaching role</span>
              <h2 id="english-teacher-role" className="mt-4 text-3xl font-bold">English Teacher (AQA)</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Deliver engaging GCSE English Language and Literature lessons mainly in small groups, with opportunities for one-to-one Zoom teaching as student enrolment grows.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
                <span className="rounded-lg bg-slate-100 px-3 py-2">2 hours minimum</span>
                <span className="rounded-lg bg-slate-100 px-3 py-2">Around 6 hours as enrolment grows</span>
                <span className="rounded-lg bg-slate-100 px-3 py-2">Wed &amp; Thu, 6–7pm</span>
                <span className="rounded-lg bg-slate-100 px-3 py-2">£17.50 per lesson</span>
                <span className="rounded-lg bg-slate-100 px-3 py-2">Online via Zoom</span>
              </div>
            </div>
            <Link to="/english-teacher" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700">
              View role <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default Careers
