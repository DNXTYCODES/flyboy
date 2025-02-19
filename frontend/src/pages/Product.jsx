import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt="luxury watch brand"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          {/* <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div> */}
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 pb-3">{productData.description}</p>
          <button
            onClick={() => addToCart(productData._id)}
            className="border border-white text-white px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 bg-[#333333]"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Information</b>
          {/* <p className="border px-5 py-3 text-sm">Reviews (122)</p> */}
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            All Watches are shipped overnight through FedEx and fully insured <br></br>
            
          </p>
          <p>
            Payment Options: Online Payment, Cash On Delivery
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;


















// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import RelatedProducts from "../components/RelatedProducts";

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(false);
//   const [image, setImage] = useState("");
//   const [magnify, setMagnify] = useState({ show: false, x: 0, y: 0 });

//   const fetchProductData = async () => {
//     products.map((item) => {
//       if (item._id === productId) {
//         setProductData(item);
//         setImage(item.image[0]);
//         return null;
//       }
//     });
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   const handleMouseMove = (e) => {
//     const rect = e.target.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setMagnify({ show: true, x, y });
//   };

//   const handleTouchMove = (e) => {
//     const touch = e.touches[0];
//     const rect = e.target.getBoundingClientRect();
//     const x = ((touch.clientX - rect.left) / rect.width) * 100;
//     const y = ((touch.clientY - rect.top) / rect.height) * 100;
//     setMagnify({ show: true, x, y });
//   };

//   const handleMouseLeave = () => setMagnify({ show: false, x: 0, y: 0 });

//   return productData ? (
//     <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
//       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
//         {/* Product Images */}
//         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
//             {productData.image.map((item, index) => (
//               <img
//                 onClick={() => setImage(item)}
//                 src={item}
//                 key={index}
//                 className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
//                 alt=""
//               />
//             ))}
//           </div>
//           <div
//             className="w-full sm:w-[80%] relative overflow-hidden"
//             onMouseMove={handleMouseMove}
//             onTouchMove={handleTouchMove}
//             onMouseLeave={handleMouseLeave}
//             style={{ cursor: "none" }}
//           >
//             <img className="w-full h-auto" src={image} alt="" />
//             {magnify.show && (
//               <div
//                 className="absolute pointer-events-none rounded-full border-2 border-gray-700 w-60 h-60 bg-no-repeat bg-cover"
//                 style={{
//                   top: `calc(${magnify.y}% - 80px)`,
//                   left: `calc(${magnify.x}% - 80px)`,
//                   backgroundImage: `url(${image})`,
//                   backgroundPosition: `${magnify.x}% ${magnify.y}%`,
//                   backgroundSize: "350%",
//                 }}
//               />
//             )}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="flex-1">
//           <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
//           <p className="mt-5 text-3xl font-medium">
//             {currency}
//             {productData.price}
//           </p>
//           <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
//           <button
//             onClick={() => addToCart(productData._id)}
//             className="bg-gray-800 text-white px-8 py-3 text-sm transition hover:bg-black active:bg-gray-700"
//           >
//             ADD TO CART
//           </button>
//           <hr className="mt-8 sm:w-4/5" />
//           <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       {/* Description & Review Section */}
//       <div className="mt-20">
//         <div className="flex">
//           <b className="border px-5 py-3 text-sm">Description</b>
//           {/* <p className="border px-5 py-3 text-sm">Reviews (122)</p> */}
//         </div>
//         <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
//           <p>
//             An e-commerce website is an online platform that facilitates the
//             buying and selling of products or services over the internet.
//           </p>
//         </div>
//       </div>

//       {/* Related Products */}
//       <RelatedProducts
//         category={productData.category}
//         subCategory={productData.subCategory}
//       />
//     </div>
//   ) : (
//     <div className="opacity-0"></div>
//   );
// };

// export default Product;




















// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';

// const Product = () => {

//   const { productId } = useParams();
//   const { products, currency ,addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(false);
//   const [image, setImage] = useState('')
//   const [size,setSize] = useState('')

//   const fetchProductData = async () => {

//     products.map((item) => {
//       if (item._id === productId) {
//         setProductData(item)
//         setImage(item.image[0])
//         return null;
//       }
//     })

//   }

//   useEffect(() => {
//     fetchProductData();
//   }, [productId,products])

//   return productData ? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//       {/*----------- Product Data-------------- */}
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

//         {/*---------- Product Images------------- */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
//               {
//                 productData.image.map((item,index)=>(
//                   <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
//                 ))
//               }
//           </div>
//           <div className='w-full sm:w-[80%]'>
//               <img className='w-full h-auto' src={image} alt="" />
//           </div>
//         </div>

//         {/* -------- Product Info ---------- */}
//         <div className='flex-1'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className=' flex items-center gap-1 mt-2'>
//               <img src={assets.star_icon} alt="" className="w-3 5" />
//               <img src={assets.star_icon} alt="" className="w-3 5" />
//               <img src={assets.star_icon} alt="" className="w-3 5" />
//               <img src={assets.star_icon} alt="" className="w-3 5" />
//               <img src={assets.star_dull_icon} alt="" className="w-3 5" />
//               <p className='pl-2'>(122)</p>
//           </div>
//           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//           <div className='flex flex-col gap-4 my-8'>
//               <p>Select Size</p>
//               <div className='flex gap-2'>
//                 {productData.sizes.map((item,index)=>(
//                   <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
//                 ))}
//               </div>
//           </div>
//           <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
//           <hr className='mt-8 sm:w-4/5' />
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//               <p>100% Original product.</p>
//               <p>Cash on delivery is available on this product.</p>
//               <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Description & Review Section ------------- */}
//       <div className='mt-20'>
//         <div className='flex'>
//           <b className='border px-5 py-3 text-sm'>Description</b>
//           <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
//         </div>
//         <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
//           <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
//           <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., colors). Each product usually has its own dedicated page with relevant information.</p>
//         </div>
//       </div>

//       {/* --------- display related products ---------- */}

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

//     </div>
//   ) : <div className=' opacity-0'></div>
// }

// export default Product
