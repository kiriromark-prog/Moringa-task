// vite.config.js configures the Vite development server and build tooling.
// This project uses the official React plugin for Vite.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
