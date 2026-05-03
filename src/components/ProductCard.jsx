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

 
  const stockStatus =
    product.stock > 10
      ? 'In Stock'
      : product.stock > 0
      ? 'Only few left'
      : 'Out of Stock'

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-zinc-900 border border-neon-cyan/30 rounded-xl p-4 transition-all duration-300 hover:shadow-neon-cyan hover:border-neon-cyan hover:-translate-y-1"
    >
      
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        <button
          onClick={handleHeart}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-lg ${
            liked
              ? 'bg-neon-pink text-black'
              : 'bg-black/70 text-neon-pink border border-neon-pink/50'
          }`}
        >
          {liked ? '♥' : '♡'}
        </button>

        <button
          onClick={handleCompare}
          className={`w-9 h-9 rounded-full flex items-center justify-center ${
            inCompare
              ? 'bg-neon-cyan text-black'
              : 'bg-black/70 text-neon-cyan border border-neon-cyan/50'
          }`}
        >
          ⚖
        </button>
      </div>

    
      {product.discountPercentage > 0 && (
        <span className="absolute top-3 left-3 bg-neon-pink text-black text-xs font-bold px-2 py-1 rounded">
          {product.discountPercentage.toFixed(0)}% OFF
        </span>
      )}

      <div className="overflow-hidden rounded-lg bg-black mb-3">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-44 object-contain group-hover:scale-110 transition"
        />
      </div>

      <h3 className="text-lg font-semibold text-white truncate">
        {product.title}
      </h3>

      <p className="text-sm text-zinc-400 capitalize">
        {product.category}
      </p>

   
      <p className="text-xs mt-1 text-green-400">{stockStatus}</p>

      <div className="flex justify-between items-center mt-2">
        <span className="neon-text-pink font-bold text-lg">
          ${product.price}
        </span>
        <span className="text-yellow-400 text-sm">
          ⭐ {product.rating?.toFixed(1)}
        </span>
      </div>

   
      <p className="text-xs text-zinc-400 mt-1">
        🚚 Free Delivery
      </p>

      <div className="mt-3">
        <TechScore product={product} />
      </div>
    </Link>
  )
}

export default React.memo(ProductCard)