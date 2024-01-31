import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    esbuild: {
      pure: mode === 'production' ? ['console.log'] : [],
    },
    // logLevel: mode === 'production' ? 'silent' : 'warn',
    // clearScreen: mode === 'production',
    plugins: [react()],
    build: {
      assetsInlineLimit: 1024, // Ресурсы меньшего размера будут встроены как base64
      sourcemap: false,
    },
    define: {
      __APP_VERSION__: JSON.stringify(version),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@Commn': path.resolve(__dirname, './commons'),
      },
    }
  }
})
