import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addFavoritePost } from "../../store/favoriteSlice";
import { useDispatch } from "react-redux";
import NavBar from "../../components/Navbar/NavBar";
import styles from "./Post.module.scss";
import noPosterImage from "../../assets/picForPosts/noPic.png";

import { Movie } from "../../Types/Types";
import { initialPostState } from "../../HOC/initialStates";
import { API_ENDPOINTS } from "../../api/api";
// import SlickCarousel from "../../components/ui-components/SlickCarousel/SlickCarousel";
const Post = () => {
  const { imdbID } = useParams();

  const [post, setPost] = useState({
    Title: "",
    Poster: "",
    Genre: "",
    Plot: "",
    Year: "",
    Released: "",
    BoxOffice: "",
    Country: "",
    Production: "",
    Actors: "",
    Director: "",
    Writer: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${API_ENDPOINTS.IMDB}${imdbID}`)
      .then((responce) => responce.json())
      .then((data) => {
        if (data.Response === "True") {
          setPost(data);
        } else {
          setPost({
            Title: "",
            Poster: "",
            Genre: "",
            Plot: "",
            Year: "",
            Released: "",
            BoxOffice: "",
            Country: "",
            Production: "",
            Actors: "",
            Director: "",
            Writer: "",
          });
        }
      });
  }, [imdbID]);

  const {
    Title,
    Poster,
    Genre,
    Plot,
    Year,
    Released,
    BoxOffice,
    Country,
    Production,
    Actors,
    Director,
    Writer,
  } = post;
  console.log(post);

  return (
    <>
      <div>
        <div className={styles.wrapBody}>
          <NavBar />
          <div className={styles.container}>
            <div className={styles.infoPost}>
              <div className={styles.postImg}>
                <div
                  className={styles.bgImg}
                  style={{
                    backgroundImage: `url(${Poster ? Poster : noPosterImage})`,
                  }}
                ></div>
                <div className={styles.buttons}>
                  <button onClick={() => navigate(-1)}>Go back</button>
                  <button
                    className={styles.button_favorite}
                    onClick={() => {
                      dispatch(addFavoritePost({ post }));
                    }}
                  >
                    + MY LIST
                  </button>
                </div>
              </div>
              <div className={styles.postText}>
                <p>{Genre.replace(/[,]/g, " •")}</p>
                <h1>{Title}</h1>

                <div className={styles.postRating}>{Plot}</div>

                <div className={styles.wrapInfo}>
                  <div className={styles.infoName}>
                    <p>Year </p>
                    <p>Released</p>
                    <p>BoxOffice</p>
                    <p>Country</p>
                    <p>Production</p>
                    <p>Actors</p>
                    <p>Director</p>
                    <p>Writer</p>
                  </div>
                  <div className={styles.infoValue}>
                    <p>{Year} </p>
                    <p>{Released}</p>
                    <p>{BoxOffice}</p>
                    <p>{Country}</p>
                    <p>{Production}</p>
                    <p>{Actors}</p>
                    <p>{Director}</p>
                    <p>{Writer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carousel_body}>{/* <SlickCarousel /> */}</div>
    </>
  );
};

export default Post;
