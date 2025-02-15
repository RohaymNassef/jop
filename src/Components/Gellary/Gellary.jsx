import React, { useState } from "react";
import "./Gellary.css";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.gif";
import img5 from "../../images/5.gif";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";

const Gellary = () => {
  const [rotatedImages, setRotatedImages] = useState({});
  const [expandedImage, setExpandedImage] = useState(null);
  const [animatingImages, setAnimatingImages] = useState({}); // لكل عنصر حالته الخاصة

  const handleClick = (index) => {
    setRotatedImages((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

    setExpandedImage((prev) => (prev === index ? null : index));
  };

  const handleClicke = (index) => {
    setAnimatingImages((prev) => ({
      ...prev,
      [index]: true,
    }));

    setTimeout(() => {
      setAnimatingImages((prev) => ({
        ...prev,
        [index]: false,
      }));
    }, 1000);
  };

  return (
    <div className="hex-grid">
      <div className="top">
        {[img1, img2].map((img, index) => (
          <div
            key={index}
            className={`hex ${animatingImages[index] ? "animate" : ""}`}
            onClick={() => handleClicke(index)}
          >
            <img
              src={img}
              alt="Descriptive Alt Text"
              className={`rotatable ${rotatedImages[index] ? "rotated" : ""} ${
                expandedImage === index ? "expanded" : ""
              }`}
              onClick={() => handleClick(index)}
            />
          </div>
        ))}
      </div>

      <div className="center">
        {[img3, img4, img5].map((img, index) => (
          <div
            key={index + 2}
            className={`hex ${animatingImages[index + 2] ? "animate" : ""}`}
            onClick={() => handleClicke(index + 2)}
          >
            <img
              src={img}
              alt="Descriptive Alt Text"
              className={`rotatable ${rotatedImages[index + 2] ? "rotated" : ""} ${
                expandedImage === index + 2 ? "expanded" : ""
              }`}
              onClick={() => handleClick(index + 2)}
            />
          </div>
        ))}
      </div>

      <div className="bottom">
        {[img6, img7].map((img, index) => (
          <div
            key={index + 5}
            className={`hex ${animatingImages[index + 5] ? "animate" : ""}`}
            onClick={() => handleClicke(index + 5)}
          >
            <img
              src={img}
              alt="Descriptive Alt Text"
              className={`rotatable ${rotatedImages[index + 5] ? "rotated" : ""} ${
                expandedImage === index + 5 ? "expanded" : ""
              }`}
              onClick={() => handleClick(index + 5)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gellary;
