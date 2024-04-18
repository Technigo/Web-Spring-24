import { create } from "zustand"

const useStore = create(set => ({
  themeColor: "dark",
  notifications: true,
  updateThemeColor: color => {
    set({ themeColor: color })
    console.log("theme update happening because of button click")
  }
}))

const ThemeComponent = () => {
  // const { themeColor, updateThemeColor } = useStore()
  const themeColor = useStore(state => state.themeColor)
  const updateThemeColor = useStore(state => state.updateThemeColor)
  console.log("ThemeComponent Rendered")

  return (
    <div>
      <p>Theme: {themeColor}</p>
      <button onClick={() => updateThemeColor("light")}>Light Theme</button>
      <button onClick={() => updateThemeColor("dark")}>Dark Theme</button>
    </div>
  )
}

const NotificationsComponent = () => {
  // const { themeColor, updateThemeColor, notifications } = useStore()
  const notifications = useStore(state => state.notifications)
  console.log("NotificationsComponent Rendered")

  return <p>Notifications: {notifications ? "On" : "Off"}</p>
}

export const ThemeZustandExample = () => {
  return (
    <div>
      <ThemeComponent />
      <NotificationsComponent />
    </div>
  )
}
