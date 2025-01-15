import React from "react";
import "./HeroReview.css";

const reviews = [
  {
    name: "Terry J.",
    review:
      "Joining this gym has been life-changing. The trainers are professional, and the equipment is top-notch. Highly recommended!",
    rating: 5,
    image: "beforeafter.jpg", // Replace with the actual image path or URL
  },
  {
    name: "Sam D.",
    review:
      "I’ve achieved my fitness goals faster than I expected. The personalized training programs are fantastic!",
    rating: 4.8,
    image: "black guy.jpg", // Replace with the actual image path or URL
  },
  {
    name: "Tobias R.",
    review:
      "The environment is welcoming, and the group classes are so much fun. It’s the perfect place for fitness enthusiasts.",
    rating: 5,
    image: "gymgirl.jpeg", // Replace with the actual image path or URL
  },
  {
    name: "Ngozi Onyekwere",
    review:
      "I love the clean facilities and the variety of workout options available. The yoga classes are my favorite.",
    rating: 4.7,
    image: "ggirl.jpg", // Replace with the actual image path or URL
  },
  {
    name: "Emeka Eze",
    review:
      "Great value for money! The gym staff is friendly, and the atmosphere motivates me to push harder every day.",
    rating: 4.9,
    image: "gymbro.jpg", // Replace with the actual image path or URL
  },
];

const HeroReview = () => {
  return (
    <div className="reviews-wrapper paddings flexColCenter">
      <span className="orangeText">Reviews</span>
      <h2 className="primaryText">What Our customers Say</h2>
      <div className="reviews-container">
        {reviews.map((item, index) => (
          <div key={index} className="review-card">
            <img
              src={item.image}
              alt={item.name}
              className="review-image"
            />
            <p className="review-text">"{item.review}"</p>
            <h4 className="reviewer-name">{item.name}</h4>
            <p className="review-rating">Rating: {item.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroReview;
