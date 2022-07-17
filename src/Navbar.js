import React from "react";
import "./App.css";
function Navbar() {
  return (
    <header className="main_nav">
      <ul className="navbar">
        <span className="logo">
          <a href="/">Techy</a>
        </span>
        <li className="nav_items">
          {" "}
          <a href="/">HOME</a>
        </li>
        <li className="nav_items">
          <a href="/">COMMUNITY</a>
        </li>
        <li className="nav_items">
          <a href="/">SUPPORT</a>
        </li>
        <li className="nav_items">
          <a href="/">SERVICES</a>
        </li>
        <li className="nav_items">
          <a href="/">CAREER</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
