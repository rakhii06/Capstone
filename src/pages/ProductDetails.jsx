import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchProductById } from '../services/api.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCompare } from '../context/CompareContext.jsx'
import { useToast } from '../context/ToastContext.jsx'

function ProductDetails() {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const { toggleCompare, isCompared } = useCompare()
  const { showToast } = useToast()

  useEffect(() => {
    fetchProductById(id)
      .then((data) => setProduct(data))
      .catch(() => setError('Failed to load product'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading)
    return (
      <p className="text-center mt-20 neon-text-cyan text-xl">
        Loading product...
      </p>
    )

  if (error)
    return (
      <p className="text-center mt-20 text-red-500 text-lg">
        {error}
      </p>
    )

  const liked = isWishlisted(product.id)
  const inCompare = isCompared(product.id)

  return (
    <div className="
      min-h-screen 
      bg-white text-black 
      dark:bg-black dark:text-white 
      px-6 py-10 transition-colors duration-300
    ">
      
     
      <Link
        to="/"
        className="inline-block mb-6 text-neon-cyan hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl p-6 flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-80 object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">
            {product.title}
          </h1>

          <p className="text-gray-600 dark:text-zinc-400 mb-4 capitalize">
            {product.category}
          </p>

          <p className="text-lg mb-4 text-gray-700 dark:text-zinc-300">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-neon-pink mb-4">
            ${product.price}
          </p>

          <p className="text-sm text-green-500 dark:text-green-400 mb-4">
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>

        
          <div className="flex flex-wrap gap-4 mt-6">

        
            <button
              onClick={() => {
                addToCart(product)
                showToast('🛒 Added to Cart!')
              }}
              className="
                px-6 py-2 rounded-lg 
                bg-white text-black 
                dark:bg-zinc-900 dark:text-white 
                border border-gray-300 dark:border-neon-cyan/30 
                hover:shadow-neon-cyan transition
              "
            >
              Add to Cart
            </button>

          
            <button
              onClick={() => {
                toggleWishlist(product)
                showToast(
                  liked
                    ? '❌ Removed from Wishlist'
                    : '❤️ Added to Wishlist'
                )
              }}
              className={`px-6 py-2 rounded-lg border transition ${
                liked
                  ? 'bg-neon-pink text-black'
                  : 'bg-white text-black dark:bg-zinc-900 dark:text-white border-gray-300 dark:border-neon-pink/30'
              }`}
            >
              {liked ? '♥ Wishlisted' : '♡ Add to Wishlist'}
            </button>

    
            <button
              onClick={() => {
                toggleCompare(product)
                showToast(
                  inCompare
                    ? '❌ Removed from Compare'
                    : '⚖️ Added to Compare'
                )
              }}
              className={`px-6 py-2 rounded-lg border transition ${
                inCompare
                  ? 'bg-neon-cyan text-black'
                  : 'bg-white text-black dark:bg-zinc-900 dark:text-white border-gray-300 dark:border-neon-cyan/30'
              }`}
            >
              {inCompare ? '⚖ Compared' : '⚖ Add to Compare'}
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails