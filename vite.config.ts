import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const VITE_SERVER_PORT: number = parseInt(
  process.env.VITE_SERVER_PORT || "5173",
  10
);
const VITE_SERVER_HOST = process.env.VITE_SERVER_HOST || "localhost";

const VITE_CLIENT_PORT: number = parseInt(
  process.env.VITE_CLIENT_PORT || "3000",
  10
);
const VITE_CLIENT_HOST = process.env.VITE_CLIENT_HOST || "localhost";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  define: {
    "process.env": {
      IS_PREACT: false,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    proxy: {
      "/api": {
        target: `http://${VITE_SERVER_HOST}:${VITE_SERVER_PORT}`,
        changeOrigin: true,
        secure: false,
      },
    },

    port: VITE_CLIENT_PORT,
    host: VITE_CLIENT_HOST,
  },
});
