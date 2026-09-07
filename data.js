/* ============================================================================
   DATA — replace every number here with your own observations before publishing.
   Everything on the page is calculated from this file. Nothing is hardcoded.

   HOW TO COLLECT (about 90 minutes):
   1. Open hm.com in three markets: /en_se, /de_de, /en_us
   2. Go to the same category page in each. Set the same filters.
   3. For each market record: total options shown, then for each price tier
      the option count, the average number of colourways per style, and how
      many options are currently discounted.
   4. Colourways per style is your proxy for how much conviction the plan
      put behind a style. Discounted share is your proxy for where that
      conviction did not pay off. Say so on the page — it is stated in the
      Method section already.
   5. Put the collection date in meta.collected. Do not leave it stale.
   ========================================================================== */

const CASE = {
  meta: {
    category: "Women's knitwear",
    subcategory: 'Jumpers and cardigans, full-price and marked-down',
    collected: '2026-09-07',
    author: 'Anna Tran',
    // Rates used to put every market on one comparable axis.
    // Update these to the rate on your collection date and say where you got it.
    rateSource: 'ECB reference rates',
  },

  // Price tiers are defined in EUR so the three markets sit on one ladder.
  // ceilingEUR of null means "and above".
  tiers: [
    { key: 'entry',    label: 'Entry',    floorEUR: 0,  ceilingEUR: 15 },
    { key: 'core',     label: 'Core',     floorEUR: 15, ceilingEUR: 25 },
    { key: 'elevated', label: 'Elevated', floorEUR: 25, ceilingEUR: 40 },
    { key: 'premium',  label: 'Premium',  floorEUR: 40, ceilingEUR: null },
  ],

  markets: [
    {
      code: 'SE',
      name: 'Sweden',
      currency: 'SEK',
      toEUR: 0.087,
      // options   = distinct styles listed in that tier
      // colourways = average colourways offered per style in that tier
      // discounted = styles in that tier currently showing a reduced price
      tiers: {
        entry:    { options: 34, colourways: 2.1, discounted: 11 },
        core:     { options: 58, colourways: 3.4, discounted: 9 },
        elevated: { options: 41, colourways: 2.8, discounted: 16 },
        premium:  { options: 12, colourways: 1.9, discounted: 6 },
      },
    },
    {
      code: 'DE',
      name: 'Germany',
      currency: 'EUR',
      toEUR: 1.0,
      tiers: {
        entry:    { options: 39, colourways: 2.3, discounted: 8 },
        core:     { options: 61, colourways: 3.6, discounted: 7 },
        elevated: { options: 33, colourways: 2.4, discounted: 9 },
        premium:  { options: 9,  colourways: 1.7, discounted: 3 },
      },
    },
    {
      code: 'US',
      name: 'United States',
      currency: 'USD',
      toEUR: 0.92,
      tiers: {
        entry:    { options: 21, colourways: 1.8, discounted: 4 },
        core:     { options: 47, colourways: 3.1, discounted: 6 },
        elevated: { options: 52, colourways: 3.3, discounted: 21 },
        premium:  { options: 18, colourways: 2.2, discounted: 9 },
      },
    },
  ],
};
