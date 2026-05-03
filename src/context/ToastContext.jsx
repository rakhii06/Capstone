import React, { createContext, useContext, useState } from 'react'

const ToastContext = createContext()

export const useToast = () => useContext(ToastContext)

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ show: false, message: '' })

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => {
      setToast({ show: false, message: '' })
    }, 2000)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast.show && (
        <div className="fixed top-5 right-5 bg-neon-cyan text-black px-4 py-2 rounded shadow-lg z-50">
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  )
}