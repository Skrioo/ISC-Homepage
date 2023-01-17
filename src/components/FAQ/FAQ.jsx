import React from "react";
import "./FAQ.css";

export default function FAQ() {
  return (
    <div className="FAQ-container">
        <div><h1>FAQ on Software Development</h1></div>
        <div className="faq-text">
            <div className="text-row">
                <p>Can you cover end-to-end software delivery?</p>
                <p>Details</p>
            </div>
            <div className="text-row">
                <p>Can I get it done really fast?</p>
                <p>Details</p>
            </div>
            <div className="text-row">
                <p>How much does it cost?</p>
                <p>Details</p>
            </div>
            <div className="text-row">
                <p>What’s your post-launch policy?</p>
                <p>Details</p>
            </div>
            <div className="text-row">
                <p>What is your preferred development methodology?</p>
                <p>Details</p>
            </div>
            <div className="text-row">
                <p>How do you control the quality of the software you deliver?</p>
                <p>Details</p>
            </div>
        </div>
    </div>
  );
}
