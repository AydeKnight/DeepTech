import React from 'react';
import "../../styles/style.css";
function PricingComponent({ refProp }) {
  return (
    <div ref={refProp} id="pricing" className="pricing-section">
      <div className="pricing-cards">
        {/* Buy Card */}
        <div className="pricing-card">
          <h2>Buy</h2>
          <div className="price">$699</div>
          <div className="desc">forever usable with all licences</div>
          <ul className="features">
            <li>Full licence</li>
            <li>5 free images per month</li>
            <li>3 Users</li>
            <li>Unlimited Tasks</li>
          </ul>
          <button className="pricing-btn">Buy Model <span className="arrow">→</span></button>
        </div>
        {/* Rent Card */}
        <div className="pricing-card best-deal">
          <div className="badge">#bestdeal</div>
          <h2>Rent</h2>
          <div className="price">$399</div>
          <div className="desc">Will br used by other brands as well</div>
          <ul className="features">
            <li>No licence</li>
            <li>No free images</li>
            <li>3 users</li>
            <li>Limited tasks</li>
          </ul>
          <button className="pricing-btn">Get Unlimited <span className="arrow">→</span></button>
        </div>
        {/* Create Card */}
        <div className="pricing-card">
          <h2>Create</h2>
          <div className="price">$999</div>
          <div className="desc">Create with your imagination or replicate your brands models.</div>
          <ul className="features">
            <li>Full licence</li>
            <li>5 free images</li>
            <li>3 users</li>
            <li>Unlimited tasks</li>
          </ul>
          <button className="pricing-btn">Get Enterprise <span className="arrow">→</span></button>
        </div>
      </div>
    </div>
  );
}

export default PricingComponent;
