import "./PostItem.module.scss";
import { Movie } from "../../../Types/Types";
import { useNavigate } from "react-router-dom";

import styles from "./PostItem.module.scss";

export const PostItem = ({ imdbID, Poster, Title, Type }: Movie) => {
  return (
    <>
      <div className={styles.movie_container} key={imdbID}>
        <img className={styles.poster_item} src={Poster} alt="#" />
        <h2>{Title}</h2>
        <p className="movies-type">
          {Type.charAt(0).toUpperCase() + Type.slice(1)}
        </p>
      </div>
    </>
  );
};
