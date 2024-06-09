import { useContext } from "react";
import styles from "./NavBar.module.scss";

import { ReactComponent as IconHome } from "../../assets/home.svg";
import { ReactComponent as IconTrends } from "../../assets/trends.svg";
import { ReactComponent as IconFavorites } from "../../assets/favorites.svg";
import { ReactComponent as IconSetting } from "../../assets/setting.svg";
import { ReactComponent as IconAuthorization } from "../../assets/IconAuth.svg";
import NavItem from "./NavItem/NavItem";
import { ThemeContext } from "../../Context/Context";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
export interface IProps {
  isDark: boolean;
  setIsDark: (flag: boolean) => void;
}

const NavBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.navbar} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <ul>
        <NavItem to="/" icon={IconHome} label="Home" />
        <NavItem to="/about" icon={IconTrends} label="Trends" />
        <NavItem to="/favorite" icon={IconFavorites} label="Favorites" />
        <NavItem to="/posts" icon={IconSetting} label="Posts" />
        <NavItem to="/signin" icon={IconAuthorization} label="Sign In" />
      </ul>
      <ThemeToggle />
    </div>
  );
};

export default NavBar;
