
import styles from "./Personal.module.scss";
import { useContext, useState } from "react";
import {ReactComponent as Down} from '../../assets/down.svg'
import Button from "../Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { ActiveContext } from "../../Context/Context";
import { useAuth } from "../../hook/useAuth";

const Personal = ({ userName }: { userName: string }) => {
  const context = useContext(ActiveContext);
  const splitFunction = (userName: string) => {
    return userName
      .split(" ")
      .map((el) => el[0].toUpperCase())
      .join("");
  };
  const [isOpen, setOpen] = useState(false)
  const { isAuth, signout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const closeNav = () => context?.setIsActive(false);
  const login = () => {
    navigate("/login", {state: { from: location } });
    closeNav();
  };
  const logOut = () => {
    signout(() => navigate("/", { replace: true }));
    closeNav();
  };
  return (<>
    <button onClick={()=>setOpen(!isOpen)} className={styles.personal}>
      <div className={styles.short}>{splitFunction(userName)}</div>
      <div>{userName}</div>
     <Down/>
    </button>
     <nav className={`${styles.menu}  ${isOpen ? styles.active : ''}`}>
     <ul className={styles.menuList}>
       <li className={styles.menuItem}>
       Edit profile
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

