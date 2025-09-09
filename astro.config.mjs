import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";

// import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  // adapter: vercel(),
  site: config.site.base_url,
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  integrations: [
    react(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    AutoImport({
      imports: []
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*']
      }
    }),
    partytown({
      config: {
        debug: false,
        forward: ['dataLayer.push']
      }
    })
    // solidJs()
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [remarkCollapse, { test: "Table of contents" }]
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  }
});
