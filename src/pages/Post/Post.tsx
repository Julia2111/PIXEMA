import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addFavoritePost } from "../../store/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/Navbar/NavBar";
import styles from "./Post.module.scss";
import noPosterImage from "../../assets/picForPosts/noPic.png";
import { API_BASE_URL } from "../../api/api";
import ModalUrl from "../../ui-components/ModalUrl/ModalUrl";
import { RootState } from "../../store";
import { ReactComponent as Share } from "../../assets/Icons/SHARe.svg";

const Post = () => {
  const { imdbID } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const favoritePosts = useSelector(
    (state: RootState) => state.favorites.favoritePosts
  );

  const [post, setPost] = useState({
    id: "",
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
    fetch(`${API_BASE_URL}&i=${imdbID}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.Response === "True") {
          setPost(data);
        } else {
          setPost({
            id: "",
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
      })
      .catch((error) => {
        console.error("Ошибка fetch:", error);
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

  const sharePost = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(
      () => {
        setModalOpen(true);
      },
      (err) => {
        console.error("Не удалось скопировать ссылку: ", err);
      }
    );
  };

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
                    onClick={() => dispatch(addFavoritePost({ post }))}
                  >
                    + MY LIST
                  </button>
                  <button onClick={sharePost}>
                    <Share />
                  </button>
                  <ModalUrl
                    isOpen={isModalOpen}
                    close={() => setModalOpen(false)}
                  >
                    Ссылка скопирована в буфер обмена!
                  </ModalUrl>
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
