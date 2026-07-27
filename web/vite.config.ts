import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  publicDir: false,
  build: {
    outDir: 'build',
    // FiveM CEF is Chromium-based; avoid bleeding-edge JS syntax.
    target: 'chrome91',
    // Keep rgba() instead of #rrggbbaa (unsupported / flaky in older CEF).
    cssTarget: 'chrome61',
    emptyOutDir: true,
    rolldownOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      },
    },
  },
});
