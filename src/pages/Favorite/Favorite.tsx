import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ICard } from "../../Types/Types";
import styles from "./Favorite.module.scss";
import NavBar from "../../components/Navbar/NavBar";
import { RootState } from "../../store";

const Favorite = () => {
  const navigate = useNavigate();
  const { favoritePosts } = useSelector((state: RootState) => state.favorites);

  const favPostWrap = favoritePosts.map((post: ICard) => (
    <div key={post.id}>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>{post.Title}</h1>
      <img src={post.Poster} alt={post.Title} />
      <p>{post.Genre}</p>
    </div>
  ));

  return (
    <div className={styles.favorite_body}>
      <NavBar />
      <div className={styles.favorite_body_inner}>
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
    </div>
  );
};

export default Favorite;
