import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import Poster1 from "../../assets/SliderPics/1pic.jpeg";
import Poster2 from "../../assets/SliderPics/2pic.jpeg";
import Poster3 from "../../assets/SliderPics/3pic.jpg";
import Poster4 from "../../assets/SliderPics/4pic.jpg";
import Poster5 from "../../assets/SliderPics/5pic.jpeg";
import styles from "./Slider.module.scss";
SwiperCore.use([Autoplay, Navigation]); // Инициализируем модули Swiper

// const SwiperComponent = () => {
//   const { searchMovies, movies } = useSelector((state) => state.movies);
//   const navigate = useNavigate();

//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation={{
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       }}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//     >
//       {movies.map((movie, index) => (
//         <SwiperSlide key={index}>
//           <img
//             src={movie.Poster}
//             alt={`Image ${index + 1}`}
//             onClick={() => navigate(`/${movie.imdbID}`)}
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default SwiperComponent;

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
        <img src={Poster1} alt="Im1" className={styles.swiper_slide} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Poster2} alt="Im2" className={styles.swiper_slide} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Poster3} alt="Im3" className={styles.swiper_slide} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Poster4} alt="Im4" className={styles.swiper_slide} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Poster5} alt="Im5" className={styles.swiper_slide} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
