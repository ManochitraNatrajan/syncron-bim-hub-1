import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ← This is crucial for static hosting
  plugins: [react()],
});