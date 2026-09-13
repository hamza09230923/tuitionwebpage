/* eslint-disable react/prop-types */
import { ArrowRight, Check } from 'lucide-react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

function EnglishTeacher() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader activePath="/careers" />

      <main id="main-content">
        <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-700 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-300/60 bg-green-500/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-green-200">
              <span className="flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_0_4px_rgba(34,197,94,0.2)]"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>
              <span>We are hiring</span>
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">English Teacher (AQA)</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">
              Help GCSE students become more confident, capable and excited about English through engaging online lessons.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScnbv90bwET1EGvuiAEy-WUCKXrreBOT-6mWlBnkTUfMcQCOg/viewform?usp=dialog" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 font-bold text-blue-800 shadow-lg transition hover:bg-blue-50">
                Apply <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="hiring-heading">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <p className="font-bold uppercase tracking-[0.16em] text-blue-600">How we hire</p>
              <h2 id="hiring-heading" className="mt-3 text-4xl font-bold tracking-tight text-slate-900">A simple, focused process</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">We review applications on a rolling basis and move strong candidates through quickly. Apply early.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ['1', 'Application form', 'Send us your details, experience and availability.'],
                ['2', 'Trial lesson', 'Deliver a short 30-minute lesson so we can see your teaching in action.'],
                ['3', 'Hired', 'Join MySchola and start helping GCSE students make progress.']
              ].map(([number, title, description]) => (
                <div key={number} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">{number}</span>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Who we are and our mission</h2>
              <p className="text-lg leading-8 text-slate-600">
                MySchola is a fast-growing education company on a mission to change GCSE life for students in Years 9–11. We are building a better way for students to learn: lessons that are academically strong, engaging and genuinely motivating.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our mission is to help more students feel confident in their ability, make meaningful progress and achieve grades they once thought were out of reach. We want to keep improving the way GCSE support works, so every student has the structure, encouragement and teaching they need to succeed.
              </p>
            </div>

            <div className="space-y-16">
              <ContentSection title="Who We're Looking For">
                <p className="text-xl font-semibold leading-9 text-slate-800">We are looking for the tutor who can turn “I’m not good at English” into “Let me have another go.”</p>
                <p>That might happen through a sharp explanation, a well-chosen question, a lively discussion or the patience to revisit an idea from a different angle. In an online classroom, small moments matter: noticing who has gone quiet, celebrating a thoughtful interpretation and showing a student exactly how their next answer can be stronger.</p>
                <p>More specifically, we are looking for someone with:</p>
                <ScopeList items={[
                  ['Clarity.', 'You can take a difficult idea, find the simplest useful route into it and help a student see the point for themselves.'],
                  ['Connection.', 'You create a classroom where students feel known, comfortable contributing and willing to have another go when an answer is not quite there.'],
                  ['Curiosity.', 'You keep exploring better ways to teach texts, exam skills and analysis because a familiar method is not always the best method.'],
                  ['Follow-through.', 'You notice the detail, prepare with purpose and take responsibility for helping students move from one lesson to the next.'],
                  ['Ambition.', 'You care about more than finishing the specification. You want students to become sharper thinkers, stronger writers and more confident learners.'],
                  ['Reach.', 'You can commit to at least 2 teaching hours each week, with the potential to build towards around 6 hours as more students enrol for English.']
                ]} />
                <Quote>Our best tutors leave students with more than a completed worksheet: they leave them with a clearer way to think.</Quote>
              </ContentSection>

              <ContentSection title="How the teaching works">
                <p>The role is mainly focused on live small-group GCSE English lessons delivered through Zoom. These sessions are designed to be interactive, supportive and purposeful, with students learning alongside their peers.</p>
                <p>Group lessons currently run on <strong>Wednesdays and Thursdays, 6:00–7:00pm</strong>. As students enrol, there may also be opportunities to teach one-to-one English sessions via Zoom. We ask tutors to have at least 2 hours available each week, with the opportunity to build towards around 6 hours as enrolment for English grows.</p>
              </ContentSection>

              <ContentSection title="What You'll Do">
                <p>You will be responsible for making each MySchola English lesson useful, engaging and worth returning to.</p>
                <ScopeList items={[
                  ['Teach.', 'Lead live GCSE English lessons for Year 9–11 students, mainly in small groups, with one-to-one Zoom teaching available as enrolment grows.'],
                  ['Prepare.', 'Build and organise clear lesson slides and activities that give students a strong route through the week’s topic.'],
                  ['Improve.', 'If a slide, explanation or activity is not good enough, change it. You have the freedom to make the lesson work better, and we want you to use it.'],
                  ['Create momentum.', 'Use questions, discussion and exam practice to help students participate, understand the skill and apply it independently.'],
                  ['Share what works.', 'Bring useful teaching ideas to the team so strong approaches can improve English lessons across MySchola.']
                ]} />
                <p className="rounded-xl bg-slate-100 px-5 py-4 text-slate-700"><strong className="text-slate-900">What you won’t do:</strong> You will not be responsible for marking homework, managing behaviour, chasing students or completing unnecessary paperwork. Our team supports those areas so you can focus on teaching and helping students progress.</p>
              </ContentSection>

              <ContentSection title="Strong Subject Knowledge">
                <p>You should have a strong understanding of the AQA GCSE English Language and Literature curriculum. You should be confident teaching students:</p>
                <CheckList items={[
                  "How to analyse language, structure and writer's methods",
                  "How to develop high-quality GCSE exam responses",
                  'How to use evidence effectively',
                  'How to improve from lower-grade answers to Grade 7–9 responses',
                  'How to apply exam techniques under timed conditions'
                ]} />
                <p>Achieving top GCSE grades is not about memorising model answers — it is about teaching students how to think, analyse and write independently.</p>
              </ContentSection>

              <ContentSection title="A Tutor Who Wants To Improve The Way Students Learn">
                <p>We are looking for someone who is always looking for ways to improve. Someone who:</p>
                <CheckList items={[
                  'Reflects on what works well in lessons',
                  'Finds creative ways to explain difficult concepts',
                  'Adapts their teaching depending on student ability',
                  'Takes ownership of helping students progress',
                  'Is excited about being part of a growing education company'
                ]} />
                <p>At MySchola, your ideas matter. If you discover a better way to explain a concept or engage students, we want you to share it.</p>
              </ContentSection>

              <ContentSection title="Growth Mindset">
                <p>This role starts with a minimum availability of <strong>2 teaching hours per week</strong>. As more students enrol for English, there is potential to build towards around <strong>6 hours per week</strong> through a combination of group and one-to-one Zoom teaching.</p>
                <p>As MySchola expands, there will be opportunities to:</p>
                <CheckList items={[
                  'Increase your weekly teaching hours',
                  'Teach additional subjects',
                  'Take on more responsibility within the company',
                  'Receive increased pay based on performance, student feedback and contribution'
                ]} />
              </ContentSection>

              <ContentSection title="Why This Role">
                <p>This is an opportunity to help shape the experience of GCSE students at an important stage in their education, while joining MySchola at an early and exciting point in its growth.</p>
                <CheckList items={[
                  'Make a visible difference to students’ confidence, exam skills and progress',
                  'Teach motivated small groups and, where demand allows, provide one-to-one support via Zoom',
                  'Work with a team that values good ideas and thoughtful teaching',
                  'Build your weekly hours as the MySchola community grows',
                  'Develop your experience within a fast-growing education company'
                ]} />
              </ContentSection>

              <ContentSection title="Requirements">
                <p className="text-xl font-bold leading-8 text-red-700">DO NOT apply if you do not meet these requirements, as your application will be automatically rejected.</p>
                <CheckList items={[
                  'UK based, and planning to stay UK based',
                  'Have prepared students for UK exam boards, including AQA, Edexcel or OCR',
                  'Have completed, or currently be studying at, a top Russell Group university'
                ]} />
                <p><strong>Must know:</strong> Macbeth · A Christmas Carol · An Inspector Calls · The Power and Conflict poetry anthology</p>
                <p><strong>Bonus if you also know:</strong> Romeo and Juliet · Jekyll and Hyde · Blood Brothers · Love and Relationships poetry anthology</p>
                <p><strong>PGCE and QTS (or an equivalent recognised teaching qualification) is a bonus.</strong></p>
              </ContentSection>

              <ContentSection title="Bonus Skills">
                <CheckList items={[
                  'Experience teaching GCSE students',
                  'Previous tutoring experience',
                  'Ability to teach Edexcel GCSE Maths',
                  'Ability to teach AQA / Edexcel / OCR Combined Science',
                  'Ability to teach AQA / Edexcel / OCR Triple Science (Higher Tier)'
                ]} />
              </ContentSection>

              <section className="rounded-2xl bg-slate-900 p-7 text-white shadow-xl sm:p-10" aria-labelledby="package-heading">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">The package</p>
                <h2 id="package-heading" className="mt-3 text-3xl font-bold">English Teacher (AQA)</h2>
                <ul className="mt-5 space-y-3 text-lg leading-8 text-slate-200" role="list">
                  <li>• £17.50 per teaching hour for group lessons</li>
                  <li>• At least 2 hours per week available to start — Wednesdays and Thursdays, 6:00–7:00pm</li>
                  <li>• One-to-one Zoom lessons may become available as student enrolment grows</li>
                  <li>• Fully remote, part-time teaching</li>
                  <li>• No homework marking, behaviour management, student chasing or unnecessary paperwork</li>
                  <li>• Potential to grow towards around 6 hours per week based on demand for English</li>
                </ul>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScnbv90bwET1EGvuiAEy-WUCKXrreBOT-6mWlBnkTUfMcQCOg/viewform?usp=dialog" target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-500">Apply Now <ArrowRight className="h-5 w-5" aria-hidden="true" /></a>
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function ContentSection({ title, children }) {
  return (
    <section aria-labelledby={title.toLowerCase().replaceAll(' ', '-')}>
      <h2 id={title.toLowerCase().replaceAll(' ', '-')} className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <div className="mt-5 space-y-5 text-lg leading-8 text-slate-600">{children}</div>
    </section>
  )
}

function CheckList({ items }) {
  return (
    <ul className="space-y-3" role="list">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Check className="h-4 w-4" aria-hidden="true" /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ScopeList({ items }) {
  return (
    <ul className="space-y-5" role="list">
      {items.map(([label, description]) => (
        <li key={label} className="flex items-start gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
          <p><strong className="text-slate-900">{label}</strong> {description}</p>
        </li>
      ))}
    </ul>
  )
}

function Quote({ children }) {
  return <blockquote className="border-l-4 border-blue-500 bg-blue-50 px-5 py-4 font-semibold italic text-blue-900">{children}</blockquote>
}

export default EnglishTeacher
