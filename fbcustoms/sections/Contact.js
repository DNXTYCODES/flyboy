import { Title, TitleSm } from "@/components/common/Title";
import React, { useState } from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="contact bg-top">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="CONTACT" /> <br />
          <br />
          <Title title="Let's start right now!" className="title-bg" />
        </div>
        <div className="content py flex1">
          <div className="left w-30">
            <div className="contact-deatils">
              <div className="box">
                <FiHeadphones size={30} className="icons" />
                <h3>
                  <a href="tel:501-288-2272">501-288-2272</a>
                </h3>
                <span>Call us</span>
              </div>
              <div className="box">
                <IoLocationOutline size={30} className="icons" />
                <h3>United States</h3>
                <span>117 Red Oak Lane, Beebe, Arkansas </span>
              </div>
              <div className="box">
                <FiHelpCircle size={30} className="icons" />
                <h3>
                  <a href="mailto:aflyboyp51@gmail.com">aflyboyp51@gmail.com</a>
                </h3>
                <span>Send us a message anytime!</span>
              </div>
              <div className="box">
                <BiUserCircle size={30} className="icons" />
                <h3>
                  <a href="mailto:aflyboyp51@gmail.com">aflyboyp51@gmail.com</a>
                </h3>
                <span>Send us a message anytime!</span>
              </div>
            </div>
            <ul>
              <li className="icon">
                <BsFacebook
                  size={25}
                  href="https://www.facebook.com/share/12Fk7sQUFcW/ "
                />
              </li>
              {/* <li className="icon">
                <AiFillYoutube size={25} />
              </li> */}
              <li className="icon">
                <AiFillInstagram size={25} href="https://www.instagram.com/flyboy_customs?igsh=bTY3bTF5ZzU4Y292" />
              </li>
              {/* <li className="icon">
                <AiFillLinkedin size={25} href="https://www.instagram.com/flyboy_customs?igsh=bTY3bTF5ZzU4Y292" />
              </li> */}
            </ul>
          </div>
          <div className="right w-70">
            <TitleSm title="Make an online enquiry" />
            <p className="desc-p">
              Got questions? Ideas? Want to Partner with Us or Sponsor us? Fill
              out the form below to get our proposal.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <span>Name*</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inputs">
                <span>Email (Your Email address)*</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inputs">
                <span>Message*</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button type="submit" className="button-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
