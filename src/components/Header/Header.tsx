import SearchField from "../../ui-components/SearchField/SearchField";
import Personal from "../../ui-components/Personal/Personal";
import Burger from "../Burger/Burger";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Burger />
      <SearchField />
      <Personal userName={"Julia Khasenevich"} />
    </div>
  );
};
export default Header;
