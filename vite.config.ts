import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on mode (development, production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Use import.meta.env in frontend code
      'import.meta.env.VITE_API_KEY': JSON.stringify(env.VITE_API_KEY),
    },
  };
});
