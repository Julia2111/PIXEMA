// import { Flex, Loader, Stack, Title } from "@mantine/core";
// import { useGetFilteredMoviesQuery } from "../../api/moviesApi";
// import { useAppDispatch, useAppSelector } from "../../hook/hooks";
// import { setPage } from "../../store/filterSlice";

// import MovieCard from "../../api/card";
// import { ReactComponent as NoSuchMovies } from "../../assets/noPic.svg";
// import NavBar from "../../components/Navbar/NavBar";

// const Posts = () => {
//   const { selectedGenres, selectedYear, ratingFrom, ratingTo, sortBy, page } =
//     useAppSelector((state) => state.filters);

//   const dispatch = useAppDispatch();

//   // const setCurrentPage = (currentPage: number) => {
//   //   dispatch(setPage(currentPage));
//   // };

//   const { data: moviesResponse, isFetching } = useGetFilteredMoviesQuery({
//     selectedGenres,
//     selectedYear,
//     ratingFrom,
//     ratingTo,
//     sortBy,
//     page,
//   });

//   if (!moviesResponse?.results.length && !isFetching) {
//     return (
//       <div>
//         <NoSuchMovies />
//         <h1>We don`t have such movies, look for another one</h1>
//       </div>
//     );
//   }

//   if (isFetching) {
//     return <div>Im searching</div>;
//   }

//   return (
//     <>
//       <NavBar />
//       <div>
//         {moviesResponse?.results.length &&
//           moviesResponse?.results?.map((movie) => (
//             <MovieCard key={movie.imdbID} movie={movie} />
//           ))}
//       </div>
//     </>
//   );
// };

// export default Posts;
// // import { useContext, useEffect, useState } from "react";
// // import styles from "./Posts.module.scss";
// // import { Link } from "react-router-dom";
// // import { ThemeContext } from "../../Context/Context";
// // import { SearchContext } from "../../Context/SearchContext";
// // import NavBar from "../../components/Navbar/NavBar";
// // import { API_BASE_URL, API_ENDPOINTS, API_SORT_OPTIONS } from "../../api/api";
// // import { Movie, MoviesStorage, MovieDetails } from "../../Types/Types";

// // async function getMovies(
// //   searchString: string,
// //   page: number,
// //   storage: MoviesStorage,
// //   append: boolean
// // ) {
// //   const res = await fetch(
// //     `${API_BASE_URL}&s=${searchString}&page=${page} `
// //   );

// //   const movies = await res.json();
// //   if (append) {
// //     storage.movies.push(...movies.Search);
// //   } else {
// //     storage.movies.length = 0;
// //     storage.movies.push(...movies.Search);
// //   }

// //   storage.page = page;
// //   storage.total = movies.totalResults;

// //   const details = [];

// //   for (const movie of movies.Search) {
// //     const response = await fetch(`${API_BASE_URL}&i=${movie.imdbID}`);
// //     const info = await response.json();
// //     details.push(info);
// //   }

// //   if (append) {
// //     storage.moviesDetails.push(...details);
// //   } else {
// //     storage.moviesDetails.length = 0;
// //     storage.moviesDetails.push(...details);
// //   }
// // }

// // const Posts = () => {
// //   const [posts, setPosts] = useState<MoviesStorage> ({} as MoviesStorage);

// //   const themeCtx = useContext(ThemeContext);
// //   const search = useContext(SearchContext);

// //   useEffect(() => {
// //     if (search.searchString.length === 0) {
// //       return;
// //     }

// //     const newPosts = { movies: [], moviesDetails: [], page: 0, total: 0 };

// //     getMovies(search.searchString, 1, newPosts, false).then(() =>
// //       setPosts(newPosts)
// //     );
// //   }, [search.searchString]);

// //   const postToRender = (theme: string) =>
// //     posts?.movies?.map(({ imdbID, Title, Poster }, index) => {
// //       const rating = parseFloat(posts.moviesDetails[index]?.imdbRating);
// //       const ratingClass = rating < 6 ? styles.little : styles.high;

// //       return (
// //         <div
// //           key={imdbID}
// //           className={`${styles.post} ${
// //             theme === `dark ${imdbID}` ? styles.dark : styles.light
// //           } ${ratingClass}`}
// //         >
// //           <div className={styles.wrapper}>
// //             <div className={styles.info}>
// //               <img className={styles.img} src={Poster} />
// //               <h4 className={styles.rating}>
// //                 {posts.moviesDetails[index]?.imdbRating}
// //               </h4>
// //               <Link className={styles.titleFilm} to={`posts/${imdbID}`}>
// //                 {Title}
// //               </Link>
// //               <h4 className={styles.genre}>
// //                 {posts.moviesDetails[index]?.Genre?.replace(/[,]/g, " •")}
// //               </h4>
// //             </div>
// //           </div>
// //         </div>
// //       );
// //     });
// //   return (
// //     <>
// //       <div className={styles.wrapBody}>
// //         <NavBar />
// //         <div className={styles.btnCenter}>
// //           <div className={styles.posts}>{postToRender(themeCtx.theme)}</div>

// //           <button
// //             className={styles.showMore}
// //             onClick={async () => {
// //               await getMovies(
// //                 search.searchString,
// //                 posts.page + 1,

// //                 posts,
// //                 true
// //               );
// //               setPosts({ ...posts });
// //             }}
// //           >
// //             Show More
// //           </button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };
// // export default Posts;

import { useContext, useEffect, useState } from "react";
import styles from "./Posts.module.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/Context";
import { SearchContext } from "../../Context/SearchContext";
import NavBar from "../../components/Navbar/NavBar";
import backPic from "../../assets/Background.png";
import { setOrdering } from "../../store/paginationSlice";
import { useDispatch } from "react-redux";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
  Genre: string;
  imdbRating: string;
}

interface MoviesStorage {
  movies: Movie[];
  moviesDetails: object[];
  page: number;
  total: number;
}

async function getMovies(
  searchString: string,
  page: number,
  storage: MoviesStorage,
  append: boolean
) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=7a6495f0&s=${searchString}&page=${page}`
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
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=7a6495f0&i=${movie.imdbID}`
    );
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
  const [posts, setPosts] = useState<MoviesStorage>({} as MoviesStorage);
  const themeCtx = useContext(ThemeContext);
  const search = useContext(SearchContext);
  // const dispatch = useDispatch();
  // const handleOrderingChange = (e) => {
  //   dispatch(setOrdering(e.target.value));
  // };

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
    posts?.movies?.map(({ imdbID, Title, Poster }, index) => (
      <div
        key={imdbID}
        className={`${styles.post} ${
          theme === "dark ${imdbID}" ? styles.dark : styles.light
        }`}
      >
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <img className={styles.img} src={Poster} />
            <h4 className={styles.rating}>
              {posts.moviesDetails[index].imdbRating}
            </h4>
            <Link className={styles.titleFilm} to={`posts/${imdbID}`}>
              {Title}
            </Link>
            <h4 className={styles.genre}>
              {posts.moviesDetails[index].Genre.replace(/[,]/g, " •")}
            </h4>
          </div>
        </div>
      </div>
    ));
  return (
    <>
      <div className={styles.wrapBody}>
        <NavBar />
        <div className={styles.btnCenter}>
          {posts.movies ? (
            <div className={styles.posts}>{postToRender(themeCtx.theme)}</div>
          ) : (
            <div className={styles.backgroundImage}>
              <p className={styles.text}>Im searching movies! Please, wait</p>
            </div>
          )}
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
