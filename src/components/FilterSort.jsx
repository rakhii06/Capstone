import React from 'react'
import { ALLOWED_CATEGORIES } from '../services/api.js'


function FilterSort({ category, setCategory, sort, setSort }) {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Category filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-3 py-2 rounded bg-black border border-neon-purple/40 text-white focus:shadow-neon-purple"
      >
        <option value="all">All Categories</option>
        {ALLOWED_CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </option>
        ))}
      </select>

      {/* Price sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="px-3 py-2 rounded bg-black border border-neon-pink/40 text-white focus:shadow-neon-pink"
      >
        <option value="default">Sort by Price</option>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>
    </div>
  )
}

export default FilterSort
