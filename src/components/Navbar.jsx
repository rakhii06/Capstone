import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCompare } from '../context/CompareContext.jsx'

function Navbar() {
  const { totalItems } = useCart()
  const { dark, toggleTheme } = useTheme()
  const { wishlist } = useWishlist()
  const { compare } = useCompare()

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-neon-cyan/30 px-6 py-4 flex justify-between items-center">
      
  
      <Link to="/" className="text-2xl font-bold neon-text-cyan">
        NexNeo
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:neon-text-pink transition-all duration-300">
          Home
        </Link>

        <Link
          to="/wishlist"
          className="relative hover:neon-text-pink transition-all duration-300"
        >
          Wishlist
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-4 bg-neon-pink text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-neon-pink">
              {wishlist.length}
            </span>
          )}
        </Link>

        <Link
          to="/compare"
          className="relative hover:neon-text-pink transition-all duration-300"
        >
          Compare
          {compare.length > 0 && (
            <span className="absolute -top-2 -right-4 bg-neon-cyan text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-neon-cyan">
              {compare.length}
            </span>
          )}
        </Link>

        <Link
          to="/cart"
          className="relative hover:neon-text-pink transition-all duration-300"
        >
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-4 bg-neon-pink text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-neon-pink">
              {totalItems}
            </span>
          )}
        </Link>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-full border border-neon-purple text-neon-purple hover:shadow-neon-purple transition-all duration-300"
        >
          {dark ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar