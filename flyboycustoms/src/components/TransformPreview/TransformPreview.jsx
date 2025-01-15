import React, { useState, useEffect } from "react";
import "./TransformPreview.css";

const TransformPreview = () => {
  const transformations = [
    {
      id: 1,
      beforeImage: "a965700690d43b7667ac85b9464e5384-large.jpg", // Replace with the actual before image
      afterImage: "a95e40ec40661425eb577a9955b8fdff-large.jpg", // Replace with the actual after image
      testimonial: "Amazing transformation! My car looks brand new again.",
      customerName: "Jane D.",
    },
    {
      id: 2,
      beforeImage: "117868710574671163c4ea1ae47c26f8-large.jpg", // Replace with the actual before image
      afterImage: "a4b2495423cf604b632662184f149c27-large.jpg", // Replace with the actual after image
      testimonial: "The detailing exceeded my expectations. Highly recommended.",
      customerName: "Mike T.",
    },
    {
      id: 3,
      beforeImage: "075217bb62f2cdd2b7a3c4f26e9ecce3-large.jpg", // Replace with the actual before image
      afterImage: "6731251ff92776004529c781d498084f-large.jpg", // Replace with the actual after image
      testimonial: "The attention to detail was incredible. My car looks amazing!",
      customerName: "Sarah P.",
    },
  ];

  const [currentImage, setCurrentImage] = useState("before");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === "before" ? "after" : "before"));
    }, 3000); // Switch images every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="transformation-preview paddings wrapper">
      <div className="innerWidth flexColStart">
        <h2 className="primaryText">See the Transformation</h2>
        <p className="secondaryText">
          Check out some of our recent projects and see how we’ve brought cars back to life.
        </p>
        <div className="transformation-grid">
          {transformations.map((transformation) => (
            <div className="transformation-card" key={transformation.id}>
              <div className="image-container">
                <img
                  src={currentImage === "before" ? transformation.beforeImage : transformation.afterImage}
                  alt={currentImage === "before" ? "Before" : "After"}
                  className="transformation-image"
                />
              </div>
              <p className="testimonial">{`"${transformation.testimonial}"`}</p>
              <p className="customer-name">- {transformation.customerName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformPreview;










// import React from "react";
// import "./TransformPreview.css";

// const TransformPreview = () => {
//   const transformations = [
//     {
//       id: 1,
//       beforeImage: "a965700690d43b7667ac85b9464e5384-large.jpg", // Replace with the actual before image
//       afterImage: "a95e40ec40661425eb577a9955b8fdff-large.jpg", // Replace with the actual after image
//       testimonial: "Amazing transformation! My car looks brand new again.",
//       customerName: "Jane D.",
//     },
//     {
//       id: 2,
//       beforeImage: "before2.jpg", // Replace with the actual before image
//       afterImage: "after2.jpg", // Replace with the actual after image
//       testimonial: "The detailing exceeded my expectations. Highly recommended.",
//       customerName: "Mike T.",
//     },
//     {
//       id: 3,
//       beforeImage: "before3.jpg", // Replace with the actual before image
//       afterImage: "after3.jpg", // Replace with the actual after image
//       testimonial: "The attention to detail was incredible. My car looks amazing!",
//       customerName: "Sarah P.",
//     },
//   ];

//   return (
//     <section className="transformation-preview paddings wrapper">
//       <div className="innerWidth flexColStart">
//         <h2 className="primaryText">See the Transformation</h2>
//         <p className="secondaryText">
//           Check out some of our recent projects and see how we’ve brought cars back to life.
//         </p>
//         <div className="transformation-grid">
//           {transformations.map((transformation) => (
//             <div className="transformation-card" key={transformation.id}>
//               <div className="image-container">
//                 <img
//                   src={transformation.beforeImage}
//                   alt="Before"
//                   className="transformation-image before"
//                 />
//                 <img
//                   src={transformation.afterImage}
//                   alt="After"
//                   className="transformation-image after"
//                 />
//               </div>
//               <p className="testimonial">{`"${transformation.testimonial}"`}</p>
//               <p className="customer-name">- {transformation.customerName}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TransformPreview;
