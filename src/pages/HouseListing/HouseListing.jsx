import { Link } from "react-router-dom";
import houses from "../../data/houses";
import "./HouseListing.css";

const ListingPage = () => {
  return (
    <div className="listing-page">
      <div className="listing-header-row">
        <h1>Property Listing</h1>
        <div className="listing-view-controls">
          <select className="sort-select">
            <option>Most popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="view-icon-btn">☰</button>
          <button className="view-icon-btn">▦</button>
        </div>
      </div>

      <div className="listing-filters">
        <input type="text" placeholder="What are you looking for" />
        <select>
  <option>Status</option>
  <option>For Rent</option>
  <option>For Sale</option>
</select>
<select>
  <option>Type</option>
  <option>Apartment</option>
  <option>Condo</option>
  <option>House</option>
  <option>Land</option>
  <option>Manufactured</option>
  <option>Townhome</option>
  <option>Villa</option>
</select>
<select>
  <option>Beds</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5+</option>
</select>
<select>
  <option>Baths</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4+</option>
</select>
        <button className="reset-btn">↺</button>
        <button className="filter-icon-btn">▼</button>
        <button className="search-btn">Search</button>
      </div>

      <div className="listing-range-filters">
        <div className="range-group">
          <label>Price</label>
          <div className="range-inputs">
            <input type="text" placeholder="Max Price" />
            <span>—</span>
            <input type="text" placeholder="Min Price" />
          </div>
        </div>
        <div className="range-group">
          <label>Area</label>
          <div className="range-inputs">
            <input type="text" placeholder="Max Area" />
            <span>—</span>
            <input type="text" placeholder="Min Area" />
          </div>
        </div>
        <div className="range-group">
          <label>Year Built</label>
          <div className="range-inputs">
            <input type="text" placeholder="Min Year" />
            <span>—</span>
            <input type="text" placeholder="Max Year" />
          </div>
        </div>
      </div>

      <div className="listing-grid">
        {houses.map((house) => (
          <div className="listing-card" key={house.id}>
            <div className="listing-image-wrap">
              <img src={house.image} alt={house.title} />
              <span className="listing-badge">{house.status}</span>
            </div>
            <div className="listing-card-info">
              <h3>{house.title}</h3>
              <p className="listing-location">{house.location}</p>
              <div className="listing-specs">
                <span>{house.beds} bd</span>
                <span>{house.baths} ba</span>
                <span>{house.sqft} sqft</span>
              </div>
              <div className="listing-bottom">
                <span className="listing-price">{house.price}<small>/month</small></span>
                <Link to={`/listings/${house.id}`} className="view-detail-btn">View Detail</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
