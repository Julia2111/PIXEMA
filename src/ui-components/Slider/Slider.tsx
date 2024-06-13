import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import Poster1 from "../../assets/SliderPics/1pic.jpeg";
import Poster2 from "../../assets/SliderPics/2pic.jpeg";
import Poster3 from "../../assets/SliderPics/3pic.jpg";
import Poster4 from "../../assets/SliderPics/4pic.jpg";
import Poster5 from "../../assets/SliderPics/5pic.jpeg";
import styles from "./Slider.module.scss";
SwiperCore.use([Autoplay, Navigation]);

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <a href="https://www.youtube.com/watch?v=tdBdkxwQY-Q">
          <img src={Poster1} alt="Im1" className={styles.swiper_slide} />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="https://www.youtube.com/watch?v=X7rIn8j65K8&t=3s">
          <img src={Poster2} alt="Im2" className={styles.swiper_slide} />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="https://www.youtube.com/results?search_query=treiler+nthhbnjhbz2">
          <img src={Poster3} alt="Im3" className={styles.swiper_slide} />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="https://www.youtube.com/watch?v=LleIdNVuUZE">
          <img src={Poster4} alt="Im4" className={styles.swiper_slide} />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="https://www.youtube.com/watch?v=yIiXRp_vTek">
          <img src={Poster5} alt="Im5" className={styles.swiper_slide} />
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
