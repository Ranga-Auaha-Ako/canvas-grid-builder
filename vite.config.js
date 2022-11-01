import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      experimental: {
        inspector: true,
      },
      emitCss: false,
    }),
  ],
  server: {
    origin: "http://localhost:5173",
  },
  build: {
    target: "es2018",
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "CanvasGrid",
      // the proper extensions will be added
      fileName: "canvas-grid",
    },
  },
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
});
