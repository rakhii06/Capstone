import React, { createContext, useContext, useEffect, useState } from 'react'


const WishlistContext = createContext()

export function WishlistProvider({ children }) {
 
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('neon_wishlist')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })


  useEffect(() => {
    localStorage.setItem('neon_wishlist', JSON.stringify(wishlist))
  }, [wishlist])


  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      if (exists) return prev.filter((p) => p.id !== product.id)
      return [...prev, product]
    })
  }


  const isWishlisted = (id) => wishlist.some((p) => p.id === id)


  const removeFromWishlist = (id) =>
    setWishlist((prev) => prev.filter((p) => p.id !== id))

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isWishlisted, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  )
}


export const useWishlist = () => useContext(WishlistContext)
