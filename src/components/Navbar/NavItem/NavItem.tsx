import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../../../Context/Context";
import styles from "../NavBar.module.scss";

const NavItem = ({
  to,
  icon: Icon,
  label,
}: {
  to: string;
  icon: React.ElementType;
  label: string;
}) => {
  const { theme } = useContext(ThemeContext);

  const MyClassName = ({ isActive }) =>
    isActive ? `${styles.active}` : `${styles.nonActive}`;

  return (
    <li className={theme === "dark" ? styles.dark : styles.light}>
      <NavLink className={({ isActive }) => MyClassName({ isActive })} to={to}>
        <Icon className={styles.IconMenu} />
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
