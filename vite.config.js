import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        courses: resolve(__dirname, 'courses.html'),
        'free-resources': resolve(__dirname, 'free-resources.html'),
        'test-series': resolve(__dirname, 'test-series.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        login: resolve(__dirname, 'login.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
