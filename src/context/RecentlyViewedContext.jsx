import React, { createContext, useContext, useEffect, useState } from 'react'


const RecentlyViewedContext = createContext()

const MAX_ITEMS = 5

export function RecentlyViewedProvider({ children }) {
  const [recent, setRecent] = useState(() => {
    try {
      const saved = localStorage.getItem('neon_recent')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('neon_recent', JSON.stringify(recent))
  }, [recent])

 
  const addRecent = (product) => {
    if (!product) return
    setRecent((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id)
      return [product, ...filtered].slice(0, MAX_ITEMS)
    })
  }

  const clearRecent = () => setRecent([])

  return (
    <RecentlyViewedContext.Provider value={{ recent, addRecent, clearRecent }}>
      {children}
    </RecentlyViewedContext.Provider>
  )
}

export const useRecentlyViewed = () => useContext(RecentlyViewedContext)
