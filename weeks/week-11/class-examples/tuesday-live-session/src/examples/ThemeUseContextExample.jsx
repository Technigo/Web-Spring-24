import { createContext, useContext, useState } from "react"

const PreferencesContext = createContext()

const PreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    themeColor: "dark",
    notifications: true
  })

  const updateThemeColor = color => {
    console.log("theme update happening because of button click")
    setPreferences(prev => ({ ...prev, themeColor: color }))
  }

  return (
    <PreferencesContext.Provider value={{ preferences, updateThemeColor }}>
      {children}
    </PreferencesContext.Provider>
  )
}

const ThemeComponent = () => {
  const { preferences, updateThemeColor } = useContext(PreferencesContext)
  console.log("ThemeComponent Rendered")

  return (
    <div>
      <p>Theme: {preferences.themeColor}</p>
      <button onClick={() => updateThemeColor("light")}>Light Theme</button>
      <button onClick={() => updateThemeColor("dark")}>Dark Theme</button>
    </div>
  )
}

const NotificationsComponent = () => {
  const { preferences } = useContext(PreferencesContext)
  console.log("NotificationsComponent Rendered")

  return <p>Notifications: {preferences.notifications ? "On" : "Off"}</p>
}

export const ThemeUseContextExample = () => (
  <PreferencesProvider>
    <ThemeComponent />
    <NotificationsComponent />
  </PreferencesProvider>
)
