import React from 'react'
import AiModel from "./aimodel.jpg"
import "../styles/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function IntialPage() {
  return (
    <div className="hero-section">
      {/* Animated Blobs for background */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="hero-content-wrapper">
        <div className="main-section">
          <div className="content">
            <span className="tag">#aimodel solutions</span>
            <h1>Finetuned AI Models for Your Brand</h1>
            <p>
              Innovative solutions transforming design and marketing with cutting-edge technology, ensuring enhanced productivity, creativity, and seamless integration for businesses of all sizes.
            </p>
            <div>
              <button className="know-more">
                <span>Know More</span>
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </button>
            </div>
          </div>
          <div className="image-container">
            <img src={AiModel} alt="AI model" className="image" />
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default IntialPage;