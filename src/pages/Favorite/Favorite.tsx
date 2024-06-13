import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ICard } from "../../Types/Types";
import styles from "./Favorite.module.scss";
import { ReactComponent as ArrowBack } from "../../assets/Icons/ArrowBack.svg";
import { removeFavoritePost } from "../../store/favoriteSlice";

const Favorite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { favoritePosts } = useSelector(
    (state) => state as { favorites: { favoritePosts: ICard[] } }
  ).favorites;

  const handleDelete = (id: string) => {
    dispatch(removeFavoritePost({ id }));
  };

  const favPostWrap = favoritePosts.map(({ id, Title, Poster, Genre }) => {
    return (
      <div key={id}>
        <button onClick={() => navigate(-1)} className={styles.btn_back}>
          <ArrowBack />
        </button>

        <h1 className={styles.title_favorite}>{Title}</h1>
        <img src={Poster} />
        <p>{Genre}</p>
        <div className={styles.btn_container}>
          <button
            onClick={() => handleDelete(id)}
            className={styles.btn_delete}
          >
            DELETE CARD
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.favorite_body}>
      <div className={styles.favorite_body_inner}></div>
      {favoritePosts.length > 0 ? (
        favPostWrap
      ) : (
        <div className={styles.container_message}>
          <h1>
            No favorite posts yet!
            <br />
            <NavLink to="/" className={styles.link}>
              Click to find movies!
            </NavLink>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Favorite;
