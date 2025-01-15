import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] object-cover"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-400">
          <p>
            Welcome to Flyboy, your trusted destination for the finest luxury
            watches. At Flyboy, we understand that a watch is not just an
            accessory—it’s a reflection of your style, your taste, and your
            passion for timeless craftsmanship. We offer a curated selection of
            the world’s most prestigious watch brands, providing our customers
            with access to exclusive, high-quality timepieces that are both a
            statement of elegance and an investment in precision.
          </p>
          <p>
            Our Story: Curated Luxury at Your Fingertips Founded with a passion
            for fine watches, Flyboy is dedicated to bringing you the best in
            luxury horology. From the iconic designs of established heritage
            brands to the cutting-edge innovations of modern watchmakers, we are
            committed to offering a selection that appeals to connoisseurs and
            newcomers alike. As a retailer, we focus on more than just selling
            watches—we aim to connect you with timepieces that elevate your
            lifestyle. Whether you are looking for a classic dress watch, a
            sophisticated chronograph, or an enduringly stylish sports watch, we
            have something for every occasion.
          </p>
          <b className=" bg-golden-brown bg-clip-text text-transparent bg-to-b">
            Our Mission: Bringing Luxury Within Reach
          </b>
          <p>
            At Flyboy, our mission is to make luxury watches accessible to
            everyone who values the art of horology. Whether you are buying your
            first luxury watch or adding to your collection, we strive to
            provide a seamless, enjoyable experience, from browsing to purchase.
            We believe that every person deserves to experience the joy and
            sophistication that comes with wearing a finely crafted watch.
            That's why we work to offer not only luxury watches but also
            exceptional customer care and education to help you appreciate the
            beauty and craftsmanship behind each piece.
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exclusive Selection:</b>
          <p className=" text-gray-600">
            We carry a carefully chosen range of luxury watches from the world’s
            top brands, offering exclusive models and collections.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Authenticity Guaranteed:</b>
          <p className=" text-gray-600">
            All our watches are 100% authentic, sourced directly from trusted
            manufacturers and authorized dealers.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Expert Advice:</b>
          <p className=" text-gray-600">
            Our team of watch experts is available to help guide you in finding
            the perfect timepiece for your needs.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer-Centered Service:</b>
          <p className=" text-gray-600">
            We pride ourselves on providing a personalized shopping experience,
            with secure shipping, easy returns, and customer support dedicated
            to your satisfaction.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
