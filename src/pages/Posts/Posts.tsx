import { useContext, useEffect, useState } from "react";
import styles from "./Posts.module.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/Context";
import { SearchContext } from "../../Context/SearchContext";
import NavBar from "../../components/Navbar/NavBar";
import { API_ENDPOINTS, API_SORT_OPTIONS } from "../../api/api";
import { Movie, MoviesStorage, MovieDetails } from "../../Types/Types";
// import { apiService } from "../../api/api";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   changeCurrentPage,
//   fetchPosts,
//   setOrdering,
//   setSearchQuery,
// } from "../../store/paginationSlice";

async function getMovies(
  searchString: string,
  page: number,
  storage: MoviesStorage,
  append: boolean
) {
  const res = await fetch(
    `${API_ENDPOINTS.SEARCH}${searchString}${API_SORT_OPTIONS.PAGE}${page}`
  );

  const movies = await res.json();
  if (append) {
    storage.movies.push(...movies.Search);
  } else {
    storage.movies.length = 0;
    storage.movies.push(...movies.Search);
  }

  storage.page = page;
  storage.total = movies.totalResults;

  const details = [];

  for (const movie of movies.Search) {
    const response = await fetch(`${API_ENDPOINTS.IMDB}${movie.imdbID}`);
    const info = await response.json();
    details.push(info);
  }

  if (append) {
    storage.moviesDetails.push(...details);
  } else {
    storage.moviesDetails.length = 0;
    storage.moviesDetails.push(...details);
  }
}

const Posts = () => {
  const [posts, setPosts] = useState<MoviesStorage>({
    movies: [],
    moviesDetails: [],
    page: 0,
    total: 0,
  });
  const themeCtx = useContext(ThemeContext);
  const search = useContext(SearchContext);

  useEffect(() => {
    if (search.searchString.length === 0) {
      return;
    }

    const newPosts = { movies: [], moviesDetails: [], page: 0, total: 0 };
    getMovies(search.searchString, 1, newPosts, false).then(() =>
      setPosts(newPosts)
    );
  }, [search.searchString]);

  const postToRender = (theme: string) =>
    posts?.movies?.map(({ imdbID, Title, Poster }, index) => {
      const rating = parseFloat(posts.moviesDetails[index]?.imdbRating);
      const ratingClass = rating < 6 ? styles.little : styles.high;

      return (
        <div
          key={imdbID}
          className={`${styles.post} ${
            theme === `dark ${imdbID}` ? styles.dark : styles.light
          } ${ratingClass}`}
        >
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <img className={styles.img} src={Poster} />
              <h4 className={styles.rating}>
                {posts.moviesDetails[index]?.imdbRating}
              </h4>
              <Link className={styles.titleFilm} to={`posts/${imdbID}`}>
                {Title}
              </Link>
              <h4 className={styles.genre}>
                {posts.moviesDetails[index]?.Genre?.replace(/[,]/g, " •")}
              </h4>
            </div>
          </div>
        </div>
      );
    });
  return (
    <>
      <div className={styles.wrapBody}>
        <NavBar />
        <div className={styles.btnCenter}>
          <div className={styles.posts}>{postToRender(themeCtx.theme)}</div>

          <button
            className={styles.showMore}
            onClick={async () => {
              await getMovies(search.searchString, posts.page + 1, posts, true);
              setPosts({ ...posts });
            }}
          >
            Show More
          </button>
        </div>
      </div>
    </>
  );
};
export default Posts;
