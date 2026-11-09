# The Old Ship: owner's guide

Everything you need to keep the website running, make small changes, and take it
live on your own domain. Written in plain language: you do not need to be a
developer to follow it.

## What the website is

- A single page (one long scroll) at
  [theoldship1637.co.uk](https://theoldship1637.co.uk) built to be fast and
  low-maintenance.
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

### Changing the food photos

The Food section shows four photos of plated dishes (fish and chips, ploughman's,
sandwich, Sunday roast). They all live in
`src/components/Food.astro`.

**To swap one for a better photo:**

1. Put the new photo in `src/assets/photos/` with a **new** name, for example
   `food-ploughmans-2.jpg`. Give it a different filename rather than overwriting the
   old one (the build caches images by name).
2. Near the top of `src/components/Food.astro`, point that import at the new file:

   ```ts
   import ploughmans from '../assets/photos/food-ploughmans-2.jpg';
   ```

3. Update the matching `alt` text a little further down so it describes what is
   actually in the new photo. Alt text is read aloud to blind visitors and used by
   Google, so keep it accurate.

**To add a fifth or sixth dish photo:** add an import as above, then add another entry
to the `foodPhotos` list:

```ts
{ img: pie, alt: 'A steak and ale pie with mash and greens', objectPos: 'object-center' },
```

**If a photo ends up badly cropped**, that is what `objectPos` is for. The tiles are a
wide rectangle, so a tall photo has to lose its top and bottom. `object-center` takes
the middle; `object-[center_62%]` slides the visible window down (higher percentage =
more of the bottom of the photo, less of the top). Nudge it in steps of about 5% until
the whole plate is in shot.

- **The example menu board photo** in the same section is the single `boardExample`
  import at the top of `Food.astro`. Swap it the same way, and update the `alt` text
  to match the dishes on the new board.
- **The list of dishes** ("Usually on the board") is `const dishes` in `Food.astro`.
  Deliberately **no prices**: the blackboard in the pub is the only place those are kept up to date,
  so the website can never contradict it.
- **The three cards under the intro** (kitchen hours, Friday fish and chips, the
  monthly food night) take their times from `src/lib/site.ts` (`KITCHEN_HOURS`,
  `FRIDAY_SUPPER`, `MONTHLY_NIGHT`), so the footer and Visit Us stay in step. The
  monthly night deliberately has no dates on the website: announce each one on
  Facebook, which the card links to.
- The full-size originals of the food photos are kept in `photo-originals/food/`. That
  folder stays on your computer and is not published with the site.

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
- **Indexing is switched on**, now that the site is on its own domain. Google is
  allowed to list it. (Do not expect it to appear instantly: a brand new site
  usually takes a few days to a few weeks to settle into results.)
- Your **Google Business Profile** is the single biggest thing for being found
  locally, and it does more for a village pub than the website itself. You can fully
  set it up **now**, except for the website link:
  - Primary category **Pub**; add **Restaurant** / **British restaurant** as extras.
  - Set the **bar** opening hours, and add a note that food is served every day
    12 to 2:30pm.
  - Add photos and link your Facebook page.
  - Make sure the name, address, and phone **match the website exactly**
    (The Old Ship / Marlow Road, Cadmore End / 01494 883799).
  - Add the website link: **https://theoldship1637.co.uk**.

## Your domain and hosting

The site is live at **https://theoldship1637.co.uk**. The `www.` version works too
and redirects to it.

- The **domain** is registered with **IONOS** (ionos.co.uk). That is the only part
  with a bill attached: keep the renewal paid, or the site goes offline. Make sure
  the renewal email address is one you actually read.
- The **hosting** is GitHub Pages, which is free, and the **HTTPS certificate** is
  issued and renewed automatically at no cost.

### The DNS settings (for reference)

You should not need to touch these again. They are written down here so that
whoever holds the domain in future can rebuild them if something is changed by
accident. In the IONOS control panel: **Domains & SSL** > click the domain > **DNS**.

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `jamesthreadgold09.github.io` |

Notes for anyone setting these up again:

- The four A records are GitHub's own addresses (they publish them under "Managing a
  custom domain for your GitHub Pages site"). The AAAA records are the same thing for
  newer IPv6 connections, and are optional: the site works on the A records alone.
- A freshly registered IONOS domain arrives with one A record and one AAAA record
  already pointing at an IONOS holding page (an address starting `217.160.`). Edit
  those two to the first GitHub address of each type, then add the rest as new
  records. Use the **DNS** record table directly rather than the **Adjust
  Destination** wizard, which only accepts a single address.
- **Leave the `MX` records and the `TXT` record beginning `v=spf1` alone.** Those are
  email, and they are separate from the website: changing the A records does not
  affect email, but deleting those would stop mail on the domain working.
- If a record you saved reverts to the old `217.160.` address by itself, the domain is
  still attached to an IONOS destination. Remove that connection under **Adjust
  Destination**, then redo the DNS edits.
- Records have a one hour TTL, so give any change up to an hour to take effect
  everywhere before assuming it has not worked.
- The custom domain is set in **GitHub repo Settings > Pages**, under **Custom
  domain**, with **Enforce HTTPS** ticked. That setting is the one that actually
  matters: because this site publishes through a GitHub Actions workflow rather than
  from a branch, the `public/CNAME` file alone does **not** configure it. If the
  domain ever shows "There isn't a GitHub Pages site here", that settings box is the
  first place to look.
- The bare domain is also kept in `public/CNAME` in this project, so please do not
  delete it. It keeps the domain recorded alongside the code.

### Still worth doing

1. **Google Search Console** (free): add `https://theoldship1637.co.uk` as a property
   and submit `https://theoldship1637.co.uk/sitemap-index.xml`. This tells Google the
   site exists rather than waiting to be found, and shows you what people search for.
2. **Google Business Profile:** put `https://theoldship1637.co.uk` in the Website
   field. This is the single biggest thing for being found locally.
3. **Optional:** put the domain behind Cloudflare's free tier for faster repeat
   visits and basic security headers (GitHub Pages cannot set these itself).

## Running it locally (optional, for previewing)

Node.js 20.3 or newer is required (see `.nvmrc`).

```bash
npm install       # once, to set up
npm run dev       # preview at http://localhost:4321/
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
