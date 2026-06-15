import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'

/** Copies index.html → 404.html so GitHub Pages serves the SPA for /payment-success, /login, etc. */
const STRATEGY_CALL_FALLBACK = `
      <main class="seo-fallback" data-page="strategy-call">
        <h1>Free GCSE Strategy Call for Parents of Year 9-11 Students</h1>
        <p>Book a free GCSE strategy call with MySchola to discuss your child's current grades, learning gaps and exam goals.</p>
        <h2>GCSE Support for AQA, Edexcel and OCR</h2>
        <p>Our online tuition supports UK students studying Maths, English and Science across AQA, Edexcel and OCR exam boards.</p>
        <h2>Plan the Right Next Steps</h2>
        <p>During the call, we identify the support your child needs and explain how MySchola's structured group lessons can help.</p>
      </main>`

function buildStrategyCallHtml(indexHtml) {
  return indexHtml
    .replace(/<title>[^<]*<\/title>/, '<title>Free GCSE Strategy Call for Parents | MySchola UK</title>')
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      '<meta name="description" content="Book a free GCSE strategy call for your Year 9-11 child. Discuss grades, learning gaps and AQA, Edexcel or OCR exam support with MySchola." />'
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      '<meta property="og:url" content="https://myschola.uk/book-strategy-call" />'
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      '<meta property="og:title" content="Free GCSE Strategy Call for Parents | MySchola UK" />'
    )
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      "<meta property=\"og:description\" content=\"Book a free GCSE strategy call to discuss your child's grades, learning gaps and exam support.\" />"
    )
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      '<link rel="canonical" href="https://myschola.uk/book-strategy-call" />'
    )
    .replace(
      /<main class="seo-fallback" data-page="home">[\s\S]*?<\/main>/,
      STRATEGY_CALL_FALLBACK
    )
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
        copyFileSync(indexPath, errPath)
        const strategyCallDir = join(outDir, 'book-strategy-call')
        mkdirSync(strategyCallDir, { recursive: true })
        writeFileSync(
          join(strategyCallDir, 'index.html'),
          buildStrategyCallHtml(readFileSync(indexPath, 'utf8'))
        )
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
