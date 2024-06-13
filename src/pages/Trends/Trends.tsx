import NavBar from "../../components/Navbar/NavBar";
import SwiperComponent from "../../ui-components/Slider/Slider";
import { PostItem } from "../Post/PostItem/PostItem";
import styles from "./Trends.module.scss";
import { fetchTrendsMovies } from "../../store/trendsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../../Types/Types";

const Trends = () => {
  const trendsMovies = useSelector((state) => state.trends.trendsMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendsMovies());
  }, []);

  return (
    <>
      <div className={styles.trends_body}>
        <NavBar />
        <div className={styles.films}>
          <div className={styles.swiper_body}>
            <SwiperComponent />
          </div>
          <h1>TRENDS FOR THIS WEEK</h1>
          <div className={styles.movies}>
            {trendsMovies.map((movie: Movie) => (
              <PostItem key={movie.imdbID} {...movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Trends;
