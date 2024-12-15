// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://suggestqueries.google.com', // Base URL of the API
        changeOrigin: true, // Adjust the request origin to match the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' from the request path
      },
    },
  },
});
