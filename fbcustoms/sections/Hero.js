import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";
import Head from "next/head";


const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="background-image"></div>

        <div className="container">
          {/* Hero Logo */}
          <TitleLogo
            title="CUSTOMS"
            caption="FLYBOY"
            className="logobg"
          />

          {/* Hero Title */}
          <h1 className="hero-title"></h1>

          {/* Sub-heading */}
          <div className="sub-heading hero-sub">
            <h2 className="hero-talkshow">EXPERT CAR DETAILING</h2>
            <div className="sub-text">
              <p className="hero-intro">
                Bring back that showroom shine with our expert detailing services for every vehicle.{" "}
              </p>
            </div>
            <button className="button-primary">
              <a href="/contact">GET A FREE QUOTE/BOOK AN APPOINTMENT</a>
            </button>
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="We are passionate about providing top-notch car detailing services" />
            <p></p>
            {/* <YouTubeEmbed videoId="p9taQetZ1tA" /> */}
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span>
                <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />
    </>
  );
};

export default Hero;















// import { home } from "@/assets/data/dummydata";
// import Banner from "@/components/Banner";
// import Expertise from "@/components/Expertise";
// import ShowCase from "@/components/ShowCase";
// import Testimonial from "@/components/Testimonial";
// import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
// import { BlogCard, Brand } from "@/components/router";
// import React from "react";

// const YouTubeEmbed = ({ videoId }) => {
//   return (
//     <div className="video-container">
//       <iframe
//         src={`https://www.youtube.com/embed/${videoId}`}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// const Hero = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="hero">
//         <video className="background-video" autoPlay loop muted>
//           <source src="images/event360vidintro.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <div className="container">
//           {/* Hero Logo */}
//           <TitleLogo
//             title="CUSTOMS"
//             caption="FLYBOY"
//             className="logobg"
//           />

//           {/* Hero Title */}
//           <h1 className="hero-title"></h1>

//           {/* Sub-heading */}
//           <div className="sub-heading hero-sub">
//             {/* <TitleSm className="sub-text-header" title="TALKSHOW" /> */}
//             <h2 className="hero-talkshow">EXPERT CAR DETAILING</h2>
//             <div className="sub-text">
//               <p className="hero-intro">
//               Bring back that showroom shine with our expert detailing services for every vehicle.{" "}
//               </p>
//             </div>
//             <button className="button-primary">
//               <a href="/contact">GET A FREE QUOTE/BOOK AN APPOINTMENT</a>
//             </button>
//             {/* <span>.</span>
//             <TitleSm title="INTERVIEWS" /> <span>.</span>
//             <TitleSm title="EVENT COVERAGE" /> */}
//           </div>
//         </div>
//       </section>

//       {/* Secondary Hero Section */}
//       <section className="hero-sec">
//         <div className="container">
//           <div className="heading-title">
//             <Title title="We are passionate about providing top-notch car detailing services" />
//             <p></p>
//             <YouTubeEmbed videoId="p9taQetZ1tA" />
//           </div>
//           <div className="hero-content grid-4">
//             {home.map((item, i) => (
//               <div className="box" key={i}>
//                 <span className="green">{item.icon}</span>
//                 <br />
//                 <br />
//                 <h3>{item.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Other Sections */}
//       <Expertise />
//       <Banner />
//       <Testimonial />
//       <ShowCase />
//       {/* <Brand /> */}

//       {/* Blog Section */}
//       {/* <div className="text-center">
//         <Title title="Latest news & articles" />
//       </div>
//       <BlogCard /> */}
//     </>
//   );
// };

// export default Hero;
