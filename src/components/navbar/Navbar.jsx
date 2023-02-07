import React from "react";
import "./Navbar.css";
import Logo from "../images/img1.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

function Navbar({
  click,
  selectedOption,
  handleOptionClick,
  optionsContainerRef,
}) {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      {/*      <!-- LOGO --> */}
      <div className="logo">
        <img src={Logo} alt="logo.png" />
        <h1 className="cloud">ISCloud</h1>
      </div>
      {/*      <!-- NAVIGATION MENU --> */}

      {/*        <!-- USING CHECKBOX HACK --> */}

      {/* <input type="checkbox" id="checkbox_toggle" />

        <label for="checkbox_toggle" className="hamburger">
          &#9776;
        </label> */}
      {/*        <!-- NAVIGATION MENUS --> */}
      <div className="menu">
        <ul className="nav-links">
          <li onClick={click}>
            <h2 className="contact">{t("Contact Us")}</h2>
          </li>
          <li className="eng-de">
            {" "}
            <CustomDropdown
              selectedOption={selectedOption}
              handleOptionClick={handleOptionClick}
              optionsContainerRef={optionsContainerRef}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
