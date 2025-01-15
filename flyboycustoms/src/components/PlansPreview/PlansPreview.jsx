

import React from "react";
import "./PlansPreview.css";

const PlansPreview = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      image: "memb1.webp", // Replace with appropriate image
      description: "Access to gym equipment during off-peak hours.",
      facilities: "Gym Access, Locker",
      duration: "1 Month",
      price: "₦19,000",
    },
    {
      id: 2,
      name: "Standard Plan",
      image: "memb22.jpeg", // Replace with appropriate image
      description: "Full access to gym facilities and group classes.",
      facilities: "Gym Access, Locker, Group Classes",
      duration: "3 Months",
      price: "₦65,000",
    },
    {
      id: 3,
      name: "Premium Plan",
      image: "memb2.jpg", // Replace with appropriate image
      description:
        "Includes personal training sessions and priority access during peak hours.",
      facilities: "Gym Access, Locker, Group Classes, Personal Trainer",
      duration: "6 Months",
      price: "₦100,000",
    },
    {
      id: 4,
      name: "Elite Plan",
      image: "memb4.jpg", // Replace with appropriate image
      description:
        "All-inclusive access with VIP facilities and unlimited personal training.",
      facilities: "All Access, VIP Locker, Personal Trainer, Wellness Programs",
      duration: "12 Months",
      price: "₦250,000",
    },
  ];

  return (
    <section className="plans-preview paddings wrapper">
      <div className="innerWidth flexColStart">
        <h2 className="primaryText">Membership Plans</h2>
        <p className="secondaryText">
          Choose a plan that suits your fitness goals and lifestyle.
        </p>
        <div className="plans-grid">
          {plans.map((plan) => (
            <div className="plan-card" key={plan.id}>
              <img src={plan.image} alt={plan.name} className="plan-image" />
              <h3 className="orangeText">{plan.name}</h3>
              <p className="secondaryText">{plan.description}</p>
              <p className="facilities">Facilities: {plan.facilities}</p>
              <p className="duration">Duration: {plan.duration}</p>
              <p className="price">{plan.price}</p>
              <button className="buttonn">
                <a href="https://example.com/enroll">Enroll Now</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansPreview;
