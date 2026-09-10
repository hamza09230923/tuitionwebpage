/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, GraduationCap, Mail, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { trackLeadWhatsApp } from '../utils/metaPixel'
import { getCohortMonth } from '../utils/cohortMonth'

const faqGroups = [
  {
    title: 'Subjects and curriculum',
    intro: 'A simple overview of what we teach and how our GCSE support is organised.',
    items: [
      ['What can my child study with MySchola?', 'Our live GCSE teaching covers Maths, English Language, English Literature, Biology, Chemistry and Physics. Science support is available for both Combined Science and Triple Science routes.'],
      ['Which students are the lessons designed for?', 'The programme is built for GCSE students in Years 9, 10 and 11, with teaching adjusted to their stage and current confidence.'],
      ['Which exam boards are covered?', 'English lessons follow AQA. Maths and Science lessons are available for AQA, Edexcel and OCR specifications.'],
      ['Is the programme suitable for both Foundation and Higher tiers?', 'Yes. We support both tiers, adapting the focus and question practice to the student’s specification and current working level.'],
      ['What if our school is on a different topic right now?', 'That is not a problem. Schools do not all follow the same order, so our lessons follow a complete GCSE plan while still building the knowledge students need for their exams.'],
      ['Can you teach our English Literature set text?', 'Send us the exact text before enrolling and we will check it for you. Language skills transfer well, but Literature support depends on the text being studied.'],
      ['Can we choose English Language on its own?', 'Yes. English Language is available as a separate choice if Literature is not needed.'],
      ['Do you offer subjects outside Maths, English and Science?', 'Our group timetable is focused on Maths, English and Science. One-to-one support for another subject may be possible, depending on the tutor team and availability.'],
    ],
  },
  {
    title: 'Lessons and learning format',
    intro: 'A look at the weekly routine, lesson format and support students receive in class.',
    items: [
      ['How much live teaching is there each week?', 'Maths has one weekly lesson, Science has three lessons across Biology, Chemistry and Physics, and English has two lessons for Language and Literature. Studying all three gives six live hours each week.'],
      ['How long is a lesson?', 'Every live class is scheduled for one hour.'],
      ['Are lessons group-based or one-to-one?', 'We offer both. Group classes have a maximum of five students, while one-to-one tuition is available at £30 per hour. Group tuition is the lower-cost option and gives students the chance to learn alongside peers.'],
      ['How are lessons delivered?', 'Classes happen live on Zoom, so students can take part in real time. A recording is then added to the student dashboard for revision or catch-up.'],
      ['Does my child need to be on camera or use a microphone?', 'No. Students can join without either. Camera and microphone use can make discussion easier, but Zoom chat gives students another way to participate.'],
      ['Will my child see the other students?', 'Yes. Students in a group class can see the other participants during the lesson.'],
      ['What is the best way to ask a question?', 'Students can type in the Zoom chat or speak when invited. Tutors make regular pauses for questions, with the teaching assistant helping to pick up anything that might otherwise be missed.'],
      ['What help is available between lessons?', 'Students receive personal feedback on their homework and can speak with their mentor when they need help deciding what to work on next.'],
      ['What happens if a lesson is missed?', 'For an occasional clash, students can watch the recording later. If they will be away for a longer period, contact us so we can arrange a suitable pause.'],
      ['Do classes run through school holidays?', 'In most cases, yes. The regular timetable usually continues and holiday lessons are useful for revision and staying ahead. We can discuss a pause if your family is travelling.'],
      ['Where does my child find the Zoom link?', 'They open the relevant course in the MySchola platform and choose the live lesson link for their subject and set.'],
    ],
  },
  {
    title: 'Joining and sets',
    intro: 'How we get students started and match them with an appropriate class.',
    items: [
      ['What happens after the free trial?', 'We will speak with you about whether MySchola suits your child. If you decide to continue, we send the payment link and create student access for lessons, homework and recordings. Places may be released if we cannot confirm within 24 hours.'],
      ['Can my child look around the platform before the first class?', 'Yes. Once sign-up is complete, access is opened so your child can see the course area and get ready for the first session.'],
      ['How are students placed into sets?', 'We use an onboarding assessment to understand the student’s current level, then place them in the set where the pace and challenge are most appropriate.'],
      ['Can a student move sets later?', 'Yes. Sets are not permanent. We review participation and assignment results, and a parent or student can contact us if the work feels too easy or too demanding.'],
      ['Can I buy one-to-one tuition?', 'Yes. One-to-one sessions are available at £30 per hour, subject to tutor availability.'],
    ],
  },
  {
    title: 'Platform and resources',
    intro: 'The learning materials and account support available outside the live class.',
    items: [
      ['What is included with the subscription?', 'Students receive lesson recordings, past papers, mentoring and homework as part of their subscription. These do not carry an extra fee.'],
      ['I cannot log in or see a subject. What should I do?', 'Contact support on WhatsApp and include the account username and the subject you cannot access. This helps us check the correct profile quickly.'],
      ['How can my child catch up after being absent?', 'They should start with the lesson recording and its supporting resources. Their mentor can help them decide which part to tackle first.'],
      ['Are lessons available face to face?', 'No. MySchola is delivered online through live Zoom group or one-to-one lessons, with the recordings and resources available through the platform.'],
    ],
  },
  {
    title: 'Homework and progress',
    intro: 'How practice and feedback show students what to improve next.',
    items: [
      ['How often is homework set?', 'Homework follows the lessons and gives students a chance to use the new skill independently. Completing it also helps tutors see where more explanation is needed.'],
      ['What type of questions will students practise?', 'The work uses GCSE-style questions, including questions based on real exam papers, so students become familiar with the wording and method marks.'],
      ['Who marks the homework?', 'The MySchola tutor team marks the homework.'],
      ['What will the feedback tell us?', 'The review breaks down the student’s answers, highlights what they handled well, identifies errors or gaps, and suggests the next piece of work.'],
      ['Is the feedback personalised?', 'Yes. It is based on the student’s own answers and the gaps those answers reveal, rather than a generic class comment.'],
      ['How can I see if my child is making progress?', 'Look at the pattern across homework feedback, assessment results and the regular communication between the tutor and parent. Together, these show both effort and improvement.'],
      ['Is there an initial test?', 'Yes. An onboarding assessment helps us understand the student’s current working grade and choose a suitable set.'],
    ],
  },
  {
    title: 'Pricing, billing and support',
    intro: 'Practical information about subscriptions, changes and getting in touch.',
    items: [
      ['Do you offer a discount for siblings?', 'Yes. The second sibling receives 15% off.'],
      ['Is there a referral discount?', 'A 10% discount may be available for eligible referrals. Contact us and we can confirm the details.'],
      ['Can we change subjects after joining?', 'Yes. Subjects can be added or removed without ending the rest of the subscription.'],
      ['Can the monthly payment date be changed?', 'Yes. We can move the ongoing billing date and sort out any pro-rata adjustment or refund required.'],
      ['Can my child start later?', 'Yes. You can secure the place and agreed rate, then tell us the intended start date so we can align access and billing.'],
      ['Can the subscription be paused?', 'Yes, for a holiday or another longer absence. Send us the dates and, once agreed, we will adjust billing and access while carrying forward unused paid time.'],
      ['How do I update my payment method?', 'Contact us and we will guide you through the secure payment system. MySchola does not store your card details.'],
      ['What access remains after cancellation?', 'Access normally continues through the period already paid for. We can confirm the exact end date if you message support.'],
      ['Can a student come back after cancelling?', 'Yes. Get in touch when you are ready and we will check the account and current availability.'],
      ['Are the tutors UK-based?', 'Yes. Our teaching team is UK-based.'],
      ['Will the tutor stay the same each week?', 'Yes. Tutors are assigned consistently rather than changed from lesson to lesson.'],
      ['How can we get help outside class?', 'Every student has a personal mentor, and parents can contact our team through WhatsApp when they need support.'],
      ['Can MySchola take the place of school?', 'No. We provide extra academic support and can help students who have missed school, but we are not a substitute for a full education programme.'],
    ],
  },
]

