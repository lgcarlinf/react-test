import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react()
  ],
  build:{
    rollupOptions:{
      output:{
        manualChunks:{
          'react': ['react', 'react-dom'],
          'tanstack-router': ['@tanstack/react-router'],
          'axios': ['axios'],
          'redux': ['react-redux','@reduxjs/toolkit'],
        },
      },
    }
  },
  base: "./",
  resolve: {
    alias: {
    "@": path.resolve(__dirname, "./src"),
  },
},
})
