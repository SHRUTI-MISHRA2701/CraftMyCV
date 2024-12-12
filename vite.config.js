import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify output directory
    rollupOptions: {
      output: {
        // Manual chunking for better code-splitting
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 500, // Adjust to suppress warnings for large chunks
  },
  server: {
    port: 3000, // Local dev server port
    open: true, // Automatically opens browser on server start
  },
});
