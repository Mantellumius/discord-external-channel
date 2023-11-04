import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import svgr from 'vite-plugin-svgr';

const generateScopedNameDev = (name, filename) => `${filename.split('/').at(-1).split('.')[0]}-${name}`;

export default defineConfig(async ({ mode }) => ({
  plugins: [
    react(),
    svgr()
  ],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
    }
  },
  css: {
    modules: {
      generateScopedName: mode === 'development' ? generateScopedNameDev : '[hash:base64:12]',
    }
  },
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
  },
  envPrefix: ["VITE_", "TAURI_"],
}));
