import React from 'react';
import "../styles/style.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src={`${process.env.PUBLIC_URL}/favico.jpg`} alt="Logo" className="logo-image" />
      <div className="logo">
        DeepTech
      </div>
      <div className="nav-links">
        {/* <a href="#models">Models</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a> */}
        <button type="button" class="btn btn-outline-light">Models</button>
        <button type="button" class="btn btn-outline-light">Pricing</button>
        <button type="button" class="btn btn-outline-light">About</button>
      </div>
      <button className="sign-up" disabled={true} >Sign up</button>
    </div>
  );
}

export default Navbar;
