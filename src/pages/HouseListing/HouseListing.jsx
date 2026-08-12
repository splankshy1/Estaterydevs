import { Link } from "react-router-dom";
import houses from "../../data/houses";
import "./HouseListing.css";

const ListingPage = () => {
  return (
    <div className="listing-page">
      <h1>Available Listings</h1>
      <div className="listing-grid">
        {houses.map((house) => (
          <Link to={`/listings/${house.id}`} key={house.id} className="listing-card">
            <img src={house.image} alt={house.address} />
            <div className="listing-card-info">
              <h3>{house.price}</h3>
              <p>{house.address}</p>
              <span>{house.beds} beds · {house.baths} baths · {house.sqft} sqft</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;