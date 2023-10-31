import { resolve } from "path";
import { crx } from '@crxjs/vite-plugin'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import manifest from './manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), crx({ manifest }),],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  server: {
    watch: {
      usePolling: true,
    }
  }
})
