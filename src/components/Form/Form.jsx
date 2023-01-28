import React from "react";
import "./Form.css";
import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();
  return (
    <div className="form-section">
      <div className="form-container">
        <div className="form-header">
          <h1>{t("Request a Call Back")}</h1>
        </div>
        <div className="form-inputs">
          <input type="text" placeholder={t("Full Name")} />
          <input type="text" name="" id="" placeholder={t("Phone Number")} />
          <input type="text" name="" id="" placeholder={t("Email")} />
          <input type="text" name="" id="" placeholder={t("Message")} />
        </div>
        <div>
          <button className="form-button">{t("SEND")}</button>
        </div>
      </div>
    </div>
  );
}
