# The Old Ship

Website for **The Old Ship**, a traditional English village free house in Cadmore End, Buckinghamshire — an inn on this site since 1637.

A single-page, mobile-first site built with **Astro** + **Tailwind CSS**.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview
```

## Deploy

Hosted on **GitHub Pages** via `.github/workflows/deploy.yml` — every push to `main` builds and deploys automatically. The site is served under the `/the-old-ship/` base path (see `base` in `astro.config.mjs`).

## Notes

- Full-resolution HEIC photo originals live in `photo-originals/` (gitignored, not deployed). The web images used on the site are the converted JPEGs in `src/assets/photos/`, which Astro optimises to responsive WebP.
- Not yet built: the Facebook page-feed embed and JSON-LD/SEO schema.
