import React, { useEffect } from "react";
import Slider from "react-slick";
import { CgChevronLeft } from "react-icons/cg";
import { GrNext } from "react-icons/gr";
import { CgChevronRight } from "react-icons/cg";
import logo from "../../img/home1.png";
import logo2 from "../../img/home2.png";

import "./home.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <button onClick={onClick} className="next btn_">
        <CgChevronLeft />
      </button>
    </>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <button onClick={onClick} className="prev btn_">
        <CgChevronRight />
      </button>
    </>
  );
}

function HomeSlider() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="home_slider">
      <Slider {...settings} className="slider_">
        <div className="img">
          <img src={logo2} alt="" />
        </div>
        <div className="img">
          <img src={logo} alt="" />
          <div className="content">
            <button>Shope Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;
