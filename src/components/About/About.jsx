import React, { useState } from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const [readMore, setReadMore] = useState(true);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
  const { t } = useTranslation();
  return (
    <div className="about-us-container">
      <div className="header-text">
        <h1>{t("About Us")}</h1>
      </div>
      <div className="about-text">
        <p className="show-more">
          {!readMore
            ? t("ISCloud is a software").slice(0, 300)
            : t("ISCloud is a software")}
          <br />
          <span onClick={toggleReadMore} className="about-button">
            {readMore ? "read less - " : "READ MORE +"}
          </span>
        </p>
      </div>
    </div>
  );
}
