import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import md from 'vite-plugin-md';

export default defineConfig({
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
