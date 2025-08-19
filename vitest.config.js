import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // use describe/it/expect without imports
    environment: 'jsdom', // browser-like DOM
    setupFiles: './vitest.setup.js',
  },
});
