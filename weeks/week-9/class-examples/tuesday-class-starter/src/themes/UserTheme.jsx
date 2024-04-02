import { createContext, useState, useContext } from "react";

// Creating a new context for user data and authentication functions and storing it in the UserContext variable
const UserContext = createContext();

// Defining a context provider component named 'UserProvider'
export const UserProvider = ({ children }) => {
  // Using the useState hook to manage the 'isLoggedIn' state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Adding state variables for userName and email
  const [userNameStore, setUserStoreName] = useState("");
  const [emailStore, setEmailStore] = useState("");
  const [passwordStore, setPasswordStore] = useState("");

  // Defining functions for user authentication
  const login = (username, email, password) => {
    // Here you would validate username and password, but for simplicity let's just set isLoggedIn to true
    setIsLoggedIn(true);
    setUserStoreName(username); // Setting userName after successful login
    setEmailStore(email);
    setPasswordStore(password);

    // setEmail(localStorage.getItem("email")); // Getting email from localStorage after successful login
    //JSON.parse(localStorage.getItem("account")).name;
  };

  const logout = () => {
    // Clear localStorage and cookie on logout
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("email"); // Clearing email from localStorage on logout
    document.cookie = `loggedIn=; expires=${new Date(0).toUTCString()}; path=/`;

    setIsLoggedIn(false);
    setUserName(""); // Clearing userName on logout
    setEmailStore(""); // Clearing email on logout

    // Redirecting user to login page upon logout
    navigate("/login");
  };

  // Returning the provider component to make the user data and authentication functions available to child components
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        userNameStore,
        emailStore,
        passwordStore,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Defining a custom hook named 'useUser' to provide an easier way to access the UserContext
export const useUserTheme = () => useContext(UserContext);
