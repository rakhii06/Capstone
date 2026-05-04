import React, { useEffect, useState } from 'react'
import { fetchTechProducts } from '../services/api.js'
import ProductCard from './ProductCard.jsx'



function SmartSuggestions({ currentProduct }) {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    if (!currentProduct) return
    fetchTechProducts().then((all) => {
      const related = all
        .filter(
          (p) =>
            p.category === currentProduct.category && p.id !== currentProduct.id
        )
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 3) 
      setSuggestions(related)
    })
  }, [currentProduct])

  if (suggestions.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold neon-text-purple mb-4">
        ✨ Smart Suggestions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestions.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

export default SmartSuggestions
