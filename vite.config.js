import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // project root (where index.html is)
  base: process.env.VERCEL ? '/' : '/portfolio-purvi/', // 👈 dynamic base
  build: {
    outDir: 'dist'
  }
})
