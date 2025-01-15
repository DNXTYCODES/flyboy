import React from "react";
import "./DetailsPreview.css";

const DetailsPreview = () => {
  const details = [
    {
      id: 1,
      name: "Premium Products",
      image: "3d44823640d70dca4f1c0f08395fc75e-large.jpg", // Replace with actual image URL
      description: "We use only the finest products for optimal car care.",
    },
    {
      id: 2,
      name: "Skilled Professionals",
      image: "7f9ca5427953384d3f2313aa080be846-large.jpg", // Replace with actual image URL
      description: "Our team has years of experience in car detailing.",
    },
    {
      id: 3,
      name: "Attention to Detail",
      image: "696cffa35dfb93548b340bbbfe20f8bd-large.jpg", // Replace with actual image URL
      description: "Every corner and crevice is meticulously cared for.",
    },
    {
      id: 4,
      name: "Satisfaction Guaranteed",
      image: "6731251ff92776004529c781d498084f-large.jpg", // Replace with actual image URL
      description: "Your happiness is our priority, every single time.",
    },
  ];

  return (
    <section className="details-preview paddings wrapper">
      <div className="innerWidth flexColStart">
        <h2 className="primaryText">The Difference is in the Details</h2>
        <p className="secondaryText">
          Explore the exceptional quality and care we bring to your car.
        </p>
        <div className="details-grid">
          {details.map((detail) => (
            <div className="detail-card" key={detail.id}>
              <img src={detail.image} alt={detail.name} className="detail-image" />
              <h3 className="orangeText">{detail.name}</h3>
              <p className="secondaryText">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsPreview;
