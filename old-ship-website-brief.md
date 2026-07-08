# The Old Ship — Website Build Brief

A brief for building the website in VS Code with Claude Code. Hand this file to Claude Code as the project spec, then work through the build sequence in Section 10. The copy in Section 11 is ready to use — edit to taste.

---

## 1. The business

- **Name:** The Old Ship
- **Type:** Traditional English village **free house** (independent, not brewery-tied — a genuine selling point)
- **Established:** an inn on this site **since 1637** — beer has been served here for nearly four centuries. This is the hero fact; lead with it.
- **Location:** Marlow Road, Cadmore End, High Wycombe, Buckinghamshire, HP14 3PN
- **Phone:** +44 1494 883799 (bookings by phone)
- **Email:** oldship1637@gmail.com
- **Facebook:** https://www.facebook.com/profile.php?id=61570735266273
- **Status:** recently reopened after a long closure — a much-loved village local brought back to life.

## 2. Goal & tone

A modern, slick, fast website for a traditional English pub. Warm and characterful, not corporate. Priorities, in order:

1. **Where you are, when you're open, how to reach you** (the #1 reason anyone loads a pub site, usually on a phone).
2. Convey the **feel** of the place through strong photography.
3. Explain the **food philosophy** (daily-changing, fresh) without committing to a fixed menu.
4. Stay **alive with minimal upkeep** via the Facebook feed.

Keep it genuinely simple — a single long-scroll page with anchored sections. No CMS, no login.

## 3. Design direction

- **Mood:** heritage-meets-modern. Clean layout, generous whitespace, big photography, subtle warmth. The 1637 heritage gives you licence to lean into age and character.
- **Palette:** deep heritage tones (bottle green or oxblood), warm cream background, charcoal text, one restrained brass/gold accent.
- **Type:** a characterful serif for headings paired with a clean sans-serif for body. Avoid anything that reads as generic startup.
- **Mobile-first:** most visits are on a phone, often outside deciding whether to come in. Design for that first.
- **Performance:** fast, optimised images.

## 4. Site structure (single-page scroll with sticky nav)

Sticky top nav with anchor links + a persistent "Call to Book" / "Find Us" button.

1. **Hero** — full-bleed photo, pub name, "since 1637" tagline, hours/open snapshot, buttons (Directions, Call to book).
2. **Our Story** — 1637 heritage + free-house + revival narrative.
3. **Food** — the daily-board philosophy, sample gallery, Sunday roast, **food-times-are-lunch-only** note.
4. **Drinks** — free house, rotating local ales, wine. Kept light.
5. **What's On** — embedded Facebook feed.
6. **Visit Us** — address, map, opening hours (bar + kitchen separately), contact, facilities.
7. **Footer** — socials, contact, address, copyright.

## 5. The menu approach

Menu changes daily, chalked up each morning, and will **not** be updated online regularly. So:

- **Sell the constraint as a feature** — "no fixed menu" framed as fresh/seasonal (copy in Section 11).
- **Anchor with what's reliable:** freshly made sandwiches (usually always on), Friday fish & chips, Sunday roast.
- **Sample gallery, clearly labelled** as illustrative, not today's board — so it never looks out of date.
- **Make food times unmissable:** food is served **every day, 12–2:30pm only**. The bar is open evenings but the kitchen isn't — state this clearly so nobody turns up at 7pm expecting dinner.
- **Sunday roast:** on every Sunday; booking not needed but recommended.
- **CTA for specifics:** "call us or pop in" — no promise of daily online updates.

## 6. Facebook integration

You control the page and won't update the site often — let Facebook do the work.

- **Primary:** embed the **Facebook Page Plugin** in "What's On" so your posts appear on the site automatically. Zero upkeep.
- **Page URL for the embed's `data-href`:** `https://www.facebook.com/profile.php?id=61570735266273`
- **Optional tidy-up:** setting a custom username on the page (Facebook page settings) gives a cleaner URL like `facebook.com/TheOldShipCadmore` — nicer to share, not required for the embed.
- **Requirements:** page must be public; the plugin loads Facebook's SDK and sets cookies (add a short cookie note).
- **Fallback if it's slow/heavy:** prominent "Follow us on Facebook" link + 2–3 hand-picked featured posts baked in.
- Add the Facebook link (and Instagram if you add one) in header and footer.
- Set **Open Graph tags** so the site looks good when you share it.

## 7. Photography plan

- **Pub photos:** hero, Our Story, ambience throughout, Visit Us. Pick the strongest for the hero.
- **Menu-example photos:** the Food sample gallery (captioned as illustrative).
- **Facebook photos:** supplement gallery + What's On; favour atmosphere, the garden, and full rooms.
- **Logo:** currently exists only as signage painted on the building (visible in one photo). For the site, either recreate it as a clean digital wordmark/vector from that photo, or use a typographic wordmark in the heading serif. Worth a proper digital version — a quick task for Claude Code or a designer.
- Optimise everything: responsive sizes, WebP, lazy-loading.

