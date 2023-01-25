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
        <h2>Web Applications</h2>
        <p>
          Edge out your competition with our unique and innovative digital
          product development solutions.
        </p>
      </div>
    </div>
  );
}
