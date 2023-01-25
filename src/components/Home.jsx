import React from "react";
import Navbar from "./navbar/Navbar";

export default function Home() {
  return (
    <div className="homepage">
      <div className="homepage-navbar">
        <Navbar />
      </div>
      <div className="mid-square-text">
        <h3>Reshaping Businesses Through</h3>
        <div className="central-div">
          <h3>We provide</h3>
          <div className="words">
            <span>Web Aplications</span>
            <span>Mobile Aplications</span>
            <span>Quality Assurance</span>
            <span>Design</span>
            <span>Technical Support</span>
          </div>
        </div>

        <p>
          Edge out your competition with our unique and innovative digital
          product development solutions.
        </p>
      </div>
    </div>
  );
}
