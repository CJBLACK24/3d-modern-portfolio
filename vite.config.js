import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  // Basic configuration options
  plugins: [react({
    jsxRuntime: 'automatic'
  })],

  optimizeDeps: {
    exclude: [
      '@radix-ui/react-accordion',
      '@remixicon/react',
      'vaul',
      'recharts',
      '@emailjs/browser',
      'lucide-react',
    ],
  },
  // Additional configuration options can be added here
});