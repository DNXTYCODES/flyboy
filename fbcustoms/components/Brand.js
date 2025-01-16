import React, { useState } from "react";
import { Title } from "./common/Title";

const faqData = [
  {
    id: 1,
    question: "What is car detailing?",
    answer:
      "Car detailing is a thorough cleaning, restoration, and finishing of a vehicle, both inside and out, to achieve a showroom-quality appearance.",
  },
  {
    id: 2,
    question: "How often should I detail my car?",
    answer:
      "It is recommended to detail your car every 4-6 months to maintain its appearance and protect its surfaces.",
  },
  {
    id: 3,
    question: "What is included in an interior car detail?",
    answer:
      "Interior detailing typically includes vacuuming, shampooing carpets and upholstery, cleaning and conditioning leather, and cleaning interior surfaces like the dashboard and windows.",
  },
  {
    id: 4,
    question: "Can detailing remove scratches from my car?",
    answer:
      "Detailing can minimize the appearance of light scratches through polishing, but deeper scratches may require professional repair.",
  },
  {
    id: 5,
    question: "How long does a car detailing service take?",
    answer:
      "The time required depends on the size of the vehicle and the level of detailing, but it usually takes 2-4 hours.",
  },
];

const Brand = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section style={{ padding: "40px 20px", backgroundColor: "#080e10" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Title title="Frequently Asked Questions" />
        </div>
        <div>
          {faqData.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "5px",
                marginBottom: "10px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => toggleQuestion(item.id)}
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#080e10",
                  border: "none",
                  textAlign: "left",
                  fontSize: "22px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {item.question}
              </button>
              {openQuestion === item.id && (
                <div
                  style={{
                    padding: "15px",
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "bold",
                    borderTop: "1px solid #ddd",
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;

// import React from "react"
// import { Title } from "./common/Title"
// import { brand } from "@/assets/data/dummydata"

// const Brand = () => {
//   return (
//     <>
//       <section className='brand'>
//         <div className='container'>
//           <div className='heading-title'>
//             <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES' />
//           </div>
//           <div className='brand-content grid-6 py'>
//             {brand.map((item) => (
//               <div className='images' key={item.id}>
//                 <img src={item.cover} alt={item.id} width='100%' height='100%' />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Brand
