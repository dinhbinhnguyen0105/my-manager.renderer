import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from '@svgr/rollup';
import path from "path";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "@": path.resolve(__dirname),
    },
  },
  base: "./", // Để đảm bảo file index.html tìm đúng đường dẫn sau khi build
  build: {
    outDir: "dist",
  }
})
