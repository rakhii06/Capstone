import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { fetchProductById } from '../services/api.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useRecentlyViewed } from '../context/RecentlyViewedContext.jsx'
import SmartSuggestions from '../components/SmartSuggestions.jsx'
import TechScore from '../components/TechScore.jsx'
import { useCompare } from '../context/CompareContext.jsx'


function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const { toggleCompare, isCompared } = useCompare()
  const { addRecent } = useRecentlyViewed()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchProductById(id)
      .then((data) => {
        setProduct(data)
       
        addRecent({
          id: data.id,
          title: data.title,
          price: data.price,
          thumbnail: data.thumbnail,
          category: data.category,
          rating: data.rating,
        })
      })
      .catch(() => setError('⚠️ Failed to load product details.'))
      .finally(() => setLoading(false))
   
  }, [id])

  if (loading)
    return <p className="text-center mt-20 neon-text-cyan text-xl">Loading...</p>
  if (error) return <p className="text-center mt-20 text-red-400">{error}</p>
  if (!product) return null

  const handleAdd = () => {
    addToCart(product)
    navigate('/cart')
  }

  const liked = isWishlisted(product.id)
  const inCompare = isCompared(product.id)

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <Link to="/" className="neon-text-cyan hover:underline">
        ← Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-6 bg-zinc-900 border border-neon-purple/30 rounded-xl p-6 shadow-neon-purple">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-80 object-contain bg-black rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold neon-text-pink">{product.title}</h1>
          <p className="text-zinc-400 capitalize mt-1">
            Category: {product.category} | Brand: {product.brand}
          </p>
          <p className="text-yellow-400 mt-2">
            ⭐ {product.rating} | Stock: {product.stock}
          </p>
          <p className="text-zinc-300 mt-4 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <p className="text-3xl neon-text-cyan font-bold">
              ${product.price}
            </p>
            {/* Tech Score badge — quick value indicator */}
            <TechScore product={product} />
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={handleAdd}
              className="px-6 py-3 rounded-full bg-neon-pink text-black font-bold hover:shadow-neon-pink transition-all duration-300"
            >
              🛒 Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 border ${
                liked
                  ? 'bg-neon-pink text-black shadow-neon-pink border-neon-pink'
                  : 'border-neon-pink text-neon-pink hover:shadow-neon-pink'
              }`}
            >
              {liked ? '♥ In Wishlist' : '♡ Add to Wishlist'}
            </button>
            <button
              onClick={() => toggleCompare(product)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 border ${
                inCompare
                  ? 'bg-neon-cyan text-black shadow-neon-cyan border-neon-cyan'
                  : 'border-neon-cyan text-neon-cyan hover:shadow-neon-cyan'
              }`}
            >
              {inCompare ? '⚖ In Compare' : '⚖ Add to Compare'}
            </button>
          </div>
        </div>
      </div>

      {/* Smart Suggestions — same-category recommended products */}
      <SmartSuggestions currentProduct={product} />
    </div>
  )
}

export default ProductDetails
