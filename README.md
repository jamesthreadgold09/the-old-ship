# The Old Ship

Website for **The Old Ship**, a traditional English village free house in Cadmore End, Buckinghamshire. An inn has stood on this site since 1637.

A single-page, mobile-first site built with **Astro** + **Tailwind CSS**.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview
```

## Deploy

Hosted on **GitHub Pages** via `.github/workflows/deploy.yml`. Every push to `main` builds and deploys automatically. The site is served under the `/the-old-ship/` base path (see `base` in `astro.config.mjs`).

For a non-developer's guide (making edits, the domain go-live steps, and the Google Business Profile checklist), see **[HANDOVER.md](HANDOVER.md)**.

## Notes

- Full-resolution HEIC photo originals live in `photo-originals/` (gitignored, not deployed). The web images used on the site are the converted JPEGs in `src/assets/photos/`, which Astro optimises to responsive WebP.
- **Facebook is a deliberate link-out, not an embed.** The page-feed embed was intentionally dropped (see `WhatsOn.astro`) so the site works for every visitor and sets no cookies. Please don't reintroduce the embed.
- **SEO is built:** Open Graph/Twitter cards, JSON-LD `BarOrPub`+`Restaurant` schema, canonical, sitemap and robots are all in place, with every absolute URL derived from `site` in `astro.config.mjs`. Indexing is held with `noindex` until the site is on its real domain (build with `PUBLIC_ALLOW_INDEX=true` to allow it). See the go-live steps in [HANDOVER.md](HANDOVER.md).
- Shared facts (name, contact, address, hours, facilities) are single-sourced in `src/lib/site.ts` and feed both the visible copy and the JSON-LD schema.
