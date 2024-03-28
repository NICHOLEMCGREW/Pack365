import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module'; // Import createRequire function

const require = createRequire(import.meta.url); // Create require function

export default defineConfig({
  plugins: [react()],
  define: {
    // Conditionally include process.env only if running in Node.js
    'process.env': require('process').env
  }
});
