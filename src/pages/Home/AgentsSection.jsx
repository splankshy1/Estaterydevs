import React from 'react';
import './AgentsSection.css'; // Ensure your CSS file is imported

export default function AgentsSection() {
  return (
    <section className="agents-section">
      <div className="agents-container">
        
        {/* Left Column: Header & Controls */}
        <div className="agents-header-col">
          <span className="agents-subtitle">DISCOVER OUR AGENTS</span>
          <h2 className="agents-title">Meet Our Agents</h2>
          <p className="agents-description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
          </p>
          <button className="become-agent-btn">Become Our Agents</button>
          
          <div className="agents-carousel-controls">
            <button className="control-btn prev-btn" aria-label="Previous">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="control-btn next-btn" aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Right Column: Agent Cards Grid */}
        <div className="agents-cards-col">
          
          {/* Agent Card 1 */}
          <div className="agent-card">
            <div className="agent-image-wrapper">
              <img src="/images/agent-image2.jpeg" alt="Rachel Dan" className="agent-image" />
            </div>
            <div className="agent-info-card">
              <h3 className="agent-name">Rachel Dan</h3>
              <p className="agent-detail"><span>Agent License:</span> 090-0348-8346</p>
              <p className="agent-detail"><span>Mobile:</span> (559) 392-5009</p>
            </div>
          </div>

          {/* Agent Card 2 */}
          <div className="agent-card">
            <div className="agent-image-wrapper">
              <img src="/images/agent-image1.jpeg" alt="Rachel Dan" className="agent-image" />
            </div>
            <div className="agent-info-card">
              <h3 className="agent-name">Rachel Dan</h3>
              <p className="agent-detail"><span>Agent License:</span> 090-0348-8346</p>
              <p className="agent-detail"><span>Mobile:</span> (559) 392-5009</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}