import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="prata-regular text-xl  bg-golden-brown bg-clip-text text-transparent bg-to-b">
            Our Store
          </p>
          <p className=" text-gray-500">
            54709 Kentucky Station <br /> Suite 350, Washington, USA
          </p>
          <p className=" text-gray-500">
            Tel: 09061404264 <br /> Email: ayomatthew891@gmail.com
          </p>
          <p className="prata-regular text-xl  bg-golden-brown bg-clip-text text-transparent bg-to-b">
            Careers at Forever
          </p>
          <p className=" text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-white text-white px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 bg-[#333333]">
            <a href="mailto:ayomatthew891@gmail.com">Explore Jobs</a>
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
