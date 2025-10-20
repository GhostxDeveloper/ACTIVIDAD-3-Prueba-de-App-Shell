import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

/**
 * Configuración de Vite con soporte para PWA
 * Utiliza vite-plugin-pwa para generar el Service Worker
 * El manifest.json está en /public/manifest.json
 */
export default defineConfig({
  plugins: [
    react(),
    // Configuración del plugin PWA
    VitePWA({
      // Actualización automática del Service Worker
      registerType: 'autoUpdate',

      // Usar el manifest.json existente en /public
      manifest: false,

      // Assets adicionales a incluir
      includeAssets: ['favicon.ico', 'icons/*.png', 'manifest.json'],

      // Configuración de Workbox para el Service Worker
      workbox: {
        // Archivos a pre-cachear (App Shell)
        // Cachea todos los recursos estáticos de la aplicación
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}']
      }
    })
  ],
})
