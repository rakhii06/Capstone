import React, { useState, useEffect } from 'react'

function SearchBar({ onSearch }) {
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    setTyping(true)

    const timer = setTimeout(() => {
      onSearch(text)
      setTyping(false)
    }, 400)

    return () => clearTimeout(timer)
  }, [text, onSearch])

  return (
    <div className="w-full md:w-72">
      <input
        type="text"
        placeholder="🔍 Search gadgets..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 rounded-full bg-black border border-neon-cyan/40 text-white focus:outline-none focus:shadow-neon-cyan transition-all"
      />

      {/* 🔵 Searching indicator */}
      {typing && (
        <p className="text-xs text-zinc-400 mt-1 ml-2">
          Searching...
        </p>
      )}
    </div>
  )
}

export default SearchBar