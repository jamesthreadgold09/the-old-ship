// Absolute-URL helpers for SEO artefacts (canonical, Open Graph, JSON-LD).
//
// Everything is derived from `Astro.site` (astro.config.mjs) + the build-time
// `BASE_URL`, so nothing hardcodes an origin. When the pub's real domain is
// bought, changing `site` (and dropping `base`) in astro.config.mjs updates
// every absolute URL on the next build. See HANDOVER.md for the go-live steps.

// The deployed root, e.g. https://example.com/the-old-ship/ (or https://example.com/).
// BASE_URL must end in a slash or relative URL joins would drop the base segment
// (e.g. og-image.jpg resolving to /og-image.jpg instead of /the-old-ship/og-image.jpg).
export function siteRoot(site: URL | undefined): URL {
  const base = import.meta.env.BASE_URL;
  const normalised = base.endsWith('/') ? base : `${base}/`;
  return new URL(normalised, site ?? new URL('http://localhost:4321'));
}

// Absolute URL for a path relative to the site root, e.g. absoluteUrl('og-image.jpg', Astro.site).
export function absoluteUrl(path: string, site: URL | undefined): string {
  return new URL(path.replace(/^\//, ''), siteRoot(site)).href;
}

// Whether search engines may index this build. Defaults to false so the site
// is never indexed under a temporary/placeholder origin; set the env var
// PUBLIC_ALLOW_INDEX=true when building on the real domain (see HANDOVER.md).
export const ALLOW_INDEX = import.meta.env.PUBLIC_ALLOW_INDEX === 'true';
