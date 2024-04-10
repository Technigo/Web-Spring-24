import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"

const Login = () => {
  const { isLoggedIn, login, logout } = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    try {
      login(username, password)
      setError("")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <div>Welcome, {username}!</div>
          <button onClick={logout} className="logButton">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="logButton">
            Login
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  )
}

export default Login
