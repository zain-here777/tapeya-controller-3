import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Shared vendor chunks stay stable as more themes are added.
    // Theme/controller code is split automatically via dynamic import() + React.lazy.
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          router: ["react-router", "react-router-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
});