function FAQItem({ question, answer, index, isOpen, onToggle }) {
  const answerId = `faq-answer-${index}`
  const questionId = `faq-question-${index}`

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-inset"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        id={questionId}
      >
        <span className="font-semibold text-slate-900">{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-blue-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {isOpen && (
        <div id={answerId} role="region" aria-labelledby={questionId} className="border-t border-slate-100 px-5 pb-5 pt-4 leading-relaxed text-slate-600">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQs() {
  const [openItem, setOpenItem] = useState('0-0')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const cohortMonth = getCohortMonth()
  let itemNumber = 0

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header>
        <div className="w-full bg-[#0B3D91] py-3 px-4 text-center text-sm font-bold text-white shadow-md sm:text-base md:text-lg">
          Join our {cohortMonth} cohort as soon as possible - spaces are running out!
        </div>
        <nav className="sticky top-0 z-50 bg-white shadow-sm" role="navigation" aria-label="Main navigation">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
              <Link to="/" className="flex items-center" aria-label="MySchola home">
                <GraduationCap className="h-8 w-8 text-blue-600" aria-hidden="true" />
                <span className="ml-2 text-2xl font-bold text-gray-900">MySchola</span>
              </Link>

              <div className="hidden justify-center md:flex">
                <div className="flex items-center space-x-8 text-base font-medium">
                  <Link to="/" className="text-gray-700 transition hover:text-blue-600">Home</Link>
                  <a href="/#how-it-works" className="text-gray-700 transition hover:text-blue-600">How It Works</a>
                  <a href="/#subjects" className="text-gray-700 transition hover:text-blue-600">Subjects</a>
                  <a href="/#testimonials" className="text-gray-700 transition hover:text-blue-600">Testimonials</a>
                  <Link to="/faqs" className="font-semibold text-blue-600">FAQ</Link>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <div className="hidden items-center space-x-4 md:flex">
                  <Link to="/login" className="inline-flex rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" aria-label="Log in">Log In</Link>
                  <a href="https://wa.me/447344193804" target="_blank" rel="noopener noreferrer" onClick={trackLeadWhatsApp} className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-2 text-white transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" aria-label="Contact us on WhatsApp">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />Contact Us
                  </a>
                </div>
                <button className="rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} aria-controls="faq-mobile-menu">
                  {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
                </button>
              </div>
            </div>
          </div>
          {mobileMenuOpen && (
            <div id="faq-mobile-menu" className="border-t bg-white md:hidden" role="menu" aria-label="Mobile navigation menu">
              <div className="space-y-1 px-4 pb-3 pt-2">
                <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Home</Link>
                <a href="/#how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">How It Works</a>
                <a href="/#subjects" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Subjects</a>
                <a href="/#testimonials" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">Testimonials</a>
                <Link to="/faqs" className="block bg-blue-50 px-3 py-2 font-semibold text-blue-600" role="menuitem">FAQ</Link>
                <Link to="/login" className="block rounded-lg bg-blue-600 px-3 py-2 text-center text-white" role="menuitem">Log In</Link>
                <a href="https://wa.me/447344193804" target="_blank" rel="noopener noreferrer" onClick={trackLeadWhatsApp} className="block rounded-lg bg-green-500 px-3 py-2 text-center text-white" role="menuitem">Contact Us</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main id="main-content">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">MySchola parent guide</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Questions about GCSE tuition?</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">Find clear answers about our subjects, live lessons, student support, progress checks and subscriptions.</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-10 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-blue-950">
            <h2 className="text-xl font-bold">Still deciding what is right for your child?</h2>
            <p className="mt-2 leading-relaxed text-blue-900">Book a free consultation and tell us your child’s year group, subjects, exam board and current goals. We can explain the most suitable route before you commit.</p>
            <Link to="/booking" className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">Book a free consultation</Link>
          </div>

          <div className="space-y-10">
            {faqGroups.map((group, groupIndex) => (
              <section key={group.title} aria-labelledby={`faq-group-${groupIndex}`}>
                <h2 id={`faq-group-${groupIndex}`} className="text-2xl font-bold text-slate-900">{group.title}</h2>
                <p className="mt-2 mb-4 text-slate-600">{group.intro}</p>
                <div className="space-y-3">
                  {group.items.map(([question, answer], itemIndex) => {
                    const currentNumber = itemNumber++
                    const key = `${groupIndex}-${itemIndex}`
                    return <FAQItem key={question} question={question} answer={answer} index={currentNumber} isOpen={openItem === key} onToggle={() => setOpenItem(openItem === key ? null : key)} />
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-3">
          <div><div className="flex items-center"><GraduationCap className="h-7 w-7 text-blue-400" aria-hidden="true" /><span className="ml-2 text-xl font-bold">MySchola</span></div><p className="mt-3 text-sm text-gray-400">Expert GCSE tutoring for Years 9–11 via Zoom.</p></div>
          <div><h2 className="font-semibold">Explore</h2><div className="mt-3 flex flex-col gap-2 text-sm text-gray-400"><Link to="/courses" className="hover:text-white">GCSE courses</Link><Link to="/package" className="hover:text-white">Tuition packages</Link><Link to="/timetable" className="hover:text-white">Lesson timetable</Link></div></div>
          <div><h2 className="font-semibold">Talk to us</h2><div className="mt-3 flex flex-col gap-2 text-sm text-gray-400"><a href="mailto:myscholauk@gmail.com" className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" aria-hidden="true" />myscholauk@gmail.com</a><a href="tel:+447344193804" className="inline-flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" aria-hidden="true" />+44 7344 193804</a><a href="https://wa.me/447344193804" target="_blank" rel="noopener noreferrer" onClick={trackLeadWhatsApp} className="inline-flex items-center gap-2 text-green-400 hover:text-green-300"><MessageCircle className="h-4 w-4" aria-hidden="true" />WhatsApp support</a></div></div>
        </div>
        <p className="mx-auto mt-8 max-w-7xl border-t border-gray-800 pt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} MySchola. All rights reserved.</p>
      </footer>
    </div>
  )
}

