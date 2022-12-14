import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      emitCss: false,
      compilerOptions: {
        customElement: false,
      },
    }),
    visualizer({
      filename: "./dist/stats.html",
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
    rollupOptions: {
      output: {
        assetFileNames: "canvas-grid.[ext]",
      },
    },
  },
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
      $assets: path.resolve("./src/assets"),
    },
  },
  define: {
    __APP_VERSION__:
      JSON.stringify(process.env.npm_package_version) || "unknown",
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
});
