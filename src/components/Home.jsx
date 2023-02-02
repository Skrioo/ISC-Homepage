import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "./navbar/Navbar";
// import Logobar from "./logobar/Logobar";
import Form from "./Form/Form";
import WebDevProcess from "./webdevprocess/Webdevproces";
import About from "./About/About";
import Footer from "./Footer/Footer";
import FooterBottom from "./FooterBottom/footerBottom";
import GoToTop from "./GoToTop/GoToTop";
import Info from "./Info/Info";

export default function Home() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [selectedOption, setSelectedOption] = useState("English");
  const optionsContainerRef = useRef(null);

  function handleOptionClick(option) {
    setSelectedOption(option);
    optionsContainerRef.current?.classList.remove("active");
  }

  return (
    <>
      <div className="homepage">
        <div className="homepage-navbar">
          <Navbar
            click={handleClick}
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
            optionsContainerRef={optionsContainerRef}
          />
        </div>
        <div className="mid-square-text">
          <h3>{t("We Provide")}</h3>
          <div className="words">
            <span>{t("Quality Assurance")}</span>
            <span>{t("Web Applications")}</span>

            <span>{t("Mobile Applications")}</span>
            <span>{t("Graphic Design")}</span>
            <span>{t("Technical Support")}</span>
          </div>
          <p className="home-p">{t("Edge")}</p>
        </div>
      </div>
      <div className="home-rest">
        <>
          <Info />
        </>

        {/* <div className="logobar">
          <Logobar />
        </div> */}

        <> {/* <WebDevProcess /> */}</>
        <div className="about" ref={ref}>
          {" "}
          <About />
        </div>
        <div className="form" ref={ref}>
          <Form />
        </div>
        <>
          {" "}
          <Footer callback={setSelectedOption} />
        </>
        <>
          {" "}
          <FooterBottom />
        </>
        <>
          <GoToTop />
        </>
      </div>
    </>
  );
}
