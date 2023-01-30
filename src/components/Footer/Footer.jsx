import React from "react";
import "./Footer.css";
import globeicon from "../images/globe-icon.png";
import fbicon from "../images/fb-icon.png";
import igicon from "../images/ig-icon.png";
import inicon from "../images/in-icon.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <div className="footer-section">
      <div className="footer-container">
        <h2>{t("SUBSCRIBE NOW")}</h2>
        <div className="footer-input-button">
          <input
            type="text"
            name="sub"
            id="submit"
            placeholder={t("Enter your email")}
          />
          <div className="footer-button">
            <button type="submit" className="about-button">
              {t("SUBMIT")}
            </button>
          </div>
        </div>
      </div>

      <div className="footer-container">
        {/* <h4>PHONE</h4>
        <p>+381 63 820 65 25</p> */}
        {/* <p>000-000-000</p> */}
        <h4>{t("LANGUAGES")}</h4>
        <div className="icon-container margin-0">
          <img src={globeicon} alt="globe-icon" />
          <button
            value="en"
            onClick={(e) => i18n.changeLanguage(e.target.value)}
          >
            EN
          </button>
          <img src={globeicon} alt="globe-icon" />
          <button
            value="de"
            onClick={(e) => i18n.changeLanguage(e.target.value)}
          >
            DE
          </button>
        </div>
      </div>

      <div className="footer-container">
        <h4>{t("BELGRADE OFFICE")}</h4>
        <p>Cvijićeva 40</p>
        <p>11120 Belgrade</p>
        <p>Serbia</p>
        <p>info@is-cloud.net</p>
        {/* <div className="icon-container">
          <img src={igicon} alt="ig-icon" />
          <img src={fbicon} alt="fb-icon" />
          <img src={inicon} alt="in-icon" />
        </div> */}
      </div>
    </div>
  );
}
