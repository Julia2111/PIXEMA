import { ReactComponent as Pixema } from "../../assets/pixema.svg";
import styles from "./Burger.module.scss";
import { Link } from "react-router-dom";
const Burger = () => {
  return (
    <div className={styles.burgerMenu}>
      <Link to="/">
        <Pixema className={styles.logo} />
      </Link>
    </div>
  );
};
export default Burger;
