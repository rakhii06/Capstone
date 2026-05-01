import React from 'react'
import { useRecentlyViewed } from '../context/RecentlyViewedContext.jsx'
import ProductCard from './ProductCard.jsx'


function RecentlyViewed() {
  const { recent, clearRecent } = useRecentlyViewed()

  if (recent.length === 0) return null

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold neon-text-cyan">
          🕓 Recently Viewed
        </h2>
        <button
          onClick={clearRecent}
          className="text-sm text-zinc-400 hover:neon-text-pink"
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recent.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

export default RecentlyViewed
