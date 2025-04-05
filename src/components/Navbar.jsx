import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <a href="#home">
            <img src="/assets/logo_3.png" alt="Science Circus Logo" />
          </a>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
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