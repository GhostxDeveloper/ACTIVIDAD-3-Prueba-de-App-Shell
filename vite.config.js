import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

/**
 * Configuración de Vite con soporte para PWA
 * Utiliza vite-plugin-pwa para generar el Service Worker y manifest.json
 */
export default defineConfig({
  plugins: [
    react(),
    // Configuración del plugin PWA
    VitePWA({
      // Actualización automática del Service Worker
      registerType: 'autoUpdate',

      // Assets adicionales a incluir
      includeAssets: ['favicon.ico', 'icons/*.png'],

      // Configuración del manifest.json
      manifest: {
        name: 'Mi PWA - App Shell',
        short_name: 'PWA Shell',
        description: 'Aplicación Web Progresiva con App Shell',
        theme_color: '#2196F3',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        // Iconos de la PWA en diferentes tamaños
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },

      // Configuración de Workbox para el Service Worker
      workbox: {
        // Archivos a pre-cachear (App Shell)
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],

        // Estrategias de caché para APIs
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.*/i,
            handler: 'NetworkFirst', // Intenta red primero, luego caché
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 // 24 horas
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
})
