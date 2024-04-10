// AuthContext.js
import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const users = [
    { username: "nella", password: "1234" },
    { username: "student", password: "4321" },
    // Add more users as needed
  ]

  const login = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    )
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
      throw new Error("Invalid username or password")
    }
  }

  const logout = () => {
    // Implement logout logic here
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
