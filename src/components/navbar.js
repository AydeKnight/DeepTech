import React from 'react';
import "../styles/style.css";

function Navbar({ scrollToModels, scrollToPricing, scrollToAbout }) {
  return (
    <div className="navbar">
      <img src={`${process.env.PUBLIC_URL}/favico.jpg`} alt="Logo" className="logo-image" />
      <div className="logo">
        DeepTech
      </div>
      <div className="nav-links">
      <a href="#models" className="nav-link" onClick={scrollToModels}>Models</a>
      <a href="#pricing" className="nav-link" onClick={scrollToPricing}>Pricing</a>
      <a href="#about" className="nav-link" onClick={scrollToAbout}>About</a>
      
        {/* <button type="button" class="btn btn-outline-light">Models</button>
        <button type="button" class="btn btn-outline-light">Pricing</button>
        <button type="button" class="btn btn-outline-light">About</button> */}
      </div>
      <button className="sign-up" disabled={true} >Sign up</button>
    </div>
  );
}

export default Navbar;
