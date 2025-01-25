import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

import icon from "astro-icon";

export default defineConfig({
  site: "https://AMRoofing.com",

  image: {
    domains: ["images.unsplash.com"],
  },

  prefetch: true,

  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: "en", // The `defaultLocale` value must present in `locales` keys
      },
    },
  }), starlight({
    title: "ScrewFast Docs",
    defaultLocale: "root",
    // https://github.com/withastro/starlight/blob/main/packages/starlight/CHANGELOG.md
    // If no Astro and Starlight i18n configurations are provided, the built-in default locale is used in Starlight and a matching Astro i18n configuration is generated/used.
    // If only a Starlight i18n configuration is provided, an equivalent Astro i18n configuration is generated/used.
    // If only an Astro i18n configuration is provided, the Starlight i18n configuration is updated to match it.
    // If both an Astro and Starlight i18n configurations are provided, an error is thrown.
    locales: {
      root: {
        label: "English",
        lang: "en",
      },
    },
    sidebar: [
      {
        label: "Quick Start Guides",
        autogenerate: { directory: "guides" },
      },
    ],
    disable404Route: true,
    customCss: ["./src/assets/styles/starlight.css"],
    favicon: "src/images/logo.png",
    components: {
      SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
      Head: "./src/components/ui/starlight/Head.astro",
      MobileMenuFooter:
        "./src/components/ui/starlight/MobileMenuFooter.astro",
      ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
    },
    head: [
      {
        tag: "meta",
        attrs: {
          property: "og:image",
          content: "https://AMRoofing.com" + "/social.webp",
        },
      },
      {
        tag: "meta",
        attrs: {
          property: "twitter:image",
          content: "https://AMRoofing.com" + "/social.webp",
        },
      },
    ],
  }), compressor({
    gzip: false,
    brotli: true,
  }), mdx(), icon()],

  experimental: {
    clientPrerender: true,
  },

  adapter: netlify(),
});