## 8. Still to gather (minor)

- [ ] **Instagram** handle, if you add one
- [ ] **Wine list** details (kept general for now — add when to hand)
- [ ] **Domain name** — owner to buy; build proceeds now regardless (Section 9)
- [ ] **Logo** decision — recreate from building photo, or typographic wordmark

*Everything else is confirmed.*

## 9. Building before you have a domain

Build and launch now, attach the domain later with no rework:

- Deploy to a **free temporary subdomain** (e.g. `the-old-ship.pages.dev` / `.netlify.app` / `.vercel.app`). Fully live and shareable immediately.
- When the owner buys the domain (e.g. `theoldshipcadmore.co.uk`), point it at the same deployment — nothing rebuilds, just a DNS/domain setting.
- Nudge the owner to buy it early — registration + DNS propagation takes a little time, and the Google Business Profile should use the final address.

## 10. Technical recommendation & build sequence

**Stack:** **Astro + Tailwind CSS** (component-based, ships almost no JS, great performance/SEO, built-in image optimisation, free deploy). Plain HTML/CSS/JS is a fine alternative for a one-pager.

**Local SEO (don't skip):**
- JSON-LD `BarOrPub` schema: name, address, geo, phone, opening hours, priceRange, servesCuisine, founding date 1637.
- `<title>`, meta description, Open Graph / Twitter cards.
- Claim the **Google Business Profile** separately — for a village pub it drives more visits than the site; keep hours/address/phone identical across both.

**Also:** embedded Google Map; semantic HTML + alt text + contrast + keyboard nav; deploy via Cloudflare Pages / Netlify / Vercel (free, custom domains, HTTPS, auto-deploy from GitHub).

**Build order:**
1. Scaffold Astro + Tailwind; set up repo and a deploy target (temporary subdomain).
2. Build the layout shell: sticky nav, footer, colour/type design tokens.
3. Lay in the sections with the Section 11 copy (hero → story → food → drinks → what's on → visit).
4. Wire image optimisation; load real photos into the right buckets.
5. Add the Facebook embed + Open Graph tags.
6. Add JSON-LD schema, meta tags, favicon, map.
7. Mobile QA pass on a real phone.
8. Point the domain when ready; confirm the Google Business Profile matches.

## 11. Ready-to-use copy

*Edit freely.*

### Hero
- **Name:** The Old Ship
- **Tagline:** "Serving Cadmore End since 1637"
- **Sub-tagline (optional):** "A proper village free house in the Buckinghamshire hills"
- **Buttons:** Get Directions · Call to Book

### Our Story
> Tucked just off the Marlow Road in the village of Cadmore End, The Old Ship is the sort of pub England does best — low beams, a warm welcome, and no airs about it. There's been an inn on this spot since 1637, which means beer has been poured here for the best part of four centuries.
>
> For generations it was the heart of the village, and after a long spell with its doors closed, it's open once more — back to doing what it always did well: honest food, well-kept ale, and good company.
>
> As a free house, we answer to no brewery. The beers on our pumps are there because they're good, not because we're told to pour them — and most come from breweries right on our doorstep.

### Food
> **No fixed menu — and that's the point.** Every morning we chalk up the day's board, cooked from the freshest ingredients we can get our hands on. What you eat today might not be here tomorrow.
>
> A few things you can usually count on: a range of freshly made sandwiches, and on Fridays, proper fish and chips. And every Sunday, our roast — no booking needed, though we'd recommend reserving a table, as they go quickly.
>
> **Food is served every day, 12–2:30pm.**
>
> Want to know what's on the board today? Give us a ring or just pop in.
>
> *[Gallery caption:] A taste of what comes off the board — for illustration, not today's menu.*

### Drinks
> Three hand pumps, always rotating, mostly from breweries close to home — the likes of Rebellion, Chiltern, Loddon and Ossett. As a free house we change what's on regularly, so there's usually something new to try.
>
> Not one for ale? We've a well-chosen wine list — reds, whites, rosé and Prosecco — alongside the usual spirits and soft drinks.

### Visit Us
> **The Old Ship**
> Marlow Road, Cadmore End, High Wycombe, Buckinghamshire, HP14 3PN
> Call to book: +44 1494 883799 · oldship1637@gmail.com
>
> **Bar**
> Monday–Thursday: 11am–3pm, 5–11pm
> Friday–Sunday: 11am–11pm
>
> **Kitchen (food served)**
> Every day: 12–2:30pm
>
> **Good to know**
> Dog friendly · Large garden with plenty of seating · Step-free access and accessible toilets · Brand-new car park

---

*The two decisions that define this site: framing the daily board as a feature, and using Facebook as the low-maintenance content engine. Everything else is straightforward.*
