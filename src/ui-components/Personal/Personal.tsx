import styles from "./Personal.module.scss";
import { useContext, useState } from "react";
import Button from "../Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { ActiveContext } from "../../Context/Context";
import { useAuth } from "../../hook/useAuth";
// import User from "../../assets/User.png";
import { ReactComponent as User } from "../../assets/userPic.svg";

const Personal = () => {
  const context = useContext(ActiveContext);

  const [isOpen, setOpen] = useState(false);
  const { isAuth, signout } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const closeNav = () => context?.setIsActive(false);

  const login = () => {
    navigate("/login", { state: { from: location } });
    closeNav();
  };

  const logOut = () => {
    signout(() => navigate("/", { replace: true }));
    closeNav();
  };

  return (
    <>
      <button onClick={() => setOpen(!isOpen)} className={styles.personal}>
        <div className={styles.user_pic}>
          <User />
        </div>
      </button>
      <nav className={`${styles.menu}  ${isOpen ? styles.active : ""}`}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <div>Edit profile</div>
          </li>
          <li className={styles.menuItem}>
            {!isAuth ? (
              <Button disabled={false} handler={login}>
                Login
              </Button>
            ) : (
              <Button disabled={false} handler={logOut}>
                LogOut
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Personal;
