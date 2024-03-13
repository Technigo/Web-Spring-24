import { useState } from 'react'
import './App.css'
import { Count } from './components/Count'
import { Loader } from './components/Loader'

export const App = () => {
  const [theme, setTheme] = useState('dark')
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleThemeChange = () => {
    // change the theme!


    if (theme === 'dark') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('crazy')
    } else {
      setTheme('dark')
    }


    // Ternary operators with more that two choices, get's a bit messy fast!
    // setTheme(theme === 'dark' ? 'light' : theme === 'light' ? 'crazy' : 'dark')

  }

  return (
    <main className={`container ${theme}`}>

      {/* To check if a value is false we can use ! before the variable  */}
      {!loading ? <p>we are not loading</p> : <Loader />}

      {/* If loading is true, we render the Loader component */}
      {loading && <Loader />}

      <button onClick={handleThemeChange}>
        Change to {theme === 'dark' ? 'light' : theme === 'light' ? 'crazy' : 'dark'} mode
      </button>

      <button onClick={() => setDarkMode(!darkMode)}>
        change to {darkMode ? 'LIGHT' : 'DARK'}
      </button>

      <h1>Let's talk about state</h1>

      <div className="card">
        <h2>State is like the components memory</h2>
        <p>When a value of a state variable changes, a rerender is triggered. React is reacting to that change!</p>
      </div>

      <Count />

    </main>
  )
}

