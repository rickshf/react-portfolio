import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use relative paths so the site works when opened from the file system
  base: './',
  plugins: [
    react(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.md'],
  },
});
