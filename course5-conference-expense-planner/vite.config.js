import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/course5-conference-expense-planner/',
  plugins: [react()],
})
