import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      },
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: "Codex",
        short_name: "Codex",
        description: "Journal de vie RPG — Rites · Arcs narratifs · Archétypes",
        start_url: "/",
        display: "standalone",
        background_color: "#f5ede0",
        theme_color: "#1c1408",
        orientation: "portrait",
        lang: "fr",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js']
  }
})
