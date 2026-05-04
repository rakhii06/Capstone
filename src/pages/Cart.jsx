import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useToast } from '../context/ToastContext.jsx'

function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart()
  const { showToast } = useToast()

  if (cart.length === 0) {
    return (
      <div className="
        min-h-screen flex flex-col items-center justify-center text-center
        bg-white text-black dark:bg-black dark:text-white
      ">
        <h2 className="text-2xl neon-text-purple">
          🛒 Your cart is empty
        </h2>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 rounded-full border border-neon-cyan text-neon-cyan"
        >
          Shop Now
        </Link>
      </div>
    )
  }

  return (
    <div className="
      min-h-screen 
      bg-white text-black 
      dark:bg-black dark:text-white 
      max-w-4xl mx-auto px-6 py-10
    ">
      <h1 className="text-3xl font-bold neon-text-cyan mb-6">
        Your Cart
      </h1>

      <p className="text-gray-600 dark:text-zinc-400 mb-4">
        Total Items: <span className="text-black dark:text-white">{totalItems}</span>
      </p>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="
              flex flex-col sm:flex-row items-center gap-4
              bg-gray-100 dark:bg-zinc-900
              border border-gray-300 dark:border-neon-purple/30
              rounded-lg p-4
            "
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-24 h-24 object-contain bg-white dark:bg-black rounded"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {item.title}
              </h3>

              <p className="neon-text-pink">${item.price}</p>

              <p className="text-sm text-gray-600 dark:text-zinc-400">
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  updateQuantity(item.id, item.quantity - 1)
                  showToast('🔽 Quantity updated')
                }}
                className="px-3 py-1 border border-neon-cyan text-neon-cyan rounded"
              >
                −
              </button>

              <span className="text-black dark:text-white w-8 text-center">
                {item.quantity}
              </span>

              <button
                onClick={() => {
                  updateQuantity(item.id, item.quantity + 1)
                  showToast('🔼 Quantity increased')
                }}
                className="px-3 py-1 border border-neon-cyan text-neon-cyan rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => {
                removeFromCart(item.id)
                showToast('❌ Item removed')
              }}
              className="px-3 py-1 text-red-500 border border-red-500 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <h2 className="text-2xl neon-text-cyan">
          Total: <span className="neon-text-pink">${totalPrice.toFixed(2)}</span>
        </h2>

        <button
          onClick={() => showToast('✅ Order placed!')}
          className="mt-4 px-6 py-3 rounded-full bg-neon-cyan text-black font-bold"
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart