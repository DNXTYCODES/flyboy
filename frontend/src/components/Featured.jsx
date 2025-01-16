import React from 'react';
import { assets } from '../assets/assets';

const FeaturedSection = () => {
  const featuredWatches = [
    {
      id: 1,
      name: 'ROLEX',
      video: assets.rolex, // Replace with your video path
    },
    {
      id: 2,
      name: 'CARTIER',
      video: assets.cartier, // Replace with your video path
    },
    {
      id: 3,
      name: 'TAG HEUER',
      video: assets.tagheuer, // Replace with your video path
    },
    {
      id: 4,
      name: 'PANERAI',
      video: assets.panerai, // Replace with your video path
    },
  ];

  return (
    <div className="py-16 px-6">
      <h2 className="prata-regular text-3xl font-bold text-center mb-10 bg-golden-brown bg-clip-text text-transparent bg-to-b">
        Featured Watches
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredWatches.map((watch) => (
          <div
            key={watch.id}
            className="relative group border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <video
              src={watch.video}
              alt={watch.name}
              className="w-49 aspect-square object-cover"
              autoPlay
              loop
              muted
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* You can add a button here if needed */}
            </div>
            <h3 className="absolute bottom-2 left-2 text-lg font-semibold text-white bg-black bg-opacity-50 px-3 py-1 rounded-lg">
              {watch.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;












// import React from 'react';
// import { assets } from '../assets/assets';

// const FeaturedSection = () => {
//   const featuredWatches = [
//     {
//       id: 1,
//       name: 'Classic Gold Watch',
//       image: assets.rolex, // Replace with your image path
//     },
//     {
//       id: 2,
//       name: 'Sport Chronograph',
//       image: assets.b6, // Replace with your image path
//     },
//     {
//       id: 3,
//       name: 'Luxury Leather Strap',
//       image: assets.e1, // Replace with your image path
//     },
//     {
//       id: 4,
//       name: 'Elegant Minimalist',
//       image: assets.b6, // Replace with your image path
//     },
//   ];

//   return (
//     <div className="py-16 px-6">
//       <h2 className="prata-regular text-3xl font-bold text-center mb-10 bg-golden-brown bg-clip-text text-transparent bg-to-b">
//         Featured Watches
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {featuredWatches.map((watch) => (
//           <div
//             key={watch.id}
//             className="relative group border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={watch.image}
//               alt={watch.name}
//               className="w-full h-90 object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               {/* <button className="bg-white text-black py-2 px-4 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
//                 View Details
//               </button> */}
//             </div>
//             <h3 className="absolute bottom-2 left-2 text-lg font-semibold text-white bg-black bg-opacity-50 px-3 py-1 rounded-lg">
//               {watch.name}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedSection;
