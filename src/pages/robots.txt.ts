import type { APIRoute } from 'astro';
import { siteRoot, ALLOW_INDEX } from '../lib/urls';

// robots.txt is generated so its Sitemap URL derives from Astro.site and flips
// with the domain. Note: crawlers only read robots.txt from a HOST ROOT, so
// while the site lives under a /the-old-ship/ base path this file is effectively
// dormant; it becomes authoritative once the site is on its own apex domain.
// Indexing is held (Disallow) until the real domain is live (PUBLIC_ALLOW_INDEX=true).
export const GET: APIRoute = ({ site }) => {
  const root = siteRoot(site).href;
  const body = ALLOW_INDEX
    ? `User-agent: *\nAllow: /\n\nSitemap: ${root}sitemap-index.xml\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
