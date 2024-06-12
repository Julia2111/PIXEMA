import { useContext, useEffect, useState } from "react";
import styles from "./Posts.module.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/Context";
import { SearchContext } from "../../Context/SearchContext";
import NavBar from "../../components/Navbar/NavBar";
import { fetchMovies, getMovieInfo } from "../../store/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

const Posts = () => {
  const themeCtx = useContext(ThemeContext);
  const dispatch: AppDispatch = useDispatch();

  const movies = useSelector((state: RootState) => state.movies.movies);
  const status = useSelector((state: RootState) => state.movies.status);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const postToRender = (theme: string) =>
    movies && movies.length > 0 ? (
      movies.map(({ imdbID, Title, Poster }) => (
        <div
          key={imdbID}
          className={`${styles.post} ${
            theme === "dark" ? styles.dark : styles.light
          }`}
        >
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <img className={styles.img} src={Poster} alt={Title} />
              <Link className={styles.titleFilm} to={`posts/${imdbID}`}>
                {Title}
              </Link>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div>No movies found</div>
    );

  return (
    <>
      <NavBar />
      <div className={styles.wrapBody}>
        <div className={styles.btnCenter}>
          <div className={styles.posts}>{postToRender(themeCtx.theme)}</div>
        </div>
      </div>
    </>
  );
};

export default Posts;
