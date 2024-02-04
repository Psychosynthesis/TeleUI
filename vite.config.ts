import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  return {
    base: '',
    esbuild: {
      pure: isProd ? ['console.log'] : [],
    },
    // logLevel: mode === 'production' ? 'silent' : 'warn',
    // clearScreen: mode === 'production',
    plugins: [ react() ],
    build: {
      assetsDir: '', // Place all assets in root
      assetsInlineLimit: 1024, // Smaller resources will be embedded as base64
      sourcemap: false,
      lib: {
        entry: resolve(__dirname, './src/index.ts'),
        name: 'Telegram apstyle',
        fileName: 'teleapstyle'
      },
      rollupOptions: {
        external: ['clsx', 'react', 'vanicom'],
        output: {
          globals: { clsx: 'clsx', react: 'React', vanicom: 'vanicom' }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@Commn': path.resolve(__dirname, './src/commons'),
      },
    }
  }
})
