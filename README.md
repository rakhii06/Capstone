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

## Folder Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx          (heart button)
│   ├── SearchBar.jsx
│   ├── FilterSort.jsx
│   ├── SmartSuggestions.jsx     ← NEW
│   └── RecentlyViewed.jsx       ← NEW
├── pages/
│   ├── Home.jsx
│   ├── ProductDetails.jsx       (tracks view + suggestions)
│   ├── Cart.jsx
│   ├── Wishlist.jsx             ← NEW
│   └── NotFound.jsx
├── context/
│   ├── CartContext.jsx
│   ├── ThemeContext.jsx
│   ├── WishlistContext.jsx      ← NEW
│   └── RecentlyViewedContext.jsx ← NEW
├── services/
│   └── api.js                   (Axios)
├── App.jsx                      (React Router setup)
└── main.jsx                     (provider wrapping)
```

## Routes
| Path | Page |
|---|---|
| `/` | Home (listing + Recently Viewed) |
| `/product/:id` | Details + Smart Suggestions |
| `/cart` | Cart |
| `/wishlist` | Wishlist |
| `*` | NotFound |

## Run
```bash
npm install
npm run dev      # development
npm run build    # production
```

## Viva Quick-Notes
- **Wishlist** uses `WishlistContext` + `localStorage` for persistence; `toggleWishlist`, `isWishlisted` helpers.
- **Recently Viewed** uses `RecentlyViewedContext`; `addRecent` is called inside `ProductDetails` `useEffect`. Capped at 6, deduped, persisted.
- **Smart Suggestions** filters all products by `category === currentProduct.category`, excludes self, sorts by `rating`, takes top 3.

## New in this version

- **Compare page** at `/compare` — pick 2–3 products via the ⚖ button on any card; view a side-by-side table (price, rating, brand, stock, discount, Tech Score).
- **Tech Score badge** — `score = rating x 2 - price/1000 penalty` (clamped 0–10). Shown on cards, on the product details page, and inside the compare table. See `src/components/TechScore.jsx`.
- **Recently Viewed** capped at last **5** products (per spec).
