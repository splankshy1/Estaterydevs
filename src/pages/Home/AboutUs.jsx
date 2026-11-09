import React from 'react';
import { Calendar, Award, Users, Percent } from 'lucide-react';
import './AboutUs.css';

const stats = [
  {
    id: 1,
    value: '8+',
    label: 'Years Experience',
    icon: Calendar,
  },
  {
    id: 2,
    value: '350+',
    label: 'Expert Researchers',
    icon: Award,
  },
  {
    id: 3,
    value: '10K+',
    label: 'Real Estate Agents',
    icon: Users,
  },
  {
    id: 4,
    value: '2.5K+',
    label: 'Listing For Sale',
    icon: Percent,
  },
];

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Decorative red dot */}
        <span className="about-red-dot"></span>

        {/* LEFT SIDE */}
        <div className="about-content">

          <span className="about-subtitle">
            WHO WE ARE?
          </span>

          <h2 className="about-title">
            The Experts In Property
          </h2>

          <p className="about-description">
            We are a leading company in the real estate sector, specializing
            in providing a wide range of services and solutions to meet the
            needs of buying, renting, and managing real estate assets. With
            experience and dedication, we are...
          </p>

          {/* STATS */}
          <div className="about-stats-grid">
            {stats.map((item) => {
              const IconComponent = item.icon;

              return (
                <div className="stat-card" key={item.id}>

                  <div className="stat-icon-box">
                    <IconComponent size={17} strokeWidth={1.5} />
                  </div>

                  <div className="stat-info">
                    <span className="stat-value">
                      {item.value}
                    </span>

                    <span className="stat-label">
                      {item.label}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

          {/* BUTTON */}
          <button className="explore-btn">
            Explore More
          </button>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="about-image-wrapper">
          <img
            src="/images/about-building.png"
            alt="Modern Architecture"
            className="about-image"
          />
        </div>

      </div>
    </section>
  );
};