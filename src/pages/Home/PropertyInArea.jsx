import React from "react";
import "./PropertyInArea.css";

// Replace these paths with your local image imports or paths

const propertiesData = [
  {
    id: 1,
    title: "High-Rise Townhouse",
    image: "/images/mansion1.png",
    gridClass: "card-narrow",
  },
  {
    id: 2,
    title: "High-Rise Townhouse",
    image: "/images/mansion4.png",
    gridClass: "card-wide",
  },
  {
    id: 3,
    title: "High-Rise Townhouse",
    image: "/images/mansion3.png",
    gridClass: "card-wide",
  },
  {
    id: 4,
    title: "High-Rise Townhouse",
    image: "/images/mansion2.png",
    gridClass: "card-narrow",
  },
];

const PropertyInArea = () => {
  return (
    <section className="property-area-section">
      <div className="property-area-container">
        {/* Section Header */}
        <div className="property-area-header">
          <span className="property-area-subtitle">FIND PROPERTY IN YOUR AREA</span>
          <h2 className="property-area-title">Property In Your Area</h2>
        </div>

        {/* Property Grid */}
        <div className="property-grid">
          {propertiesData.map((item) => (
            <div key={item.id} className={`property-card ${item.gridClass}`}>
              <img
                src={item.image}
                alt={item.title}
                className="property-card-img"
              />
              <div className="property-card-overlay">
                <h3 className="property-card-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyInArea;