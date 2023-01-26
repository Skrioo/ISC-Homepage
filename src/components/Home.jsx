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
        <div className="words">
          <span>Web Applications</span>
          <span>Mobile Applications</span>
          <span>Quality Assurance</span>
          <span>Design</span>
          <span>Technical Support</span>
        </div>
        <p className="home-p">
          Edge out your competition with our unique and innovative digital
          product development solutions.
        </p>
      </div>
    </div>
  );
}
