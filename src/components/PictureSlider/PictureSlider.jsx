import React, { useState } from "react";
import "./PictureSlider.css";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "../public/images/img01.png",
    "../public/images/img02.png",
    "../public/images/img03.png",
    "../public/images/img04.png",
    "../public/images/img05.png",
  ];

  //   const prevImage = () => {
  //     const newIndex = currentIndex - 1;
  //     setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  //   }

  //   const nextImage = () => {
  //     const newIndex = currentIndex + 1;
  //     setCurrentIndex(newIndex === images.length ? 0 : newIndex);
  //   }

  return (
    <div className="picture-slider-container">
      <img src={images[currentIndex]} alt="slider-img" />
      {/* <button onClick={prevImage}>Prev</button>
      <button onClick={nextImage}>Next</button> */}
      <div>
        {images.map((image, index) => (
          <span
            className="slider-dots"
            key={image}
            onClick={() => setCurrentIndex(index)}
            style={{
              cursor: "pointer",
              margin: "30px",
              backgroundColor: currentIndex === index ? "#8008FD" : "#D9D9D9",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              display: "inline-block",
              padding: "10px",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
