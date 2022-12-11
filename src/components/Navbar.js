import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import GenreList from "./GenreList";
const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);
  const [isShown, setIsShown] = useState(false);
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
        <Link to="/" className="navbar__left-logo">
          Logo
        </Link>
        <ul className="navbar__left-list">
          <li
            className="navbar__left-list-item"
            to="/genre"
            onMouseEnter={() => setIsShown(true)}
          >
            Genre
          </li>
          {isShown && <GenreList isShown={isShown} setIsShown={setIsShown} />}
          <Link to="/wallpapers" className="navbar__left-list-item">
            Wallpapers
          </Link>
          <Link to="/manga" className="navbar__left-list-item">
            Manga
          </Link>
        </ul>
      </div>
      <div className="navbar__search">
        <input
          type="text"
          className="navbar__search-input"
          placeholder="Search your anime"
        />
        <i className="fa-solid fa-magnifying-glass navbar__search-bar"></i>
      </div>
    </nav>
  );
};

export default Navbar;
