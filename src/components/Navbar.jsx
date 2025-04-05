// src/components/Navbar.jsx
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        {/* Logo */}
        <div className="logo">
          <a href="#home">
            <img src="/assets/logo_3.png" alt="Logo" />
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#events" onClick={toggleMenu}>Events</a>
          <a href="#gallery" onClick={toggleMenu}>Gallery</a>
          <a href="#sponsors" onClick={toggleMenu}>Sponsors</a>
          <a href="#team" onClick={toggleMenu}>Team</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;