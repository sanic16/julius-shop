import React, { useEffect, useReducer } from "react"
import { themeContext } from "./context-theme"
import themeReducer from "./themeReducer"

const initialTheme = localStorage.getItem('theme') ? 
JSON.parse(localStorage.getItem('theme') as string) : {
  primary: 'color-7',
  background: 'background-1'
}

const ThemeContextProvider = (
    {
        children
    }:{
        children: React.ReactNode
    }
) => {
  const [theme, dispatchTheme] = useReducer(themeReducer, initialTheme)  

  const setTheme = (theme: Primary | Background) => {
    dispatchTheme({ type: theme })
    console.log(theme)
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <themeContext.Provider value={{
        theme,
        setTheme: setTheme
    }}>
        { children }
    </themeContext.Provider>
  )
}

export default ThemeContextProvider