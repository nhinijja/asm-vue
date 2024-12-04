import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8081, // Sử dụng cổng thay thế
 
  // Chuyển port từ 5173 sang 8080
  },
});