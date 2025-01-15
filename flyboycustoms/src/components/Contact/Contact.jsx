import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Get in Touch with Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            Have questions or ready to make the switch to solar? Our team is
            here to help.{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">0906 140 4264</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Whatsapp</span>
                    <span className="secondaryText">0906 140 4264</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://wa.me/message/F7IB44ANRYCYB1">Chat now</a>
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">0906 140 4264</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Mail Us</span>
                    <span className="secondaryText">Matthew</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="mailto:ayomatthew891@gmail.com">Message now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        {/* <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./beforeafter.jpg" alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
