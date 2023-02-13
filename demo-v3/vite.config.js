import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import buildDemoFiles from './build/buildDemoFiles.js'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx()
  ],
  define: {
    demoFiles: buildDemoFiles()
  },
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'a-virtual-table': path.resolve('../src/a-virtual-table.vue')
    }
  }
})
