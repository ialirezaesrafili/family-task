import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  css: {
    postcss: true // Let it use postcss.config.js automatically
  },
  
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  
  server: {
    host: true,
    port: 5173,
    open: true,
  }
});