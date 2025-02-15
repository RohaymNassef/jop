import React from "react";
import "./Header.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../images/header.png";

const Header = () => {
  var settings = {
    dots: true,
    infinite: true,  // خليته true عشان يشتغل بدون مشاكل
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // لإخفاء الأسهم
    autoplay: true, // تشغيل تلقائي
    autoplaySpeed: 3000, // تغيير الشريحة كل 3 ثوانٍ
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={img} alt="Slide 1" className="slider-image" />
        </div>
        <div>
          <img src={img} alt="Slide 2" className="slider-image" />
        </div>
        <div>
          <img src={img} alt="Slide 3" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Header;
