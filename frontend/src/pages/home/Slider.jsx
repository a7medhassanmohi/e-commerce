import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import logo from "../../img/home1.png";
import logo2 from "../../img/home2.png";
import "./home.scss";
import { Link } from "react-router-dom";

import "swiper/swiper.scss";
SwiperCore.use([Pagination, Navigation, Autoplay]);

function Slider() {
  return (
    <div className="home_silder__">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="img">
            <Link to="/products">
              <img src={logo2} alt="" />
            </Link>

            <p>Holiday Deals 25% off Exclusively online</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <Link to="/products">
              <img src={logo} alt="" />
            </Link>

            <p>Holiday Deals 25% off Exclusively online</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
