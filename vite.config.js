import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: 'theme-ui',
      include: '**/*.jsx',
    }),
  ],
});
