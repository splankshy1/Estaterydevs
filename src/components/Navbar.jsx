import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Listing", to: "/listings" },
  { label: "Contact", to: "/contact" },
  { label: "Agents", to: "/agents" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <svg
            className="navbar__logo-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 11h.01M15 11h.01M9 15h.01M15 15h.01"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="navbar__logo-text">RealPro</span>
        </Link>

        {/* Nav links */}
        <nav className="navbar__links">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="navbar__actions">
          <Link to="/login" className="navbar__signup">
            Sign Up
          </Link>

          <Link to="/login" className="navbar__cta">
            Create A Listing
          </Link>

          <button className="navbar__cart" aria-label="Cart">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6h15l-1.5 9h-12L6 6zM6 6L5 3H2M9 21a1 1 0 100-2 1 1 0 000 2zM18 21a1 1 0 100-2 1 1 0 000 2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
