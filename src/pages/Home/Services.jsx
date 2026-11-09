import React from 'react';
import './Services.css';

// SVG Icons matching Figma design — clean, single-weight line icons

// Rent: house on an open hand/swoosh (handing over the keys)
const RentIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10.5L12 5.5L18 10.5V16.5C18 17.0523 17.5523 17.5 17 17.5H7C6.44772 17.5 6 17.0523 6 16.5V10.5Z"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 17.5V13H14V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 16.8C5.8 15.2 8.7 15.1 10.2 16.4C11.7 17.7 14.6 17.7 16.1 16.4C17.2 15.5 19 15.1 20.5 15.6"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Sell: house with a price tag/pin at the corner
const SellIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 10.5L12 4.5L19.5 10.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M6 9.5V18.5H18V9.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M9.5 18.5V13.5H14.5V18.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle
      cx="17"
      cy="7"
      r="3"
      fill="white"
      stroke="currentColor"
      strokeWidth="1.2"
    />

    <path
      d="M17 5.5V8.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />

    <path
      d="M18 6.3C17.7 5.9 17.4 5.7 17 5.7C16.4 5.7 16 6 16 6.4C16 7.3 18 7 18 7.9C18 8.3 17.6 8.6 17 8.6C16.5 8.6 16.1 8.4 15.9 8.1"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
    />
  </svg>
);

// Buy: house beside a document/contract
const BuyIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Property document */}
    <path
      d="M13 3.5H18.5L21 6V19C21 19.55 20.55 20 20 20H11"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Folded document corner */}
    <path
      d="M18.5 3.5V6H21"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* House roof and walls */}
    <path
      d="M3 11L8.5 6.5L14 11V19H3V11Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Door */}
    <path
      d="M7 19V14H10V19"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Document details */}
    <path
      d="M15.5 10H18.5M15.5 13H18.5M15.5 16H18"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);
const services = [
  {
    id: 1,
    title: 'Rent A Property',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    Icon: RentIcon,
  },
  {
    id: 2,
    title: 'Sell A Property',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    Icon: SellIcon,
  },
  {
    id: 3,
    title: 'Buy A Property',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    Icon: BuyIcon,
  }
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">

        <div className="services-header">
          <span className="services-subtitle">DISCOVER OUR SERVICES</span>
          <h2 className="services-title">What We Are Providing</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const { Icon } = service;
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-box">
                  <Icon />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
