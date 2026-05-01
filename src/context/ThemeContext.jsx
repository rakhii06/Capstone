import React, { createContext, useContext, useEffect, useState } from 'react'


const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true)


  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.remove('light')
    } else {
      root.classList.add('light')
    }
  }, [dark])

  const toggleTheme = () => setDark((d) => !d)

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
