import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SliderComponent = () => {
  <Swiper
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log("pic chenged")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
      <Swiper>1</Swiper>
    </SwiperSlide>
    ))
  </Swiper>;
};
export default SliderComponent;
