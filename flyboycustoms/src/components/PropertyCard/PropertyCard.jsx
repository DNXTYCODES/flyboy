import React from "react";
import "./PropertyCard.css"; // Add styles for the card if necessary

const PropertyCard = ({ card }) => {
  const { name, price, image } = card;

  return (
    <div className="property-card">
      <img src={image} alt={name} className="property-card-image" />
      <div className="property-card-details">
        <h3 className="property-card-name">{name}</h3>
        {/* <p className="property-card-price">{price}</p> */}
      </div>
    </div>
  );
};

export default PropertyCard;
