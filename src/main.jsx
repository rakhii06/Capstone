import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'
import { RecentlyViewedProvider } from './context/RecentlyViewedContext.jsx'
import { CompareProvider } from './context/CompareContext.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <WishlistProvider>
            <RecentlyViewedProvider>
              <CompareProvider>
                <App />
              </CompareProvider>
            </RecentlyViewedProvider>
          </WishlistProvider>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
