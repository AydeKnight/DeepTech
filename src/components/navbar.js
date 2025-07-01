import React, { useState } from 'react';
import "../styles/style.css";

function Navbar({ scrollToModels, scrollToPricing, scrollToAbout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent default anchor and scroll smoothly
  const handleNavClick = (fn, e) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      fn();
    }, 200); // 200ms for menu close animation
  };

  const handleMenuToggle = () => setMenuOpen((open) => !open);

  return (
    <div className="navbar">
      <div className="navbar-row">
        <img src={`${process.env.PUBLIC_URL}/favico.jpg`} alt="Logo" className="logo-image" />
        <div className="logo">DeepTech</div>
        <div className={`nav-menu${menuOpen ? " open" : ""}`}>
          <div className="nav-links">
            <a href="#models" className="nav-link" onClick={e => handleNavClick(scrollToModels, e)}>Models</a>
            <a href="#pricing" className="nav-link" onClick={e => handleNavClick(scrollToPricing, e)}>Pricing</a>
            <a href="#about" className="nav-link" onClick={e => handleNavClick(scrollToAbout, e)}>About</a>
          </div>
          <button className="sign-up" disabled={true}>Sign up</button>
        </div>
        <button className="hamburger" onClick={handleMenuToggle} aria-label="Toggle menu">
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
