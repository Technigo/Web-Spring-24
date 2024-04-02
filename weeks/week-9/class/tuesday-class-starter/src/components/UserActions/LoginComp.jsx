import { useState, useEffect } from "react";

export const LoginComp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // Normally, you would validate username and password here
    // Check if username or password is empty
    if (!username || !password) {
      alert("Please enter both username and password."); // Display alert if username or password is empty
      return; // Exit function early if username or password is empty
    }
    // For simplicity, let's just set them in localStorage and create a cookie
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    document.cookie = `loggedIn=true; expires=${new Date(
      Date.now() + 3600 * 1000
    ).toUTCString()}; path=/`;

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Clear localStorage and cookie on logout
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    document.cookie = `loggedIn=; expires=${new Date(0).toUTCString()}; path=/`;

    setIsLoggedIn(false);
  };

  return (
    <div className="login">
      {isLoggedIn ? (
        <div>
          <p>Welcome, {localStorage.getItem("username")}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};
