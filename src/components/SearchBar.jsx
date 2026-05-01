import React, { useState, useEffect } from 'react'


function SearchBar({ onSearch }) {
  const [text, setText] = useState('')

  useEffect(() => {
   
    const timer = setTimeout(() => {
      onSearch(text)
    }, 400)
    return () => clearTimeout(timer) // cleanup on each keystroke
  }, [text, onSearch])

  return (
    <input
      type="text"
      placeholder="🔍 Search Gadgets 🔍..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="w-full md:w-72 px-4 py-2 rounded-full bg-black border border-neon-cyan/40 text-white focus:outline-none focus:shadow-neon-cyan transition-all"
    />
  )
}

export default SearchBar
