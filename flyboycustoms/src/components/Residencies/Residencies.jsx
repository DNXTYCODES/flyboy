import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";

const Residencies = () => {
  // Sample JSON data for the slider
  const propertiesData = [
    {
      id: 1,
      name: "Hand Wash",
      price: "399,999",
      image: "faa42acb1914a5216e9d62657d3f6a9a-large.jpg",
    },
    {
      id: 2,
      name: "Paint Correction",
      price: "180,000",
      image: "7f9ca5427953384d3f2313aa080be846-large.jpg",
    },
    {
      id: 3,
      name: "Waxing and Scaling",
      price: "150,000",
      image: "6dac367ed62c9232b1f6e32d3ae589e5-large.jpg",
    },
    {
      id: 4,
      name: "Clay Bar Treatment",
      price: "640,000",
      image: "696cffa35dfb93548b340bbbfe20f8bd-large.jpg",
    },
    {
      id: 5,
      name: "Vacuuming",
      price: "400,000",
      image: "b51ed37a4007bd81fc44e856ab476393-large.jpg",
    },
    {
      id: 6,
      name: "Seat Cleaning",
      price: "510,000",
      image: "b7b65e907b2e866275c19685cc9f091c-large.jpg",
    },
    {
      id: 7,
      name: "Dashboard and Console Cleaning",
      price: "340,000",
      image: "7f9ca5427953384d3f2313aa080be846-large.jpg",
    },
    {
      id: 8,
      name: "Carpet and Upholstery",
      price: "250,000",
      image: "25de3401fc6c03bd390d6e57b4981f28-large.jpg",
    },
    {
      id: 9,
      name: "Odor Removal",
      price: "1,100,000",
      image: "ffbdfc78ed6d818edf9fe619c89be15e-large.jpg",
    },
    // Add more entries as needed
  ];

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Comprehensive Detailing Services</span>
          <span className="primaryText">Our Services</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {propertiesData.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard card={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
