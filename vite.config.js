import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'

/** Copies index.html → 404.html so GitHub Pages serves the SPA for /payment-success, /login, etc. */
const STRATEGY_CALL_FALLBACK = `
      <main class="seo-fallback" data-page="strategy-call">
        <h1>Don't Leave Your Child's GCSE Grades to Chance</h1>
        <p>Book a free GCSE trial lesson with MySchola to see how we teach Maths, Science and English with clear visual explanations and exam-focused revision.</p>
        <h2>GCSE Support for AQA, Edexcel and OCR</h2>
        <p>Our online tuition supports UK students studying Maths, English and Science across AQA, Edexcel and OCR exam boards.</p>
        <h2>Plan the Right Next Steps</h2>
        <p>During the call, we identify the support your child needs and explain how MySchola's structured group lessons can help.</p>
      </main>`

const NOT_FOUND_FALLBACK = `<main class="seo-fallback not-found-fallback" data-page="not-found"><div class="not-found-shell"><a href="/" class="not-found-brand"><span class="not-found-brand-mark">M</span><span>MySchola</span></a><section class="not-found-content" aria-labelledby="not-found-heading"><p class="not-found-code">404</p><h1 id="not-found-heading">We couldn’t find that page</h1><p class="not-found-lead">The link may be out of date, or the page may have moved.<br />Here are the places most people are looking for.</p><div class="not-found-actions"><a href="/" class="not-found-button not-found-button-primary">Home</a><a href="/faqs" class="not-found-button not-found-button-secondary">Student &amp; parent FAQs</a></div><p class="not-found-help">Looking for something specific? <a href="/booking">Book a free consultation.</a></p></section></div></main>`

const NOT_FOUND_FALLBACK_FULL = `
<main class="seo-fallback not-found-fallback" data-page="not-found">
  <div class="cohort-banner">Join our current GCSE tuition cohort - spaces are limited.</div>
  <nav class="site-nav" aria-label="Main navigation">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="site-nav-inner">
      <a href="/" class="site-brand" aria-label="MySchola home"><svg class="not-found-brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 10 12 5l10 5-10 5L2 10Z"/><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6"/></svg><span>MySchola</span></a>
      <div class="nav-links hidden md:flex"><div><a href="/">Home</a><a href="/#how-it-works">How It Works</a><a href="/#subjects">Subjects</a><a href="/#testimonials">Testimonials</a><a href="/faqs">FAQ</a></div></div>
      <div class="nav-actions"><div class="hidden md:flex"><a href="/login" class="nav-login">Log In</a><a href="https://wa.me/447344193804" target="_blank" rel="noopener noreferrer" class="nav-whatsapp">Contact Us</a></div></div>
    </div></div>
  </nav>
  <div class="not-found-page"><div class="not-found-shell"><section class="not-found-content" aria-labelledby="not-found-heading">
    <p class="not-found-code">404</p><h1 id="not-found-heading">We couldn't find that page</h1>
    <p class="not-found-lead">The link may be out of date, or the page may have moved.<br />Here are the places most people are looking for.</p>
    <div class="not-found-actions"><a href="/" class="not-found-button not-found-button-primary">Home</a><a href="/booking" class="not-found-button not-found-button-secondary">Book a consultation</a></div>
    <p class="not-found-help">Looking for something specific? <a href="https://wa.me/447344193804" target="_blank" rel="noopener noreferrer">Message us on WhatsApp.</a></p>
  </section></div></div>
  <footer class="not-found-footer bg-gray-900 px-4 py-12 text-white sm:px-6 lg:px-8" role="contentinfo"><div class="mx-auto max-w-7xl"><div class="mb-8 grid gap-8 md:grid-cols-4">
    <div><div class="mb-4 flex items-center"><svg class="not-found-brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 10 12 5l10 5-10 5L2 10Z"/><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6"/></svg><span class="ml-2 text-2xl font-bold">MySchola</span></div><p class="text-gray-400">Expert GCSE tutoring for Years 9-11 via Zoom.</p></div>
    <div><h4 class="mb-4 font-semibold">Quick Links</h4><ul class="space-y-2 text-gray-400"><li><a href="/">Home</a></li><li><a href="/courses">GCSE Courses</a></li><li><a href="/package">Tuition Package</a></li><li><a href="/timetable">Lesson Timetable</a></li><li><a href="/careers">Careers</a></li><li><a href="/booking">Book a Free Consultation</a></li></ul></div>
    <div><h4 class="mb-4 font-semibold">Legal</h4><ul class="space-y-2 text-gray-400"><li><a href="/privacy-policy">Privacy Policy</a></li><li><a href="/refund-cancellation-policy">Refund &amp; Cancellation Policy</a></li><li><a href="/faqs">FAQ</a></li></ul></div>
    <div><h4 class="mb-4 font-semibold">Contact</h4><ul class="space-y-2 text-gray-400"><li><a href="mailto:myscholauk@gmail.com">myscholauk@gmail.com</a></li><li><a href="tel:+447344193804">+44 7344 193804</a></li><li><a href="https://wa.me/447344193804" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a></li><li><a href="/booking" class="footer-booking">Book Consultation</a></li></ul></div>
  </div><div class="border-t border-gray-800 pt-8 text-center text-gray-400"><p>Copyright 2026 MySchola. All rights reserved. Tutoring for Years 9-11.</p></div></div></footer>
</main>`

