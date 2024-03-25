import React, { useReducer } from "react"
import { themeContext } from "./context-theme"
import themeReducer from "./themeReducer"

const ThemeContextProvider = (
    {
        children
    }:{
        children: React.ReactNode
    }
) => {
  const [theme, dispatchTheme] = useReducer(themeReducer, {
    primary: 'color-1',
    background: 'background-1'
  })  

  const setTheme = (theme: Primary | Background) => {
    dispatchTheme({ type: theme })
    console.log(theme)
  }

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