import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Sitio de usuario (ccutsb.github.io) → se sirve desde la raíz del dominio
export default defineConfig({
  plugins: [react()],
  base: "/",
});
