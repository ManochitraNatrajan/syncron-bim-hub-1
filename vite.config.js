import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/syncron-bim-hub-1/', // <-- your repository name here
  plugins: [react()],
})
