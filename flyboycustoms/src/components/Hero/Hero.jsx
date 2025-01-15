import React from "react";
import "./Hero.css"; // Include the CSS file for styling

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Drive a Car That Shines Like New Every Day!</h1>
        <p>
          {/* Join */}
           {/* <span className="highlight">FLYBOY</span> */}
           Professional car detailing services tailored to make your vehicle look flawless.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn-primary">
          Book Your Detailing Today
          </a>
          {/* <a href="#contact" className="btn-secondary">
            Claim Your Free Trial
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

