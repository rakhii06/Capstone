import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-6xl neon-text-pink font-bold">404</h1>
      <p className="text-zinc-400 mt-2">Page not found</p>
      <Link
        to="/"
        className="inline-block mt-6 px-6 py-2 rounded-full border border-neon-cyan text-neon-cyan hover:shadow-neon-cyan"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
