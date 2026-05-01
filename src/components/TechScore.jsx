import React from 'react'


export function calcTechScore(product) {
  const rating = product?.rating ?? 0
  const price = product?.price ?? 0

  const base = rating * 2
 
  const penalty = Math.min(price / 1000, 3)
  const score = Math.max(0, Math.min(10, base - penalty))
  return Number(score.toFixed(1))
}

function TechScore({ product, className = '' }) {
  const score = calcTechScore(product)
 
  const tier =
    score >= 8
      ? 'bg-neon-cyan text-black shadow-neon-cyan'
      : score >= 6
      ? 'bg-neon-purple text-black shadow-neon-purple'
      : 'bg-neon-pink text-black shadow-neon-pink'

  return (
    <span
      className={`inline-block px-2 py-1 rounded-md text-xs font-bold ${tier} ${className}`}
      title="Tech Score = rating x 2 - price penalty"
    >
      Score: {score}/10
    </span>
  )
}

export default React.memo(TechScore)
