import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // project root (where index.html is)
  base: '/portfolio-purvi/', // 👈 important for GitHub Pages
  build: {
    outDir: 'dist'
  }
})
