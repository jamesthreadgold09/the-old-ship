// Shared site constants. Imported across components to avoid drift.
// This file is the single source of truth for name, contact, address, hours
// and facilities. Change something here and it updates everywhere, including
// the JSON-LD structured data (see StructuredData.astro).

export const BUSINESS_NAME = 'The Old Ship';
export const TAGLINE = 'Serving Cadmore End since 1637';
export const FOUNDING_YEAR = '1637';

export const PHONE_DISPLAY = '01494 883799';
export const PHONE_HREF = 'tel:+441494883799';
export const PHONE_E164 = '+441494883799';
export const EMAIL = 'oldship1637@gmail.com';
export const EMAIL_HREF = 'mailto:oldship1637@gmail.com';

export const ADDRESS_LINE = 'Marlow Road, Cadmore End, High Wycombe, Buckinghamshire, HP14 3PN';

// Structured address for schema.org PostalAddress. Note: "High Wycombe" is the
// Royal Mail post town, not the locality, so it is kept out of addressLocality
// to match the Google Business Profile's structured address byte-for-byte.
export const ADDRESS = {
  street: 'Marlow Road',
  locality: 'Cadmore End',
  region: 'Buckinghamshire',
  postcode: 'HP14 3PN',
  country: 'GB',
} as const;

// Approximate coordinates for HP14 3PN on the Marlow Road.
// TODO(owner): verify the exact pin on the building via Google Maps
// (right-click the pub roof, "What's here?") before relying on this for maps.
export const GEO = { lat: 51.6303, lng: -0.8449 } as const;

export const DIRECTIONS_HREF =
  'https://www.google.com/maps/dir/?api=1&destination=The+Old+Ship%2C+Marlow+Road%2C+Cadmore+End%2C+HP14+3PN';

// Keyless embeddable map (no API key required).
export const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=The+Old+Ship+Cadmore+End+HP14+3PN&output=embed';

export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61570735266273';

// ---------------------------------------------------------------------------
// Opening hours: single source of truth.
// The BAR is the venue-open time. The KITCHEN (food) is lunchtime only.
// `days` uses schema.org DayOfWeek names so the same data maps straight into
// JSON-LD openingHoursSpecification (see StructuredData.astro).
// `ranges` are 24h "HH:MM" pairs; `label` is the friendly display string.
// ---------------------------------------------------------------------------
export interface HoursRow {
  daysLabel: string;
  days: string[];
  ranges: Array<{ opens: string; closes: string }>;
  timeLabel: string;
}

export const BAR_HOURS: HoursRow[] = [
  {
    daysLabel: 'Monday–Thursday',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    ranges: [
      { opens: '11:00', closes: '15:00' },
      { opens: '17:00', closes: '23:00' },
    ],
    timeLabel: '11am–3pm, 5–11pm',
  },
  {
    daysLabel: 'Friday–Sunday',
    days: ['Friday', 'Saturday', 'Sunday'],
    ranges: [{ opens: '11:00', closes: '23:00' }],
    timeLabel: '11am–11pm',
  },
];

// Kitchen (food service): every day, lunchtime only.
export const KITCHEN_HOURS = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '12:00',
  closes: '14:30',
  label: '12–2:30pm',
  daysLabel: 'Every day',
} as const;

export const FACILITIES = [
  'Dog friendly',
  'Large garden with plenty of seating',
  'Step-free access & accessible toilets',
  'Brand-new car park',
];

// One-off closure override for the live "Open now" badge (bank holidays,
// private events, etc). The usual BAR_HOURS can't know about these, so set
// `closed: true` with a short `message` to force a "Closed today" state, then
// set it back to false when you reopen. Leave as-is for normal trading.
export const SPECIAL_NOTICE = { closed: false, message: '' } as const;
