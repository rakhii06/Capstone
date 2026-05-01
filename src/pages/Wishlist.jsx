import React from 'react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCart } from '../context/CartContext.jsx'


function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl neon-text-pink font-bold mb-4">
          💖 Your Wishlist is Empty
        </h1>
        <Link
          to="/"
          className="neon-text-cyan hover:underline"
        >
          ← Browse gadgets
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold neon-text-pink mb-6">
        💖 My Wishlist ({wishlist.length})
      </h1>

      <div className="space-y-4">
        {wishlist.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-4 bg-zinc-900 border border-neon-pink/30 rounded-xl p-4 hover:shadow-neon-pink transition"
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-24 h-24 object-contain bg-black rounded"
            />
            <div className="flex-1">
              <Link
                to={`/product/${p.id}`}
                className="text-lg font-semibold text-white hover:neon-text-cyan"
              >
                {p.title}
              </Link>
              <p className="text-zinc-400 text-sm capitalize">{p.category}</p>
              <p className="neon-text-cyan font-bold">${p.price}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => addToCart(p)}
                className="px-4 py-2 rounded bg-neon-cyan text-black text-sm font-bold hover:shadow-neon-cyan transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(p.id)}
                className="px-4 py-2 rounded border border-neon-pink text-neon-pink text-sm hover:shadow-neon-pink transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist
