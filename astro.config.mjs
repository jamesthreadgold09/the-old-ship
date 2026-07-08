// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Hosted on GitHub Pages under a project subpath, so `base` must match the repo name.
  // `site` is set to the Pages origin (filled in with the real username at deploy time).
  // When a custom domain is bought later, point it at Pages and drop `base`.
  site: 'https://jamesthreadgold09.github.io',
  base: '/the-old-ship',
  vite: {
    plugins: [tailwindcss()],
  },
});
