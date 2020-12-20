import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-container">
          <li className="navbar-list-item">
            <Link to="/" className="navbar-button-text">
              Home
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/" className="navbar-button-text">
              Skills
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/" className="navbar-button-text">
              Me
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/" className="navbar-button-text">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