function buildStrategyCallHtml(indexHtml) {
  return indexHtml
    .replace(/<title>[^<]*<\/title>/, "<title>Don't Leave Your Child's GCSE Grades to Chance | MySchola</title>")
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      '<meta name="description" content="Book a free GCSE trial lesson for your Year 9-11 child. See how MySchola teaches Maths, Science and English with clear visual explanations and exam-focused revision." />'
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      '<meta property="og:url" content="https://myschola.uk/book-strategy-call/" />'
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      "<meta property=\"og:title\" content=\"Don't Leave Your Child's GCSE Grades to Chance | MySchola\" />"
    )
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      "<meta property=\"og:description\" content=\"Book a free GCSE trial lesson and see how MySchola teaches GCSE topics with clear visual explanations.\" />"
    )
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      '<link rel="canonical" href="https://myschola.uk/book-strategy-call/" />'
    )
    .replace(
      /<main class="seo-fallback" data-page="home">[\s\S]*?<\/main>/,
      STRATEGY_CALL_FALLBACK
    )
    .replace('    <!-- ROUTE_STRUCTURED_DATA -->', buildBreadcrumbJson({
      path: 'book-strategy-call',
      title: "Don't Leave Your Child's GCSE Grades to Chance | MySchola",
    }))
}

function buildBreadcrumbJson(route) {
  const url = `https://myschola.uk/${route.path}/`
  return `    <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myschola.uk/' },
      { '@type': 'ListItem', position: 2, name: route.title, item: url },
    ],
  })}</script>`
}

const LEGAL_ROUTES = [
  {
    path: 'faqs',
    title: 'FAQs | MySchola GCSE Tuition',
    description: 'Find answers about MySchola GCSE subjects, live Zoom lessons, sets, homework, resources, billing and student support.',
    fallback: '<main class="seo-fallback" data-page="faqs"><h1>MySchola GCSE Tuition FAQs</h1><p>Find answers about our subjects, live lessons, sets, homework, resources, billing and student support.</p><p><a href="/booking">Book a free consultation</a> to discuss your child\'s needs.</p></main>',
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy | MySchola',
    description: 'Read the MySchola privacy policy and learn how personal information is collected, used and protected.',
    fallback: '<main class="seo-fallback" data-page="privacy-policy"><h1>Privacy Policy</h1><p>Read how MySchola collects, uses and protects personal information for parents and students using our GCSE tuition services.</p></main>',
  },
  {
    path: 'refund-cancellation-policy',
    title: 'Refund & Cancellation Policy | MySchola',
    description: 'Read the MySchola refund and cancellation policy for GCSE tuition subscriptions and services.',
    fallback: '<main class="seo-fallback" data-page="refund-cancellation-policy"><h1>Refund & Cancellation Policy</h1><p>Read how refunds, cancellations and subscription changes work for MySchola GCSE tuition services.</p></main>',
  },
]

