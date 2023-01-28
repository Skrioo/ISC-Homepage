import React from "react";
import "./Navbar.css";
import Logo from "../images/img1.png";
import { useTranslation } from "react-i18next";

function Navbar({ click }) {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      {/*      <!-- LOGO --> */}
      <div className="logo">
        <img src={Logo} alt="logo.png" />
        <h1 className="cloud">ISCloud</h1>
      </div>
      {/*      <!-- NAVIGATION MENU --> */}

      <ul className="nav-links">
        {/*        <!-- USING CHECKBOX HACK --> */}

        <input type="checkbox" id="checkbox_toggle" />

        <label for="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        {/*        <!-- NAVIGATION MENUS --> */}
        <div className="menu">
          <li>{/* <h2>About Us</h2> */}</li>{" "}
          <li onClick={click}>
            <h2 className="contact">{t("Contact Us")}</h2>
          </li>
          <li>{/* <h2>EN/DE </h2> */}</li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
