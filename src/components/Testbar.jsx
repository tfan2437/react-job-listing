// Testbar.jsx
import React, { useState } from "react";
import "./Testbar.css";

const Testbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Logo
      </a>
      <div className={`menu ${isResponsive ? "responsive" : ""}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Testbar;
