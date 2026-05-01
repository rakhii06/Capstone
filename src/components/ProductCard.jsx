import React from 'react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCompare } from '../context/CompareContext.jsx'
import TechScore from './TechScore.jsx'


function ProductCard({ product }) {
  const { toggleWishlist, isWishlisted } = useWishlist()
  const { toggleCompare, isCompared } = useCompare()
  const liked = isWishlisted(product.id)
  const inCompare = isCompared(product.id)

 
  const handleHeart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist(product)
  }
  const handleCompare = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleCompare(product)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-zinc-900 border border-neon-cyan/30 rounded-xl p-4 transition-all duration-300 hover:shadow-neon-cyan hover:border-neon-cyan hover:-translate-y-1"
    >
      {/* Action buttons (top-right): wishlist + compare */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        <button
          onClick={handleHeart}
          aria-label="Toggle wishlist"
          className={`w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
            liked
              ? 'bg-neon-pink text-black shadow-neon-pink'
              : 'bg-black/70 text-neon-pink border border-neon-pink/50 hover:shadow-neon-pink'
          }`}
        >
          {liked ? '♥' : '♡'}
        </button>
        <button
          onClick={handleCompare}
          aria-label="Toggle compare"
          title={inCompare ? 'Remove from compare' : 'Add to compare'}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-base transition-all duration-300 ${
            inCompare
              ? 'bg-neon-cyan text-black shadow-neon-cyan'
              : 'bg-black/70 text-neon-cyan border border-neon-cyan/50 hover:shadow-neon-cyan'
          }`}
        >
          ⚖
        </button>
      </div>

      <div className="overflow-hidden rounded-lg bg-black mb-3">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-44 object-contain group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-semibold text-white truncate group-hover:neon-text-cyan">
        {product.title}
      </h3>
      <p className="text-sm text-zinc-400 capitalize">{product.category}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="neon-text-pink font-bold text-lg">
          ${product.price}
        </span>
        <span className="text-yellow-400 text-sm">
          ⭐ {product.rating?.toFixed(1)}
        </span>
      </div>

      {/* Tech Score badge — simple "value for money" indicator */}
      <div className="mt-3">
        <TechScore product={product} />
      </div>
    </Link>
  )
}

export default React.memo(ProductCard)
