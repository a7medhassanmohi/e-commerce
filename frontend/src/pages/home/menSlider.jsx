import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import logo from "../../img/home1.png";
import logo2 from "../../img/home2.png";
import "./menslider.scss";
import { Link } from "react-router-dom";
import "swiper/swiper.scss";
import { useSelector } from "react-redux";
import ProductItem from "../Products/ProductItem";
SwiperCore.use([Pagination, Autoplay]);

function MenSlider() {
  const product = useSelector((state) => state.products.allProduct);

  return (
    <div className="men_silder__">
      <h5>All Products</h5>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          440: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {product.map((it) => {
          return (
            <SwiperSlide key={it._id}>
              <ProductItem item={it} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MenSlider;
