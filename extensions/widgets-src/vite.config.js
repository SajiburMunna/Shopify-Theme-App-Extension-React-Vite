import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import nodePolyfills from "vite-plugin-node-stdlib-browser";

export default defineConfig({
  plugins: [nodePolyfills(), react()],
  define: {
    global: "globalThis",
  },
  exclude: ['**/*.ts', '**/*.tsx'],
  build: {
    assetsDir: "",
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      input: "./src/index.jsx",
      output: {
        inlineDynamicImports: true,
        dir: "../widgets/assets",
        entryFileNames: "index.js",
        assetFileNames: "index.[ext]",
      },
    },
  },
});
