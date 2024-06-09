import { useContext } from "react";
import { ThemeContext } from "../../../Context/Context";
import { ReactComponent as Dark } from "../../../assets/dark.svg";
import { ReactComponent as Light } from "../../../assets/openEye.svg";
import styles from "../NavBar.module.scss";
// import styles from "./ThemeToggle.module.scss";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = (t: string) => {
    setTheme(t);
  };
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.wrapper__btnTheme}
        onClick={() => toggleTheme("light")}
      >
        <Light />
      </button>
      <button
        className={styles.wrapper__btnTheme}
        onClick={() => toggleTheme("dark")}
      >
        <Dark />
      </button>
    </div>
  );
};

export default ThemeToggle;
