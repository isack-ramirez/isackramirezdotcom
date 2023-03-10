import React, { useState } from "react";
import "./css/navbar.css"; // You'll need to create this CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" style={{ zIndex: "9999" }}>
      <div className="navbar-logo">Isack Ramirez</div>
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <a href="#github">GitHub</a>
        <a href="#linkedin">LinkedIn</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
      </div>
      <div className="navbar-hamburger" onClick={handleMenuClick}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </nav>
  );
}

export default Navbar;