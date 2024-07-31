import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from 'tailwindcss';
export default defineConfig({
  base: '',
  plugins: [react(), viteTsconfigPaths(), eslint()],
  server: {
    open: true,
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
