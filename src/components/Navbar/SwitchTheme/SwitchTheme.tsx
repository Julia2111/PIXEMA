import { useContext } from "react";
import { ThemeContext } from "../../../Context/Context";
import styles from "../NavBar.module.scss";

const SwitchTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = (t: string) => {
    setTheme(t);
  };
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.wrapper_btnTheme}
        onClick={() => toggleTheme("light")}
      >
        LIGHT
      </button>
      <button
        className={styles.wrapper_btnTheme}
        onClick={() => toggleTheme("dark")}
      >
        DARK
      </button>
    </div>
  );
};

export default SwitchTheme;
