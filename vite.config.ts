import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
// cssInjectedByJsPlugin is used to inject the resulting CSS into the output module
// because when using `build.cssCodeSplit: true` the styles are only imported into the .umd.cjs file

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  return {
    esbuild: {
      pure: isProd ? ['console.log'] : [],
    },
    // logLevel: mode === 'production' ? 'silent' : 'warn',
    // clearScreen: mode === 'production',
    plugins: [ react(), cssInjectedByJsPlugin() ],
    build: {
      assetsDir: '', // Place all assets in root
      assetsInlineLimit: 1024, // Smaller resources will be embedded as base64
      sourcemap: false,
      outDir: './build',
      // emptyOutDir: false, // avoid vite build deleting content of outDir
      lib: {
        entry: resolve(__dirname, './src/index.ts'),
        name: 'Teleapstyle',
        fileName: 'teleapstyle'
      },
      rollupOptions: {
        external: ['react', 'vanicom'],
        output: {
          globals: { react: 'React', vanicom: 'Vanicom' }
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
