// src/components/Navbar.jsx
function Navbar() {
    return (
      <nav className="navbar">
        <div className="container navbar-content">
{/* Logo */}
        <div className="logo">
          <a href="#home">
            <img src="/assets/logo_3.png" alt="Logo" />
          </a>
        </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#gallery">Gallery</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;