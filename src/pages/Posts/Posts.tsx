import { useContext, useEffect, useState } from "react";
import styles from "./Posts.module.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/Context";
import { SearchContext } from "../../Context/SearchContext";
import NavBar from "../../components/Navbar/NavBar";
import { API_BASE_URL } from "../../api/api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const themeCtx = useContext(ThemeContext);
  const search = useContext(SearchContext);

  useEffect(() => {
    if (search.searchString.length === 0) {
      return;
    }

    fetch(`${API_BASE_URL}&s=${search.searchString}`)
      .then((responce) => responce.json())
      .then((data) => {
        if (data.Response === "False" || data.Search.length === 0) {
          setPosts([]);
          return;
        }

        setPosts(data.Search);
      });
  }, [search.searchString]);

  const postToRender = (theme: string) =>
    posts.map(({ imdbID, Title, Poster }) => (
      <div
        key={imdbID}
        className={`${styles.post} ${
          theme === "dark ${imdbID}" ? styles.dark : styles.light
        }`}
      >
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <img className={styles.img} src={Poster} />
            <h3>{Title}</h3>
            <Link to={`posts/${imdbID}`}>
              <div className={styles.link}>See the post</div>{" "}
            </Link>
          </div>
        </div>
        <div className={styles.footer}></div>
      </div>
    ));
  return (
    <>
      <div className={styles.wrapBody}>
        <NavBar />
        <div className={styles.btnCenter}>
          {posts.length > 0 ? (
            <div className={styles.posts}>{postToRender(themeCtx.theme)}</div>
          ) : (
            <div className={styles.backgroundImage}>
              <p className={styles.text}>Im searching movies! Please, wait</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Posts;
