import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-[white]">
          {/* Explore our most sought-after timepieces, loved by watch enthusiasts worldwide. These best sellers combine enduring style, unmatched quality, and precision engineering, making them the perfect choice for those who appreciate the art of horology. */}
          Discover our best-selling luxury watches, featuring iconic timepieces
          from Rolex, Patek Philippe, Audemars Piguet, Omega, and more. These
          highly sought-after models are celebrated for their timeless elegance,
          investment value, and precision craftsmanship.
        </p>
        <p className="hidden">Top Luxury Watches | Collector’s Favorites | Iconic Timepieces </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
