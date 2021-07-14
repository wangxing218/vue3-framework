import path from 'path'
import { defineConfig } from 'vite'
import { vite2Ext } from 'apite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  base: './',
  root: 'src/entry',
  publicDir: resolve('public'),
  build: {
    assetsDir: 'static',
    outDir: resolve('dist'),
    emptyOutDir: true,
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue';"
  },
  server: {
    port: 9100,
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      '@image': resolve('src/asset/image'),
      '@css': resolve('src/asset/css'),
    }
  },
  plugins: [
    vueJsx(),
    vue(),
    // mock
    vite2Ext({
      prefix: '/api',
      dir: 'mock'
    }),
    // styleImport
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: name => `vant/es/${name}/style/index`,
        },
      ]
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@css/var";`
      }
    }
  },
})


function resolve(...dir) {
  return path.resolve(__dirname, ...dir)
}