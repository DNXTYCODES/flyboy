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
            117 Red Oak Lane <br />, Beebe, Arkansas
          </p>
          <div className="w-full flex justify-center">
            <iframe
              title="Google Map"
              style={{
                width: "100%",
                maxWidth: "480px",
                height: "300px",
                border: "0",
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.299332383841!2d-91.87977332456868!3d35.07003367257451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d28216e3d2d4f7%3A0x8cfb7f556dd86eb4!2s117%20Red%20Oak%20Ln%2C%20Beebe%2C%20AR%2072021%2C%20USA!5e0!3m2!1sen!2sus!4v1705933294885!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p className=" text-gray-500">
            Tel:{" "}
            <a className="underline" href="tel:5012982272">
              5012982272
            </a>{" "}
            <br /> Email:{" "}
            <a className="underline" href="mailto:aflyboyp51@gmail.com">
              aflyboy51@gmail.com
            </a>
          </p>
          <p className="prata-regular text-xl  bg-golden-brown bg-clip-text text-transparent bg-to-b">
            Careers at Flyboy
          </p>
          <p className=" text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-white text-white px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 bg-[#333333]">
            <a href="mailto:aflyboyp51@gmail.com">Explore Jobs</a>
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
