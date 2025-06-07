import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import md from 'vite-plugin-md';

export default defineConfig({
  // Use relative paths so the site works when opened from the file system
  base: './',
  plugins: [
    react(),
    md({
      markdownItOptions: {
        html: true,
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.md'],
  },
});
