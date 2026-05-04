import React from 'react'

function FilterSort({ category, setCategory, sort, setSort }) {
  return (
    <div className="flex gap-4 flex-wrap">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="
          px-4 py-2 rounded-lg 
          bg-white text-black 
          dark:bg-zinc-900 dark:text-white 
          border border-gray-300 dark:border-neon-cyan/30
          focus:outline-none
        "
      >
        <option value="all">All Categories</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="tablets">Tablets</option>
        <option value="mobile-accessories">Mobile Accessories</option>
        <option value="audio">Audio</option>
        <option value="cameras">Cameras</option>
        <option value="gaming">Gaming</option>
        <option value="accessories">Accessories</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="
          px-4 py-2 rounded-lg 
          bg-white text-black 
          dark:bg-zinc-900 dark:text-white 
          border border-gray-300 dark:border-neon-cyan/30
          focus:outline-none
        "
      >
        <option value="default">Sort by Price</option>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>

    </div>
  )
}

export default FilterSort