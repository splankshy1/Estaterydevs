import { useParams } from "react-router-dom";
import houses from "../../data/houses";
import "./HomeDetails.css";

const HouseDetailsPage = () => {
  const { id } = useParams();
  const house = houses.find((h) => h.id === Number(id));

  if (!house) {
    return <div className="details-page">Listing not found.</div>;
  }

  const mainImage = house.gallery?.[0] || house.image;
  const thumbImages = house.gallery ? house.gallery.slice(1, 4) : [];
  const extraCount = house.gallery ? house.gallery.length - 4 : 0;

  return (
    <div className="details-page">
      <div className="details-container">
        {/* LEFT COLUMN */}
        <div className="details-main">
          {/* Title row */}
          <div className="details-title-row">
            <div>
              <h1 className="details-title">{house.title}</h1>
              <span className="details-status-badge">{house.status}</span>
              {house.rating && (
                <span className="details-rating">
                  {"★".repeat(house.rating)}
                  {"☆".repeat(5 - house.rating)} ({house.reviews} Reviews)
                </span>
              )}
              <p className="details-location">📍 {house.location}</p>
            </div>
            <div className="details-price">{house.price}</div>
          </div>

          {/* Gallery */}
          <div className="details-gallery">
            <img src={mainImage} alt={house.title} className="gallery-main" />
            <div className="gallery-thumbs">
              {thumbImages.map((img, i) => (
                <div className="gallery-thumb-wrap" key={i}>
                  <img src={img} alt={`${house.title} ${i + 2}`} className="gallery-thumb" />
                  {i === thumbImages.length - 1 && extraCount > 0 && (
                    <div className="gallery-more-overlay">+{extraCount}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Overview */}
          <section className="details-section">
            <h2>Overview</h2>
            <div className="overview-stats">
              <div className="overview-stat">
                <span className="stat-icon">🛏️</span>
                <span>{house.beds} Bedrooms</span>
              </div>
              <div className="overview-stat">
                <span className="stat-icon">🛁</span>
                <span>{house.baths} Bathrooms</span>
              </div>
              <div className="overview-stat">
                <span className="stat-icon">🚗</span>
                <span>{house.garage} Garage</span>
              </div>
              <div className="overview-stat">
                <span className="stat-icon">📅</span>
                <span>{house.yearBuilt} Built</span>
              </div>
              <div className="overview-stat">
                <span className="stat-icon">📐</span>
                <span>{house.sqft} sqft</span>
              </div>
            </div>
          </section>

          {/* Information table */}
          <section className="details-section">
            <h2>Information</h2>
            <table className="info-table">
              <tbody>
                <tr>
                  <td className="info-label">Price</td>
                  <td>{house.price}</td>
                  <td className="info-label">Rooms</td>
                  <td>{house.rooms}</td>
                </tr>
                <tr>
                  <td className="info-label">Area Size</td>
                  <td>{house.sqft} sqft</td>
                  <td className="info-label">Year Built</td>
                  <td>{house.yearBuilt}</td>
                </tr>
                <tr>
                  <td className="info-label">Land Area Size</td>
                  <td>{house.landAreaSize}</td>
                  <td className="info-label">Bedrooms</td>
                  <td>{house.beds}</td>
                </tr>
                <tr>
                  <td className="info-label">Property ID</td>
                  <td>{house.propertyId}</td>
                  <td className="info-label">Bathrooms</td>
                  <td>{house.baths}</td>
                </tr>
              </tbody>
            </table>

            {house.amenities && (
              <div className="amenities-list">
                {house.amenities.map((a, i) => (
                  <span className="amenity-pill" key={i}>
                    ✔ {a}
                  </span>
                ))}
              </div>
            )}

            <p className="details-description">{house.description}</p>
          </section>

          {/* Map placeholder */}
          <section className="details-section">
            <h2>Map Location</h2>
            <div className="map-placeholder">
              <p>{house.location}</p>
            </div>
          </section>

          {/* Floor plan placeholder */}
          {house.floorPlan && (
            <section className="details-section">
              <h2>Floor Plans</h2>
              <div className="floorplan-box">
                <img src={house.floorPlan} alt="Floor plan" />
              </div>
            </section>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="details-sidebar">
          <div className="sidebar-card">
            <h3>{house.title}</h3>
            <span className="details-status-badge">{house.status}</span>
            <p className="details-location">📍 {house.location}</p>
            <p className="sidebar-price">{house.price}</p>

            {house.agent && (
              <div className="agent-card">
                <img src={house.agent.image} alt={house.agent.name} className="agent-avatar" />
                <div>
                  <p className="agent-name">{house.agent.name}</p>
                  <p className="agent-phone">{house.agent.phone}</p>
                </div>
              </div>
            )}

            <button className="btn-call-now">Call Now</button>
            <button className="btn-send-message">Send A Message</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HouseDetailsPage;
