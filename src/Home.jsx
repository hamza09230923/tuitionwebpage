import { Menu, X, BookOpen, Users, Award, ArrowRight, Check, Star, GraduationCap, Video, Shield, Target, TrendingUp, Mail, Phone, Clock, FileText, HelpCircle, ZoomIn, UserCheck, Lock } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Lernova</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
              <a href="#subjects" className="text-gray-700 hover:text-blue-600 transition">Subjects</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
              <Link to="/login" className="text-gray-700 hover:text-blue-600 transition font-medium">Log In</Link>
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Book Free Consultation
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Home</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">How It Works</a>
              <a href="#subjects" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Subjects</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Testimonials</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">FAQ</a>
              <Link to="/login" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 font-medium">Log In</Link>
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Clear Headline */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Expert GCSE Tutoring for
              <span className="text-blue-600"> Years 7-11</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              <strong>GCSE Maths, English & Science</strong> via Zoom
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              One-to-one personalized lessons with expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition border-2 border-blue-600 inline-flex items-center justify-center"
              >
                Apply for Trial Lesson
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How Lessons Work Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How Our Lessons Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1-to-1 Sessions</h3>
              <p className="text-gray-600">Personalized one-on-one attention. No group distractions - your child gets the tutor's full focus.</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ZoomIn className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Via Zoom</h3>
              <p className="text-gray-600">Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy.</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Student Privacy</h3>
              <p className="text-gray-600">Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Benefits for Parents & Students</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Why thousands of families choose Lernova for GCSE success
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-xl font-semibold">Grade Improvement</h3>
              </div>
              <p className="text-gray-600">Students consistently improve by 2-3 grades with our proven teaching methods and personalized approach.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">Confidence Building</h3>
              </div>
              <p className="text-gray-600">Watch your child's confidence soar as they master difficult concepts and see their progress week by week.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Target className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold">Exam Focus</h3>
              </div>
              <p className="text-gray-600">Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Clock className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
              </div>
              <p className="text-gray-600">Choose times that work around your family's schedule. Evening and weekend slots available.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Users className="h-6 w-6 text-orange-500 mr-2" />
                <h3 className="text-xl font-semibold">Expert Tutors</h3>
              </div>
              <p className="text-gray-600">Qualified UK teachers with DBS checks and proven track records of GCSE success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <BookOpen className="h-6 w-6 text-indigo-500 mr-2" />
                <h3 className="text-xl font-semibold">Personalized Curriculum</h3>
              </div>
              <p className="text-gray-600">Lessons tailored to your child's learning style, pace, and specific areas that need improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects/Services Section */}
      <section id="subjects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Subjects We Offer</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive GCSE support for Years 7-11
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Maths', description: 'GCSE Maths (Foundation & Higher)' },
              { name: 'Combined Science', description: 'Trilogy and Synergy pathways' },
              { name: 'Triple Science', description: 'Biology, Chemistry, and Physics' },
              { name: 'English Language', description: 'Reading, writing, and language skills' },
              { name: 'English Literature', description: 'Poetry, prose, and drama analysis' }
            ].map((subject) => (
              <div key={subject.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600">
                <div className="flex items-start mb-2">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{subject.name}</h3>
                    <p className="text-gray-600 text-sm">{subject.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What Parents & Students Say</h2>
          <p className="text-center text-gray-600 mb-12">Real results from real families</p>

          {/* Results/Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Students improve grades</div>
            </div>
            <div className="bg-green-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">2-3</div>
              <div className="text-green-100">Grade improvement average</div>
            </div>
            <div className="bg-purple-600 text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Successful students</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M., Parent',
                text: 'My daughter went from a Grade 5 to Grade 8 in Maths in just one term! The 1-to-1 Zoom sessions were perfect - she felt comfortable asking questions without other students around.',
                rating: 5,
                result: 'Maths: Grade 5 → Grade 8'
              },
              {
                name: 'James T., Student',
                text: 'I was really struggling with English Literature, but my tutor made it click. The exam techniques I learned helped me get a Grade 7. The Zoom sessions were so convenient!',
                rating: 5,
                result: 'English Lit: Grade 4 → Grade 7'
              },
              {
                name: 'Emma L., Parent',
                text: 'The confidence my son gained was incredible. He went from dreading Science to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!',
                rating: 5,
                result: 'Chemistry: Grade 5 → Grade 8'
              },
              {
                name: 'Michael R., Student',
                text: 'My tutor was amazing! She explained everything so clearly and helped me with past papers. I finally understood how to approach exam questions properly.',
                rating: 5,
                result: 'Physics: Grade 6 → Grade 9'
              },
              {
                name: 'Lisa K., Parent',
                text: 'As a working parent, the flexible scheduling was a lifesaver. My daughter could do evening sessions that fit around school and activities. Highly recommend!',
                rating: 5,
                result: 'Maths: Grade 6 → Grade 8'
              },
              {
                name: 'David P., Parent',
                text: 'The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!',
                rating: 5,
                result: 'English: Grade 5 → Grade 7'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                  <p className="text-sm text-blue-600 font-medium mt-1">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Call Section */}
      <section id="book-call" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Child's GCSE Success Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free consultation to discuss your child's needs and see how we can help them achieve their goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition inline-flex items-center justify-center"
            >
              Apply for Trial Lesson
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <p className="text-blue-100 text-sm mt-6">No credit card required • Free 30-minute consultation</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do the Zoom lessons work?',
                a: 'Each lesson is conducted one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later.'
              },
              {
                q: 'What equipment do we need?',
                a: 'You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard.'
              },
              {
                q: 'How long are the sessions?',
                a: 'Standard sessions are 60 minutes, but we also offer 45-minute and 90-minute options depending on your child\'s needs and attention span. You can discuss the best duration during your free consultation.'
              },
              {
                q: 'Can I choose the tutor?',
                a: 'Yes! During your consultation, we\'ll discuss your child\'s learning style and match them with the best tutor. You can also request specific tutors based on availability.'
              },
              {
                q: 'What if my child misses a session?',
                a: 'We offer flexible rescheduling with 24 hours notice. Missed sessions can be rescheduled to another time that works for you. We understand that life happens!'
              },
              {
                q: 'Do you provide homework and practice materials?',
                a: 'Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price.'
              },
              {
                q: 'How quickly will we see results?',
                a: 'Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness.'
              },
              {
                q: 'What age groups do you teach?',
                a: 'We specialize in Years 7-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                    {faq.q}
                  </span>
                  <span className="text-blue-600">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Mail className="h-6 w-6 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">info@lernova.co.uk</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Phone className="h-6 w-6 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">020 1234 5678</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri 9am-6pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy-policy" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Privacy Policy</h2>
          <div className="prose max-w-none text-gray-600 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
              <p>We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h3>
              <p>We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Data Security</h3>
              <p>We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Session Recordings</h3>
              <p>Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Your Rights</h3>
              <p>You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Children's Privacy</h3>
              <p>We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements.</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Section */}
      <section id="terms-of-service" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Terms of Service</h2>
          <div className="prose max-w-none text-gray-600 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Service Agreement</h3>
              <p>By booking a lesson or consultation with Lernova, you agree to these terms of service. Our services include one-to-one online tutoring sessions delivered via Zoom for students in Years 7-11.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Booking and Cancellation</h3>
              <p>Lessons must be booked in advance. Cancellations require 24 hours notice for a full refund or reschedule. Cancellations with less than 24 hours notice may be charged at 50% of the lesson fee. No-shows will be charged the full lesson fee.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Payment Terms</h3>
              <p>Payment is required in advance for lesson packages. We accept payment via Stripe. Refunds for unused lessons in a package will be calculated on a pro-rata basis, minus any applicable fees.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Tutor Matching</h3>
              <p>We strive to match students with the most suitable tutor. However, if you're not satisfied after the first session, we offer a free replacement tutor or full refund.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Student Conduct</h3>
              <p>Students are expected to attend lessons punctually, be respectful to tutors, and engage actively in learning. Any inappropriate behavior may result in session termination without refund.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Technical Requirements</h3>
              <p>You are responsible for ensuring you have adequate internet connection and equipment for Zoom sessions. Note that webcam and microphone are optional - not needed. We use Zoom chat to check engagement, and parents can monitor participation for privacy reasons. We are not liable for technical issues on your end, though we'll do our best to accommodate.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Guarantees</h3>
              <p>While we work hard to help students achieve their goals, we cannot guarantee specific grade improvements as results depend on multiple factors including student effort, attendance, and engagement.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Intellectual Property</h3>
              <p>All teaching materials, resources, and session recordings are the intellectual property of Lernova and are for the personal use of the enrolled student only.</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">Lernova</span>
              </div>
              <p className="text-gray-400">Expert GCSE tutoring for Years 7-11 via Zoom.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#subjects" className="hover:text-white transition">Subjects</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#terms-of-service" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:info@lernova.co.uk" className="hover:text-white transition">info@lernova.co.uk</a></li>
                <li><a href="tel:02012345678" className="hover:text-white transition">020 1234 5678</a></li>
                <li>
                  <a
                    href="https://calendly.com/your-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition inline-block mt-2"
                  >
                    Book Consultation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Lernova. All rights reserved. Tutoring for Years 7-11.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
