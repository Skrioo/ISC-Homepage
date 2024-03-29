import React, { useState } from "react";
import "./Footer.css";
import globeicon from "../images/globe-icon.png";
import fbicon from "../images/fb-icon.png";
import igicon from "../images/ig-icon.png";
import inicon from "../images/in-icon.png";
import { useTranslation } from "react-i18next";

export default function Footer({ callback }) {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [subscribe, setSubscribe] = useState();

  const onSubscribe = (e) => {
    e.preventDefault();
    setSubscribe("");
  };

  return (
    <footer>
      <form className="footer-section">
        <div className="footer-container-left">
          <div className="subscribe">
            <h2>{t("SUBSCRIBE NOW")}</h2>
          </div>
          <div className="footer-input">
            <input
              value={subscribe}
              required
              type="email"
              name="subscribe"
              id="submit"
              placeholder={t("Enter your email")}
              onChange={(e) => setSubscribe(e.target.value)}
            />
            <button
              onClick={onSubscribe}
              type="submit"
              className="about-button"
            >
              {t("SUBMIT")}
            </button>
          </div>
        </div>

        <div className="footer-container-right">
          <div className="office-container">
            <h4>{t("BELGRADE OFFICE")}</h4>

            <div className="office-info">
              <h6>Cvijićeva 40</h6>
              <h6>11120 Belgrade</h6>
              <h6>Serbia</h6>
              <h6>info@is-cloud.net</h6>
            </div>
            <div className="icon-container">
              <img src={igicon} alt="ig-icon" />
              <img src={fbicon} alt="fb-icon" />
              <img src={inicon} alt="in-icon" />
            </div>
          </div>
        </div>
      </form>
    </footer>
  );
}