// GitHub Pages serves a directory's index.html for pretty URLs such as
// /courses. Generate entry documents for every public marketing route so a
// crawler can receive a real 200 response without depending on JavaScript.
const MARKETING_ROUTES = [
  {
    path: 'courses',
    title: 'GCSE Courses | MySchola',
    description: 'Explore MySchola GCSE courses for Year 9, Year 10 and Year 11 students across Maths, English and Science.',
    fallback: '<main class="seo-fallback" data-page="courses"><h1>GCSE Courses for Year 9, Year 10 and Year 11</h1><p>MySchola provides structured online GCSE tuition in Maths, English and Science for students in Years 9, 10 and 11.</p><h2>Clear Teaching and Exam Practice</h2><p>Students learn in focused small groups, complete useful homework and receive feedback that helps them close topic gaps and prepare for AQA, Edexcel and OCR exams.</p><p><a href="/timetable">View the lesson timetable</a> or <a href="/booking">book a free consultation</a> to discuss the right course.</p></main>',
  },
  {
    path: 'timetable',
    title: 'GCSE Tuition Timetable | MySchola',
    description: 'View the MySchola live online GCSE tuition timetable for Maths, English and Science lessons.',
    fallback: '<main class="seo-fallback" data-page="timetable"><h1>GCSE Tuition Timetable</h1><p>View the current MySchola timetable for live online Maths, English and Science lessons.</p><h2>A Reliable Weekly Routine</h2><p>Regular small-group lessons give students a dependable structure for learning, revision, homework and exam preparation.</p><p><a href="/courses">Explore GCSE courses</a> or <a href="/booking">book a free consultation</a> if you would like help choosing a suitable lesson pathway.</p></main>',
  },
  {
    path: 'package',
    title: 'GCSE Tuition Packages | MySchola',
    description: 'Compare MySchola GCSE tuition packages for Year 9, Year 10 and Year 11 students.',
    fallback: '<main class="seo-fallback" data-page="package"><h1>GCSE Tuition Packages</h1><p>Compare MySchola tuition packages for Year 9, Year 10 and Year 11 students studying Maths, English and Science.</p><h2>Structured Support for Better Progress</h2><p>Packages include expert teaching, focused exam preparation, homework, feedback and clear communication for parents.</p><p><a href="/courses">See the GCSE courses</a> or <a href="/booking">book a free consultation</a> to discuss the best option for your child.</p></main>',
  },
  {
    path: 'booking',
    title: 'Book a Free GCSE Consultation | MySchola',
    description: 'Book a free consultation with MySchola to discuss your child\'s GCSE tuition needs and the right lesson pathway.',
    fallback: '<main class="seo-fallback" data-page="booking"><h1>Book a Free GCSE Consultation</h1><p>Talk to MySchola about your child\'s GCSE tuition needs, current subjects, exam board and the support that would help most.</p><h2>Find the Right Lesson Pathway</h2><p>We can discuss Maths, English and Science tuition, weekly lesson options, homework, feedback and how parent progress updates work.</p><p><a href="/courses">Explore GCSE courses</a> or <a href="/timetable">view the timetable</a> before you book.</p></main>',
  },
  {
    path: 'careers',
    title: 'Careers at MySchola | GCSE Tuition',
    description: 'Find teaching opportunities with MySchola and help students build confidence and improve their GCSE grades.',
    fallback: '<main class="seo-fallback" data-page="careers"><h1>Careers at MySchola</h1><p>MySchola is building a focused, supportive GCSE tuition team for students in Years 9 to 11.</p><h2>Teach with MySchola</h2><p>We are interested in experienced tutors who can explain clearly, build confidence and help students make steady progress in Maths, English and Science.</p><p><a href="/english-teacher">View the English teacher opportunity</a> or <a href="/booking">contact us</a> to discuss working with MySchola.</p></main>',
  },
  {
    path: 'english-teacher',
    title: 'English Teacher Vacancy | MySchola',
    description: 'Apply to teach GCSE English with MySchola. Help Year 9 to Year 11 students develop confidence, analysis and exam technique.',
    fallback: '<main class="seo-fallback" data-page="english-teacher"><h1>English Teacher Vacancy</h1><p>MySchola is looking for an experienced English teacher to deliver engaging GCSE lessons for students in Years 9 to 11.</p><h2>Help Students Make Progress</h2><p>The role focuses on clear explanations, exam technique, confidence building and a positive online classroom environment.</p><p><a href="/careers">View careers at MySchola</a> or <a href="/booking">contact us</a> to learn more.</p></main>',
  },
]

