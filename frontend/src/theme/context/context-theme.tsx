import { createContext } from "react";

export const themeContext = createContext<ThemeContext>({
    theme: {
        primary: 'color-1',
        background: 'background-1'
    },
    setTheme: () => {}    
})

