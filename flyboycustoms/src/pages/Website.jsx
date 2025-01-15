import React from 'react';
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import HeroReview from '../components/HeroReview/HeroReview';
import GalleryPreview from '../components/GalleryPreview/GalleryPreview';
import PlansPreview from '../components/PlansPreview/PlansPreview';
import DetailsPreview from '../components/DetailsPreview/DetailsPreview';
import TransformPreview from '../components/TransformPreview/TransformPreview';

const Website = () => {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="companies">
        <Companies />
      </div>
      <div id="residencies">
        <Residencies />
      </div>
      <div id="plans">
        {/* <PlansPreview /> */}
        <DetailsPreview />
      </div>
      <div id="hero-review">
        <TransformPreview />
      </div>
      <div id="gallery">
        <HeroReview />
      </div>
      <div id="value">
        <Value />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="get-started">
        <GetStarted />
      </div>
      {/* <Footer />  */}
    </div>
  );
};

export default Website;
