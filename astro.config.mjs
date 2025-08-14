// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react"; // React 小島
import mdx from "@astrojs/mdx"; // MDX 文章
import sitemap from "@astrojs/sitemap"; // 自動 sitemap.xml
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  site: "https://wayhong0928.github.io",
  integrations: [react(), mdx(), sitemap()],
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
  },
  vite: {
    plugins: [
      tailwindcss({
        config: {
          content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
          darkMode: "class",
          theme: {
            extend: {},
          },
          plugins: [],
        },
      }),
    ],
  },
});
