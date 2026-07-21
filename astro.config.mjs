import { defineConfig } from "astro/config";

export default defineConfig({
  srcDir: ".",
  publicDir: "./public",
  outDir: "./dist",
  output: "static",
  vite: {
    css: {
      postcss: "./postcss.config.js",
    },
  },
});
