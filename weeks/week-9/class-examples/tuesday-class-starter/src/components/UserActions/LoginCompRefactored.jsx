import { useState } from "react";
import { useUserTheme } from "../../themes/UserTheme";

export const LoginCompRefactored = () => {
  const {
    isLoggedIn,
    login,
    logout,
    userNameStore,
    emailStore,
    passwordStore,
  } = useUserTheme(); // Using the custom hook to access user authentication functions
  const [username, setUsername] = useState(""); // Creating state for username input field
  const [password, setPassword] = useState(""); // Creating state for password input field
  const [userEmail, setUserEmail] = useState(""); // Creating state for email input field

  const handleLogin = () => {
    // Check if username or password is empty
    if (!username || !password || !userEmail) {
      // Check if any field is empty
      alert("Please enter both username, email, and password.");
      return;
    }
    // For simplicity, let's just set them in localStorage and create a cookie
    localStorage.setItem("username", username); // Save username to localStorage
    localStorage.setItem("password", password); // Save password to localStorage
    localStorage.setItem("email", userEmail); // Save email to localStorage
    document.cookie = `loggedIn=true; expires=${new Date(
      Date.now() + 3600 * 1000
    ).toUTCString()}; path=/`;
    // Call the login function from the context provider
    login(username, userEmail, password); // Passing username and password to the login function
    // Clear the input fields after login
    setUsername(""); // Resetting username state
    setPassword(""); // Resetting password state
    setUserEmail(""); // Resetting email state
  };

  const userNameFromStorage = JSON.parse(localStorage.getItem("account"));

  const handleLogout = () => {
    // Call the logout function from the context provider
    logout(); // Call logout function from the context
    // Or just call the logOut  method directly there...
  };

  // DESTRUCTURING A BIT MORE
  // Event handler for username input field
  //   const handleUsernameChange = (e) => {
  //     setUsername(e.target.value); // Update username state
  //   };

  //   // Event handler for password input field
  //   const handlePasswordChange = (e) => {
  //     setPassword(e.target.value); // Update password state
  //   };

  return (
    <div className="login">
      <h2>Login</h2>
      {isLoggedIn ? ( // Conditional rendering based on isLoggedIn state
        <div>
          {/* <p>Welcome, {JSON.parse(localStorage.getItem("account")).name}!</p> */}
          {/* or */}
          {/* -- */}
          {/* <p>Welcome, {userNameFromStorage.name}!</p> */}
          <div>
            <h3>Welcome Back - {userNameStore}</h3>
            <p>Your email is - {emailStore}</p>
            <p>Your password is - {passwordStore}</p>
          </div>
          {/* Displaying welcome message with username */}
          <button onClick={handleLogout}>Logout</button> {/* Logout button */}
        </div>
      ) : (
        <div>
          <label htmlFor="username">Username:</label>{" "}
          {/* Label for username input field */}
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state on input change
          />
          <label htmlFor="email">Email:</label> {/* Add email input field */}
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>{" "}
          {/* Label for password input field */}
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          />
          <button onClick={handleLogin}>Login</button> {/* Login button */}
        </div>
      )}
    </div>
  );
};
