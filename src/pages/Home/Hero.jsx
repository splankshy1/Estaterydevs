import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Text Content */}
        <div className="hero-content">
          <p className="hero-subtitle">
            More than <span className="highlight-text">10M+</span> house avaiable for sell & rent
          </p>
          <h1 className="hero-title">
            FIND YOUR NEXT <br />
            PERFECT <span className="highlight-text">PLACE</span>
          </h1>
          <button className="hero-btn">
            Explore More
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Right Image Container */}
        <div className="hero-image-wrapper">
          <img 
            src="/images/Hero-building1.png" 
            alt="Modern Building Architecture" 
            className="hero-img"
          />

          {/* Dark Glass Overlay Card */}
          <div className="hero-floating-card">
            <div className="floating-card-top">
              <div className="white-number-badge">
                10k+
              </div>
              <div className="badge-title">
                <span>Exclusive</span>
                <span>Agents</span>
              </div>
            </div>
            <div className="floating-card-bottom">
              <span className="bold-stat">+183,406</span>
              <span className="stat-label">Valuation Appointments</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}