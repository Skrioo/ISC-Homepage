import React from "react";
import "./webdevprocess.css";
import { useTranslation } from "react-i18next";

export default function WebDevProcess(style) {
  const { t } = useTranslation();
  return (
    <div className="web-dev-process">
      <div className="header-text">
        <h3>{t("Our Custom Web")}</h3>
        <p>{t("We meet the demands")}</p>
      </div>
      <div className="steps-container">
        <div className="progress-bar">
          <div className="text-bar">
            <p>{t("Custom App Development")}</p>
          </div>
          <div className="bar"></div>
          <div className="circle">1</div>
          <div className="hidden-div">
            <p>TEXT text text text text</p>
          </div>
        </div>

        <div className="progress-bar">
          <div className="hidden-div">
            <p>TEXT text text text text</p>
          </div>
          <div className="bar"></div>
          <div className="circle">2</div>
          <div className="text-bar">
            <p>{t("Defining Web Application")}</p>
          </div>
        </div>

        <div className="progress-bar">
          <div className="text-bar">
            <p>{t("Web Application Structure")}</p>
          </div>
          <div className="bar"></div>
          <div className="circle">3</div>
          <div className="hidden-div">
            <p>TEXT text text text text</p>
          </div>
        </div>

        <div className="progress-bar">
          <div className="hidden-div">
            <p>TEXT text text text text</p>
          </div>
          <div className="bar"></div>
          <div className="circle">4</div>
          <div className="text-bar">
            <p>{t("Research & UX Workflow")}</p>
          </div>
        </div>

        <div className="progress-bar">
          <div className="text-bar">
            <p>{t("Third-Party Software Selections")}</p>
          </div>
          <div className="bar"></div>
          <div className="circle">5</div>
          <div className="hidden-div">
            <p>TEXT text text text text</p>
          </div>
        </div>

        <div className="progress-bar">
          <div className="hidden-div">
            <p>TEXT text text text text</p>
          </div>
          <div className="bar"></div>
          <div className="circle">6</div>
          <div className="text-bar">
            <p>{t("Prototyping & Design Testing")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
