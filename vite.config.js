// File: vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Simula __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "/lfr-demolition/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
