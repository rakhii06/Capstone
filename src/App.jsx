import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'


const Home = lazy(() => import('./pages/Home.jsx'))
const ProductDetails = lazy(() => import('./pages/ProductDetails.jsx'))
const Cart = lazy(() => import('./pages/Cart.jsx'))
const Wishlist = lazy(() => import('./pages/Wishlist.jsx'))
const Compare = lazy(() => import('./pages/Compare.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Suspense
        fallback={
          <div className="text-center py-20 neon-text-cyan text-xl">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          {/* New: wishlist route */}
          <Route path="/wishlist" element={<Wishlist />} />
          {/* New: compare route */}
          <Route path="/compare" element={<Compare />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
