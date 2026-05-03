# ⚡ Neon Tech Gadget Store

A React + Vite e-commerce demo for tech gadgets (smartphones, laptops, tablets) with a NEON dark theme.

## Tech Stack
- **React (Vite)** + JavaScript (ES6+)
- **React Router v6** for routing
- **Context API** for state (Cart, Wishlist, Recently Viewed, Theme)
- **Axios** for API calls (dummyjson.com)
- **Tailwind CSS** with custom neon palette + glow effects

## Features
- Product listing (smartphones / laptops / tablets only)
- Search (debounced), filter by category, sort by price
- Pagination (6 per page)
- Product details page
- 🛒 **Cart** — add / remove / update quantity, totals
- 💖 **Wishlist** — heart icon on cards, dedicated page, persisted in localStorage
- ✨ **Smart Suggestions** — same-category recommendations on product page
- 🕓 **Recently Viewed** — last 6 opened products shown on Home (persisted)
- Neon dark theme + light mode toggle
- Lazy-loaded routes + memoized cards (performance)





- **Compare page** at `/compare` — pick 2–3 products via the ⚖ button on any card; view a side-by-side table (price, rating, brand, stock, discount, Tech Score).
- **Tech Score badge** — `score = rating x 2 - price/1000 penalty` (clamped 0–10). Shown on cards, on the product details page, and inside the compare table. See `src/components/TechScore.jsx`.
- **Recently Viewed** capped at last **5** products (per spec).
