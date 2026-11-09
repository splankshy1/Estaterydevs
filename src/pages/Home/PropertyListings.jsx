import React from 'react';
import { MapPin, Bed, Bath, Move } from 'lucide-react';
import './PropertyListings.css';

const properties = [
  {
    id: 1,
    tag: 'For Rent',
    title: 'High-Rise Townhouse',
    location: 'Southwestern Ontario, Ontario, Canada',
    beds: 4,
    baths: 3,
    sqft: '120/280 sqft',
    price: '$ 1,239',
    period: '/Month',
    image: '/images/property-1.png'
  },
  {
    id: 2,
    tag: 'For Rent',
    title: 'High-Rise Townhouse',
    location: 'Southwestern Ontario, Ontario, Canada',
    beds: 4,
    baths: 3,
    sqft: '120/280 sqft',
    price: '$ 1,239',
    period: '/Month',
    image: '/images/property-2.png'
  },
  {
    id: 3,
    tag: 'For Rent',
    title: 'High-Rise Townhouse',
    location: 'Southwestern Ontario, Ontario, Canada',
    beds: 4,
    baths: 3,
    sqft: '120/280 sqft',
    price: '$ 1,239',
    period: '/Month',
    image: '/images/property-3.png'
  },
  {
    id: 4,
    tag: 'For Rent',
    title: 'High-Rise Townhouse',
    location: 'Southwestern Ontario, Ontario, Canada',
    beds: 4,
    baths: 3,
    sqft: '120/280 sqft',
    price: '$ 1,239',
    period: '/Month',
    image: '/images/property-4.png'
  },
  {
    id: 5,
    tag: 'For Rent',
    title: 'High-Rise Townhouse',
    location: 'Southwestern Ontario, Ontario, Canada',
    beds: 4,
    baths: 3,
    sqft: '120/280 sqft',
    price: '$ 1,239',
    period: '/Month',
    image: '/images/property-5.png'
  },
  {
    id: 6,
    tag: 'For Rent',
    title: 'High-Rise Townhouse',
    location: 'Southwestern Ontario, Ontario, Canada',
    beds: 4,
    baths: 3,
    sqft: '120/280 sqft',
    price: '$ 1,239',
    period: '/Month',
    image: '/images/property-6.png'
  }
];

export default function PropertyListings() {
  return (
    <section className="pl-section">
      <div className="pl-container">
        
        {/* Header */}
        <div className="pl-header">
          <span className="pl-subtitle">DISCOVER OUR PROPERTIES</span>
          <h2 className="pl-title">Latest Properties</h2>
        </div>

        {/* Grid */}
        <div className="pl-grid">
          {properties.map((item) => (
            <div key={item.id} className="pl-card">
              <div className="pl-image-wrapper">
                <img src={item.image} alt={item.title} className="pl-image" />
                <span className={`pl-tag ${item.tag === 'For Sale' ? 'pl-tag-sale' : 'pl-tag-rent'}`}>
                  {item.tag}
                </span>
              </div>

              <div className="pl-card-body">
                <h3 className="pl-card-title">{item.title}</h3>
                
                <div className="pl-location">
                  <MapPin size={14} className="pl-loc-icon" />
                  <span>{item.location}</span>
                </div>

                <div className="pl-features">
                  <div className="pl-feature-item">
                    <Bed size={14} /> <span>{item.beds} Beds</span>
                  </div>
                  <span className="pl-divider">|</span>
                  <div className="pl-feature-item">
                    <Bath size={14} /> <span>{item.baths} Baths</span>
                  </div>
                  <span className="pl-divider">|</span>
                  <div className="pl-feature-item">
                    <Move size={14} /> <span>{item.sqft}</span>
                  </div>
                </div>

                <div className="pl-card-footer">
                  <div className="pl-price">
                    <span className="pl-amount">{item.price}</span>
                    <span className="pl-period">{item.period}</span>
                  </div>
                  <button className="pl-view-btn">View Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pl-cta-wrapper">
          <button className="pl-cta-btn">View All</button>
        </div>

      </div>
    </section>
  );
}