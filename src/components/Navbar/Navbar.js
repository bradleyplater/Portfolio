import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = ["Home", "Skills", "Me", "Contact"];

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-container">
          {navItems.map((navItem) => (
            <li className="navbar-list-item">
              <NavLink
                to={"/" + navItem}
                data-testid={"link." + navItem}
                className="navbar-link"
                activeClassName="navbar-link selected"
              >
                {navItem}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
