import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="BOY" caption="FLY" className="logobg" />
              <br />
              <span>
                Questions? Reach us <br /> Anytime
              </span>
              <br />
              <br />
              <h3>501-288-2272</h3>
              <br />
              <button className="button-primary purple">
                <a href="/contact">Request a quote/Book An Appointment</a>
              </button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              {/* <li>
                <Link href='/'>About agency</Link>
              </li> */}
              {/* <li>
                <Link href='/'>Our team</Link>
              </li> */}
              <li>
                <Link href="/showcase">Showcase</Link>
              </li>
              {/* <li>
                <Link href='/blog'>Blog</Link>
              </li> */}
              {/* <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="https://www.youtube.com/@event360withfafali7s">
                  Exterior Detailing
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@event360withfafali7s">
                  Interior Detailing
                </Link>
              </li>
              {/* <li>
                <Link href="/agency">Sponshorship</Link>
              </li>
              <li>
                <Link href="/agency">Advertising</Link>
              </li> */}
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="https://www.facebook.com/share/12Fk7sQUFcW/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                {/* <li>
                  <Link href="https://www.youtube.com/@event360withfafali7s">
                    <AiFillYoutube size={25} />
                  </Link>
                </li> */}
                <li>
                  <Link href="https://www.instagram.com/flyboy_customs?igsh=bTY3bTF5ZzU4Y292">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                {/* <li>
                  <Link href="https://www.linkedin.com/company/event-360-with-fafali/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li> */}
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2025 FLYBOY CUSTOMS.</span>
            </div>
            <div className="connect">
              <span>|Flyboy_Customs</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
