# Assortment and price architecture across three markets

A commercial case study reading womenswear knitwear assortment across Sweden, Germany and the United States from public product listings, and turning the read into three planning actions.

**Live:** https://tran23qi.github.io/Assortment-Price-Architecture/

## What this is

The question a product planner answers every week is *where does the plan disagree with what customers actually did, and what do I move?* This is that question run on public data.

Two proxies do the work:

- **Colourways per style** stands in for how much conviction the plan put behind a style. A style bought in four colours was expected to sell harder than one bought in two.
- **Share of options currently discounted** stands in for whether that conviction paid off.

Where the two disagree, there is a planning question. The page finds those cells, ranks them, and proposes what to do.

## What it is not

Public listings show what is offered and what is currently reduced. They do not show units, margin, stock cover, or intake plan. Nothing here is a claim about any retailer's actual performance, and the recommendations are directional rather than sized.

## Files

| File | What it does |
|---|---|
| `index.html` | The whole page. Layout, styling and all derived analysis. |
| `data.js` | The observations. Every figure on the page is calculated from this file. |

## Collecting the data

About 90 minutes.

1. Open the retailer's site in three markets (`/en_se`, `/de_de`, `/en_us`).
2. Go to the same category in each. Apply the same filters — same subcategory, no sort change, sale items included.
3. For each market, record per price tier: number of distinct options, average colourways per style, number currently showing a reduced price.
4. Convert local prices to euro at the ECB reference rate on your collection date, so the tiers are comparable. Put that rate in `market.toEUR`.
5. Set `meta.collected` to the real date. A stale date is worse than no date.
6. Keep a screenshot or a CSV of your raw counts. If anyone asks how you got the numbers, you want to be able to show them.

Tier boundaries live in `CASE.tiers` and are set in euro. Adjust them to your category — the point is that the tiers mean the same thing in all three markets.

## Running it locally

No build step.

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Improving it

The honest limitation is that a one-day snapshot catches each market at a different point in its markdown cycle. Repeating the collection weekly across a season would separate structural differences from timing differences. The data structure already supports it — add a date key per observation set and the same calculations run per week.
