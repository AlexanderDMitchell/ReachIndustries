import React from 'react'

type Context = {
  darkMode: boolean
  pallet: string[]
  toggleDarkMode: () => void
}

const context: Context = {
  darkMode: true,
  pallet: [],
  toggleDarkMode: () => {
    //
  }
}

export const ThemeContext = React.createContext<Context>(context)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = React.useState(true)
  const toggleDarkMode = () => setDarkMode((current) => !current)
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        pallet: darkMode ? DarkPalette : LightPalette,
        toggleDarkMode
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return React.useContext(ThemeContext)
}

export const DarkPalette = [
  '#000E37',
  '#ffffff',
  '#0076BE',
  '#1192D4',
  '#575556'
]

export const LightPalette = [
  '#ffffff',
  '#000E37',
  '#0076BE',
  '#1192D4',
  '#575556'
]
