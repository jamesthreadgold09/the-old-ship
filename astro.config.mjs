// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Hosted on GitHub Pages under a project subpath, so `base` must match the repo name.
  // `site` is the deployed origin; every absolute SEO URL (canonical, Open Graph,
  // JSON-LD, sitemap, robots) is derived from `site` + `base`, so switching to the
  // pub's real domain is a two-line change here (see the go-live steps in HANDOVER.md):
  //   1. set `site` to the real domain
  //   2. set `base` to '/' (or remove it) for an apex custom domain
  // Current value is a placeholder personal Pages origin; the site is held out of
  // search indexes (noindex) until this is the pub's own domain.
  site: 'https://jamesthreadgold.co.uk',
  base: '/the-old-ship',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
