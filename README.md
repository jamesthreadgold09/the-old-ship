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

Live at **https://theoldship1637.co.uk**, hosted on **GitHub Pages** via `.github/workflows/deploy.yml`. Every push to `main` builds and deploys automatically. The site is served at the domain root, so `base` is left at its default (`/`); the custom domain is pinned by `public/CNAME`, which must not be deleted. DNS is at IONOS and the records are documented in [HANDOVER.md](HANDOVER.md).

For a non-developer's guide (making edits, the domain and DNS reference, and the Google Business Profile checklist), see **[HANDOVER.md](HANDOVER.md)**.

## Notes

- Full-resolution HEIC photo originals live in `photo-originals/` (gitignored, not deployed). The web images used on the site are the converted JPEGs in `src/assets/photos/`, which Astro optimises to responsive WebP.
- **Facebook is a deliberate link-out, not an embed.** The page-feed embed was intentionally dropped (see `WhatsOn.astro`) so the site works for every visitor and sets no cookies. Please don't reintroduce the embed.
- **SEO is built:** Open Graph/Twitter cards, JSON-LD `BarOrPub`+`Restaurant` schema, canonical, sitemap and robots are all in place, with every absolute URL derived from `site` in `astro.config.mjs`. Indexing is enabled in production by `PUBLIC_ALLOW_INDEX: 'true'` on the build step in `deploy.yml`; local builds omit it and so stay `noindex`, which is intended.
- Shared facts (name, contact, address, hours, facilities) are single-sourced in `src/lib/site.ts` and feed both the visible copy and the JSON-LD schema.
