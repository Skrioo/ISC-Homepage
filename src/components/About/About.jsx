import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

export default function About({}) {
  const { t } = useTranslation();
  return (
    <div className="about-us-container">
      <div className="header-text">
        <h1>{t("About Us")}</h1>
      </div>
      <div className="about-text">
        <p>{t("ISCloud is a software")}</p>
        {/* <button className="about-button">READ MORE +</button> */}
      </div>
    </div>
  );
}
