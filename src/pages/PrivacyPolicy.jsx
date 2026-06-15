/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm sm:p-12">
        <Link to="/" className="font-semibold text-blue-700 hover:text-blue-900">Back to MySchola</Link>
        <h1 className="mt-8 text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: 15 June 2026</p>
        <div className="mt-10 space-y-8 text-gray-600">
          <section><h2 className="text-2xl font-semibold text-gray-900">1. Information We Collect</h2><p className="mt-3">We collect information that you provide directly to us, including your name, email address, phone number and information about your child's educational needs. We may also collect session recordings and progress data where needed to provide our tutoring services.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">2. How We Use Your Information</h2><p className="mt-3">We use the information we collect to provide, maintain and improve our tutoring services, process bookings, communicate with you and keep our platform secure.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">3. Data Security</h2><p className="mt-3">We use appropriate technical and organisational measures to protect personal information. Tutor checks and secure online lesson practices form part of our safeguarding approach.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">4. Session Recordings</h2><p className="mt-3">Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are available only to authorised people.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">5. Your Rights</h2><p className="mt-3">You can ask to access, update or delete your personal information. You can also request a copy of your data or withdraw consent where consent is the basis for processing.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">6. Children's Privacy</h2><p className="mt-3">We take children's privacy seriously and only collect information needed to provide our services. Our handling of children's data is designed to comply with UK GDPR and the Children's Code.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">Contact</h2><p className="mt-3">For privacy questions, email myscholauk@gmail.com or contact MySchola on +44 7344 193804.</p></section>
        </div>
      </article>
    </main>
  )
}
