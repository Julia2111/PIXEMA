import NavBar from "../../components/Navbar/NavBar";
import SwiperComponent from "../../ui-components/Slider/Slider";
import styles from "./Trends.module.scss";

const Trends = () => {
  return (
    <>
      <div className={styles.trends_body}>
        <NavBar />
        <div className={styles.films}>
          <div className={styles.swiper_body}>
            <SwiperComponent />
          </div>
          <h1>TRENDS FOR THIS WEEK</h1>
        </div>
      </div>
    </>
  );
};
export default Trends;
