import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/green-app-test-assigment/',
  plugins: [react()],
  server: {
    cors: true,
  }
})
