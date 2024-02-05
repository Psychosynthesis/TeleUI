import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteCSSExportPlugin from 'vite-plugin-css-export';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  return {
    esbuild: {
      pure: isProd ? ['console.log'] : [],
    },
    // logLevel: mode === 'production' ? 'silent' : 'warn',
    // clearScreen: mode === 'production',
    plugins: [ react(), ViteCSSExportPlugin() ],
    build: {
      assetsDir: '', // Place all assets in root
      assetsInlineLimit: 1024, // Smaller resources will be embedded as base64
      sourcemap: false,
      outDir: './build',
      emptyOutDir: false, // avoid vite build deleting content of outDir
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
