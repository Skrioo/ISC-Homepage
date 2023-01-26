import React, { useRef } from "react";
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
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="homepage">
        <div className="homepage-navbar">
          <Navbar click={handleClick} />
        </div>
        <div className="mid-square-text">
          <h3>Reshaping Businesses Through</h3>
          <div className="words">
            <span>Quality Assurance</span>
            <span>Web Applications</span>

            <span>Mobile Applications</span>
            <span>Design</span>
            <span>Technical Support</span>
          </div>
          <p className="home-p">
            Edge out your competition with our unique and innovative digital
            product development solutions.
          </p>
        </div>
      </div>
      <div className="home-rest">
        <>
          <Info />
        </>

        {/* <div className="logobar">
          <Logobar />
        </div> */}

        <>
          {" "}
          <WebDevProcess />
        </>
        <>
          {" "}
          <About />
        </>
        <div className="form" ref={ref}>
          <Form />
        </div>
        <>
          {" "}
          <Footer />
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
