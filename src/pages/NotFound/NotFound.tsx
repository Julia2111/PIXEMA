import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.body_page}>
      <div className={styles.container_info}>
        <h1>NotFound Page</h1>
        <button onClick={() => navigate(-1)} className={styles.btn_back}>
          Go back
        </button>
      </div>
    </div>
  );
};
export default NotFound;