function buildStaticRouteHtml(indexHtml, route) {
  const canonicalUrl = `https://myschola.uk/${route.path}/`
  return indexHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${route.description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${route.description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace('    <!-- ROUTE_STRUCTURED_DATA -->', buildBreadcrumbJson(route))
    .replace(/<main class="seo-fallback" data-page="home">[\s\S]*?<\/main>/, route.fallback)
}

function buildNotFoundHtml(indexHtml) {
  return indexHtml
    .replace(/<title>[^<]*<\/title>/, '<title>Page not found | MySchola</title>')
    .replace(/<meta name="description" content="[^"]*" \/>/, '<meta name="description" content="The MySchola page you requested could not be found." />')
    .replace(/<meta property="og:url" content="[^"]*" \/>/, '<meta property="og:url" content="https://myschola.uk/" />')
    .replace(/<meta property="og:title" content="[^"]*" \/>/, '<meta property="og:title" content="Page not found | MySchola" />')
    .replace(/<meta property="og:description" content="[^"]*" \/>/, '<meta property="og:description" content="The MySchola page you requested could not be found." />')
    .replace(/<link rel="canonical" href="[^"]*" \/>/, '<meta name="robots" content="noindex,follow" />')
    .replace(/<main class="seo-fallback" data-page="home">[\s\S]*?<\/main>/, NOT_FOUND_FALLBACK_FULL)
}

function githubPagesSpaPlugin() {
  let outDir = resolve(process.cwd(), 'dist')
  return {
    name: 'github-pages-spa',
    configResolved(config) {
      outDir = resolve(process.cwd(), config.build.outDir || 'dist')
    },
    closeBundle() {
      const indexPath = join(outDir, 'index.html')
      const errPath = join(outDir, '404.html')
      if (existsSync(indexPath)) {
        writeFileSync(errPath, buildNotFoundHtml(readFileSync(indexPath, 'utf8')))
        const strategyCallDir = join(outDir, 'book-strategy-call')
        mkdirSync(strategyCallDir, { recursive: true })
        writeFileSync(
          join(strategyCallDir, 'index.html'),
          buildStrategyCallHtml(readFileSync(indexPath, 'utf8'))
        )
        LEGAL_ROUTES.forEach((route) => {
          const routeDir = join(outDir, route.path)
          mkdirSync(routeDir, { recursive: true })
          writeFileSync(join(routeDir, 'index.html'), buildStaticRouteHtml(readFileSync(indexPath, 'utf8'), route))
        })
        MARKETING_ROUTES.forEach((route) => {
          const routeDir = join(outDir, route.path)
          mkdirSync(routeDir, { recursive: true })
          writeFileSync(join(routeDir, 'index.html'), buildStaticRouteHtml(readFileSync(indexPath, 'utf8'), route))
        })
        console.log('Copied index.html → 404.html for GitHub Pages SPA routing')
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), githubPagesSpaPlugin()],
  build: {
    // Optimize for production
    minify: 'esbuild', // esbuild is faster and included by default
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
