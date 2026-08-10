// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Live on the pub's own domain (GitHub Pages + the custom domain in public/CNAME),
  // served at the root, so `base` stays at its default '/' and is not set here.
  // Every absolute SEO URL (canonical, Open Graph, JSON-LD, sitemap, robots) is
  // derived from `site`, so this is the single place the public origin is defined.
  site: 'https://theoldship1637.co.uk',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
