import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaPlus, FaUtensils, FaBullseye, FaChartLine, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import "./Styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <MdFavorite className="logo-icon" />
        </div>
        <div>
          <h1 className="app-name">Fitness-Tracking</h1>
          <p className="tagline">Your fitness journey</p>
        </div>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/Dashboard" className="nav-link" onClick={closeMenu}>
          <FaHome /> Dashboard
        </NavLink>
        <NavLink to="/log" className="nav-link" onClick={closeMenu}>
          <FaPlus /> Log Workout
        </NavLink>
        <NavLink to="/goals" className="nav-link" onClick={closeMenu}>
          <FaBullseye /> Goals
        </NavLink>
        <NavLink to="/progress" className="nav-link" onClick={closeMenu}>
          <FaChartLine /> Progress
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>
          <FaInfoCircle /> About Us
        </NavLink>
      </div>
      
    </nav>
    
  );
};

export default Navbar;
