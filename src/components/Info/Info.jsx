import React from "react";
import { useTranslation } from "react-i18next";
import "./Info.css";

export default function Info() {
  const { t } = useTranslation();

  return (
    <div className="info-section">
      <div className="info-text">
        <h3>{t("A Full Suit")}</h3>
        <p>{t("We bring")}</p>
      </div>
      <div className="info-card-container">
        <div className="info-cards">
          <img src="./images/icons/icon _mac screen_.png" alt="mac screen" />
          <h3>{t("WEBA")}</h3>
          <p>{t("ISCloud helps")}</p>
        </div>
        <div className="info-cards">
          <img src="./images/icons/icon _iphone_.png" alt="iphone icon" />
          <h3>{t("MOBILED")}</h3>
          <p>{t("Our mobile application")}</p>
        </div>
        <div className="info-cards">
          <img src="./images/icons/icon _quality 0_.png" alt="quality icon" />
          <h3>{t("QUALITYA")}</h3>
          <p>{t("Dedicated QA team")}</p>
        </div>
        <div className="info-cards">
          <img
            src="./images/icons/icon _design studio_.png"
            alt="design studio icon"
          />
          <h3>{t("GRAPHICD")}</h3>
          <p>{t("Whether you are looking")}</p>
        </div>
        <div className="info-cards">
          <img
            src="./images/icons/icon _help customer support 1_.png"
            alt="help customer icon"
          />
          <h3>{t("TECHNICALS")}</h3>
          <p>{t("We have developed")}</p>
        </div>
        <div className="info-cards">
          <img src="./images/icons/Group 18.png" alt="consulting icon" />
          <h3>{t("ITCONSULTING")}</h3>
          <p>{t("Our IT consulting")}</p>
        </div>
      </div>
    </div>
  );
}
