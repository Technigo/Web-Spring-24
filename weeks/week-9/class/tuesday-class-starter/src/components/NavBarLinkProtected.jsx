import React from "react";
import { NavLink } from "react-router-dom";
import { useUserTheme } from "../themes/UserTheme";

export const NavBarLinkProtected = () => {
  const { isLoggedIn, logout, userNameStore } = useUserTheme(); // Using the custom hook to access user authentication state

  const links = [
    { to: "/", text: "Home Page" },
    { to: "/about", text: "About Page" },
    { to: "/my-info", text: "My Info Page" },
    { to: "/login", text: "Login Page" },
    { to: "/movies", text: "Movies Page" },
    { to: "/profile", text: "Profile Page" }, // Add a new link for Profile Page
  ];

  return (
    <div className="card-menu">
      <nav>
        <h4>Using Nav Link Comp</h4>
        {isLoggedIn && (
          <div className="user-block-nav">
            <h5>Welcome Back - {userNameStore}</h5>
            <div className="button-container">
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        )}
        <ul className="app-ul">
          {links.map(({ to, text }) => (
            <li key={to} className="app-li">
              {/* Only render NavLink for Profile Page if user is logged in */}
              {to === "/profile" && !isLoggedIn ? null : (
                <NavLink
                  to={to}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {text}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
