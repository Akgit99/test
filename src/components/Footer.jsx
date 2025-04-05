// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Subscription */}
        <div className="newsletter-section">
          <h3>Subscribe to Our Newsletter</h3>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="submit-button">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p className="location">
            <strong>Location:</strong>Department of Physics and Astrophysics, North Campus, University of Delhi, University Enclave, Delhi, 110007
          </p>
          <p className="owner-email">
            <strong>Email:</strong> <a href="mailto:Jitendhaka01@physics.du.ac.in">Jitendhaka01@physics.du.ac.in</a>
          </p>
          <p className="phone">
            <strong>Phone:</strong> <a href="tel:+918955701507">+91 89557 01507</a>
          </p>
        </div>

        {/* Copyright */}
        <p className="copyright">
          © {new Date().getFullYear()} Science Circus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;