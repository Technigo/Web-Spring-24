import { useState } from "react"
import { Example } from "./components/Examples/Example"
import { Activites } from "./components/Examples/Activities"

export const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleMode = () => {
    setDarkMode(!darkMode)
  }

  if (darkMode) {
    document.body.classList.add("dark-mode")
    document.body.classList.remove("light-mode")
  } else {
    document.body.classList.add("light-mode")
    document.body.classList.remove("dark-mode")
  }

  const buttonClass = darkMode ? "button-dark" : "button-light"

  return (
    <div className="app">
      <button className={`toggle ${buttonClass}`} onClick={toggleMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <span>
        <h1>⚛ Learning the useEffect() Hook in React ⚛</h1>
      </span>

      <div className="card">
        <Example />
        <Activites mode={darkMode} />
      </div>
    </div>
  )
}
