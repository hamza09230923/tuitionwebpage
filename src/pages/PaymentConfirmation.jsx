import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QRCode from 'qrcode'

function PaymentConfirmation() {
  const navigate = useNavigate()
  const [studentQrCode, setStudentQrCode] = useState('')
  const [parentQrCode, setParentQrCode] = useState('')
  const [loading, setLoading] = useState(true)

  const studentWhatsAppUrl = 'https://whatsapp.com/channel/0029VbCaJseI7BeKDRtiEk1l'
  const parentWhatsAppUrl = 'https://whatsapp.com/channel/0029Vb7HdEFLSmbcNNOCOT1I'

  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'Payment Successful - MySchola | Join Our WhatsApp Communities'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Payment successful! Join our student and parent WhatsApp channels for updates, homework, and important announcements from MySchola tuition service.')
    } else {
      const newMeta = document.createElement('meta')
      newMeta.setAttribute('name', 'description')
      newMeta.setAttribute('content', 'Payment successful! Join our student and parent WhatsApp channels for updates, homework, and important announcements from MySchola tuition service.')
      document.head.appendChild(newMeta)
    }

    // Add Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.setAttribute('content', 'Payment Successful - MySchola')
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    ogDescription.setAttribute('content', 'Thank you for your payment! Join our WhatsApp communities to stay connected with important updates and learning materials.')
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription)
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Payment Confirmation - MySchola",
      "description": "Payment confirmation page with WhatsApp community links for students and parents",
      "mainEntity": {
        "@type": "EducationalOrganization",
        "name": "MySchola",
        "url": "https://myschola.com"
      }
    }

    const scriptTag = document.createElement('script')
    scriptTag.type = 'application/ld+json'
    scriptTag.textContent = JSON.stringify(structuredData)
    document.head.appendChild(scriptTag)

    return () => {
      // Cleanup meta tags and structured data
      if (scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag)
      }
    }
  }, [])

  useEffect(() => {
    const generateQRCodes = async () => {
      try {
        const studentQr = await QRCode.toDataURL(studentWhatsAppUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        })
        
        const parentQr = await QRCode.toDataURL(parentWhatsAppUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        })
        
        setStudentQrCode(studentQr)
        setParentQrCode(parentQr)
      } catch (err) {
        console.error('Error generating QR codes:', err)
      } finally {
        setLoading(false)
      }
    }

    generateQRCodes()
  }, [])

  const handleWhatsAppClick = (url, channelType) => {
    // Track analytics if needed
    console.log(`User clicked ${channelType} WhatsApp channel`)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" role="status" aria-live="polite">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" aria-hidden="true"></div>
          <p className="mt-4 text-gray-600">Loading confirmation details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg" aria-hidden="true">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600">Your payment was successful. Welcome to MySchola!</p>
        </header>

        {/* Main Content */}
        <main className="space-y-8" role="main">
          {/* Thank You Message */}
          <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100" aria-labelledby="thank-you">
            <h2 id="thank-you" className="text-2xl font-semibold text-gray-900 mb-6">Welcome to the MySchola Family!</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-blue-800 text-lg font-medium mb-2">
                🎉 Thank you for joining us! We're excited to help you succeed.
              </p>
              <p className="text-blue-700 text-sm">
                Join our WhatsApp communities below to stay updated with important announcements, homework, and learning materials.
              </p>
            </div>
          </section>

          {/* WhatsApp Channels Section */}
          <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100" aria-labelledby="whatsapp-section">
            <h2 id="whatsapp-section" className="text-2xl font-semibold text-gray-900 mb-2 text-center">Join Our WhatsApp Communities</h2>
            <p className="text-gray-600 text-center mb-8">Stay connected with updates, resources, and important announcements</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Student Channel */}
              <article className="text-center" aria-labelledby="student-channel">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white mb-6">
                  <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.888-5.335 9.891-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <h3 id="student-channel" className="text-xl font-bold mb-2">Student Channel</h3>
                  <p className="text-blue-100 text-sm">Get homework updates, study materials, and class announcements</p>
                </div>
                
                {studentQrCode && (
                  <div className="mb-6">
                    <img 
                      src={studentQrCode} 
                      alt="QR code for student WhatsApp channel"
                      className="w-48 h-48 mx-auto border-2 border-gray-200 rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-500 mt-2">Scan to join student channel</p>
                  </div>
                )}
                
                <button
                  onClick={() => handleWhatsAppClick(studentWhatsAppUrl, 'student')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-4 focus:ring-green-300"
                  aria-label="Join student WhatsApp channel"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.888-5.335 9.891-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Join Student Channel</span>
                </button>
              </article>

              {/* Parent Channel */}
              <article className="text-center" aria-labelledby="parent-channel">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white mb-6">
                  <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.888-5.335 9.891-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <h3 id="parent-channel" className="text-xl font-bold mb-2">Parent Channel</h3>
                  <p className="text-purple-100 text-sm">Receive progress reports, important notices, and parent updates</p>
                </div>
                
                {parentQrCode && (
                  <div className="mb-6">
                    <img 
                      src={parentQrCode} 
                      alt="QR code for parent WhatsApp channel"
                      className="w-48 h-48 mx-auto border-2 border-gray-200 rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-500 mt-2">Scan to join parent channel</p>
                  </div>
                )}
                
                <button
                  onClick={() => handleWhatsAppClick(parentWhatsAppUrl, 'parent')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-4 focus:ring-green-300"
                  aria-label="Join parent WhatsApp channel"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.888-5.335 9.891-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Join Parent Channel</span>
                </button>
              </article>
            </div>
          </section>

          {/* Important Information */}
          <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100" aria-labelledby="important-info">
            <h2 id="important-info" className="text-2xl font-semibold text-gray-900 mb-6">Important Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Confirmation</h3>
                  <p className="text-gray-600 text-sm mt-1">A detailed receipt has been sent to your email address.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Subscription Management</h3>
                  <p className="text-gray-600 text-sm mt-1">You can manage your subscription settings by contacting us at <a href="tel:+447344193804" className="text-blue-600 hover:text-blue-700 underline">+44 7344 193804</a>.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Need Help?</h3>
                  <p className="text-gray-600 text-sm mt-1">Contact our support team at <a href="https://wa.me/447344193804" className="text-blue-600 hover:text-blue-700 underline">+44 7344 193804</a> for any questions.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Go to Dashboard
          </button>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>© 2026 MySchola. All rights reserved.</p>
            <p className="mt-2">
              Questions? Contact us at{' '}
              <a href="https://wa.me/447344193804" className="text-blue-600 hover:text-blue-700 underline">
                +44 7344 193804
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default PaymentConfirmation
