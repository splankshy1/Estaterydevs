import { useParams } from "react-router-dom";
import houses from "../../data/houses";
import "./HomeDetails.css";

const HouseDetailsPage = () => {
  const { id } = useParams();
  const house = houses.find((h) => h.id === Number(id));

  if (!house) {
    return <div className="details-page">Listing not found.</div>;
  }

  return (
    <div className="details-page">
      <img src={house.image} alt={house.address} className="details-image" />
      <div className="details-content">
        <h1>{house.price}</h1>
        <p className="details-address">{house.address}</p>
        <div className="details-specs">
          <span>{house.beds} beds</span>
          <span>{house.baths} baths</span>
          <span>{house.sqft} sqft</span>
        </div>
        <p className="details-description">{house.description}</p>
      </div>
    </div>
  );
};

export default HouseDetailsPage;