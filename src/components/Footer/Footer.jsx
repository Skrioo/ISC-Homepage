import React from "react";
import "./Footer.css";
import globeicon from "../images/globe-icon.png";
import fbicon from "../images/fb-icon.png";
import igicon from "../images/ig-icon.png";
import inicon from "../images/in-icon.png";

export default function Footer() {
  return (
    <div className="footer-section">
        <div className="footer-container">
            <h2>SUBSCRIBE NOW</h2>
            <div className="footer-input-button">
                <input type="text" name="sub" id="submit" placeholder="Enter your email" />
                <div className="footer-button">
                <button type="submit" className="about-button">SUBMIT</button>
                </div>
            </div>
        </div>

        <div className="footer-container">
            <h4>PHONE</h4>
                <p>000-000-000</p>
                <p>000-000-000</p>
            <h4>LANGUAGES</h4>
            <div className="icon-container">
                <img src={globeicon} alt="globe-icon"/>
                <p>EN/DE</p>
            </div>
        </div>

        <div className="footer-container">
            <h4>BELGRADE OFFICE</h4>
                <p>Cvijićeva 40</p>
                <p>11120 Belgrade</p>
                <p>Serbia</p>
                <p>info@is-cloud.net</p>
            <div className="icon-container">
                <img src={igicon} alt="ig-icon"/>
                <img src={fbicon} alt="fb-icon"/>
                <img src={inicon} alt="in-icon"/>
            </div>
        </div>
    </div>
  );
}
