# The Old Ship: owner's guide

Everything you need to keep the website running, make small changes, and take it
live on your own domain. Written in plain language: you do not need to be a
developer to follow it.

## What the website is

- A single page (one long scroll) at [theoldship](https://github.com/) built to be
  fast and low-maintenance.
- **You do not need to update it often.** Day-to-day news, events, and photos go on
  **Facebook**, and the site points people there. The website is your shop window:
  who you are, where you are, when you are open, and how to reach you.
- It is hosted **free** on GitHub Pages. Every time a change is saved to the code,
  the live site rebuilds and updates itself in about two minutes.

## The one file most changes live in: `src/lib/site.ts`

Open `src/lib/site.ts` and you can change almost everything factual in one place.
Change it here and it updates across the whole site (and the hidden data Google
reads), so nothing can fall out of step.

| To change... | Edit this in `src/lib/site.ts` |
| --- | --- |
| Phone number | `PHONE_DISPLAY`, `PHONE_HREF`, `PHONE_E164` |
| Email | `EMAIL`, `EMAIL_HREF` |
| Address | `ADDRESS_LINE` and `ADDRESS` |
| **Bar opening hours** | `BAR_HOURS` |
| **Kitchen (food) hours** | `KITCHEN_HOURS` |
| Facilities (dog friendly, car park, etc.) | `FACILITIES` |
| Facebook page link | `FACEBOOK_URL` |

### Closing for a day (bank holiday, private party)

The homepage shows a live "Open now / Closed" badge worked out from your bar
hours. For a one-off closure it cannot know about, open `src/lib/site.ts` and set:

```ts
export const SPECIAL_NOTICE = { closed: true, message: 'Closed for a private event' } as const;
```

That forces the badge to show "Closed today". Set `closed` back to `false` when you
reopen.

## Other common edits

- **Wording of a section** (Story, Food, Drinks, Garden, What's On, Visit): the
  files are in `src/components/`, named after each section. The text sits in plain
  English inside them.
- **The beer list** (the little brewery chips): `src/components/Drinks.astro`, near
  the top (`const breweries = [...]`). Keep them genuinely local so the "on our
  doorstep" line stays true.
- **Photos**: the web photos live in `src/assets/photos/`. When you swap one, give
  the new photo a **different filename** and update the matching `import` line in
  the component, rather than overwriting the old file (the build caches images by
  name). Keep alt-text descriptions accurate to what the new photo shows.
- **The social-share image** (the picture shown when the link is shared on
  Facebook/WhatsApp): `public/og-image.jpg`, 1200 x 630 pixels.

## Writing style

Please keep the warm, plain, local-pub voice, and **do not use em dashes** (the long
dash). It is the clearest sign of copy that was not written by a person. Use a comma,
a colon, brackets, or two short sentences instead. The full rule is in
[`CLAUDE.md`](CLAUDE.md).

## Making a change (step by step)

1. Edit the file and save it.
2. Commit and push to the `main` branch (in your code editor, or on github.com by
   editing the file there and choosing "Commit changes").
3. Wait about two minutes. The site rebuilds and updates automatically. You can
   watch progress under the repo's **Actions** tab on GitHub.

To preview changes on your own computer first, see "Running it locally" below.

## Search engines and Google Business Profile

- The site's hidden SEO details (page title, description, the share-image card, and
  a structured "business card" for Google with your address, phone, hours, and the
  1637 founding date) are **all built and ready**.
- **Indexing is deliberately switched off for now.** While the site sits on a
  temporary address it is set to `noindex` so Google does not list it under the
  wrong URL. It gets switched on as part of going live on your real domain (below).
- Your **Google Business Profile** is the single biggest thing for being found
  locally, and it does more for a village pub than the website itself. You can fully
  set it up **now**, except for the website link:
  - Primary category **Pub**; add **Restaurant** / **British restaurant** as extras.
  - Set the **bar** opening hours, and add a note that food is served every day
    12 to 2:30pm.
  - Add photos and link your Facebook page.
  - Make sure the name, address, and phone **match the website exactly**
    (The Old Ship / Marlow Road, Cadmore End / 01494 883799).
  - Add the **website link only once the real domain is live** (see below).

## Going live on your own domain

When you buy the domain (for example `theoldshipcadmore.co.uk`), here is the exact
checklist. The site is built so this is a small, safe change.

1. **Point the code at the new domain.** In `astro.config.mjs`:
   - set `site:` to your domain, e.g. `site: 'https://theoldshipcadmore.co.uk'`
   - set `base: '/'` (or delete the `base` line) because the site now lives at the
     top of its own domain, not in a sub-folder.
2. **Add a `CNAME` file.** Create `public/CNAME` containing just the bare domain on
   one line (e.g. `theoldshipcadmore.co.uk`). Without this, GitHub can drop the
   custom domain on the next deploy.
3. **Set up DNS at your domain registrar** to point at GitHub Pages (GitHub's guide:
   "Managing a custom domain for your GitHub Pages site"). Apex domains use A/ALIAS
   records to GitHub's IPs; a `www` subdomain uses a CNAME record.
4. **Turn indexing on.** In `.github/workflows/deploy.yml`, add an environment
   variable to the build so search engines are allowed in:
   ```yaml
   - name: Build Astro site
     uses: withastro/action@v3
     env:
       PUBLIC_ALLOW_INDEX: 'true'
   ```
   This removes the `noindex`, switches `robots.txt` to "allow", and turns on the
   sitemap reference.
5. **In GitHub repo Settings > Pages**, set the custom domain and tick **Enforce
   HTTPS**.
6. **Push the changes** and wait for the deploy. Then open the live site and check
   it loads on the new domain over `https://`.
7. **Submit to Google.** In Google Search Console, add the new domain as a property
   and submit `https://yourdomain/sitemap-index.xml`.
8. **Update Google Business Profile:** add the live website URL to the Website field.
9. **Optional but recommended:** put the domain behind Cloudflare's free tier for
   long-term browser caching and basic security headers (GitHub Pages cannot set
   these itself).

## Running it locally (optional, for previewing)

Node.js 20.3 or newer is required (see `.nvmrc`).

```bash
npm install       # once, to set up
npm run dev       # preview at http://localhost:4321/the-old-ship/
npm run build     # produce the final site into ./dist
```

## Good to know

- All the photography and the favicon are **your own**; there is nothing licensed
  from a third party to worry about.
- The map is a keyless Google embed, so there are **no API keys or passwords** in the
  project to protect or renew.
- Full-resolution original photos are kept in `photo-originals/` on the maintainer's
  machine; they are not part of the published site.

## Who to call

Maintainer: **[name]**, **[phone/email]**. _(Fill this in before handover so the
owner knows who to contact if something looks wrong.)_
