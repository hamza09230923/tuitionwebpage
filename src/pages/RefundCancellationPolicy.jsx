/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

export default function RefundCancellationPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm sm:p-12">
        <Link to="/" className="font-semibold text-blue-700 hover:text-blue-900">Back to MySchola</Link>
        <h1 className="mt-8 text-4xl font-bold text-gray-900">Refund &amp; Cancellation Policy</h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: 9 March 2026</p>
        <div className="mt-10 space-y-8 text-gray-600">
          <section><h2 className="text-2xl font-semibold text-gray-900">1. Overview</h2><p className="mt-3">This policy explains how refunds, cancellations and subscription changes work for MySchola services. By purchasing or subscribing, you agree to this policy.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">2. Subscription Payments</h2><p className="mt-3">Tutoring services are provided on a weekly or monthly subscription basis. Payments renew automatically unless cancelled before the next billing cycle.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">3. Seven-Day Money-Back Guarantee</h2><p className="mt-3">You may request a full refund within seven calendar days of the first payment by submitting the request in writing. The guarantee is not intended for excessive or abusive use of the service before requesting a refund.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">4. Partial Refunds</h2><p className="mt-3">MySchola may offer a partial refund at its discretion when a subject is removed, a package is downgraded or services are reduced during an active billing period.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">5. Refunds After Seven Days</h2><p className="mt-3">After the guarantee period, refunds are not issued for time already used, missed lessons, unused sessions or lack of attendance. Cancelling prevents future charges but does not refund the current billing cycle.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">6. Cancellation</h2><p className="mt-3">You may cancel at any time. Access remains active until the end of the paid billing period, and cancellation applies to future billing periods.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">7. How to Cancel or Request a Refund</h2><p className="mt-3">Submit your request in writing by WhatsApp or SMS to +44 7344 193804. Include the student's full name, the email address or phone number used to register and a clear description of your request.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">8. Digital Services and Fair Use</h2><p className="mt-3">Access to lessons, recordings and resources may begin shortly after payment. MySchola may refuse requests involving repeated abuse, misuse, fraud or bad-faith use of the refund policy. This does not affect your statutory rights.</p></section>
          <section><h2 className="text-2xl font-semibold text-gray-900">Contact</h2><p className="mt-3">For support, refunds or cancellations, contact MySchola by WhatsApp or SMS on +44 7344 193804.</p></section>
        </div>
      </article>
    </main>
  )
}
