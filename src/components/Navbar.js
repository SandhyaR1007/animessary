import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__left-logo">Logo</div>
        <ul className="navbar__left-list">
          <li className="navbar__left-list-item">Genre</li>
          <li className="navbar__left-list-item">Wallpapers</li>
          <li className="navbar__left-list-item">Manga</li>
        </ul>
      </div>
      <div className="navbar__search">
        <input type="text" className="navbar__search-input" />
      </div>
    </nav>
  );
};

export default Navbar;
