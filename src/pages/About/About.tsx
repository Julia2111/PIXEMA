import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/Navbar/NavBar";
import SwiperComponent from "../../ui-components/Slider/Slider";
import { TrendsMovies } from "../../store/trendsSlice";
import styles from "./Trends.module.scss";
import { useEffect } from "react";
import { Movie } from "../../Types/Types";
import Post from "../Post/Post";

const About = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(TrendsMovies());
  // }, []);

  return (
    <>
      <div className={styles.trends_body}>
        <NavBar />
        <div className={styles.films}>
          <div className={styles.swiper_body}>
            <SwiperComponent />
          </div>

          <div className="movies"></div>
        </div>
      </div>
    </>
  );
};
export default About;
