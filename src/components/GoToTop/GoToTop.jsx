import React from "react";
import "./GoToTop.css";
import arrowup from "../images/arrow-up.png";

export default function GoToTop() {
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("go-to-top");
        let progressValue = document.getElementById("go-to-top-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
          scrollProgress.style.display = "grid";
        } else {
          scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
          document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#8008FD ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
      };
      window.onscroll = calcScrollValue;
      window.onload = calcScrollValue;

  return (
    <div id="go-to-top">
        <div id="go-to-top-value" style={{width: "20px", height: "20px"}}><img src={arrowup} alt="arrow-up"/></div>
    </div>
  );
}
