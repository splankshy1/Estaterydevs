import React from "react";
import "./ExploreBanner.css";

export default function ExploreBanner() {
  return (
    <section className="explore-banner-section">
      {/* Background Showcase Image */}
      <img
        src="/images/preview-card1.png"
        alt=""
        aria-hidden="true"
        className="explore-showcase-image"
      />

      {/* Banner Content */}
      <div className="explore-banner-container">
        <div className="explore-content-col">
          {/* Brand Logo */}
          <div className="explore-brand">
            <svg
              className="explore-logo-icon"
              viewBox="0 0 32 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M2 8L16 0L30 8V17L16 9L2 17V8Z" fill="white" />

              <path d="M2 19L16 11L30 19V28L16 20L2 28V19Z" fill="white" />

              <path d="M2 30L16 22L30 30V39L16 31L2 39V30Z" fill="white" />
            </svg>

            <span className="explore-brand-text">RealPress</span>
          </div>

          {/* Heading */}
          <h2 className="explore-title">
            Explore More Premium Features And Dynamic Layouts With RealPress
          </h2>

          {/* Description */}
          <p className="explore-description">
            Try different demos to unlock advanced functionalities and a richer
            experience!
          </p>

          {/* Action Button */}
          <button type="button" className="explore-btn">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
