import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { join, resolve } from 'path'

/** Copies index.html → 404.html so GitHub Pages serves the SPA for /payment-success, /login, etc. */
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
