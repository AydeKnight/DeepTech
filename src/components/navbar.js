import React, { useState } from 'react';
import "../styles/style.css";

function Navbar({ scrollToModels, scrollToPricing, scrollToAbout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleNavClick = (fn) => {
    setMenuOpen(false);
    fn();
  };

  return (
    <div className="navbar">
      <div className="navbar-row">
        <img src={`${process.env.PUBLIC_URL}/favico.jpg`} alt="Logo" className="logo-image" />
        <div className="logo">DeepTech</div>
        <button className="hamburger" onClick={handleMenuToggle} aria-label="Toggle menu">
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </button>
      </div>
      <div className={`nav-menu${menuOpen ? " open" : ""}`}>
        <div className="nav-links">
          <a href="#models" className="nav-link" onClick={() => handleNavClick(scrollToModels)}>Models</a>
          <a href="#pricing" className="nav-link" onClick={() => handleNavClick(scrollToPricing)}>Pricing</a>
          <a href="#about" className="nav-link" onClick={() => handleNavClick(scrollToAbout)}>About</a>
        </div>
        <button className="sign-up" disabled={true}>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
