import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/calculator-using-React/', // Base URL for your application when deployed
  plugins: [react()],
});
