import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ICard } from "../../Types/Types";
import styles from "./Favorite.module.scss";
import NavBar from "../../components/Navbar/NavBar";

const Favorite = () => {
  const { favoritePosts } = useSelector(
    (state) => state as { favorites: { favoritePosts: ICard[] } }
  ).favorites;

  const favPostWrap = favoritePosts.map(({ Title, Poster, Genre }) => {
    return (
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>

        <h1>{Title}</h1>
        <img src={Poster} />
        <p>{Genre}</p>
      </div>
    );
  });
  const navigate = useNavigate();

  return (
    <div className={styles.favorite_body}>
      <NavBar />
      <div className={styles.favorite_body_inner}></div>
      {favoritePosts.length > 0 ? (
        favPostWrap
      ) : (
        <h1>
          No favorite posts yet!
          <br />
          <NavLink to="/" className={styles.link}>
            Click to find movies!
          </NavLink>
        </h1>
      )}
    </div>
  );
};

export default Favorite;
