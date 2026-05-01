import React, { createContext, useContext, useState } from 'react'


const CompareContext = createContext()

const MAX_COMPARE = 3 

export function CompareProvider({ children }) {
  const [compare, setCompare] = useState([])

  const toggleCompare = (product) => {
    setCompare((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      if (exists) return prev.filter((p) => p.id !== product.id)
      if (prev.length >= MAX_COMPARE) {
       
        return [...prev.slice(1), product]
      }
      return [...prev, product]
    })
  }

  const isCompared = (id) => compare.some((p) => p.id === id)
  const removeCompare = (id) =>
    setCompare((prev) => prev.filter((p) => p.id !== id))
  const clearCompare = () => setCompare([])

  return (
    <CompareContext.Provider
      value={{ compare, toggleCompare, isCompared, removeCompare, clearCompare, MAX_COMPARE }}
    >
      {children}
    </CompareContext.Provider>
  )
}

export const useCompare = () => useContext(CompareContext)
