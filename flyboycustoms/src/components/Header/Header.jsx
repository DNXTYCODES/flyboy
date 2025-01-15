import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  // Check if the logged-in user is an admin (for admin link visibility)
  const adminEmails = ["ayomatthew891@gmail.com", "admin2@example.com"];
  const isAdmin = isAuthenticated && user && adminEmails.includes(user.email);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpened(false); // Close the menu after navigation
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* Logo */}
        <a href="#home">
          <img src="./whitelogo.jpg" alt="logo" width={100} />
        </a>

        {/* Menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            {/* <span onClick={() => handleScroll("products")}>Products</span>
            <span onClick={() => handleScroll("services")}>Services</span>
            <span onClick={() => handleScroll("contact")}>Contact</span> */}
            {/* <li onClick={() => handleScroll("companies")}>Companies</li>
            <li onClick={() => handleScroll("residencies")}>Residencies</li>
            <li onClick={() => handleScroll("plans")}>Plans</li>
            <li onClick={() => handleScroll("hero-review")}>Reviews</li>
            <li onClick={() => handleScroll("gallery")}>Gallery</li>
            <li onClick={() => handleScroll("value")}>Value</li>
            <li onClick={() => handleScroll("contact")}>Contact</li>
            <li onClick={() => handleScroll("get-started")}>Get Started</li> */}
              {/* <a href="#home">Home</a> */}
              <a href="#companies">services</a>
              <a href="#services">services</a>
              <a href="#residencies">Residencies</a>
              <a href="#plans">Plans</a>
              <a href="#gallery">Gallery</a>
              <a href="#value">Value</a>
              <a href="#contact">Contact</a>
              <a href="#get-started">Get Started</a>

            {/* Admin Link */}
            {isAdmin && (
              <a
                href="#admin"
                className="admin-link"
                onClick={() => handleScroll("admin")}
              >
                Admin
              </a>
            )}

            {/* Login/Logout Button */}
            {/* {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )} */}
          </div>
        </OutsideClickHandler>

        {/* Menu Icon for Small Screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
