import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  //生产环境公共路径
  base: './',
  // 别名配置
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts'],
  },
  // 代理配置
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    strictPort: false,
    https: false,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    vue(),
    // api自动引入
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue'],
    }),
  ],
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
