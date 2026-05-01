import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { fetchTechProducts } from '../services/api.js'
import ProductCard from '../components/ProductCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import FilterSort from '../components/FilterSort.jsx'
import RecentlyViewed from '../components/RecentlyViewed.jsx'

const PAGE_SIZE = 6 


function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('default')
  const [page, setPage] = useState(1)

 
  useEffect(() => {
    fetchTechProducts()
      .then((data) => setProducts(data))
      .catch(() => setError('⚠️ Failed to load products. Please try again.'))
      .finally(() => setLoading(false))
  }, [])


  const handleSearch = useCallback((q) => {
    setSearch(q)
    setPage(1)
  }, [])


  const visibleProducts = useMemo(() => {
    let list = [...products]
    if (category !== 'all') list = list.filter((p) => p.category === category)
    if (search.trim())
      list = list.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
    if (sort === 'asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'desc') list.sort((a, b) => b.price - a.price)
    return list
  }, [products, category, search, sort])

  const totalPages = Math.max(1, Math.ceil(visibleProducts.length / PAGE_SIZE))
  const paginated = visibleProducts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  )

  if (loading)
    return (
      <p className="text-center mt-20 neon-text-cyan text-xl">
        Loading gadgets...
      </p>
    )

  if (error)
    return (
      <p className="text-center mt-20 text-red-400 text-lg">{error}</p>
    )

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold neon-text-purple mb-6 text-center">
        Tech Gadget Store
      </h1>

      {/* Controls: search + filter + sort */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8">
        <SearchBar onSearch={handleSearch} />
        <FilterSort
          category={category}
          setCategory={(v) => {
            setCategory(v)
            setPage(1)
          }}
          sort={sort}
          setSort={setSort}
        />
      </div>

      {/* Product grid */}
      {paginated.length === 0 ? (
        <p className="text-center text-zinc-400 mt-10">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginated.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      {/* Pagination buttons */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 rounded border border-neon-cyan text-neon-cyan disabled:opacity-30 hover:shadow-neon-cyan transition"
          >
            Prev
          </button>
          <span className="text-white">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 rounded border border-neon-pink text-neon-pink disabled:opacity-30 hover:shadow-neon-pink transition"
          >
            Next
          </button>
        </div>
      )}

      {/* Recently Viewed strip — appears once user opens any product */}
      <RecentlyViewed />
    </div>
  )
}

export default Home
