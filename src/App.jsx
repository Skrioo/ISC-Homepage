import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Logobar from "./components/Logobar";
import Info from "./components/Info";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import WebDevProcess from "./components/webdevprocess/Webdevproces";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/FooterBottom/footerBottom";
import PictureSlider from "./components/PictureSlider/PictureSlider";
import GoToTop from "./components/GoToTop/GoToTop";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aboutus" element={<p>Sign in page</p>}></Route>
        <Route path="/contactus" element={<p>Sign up page</p>}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Logobar />
      <Info />
      <WebDevProcess />
      <About />
      {/* <FAQ /> */}
      {/* <PictureSlider /> */}
      <Form />
      <Footer />
      <FooterBottom />
      <GoToTop />
    </Router>
  );
}
