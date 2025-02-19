import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.flyboylogo} className="mb-5 w-32" alt="" />
        </div>

        <div>
          <p className="prata-regular text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/collection">Collections</a>
            </li>
            {/* <li>Delivery</li>
            <li>Privacy policy</li> */}
          </ul>
        </div>

        <div>
          <p className="prata-regular text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a className="underline" href="tel:501 288 2272">501 288 2272</a>
              </li>
            <li>
              <a className="underline" href="mailto:aflyboyp51@gmail.com">aflyboyp51@gmail.com</a>
            </li>
            <li>
              <a className="underline" href="https://www.instagram.com/flyboy_customs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">instagram</a>
            </li>
            <li>
              <a className="underline" href="https://www.facebook.com/share/12Fk7sQUFcW/">facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="prata-regular py-5 text-sm text-center">
          Copyright 2025@ flyboyluxury.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
