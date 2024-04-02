import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const links = [
    { to: "/", text: "Home Page - Using Link Comp" },
    { to: "/about", text: "About Page" },
    { to: "/my-info", text: "My Info Page" },
  ];

  return (
    <div className="card-menu">
      <h4> Using Link Comp</h4>
      <nav>
        <ul className="app-ul">
          {links.map(({ to, text }) => (
            <li key={to} className="app-li">
              <Link to={to}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
