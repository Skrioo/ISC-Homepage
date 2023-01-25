import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-us-container">
      <div className="text-container">
        <div className="header-text">
          <h1>About Us</h1>
        </div>
        <div>
          <p>
            ISCloud is a software and digital company based in Serbia and Bosnia
            & Herzegowina focused on following the latest trends in development
            and design. We bring original ideas into the digital world, using
            our knowledge and expertise to develop, maintain and integrate any
            system or solution, offering you a limitless space to develop your
            ideas. Our passion and love for the job is what separates us from
            other companies because for us this company is more than just work,
            it’s a way of life.
          </p>
          {/* <button className="about-button">READ MORE +</button> */}
        </div>
      </div>
    </div>
  );
}
