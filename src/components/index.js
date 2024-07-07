import React from 'react';
import "../styles/style.css";

function Main() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">deeptech</div>
        <div className="nav-links">
          <a href="#models">Models</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>
        <button className="sign-up">Sign up</button>
      </div>
      <div className="main-section">
        <div className="content">
          <span className="tag">#aimodel solutions</span>
          <h1>Finetuned AI Models for Your Brand</h1>
          <p>
            Innovative solutions transforming design and marketing with cutting-edge technology, ensuring enhanced productivity, creativity, and seamless integration for businesses of all sizes.
          </p>
          <button className="know-more">know more</button>
        </div>
        <div className="image">
          <img src="path-to-your-image.png" alt="AI model" />
        </div>
      </div>
    </div>
  );
}

export default Main;
