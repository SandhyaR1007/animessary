import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setBgColor(true);
      } else {
        setBgColor(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`navbar ${bgColor ? "navbar__black" : ""}`}>
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
