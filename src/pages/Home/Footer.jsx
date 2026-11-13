
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Brand Column */}
        <div className="footer-brand-column">

          {/* RealPress Logo */}
          <div className="footer-logo">
            <svg
              width="24"
              height="30"
              viewBox="0 0 32 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8L16 0L30 8V17L16 9L2 17V8Z"
                fill="#1C3F91"
              />
              <path
                d="M2 19L16 11L30 19V28L16 20L2 28V19Z"
                fill="#1C3F91"
              />
              <path
                d="M2 30L16 22L30 30V39L16 31L2 39V30Z"
                fill="#1C3F91"
              />
            </svg>

            <span>RealPress</span>
          </div>

          <p className="footer-description">
            Your trusted partner in finding the perfect
            property. We make buying, selling and renting
            simple and stress-free.
          </p>

          {/* Contact Details */}
          <div className="footer-contact">

            <p>
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              123 Real Estate Avenue, Nigeria
            </p>

            <p>
              <svg viewBox="0 0 24 24">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
              </svg>
              +234 800 000 0000
            </p>

            <p>
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              info@realpress.com
            </p>

          </div>

          {/* Social Media Icons */}
          <div className="footer-socials">

            {/* Facebook */}
            <a href="https://facebook.com" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a href="https://x.com" aria-label="X">
              <svg viewBox="0 0 24 24">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.2L5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24">
                <path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 9h4v12H3V9Zm6 0h4v1.6c.6-1.1 1.8-2 3.7-2 3.5 0 4.3 2.2 4.3 5.1V21h-4v-6.5c0-1.6 0-3-1.9-3s-2.2 1.5-2.2 2.9V21H9V9Z" />
              </svg>
            </a>

          </div>
        </div>

        {/* Explore Column */}
        <div className="footer-links-column">
          <h4>Explore</h4>
          <a href="/about">About Us</a>
          <a href="/properties">Our Properties</a>
          <a href="/agents">Property Agents</a>
          <a href="/partners">Partners</a>
          <a href="/listings">Find Properties</a>
        </div>

        {/* Links Column */}
        <div className="footer-links-column">
          <h4>Links</h4>
          <a href="/services">Services</a>
          <a href="/events">Events</a>
          <a href="/knowledge">Knowledge</a>
          <a href="/buy">Buying & Selling</a>
          <a href="/listings">Find Listings</a>
        </div>

        {/* Terms Column */}
        <div className="footer-links-column">
          <h4>Terms</h4>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/about">About Us</a>
          <a href="/team">Our Team</a>
          <a href="/terms">Terms of Use</a>
          <a href="/cookies">Cookie Policy</a>
        </div>

        {/* Newsletter Column */}
        <div className="footer-newsletter">
          <h4>Subscribe</h4>

          <p>
            Subscribe to our newsletter and stay
            updated with our latest properties
            and real estate news.
          </p>

          <form
            className="footer-subscribe-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your email address"
              required
            />

            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} RealPress.
          All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}
