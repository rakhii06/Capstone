import React, { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search gadgets..."
      className="
        w-full md:w-80 px-4 py-2 rounded-lg 
        bg-white text-black 
        dark:bg-zinc-900 dark:text-white 
        border border-gray-300 dark:border-neon-cyan/30
        focus:outline-none focus:ring-2 focus:ring-neon-cyan
        transition-all duration-300
      "
    />
  )
}

export default SearchBar