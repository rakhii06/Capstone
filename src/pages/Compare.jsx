import React from 'react'
import { Link } from 'react-router-dom'
import { useCompare } from '../context/CompareContext.jsx'
import TechScore from '../components/TechScore.jsx'


function Compare() {
  const { compare, removeCompare, clearCompare } = useCompare()

  if (compare.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl neon-text-cyan mb-4">No products to compare</h2>
        <p className="text-zinc-400 mb-6">
          Tap the ⚖ button on any product card to add it (2–3 products).
        </p>
        <Link
          to="/"
          className="px-5 py-2 border border-neon-cyan text-neon-cyan rounded-md hover:shadow-neon-cyan transition-all"
        >
          Browse products
        </Link>
      </div>
    )
  }

 
  const rows = [
    { label: 'Price', render: (p) => <span className="neon-text-pink font-bold">${p.price}</span> },
    { label: 'Rating', render: (p) => <span className="text-yellow-400">⭐ {p.rating?.toFixed(1)}</span> },
    { label: 'Tech Score', render: (p) => <TechScore product={p} /> },
    { label: 'Brand', render: (p) => p.brand || '—' },
    { label: 'Category', render: (p) => <span className="capitalize">{p.category}</span> },
    { label: 'Stock', render: (p) => p.stock ?? '—' },
    { label: 'Discount', render: (p) => `${p.discountPercentage?.toFixed?.(1) ?? 0}%` },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl neon-text-cyan">⚖ Compare Products</h1>
        <button
          onClick={clearCompare}
          className="text-sm px-3 py-1 border border-neon-pink text-neon-pink rounded hover:shadow-neon-pink transition-all"
        >
          Clear all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-3 text-zinc-400 font-medium w-32">Feature</th>
              {compare.map((p) => (
                <th key={p.id} className="p-3 text-center align-top">
                  <div className="bg-zinc-900 border border-neon-cyan/30 rounded-lg p-3">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="w-full h-32 object-contain mb-2"
                    />
                    <Link
                      to={`/product/${p.id}`}
                      className="block text-white font-semibold hover:neon-text-cyan truncate"
                    >
                      {p.title}
                    </Link>
                    <button
                      onClick={() => removeCompare(p.id)}
                      className="mt-2 text-xs text-neon-pink hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-zinc-800">
                <td className="p-3 text-zinc-400 font-medium">{row.label}</td>
                {compare.map((p) => (
                  <td key={p.id} className="p-3 text-center text-white">
                    {row.render(p)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Compare
