import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/";
import SwiperCore, { Navigation, Thumbs } from "swiper";

import "swiper/swiper.scss";
import "./productinfo.scss";
import p1 from "../../img/p1.jpg";

SwiperCore.use([Navigation, Thumbs]);

function ProductGallery({ img }) {
  return (
    <div className="product_gallery">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        navigation={true}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductGallery;
