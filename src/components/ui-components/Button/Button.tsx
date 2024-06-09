import React, { useContext } from "react";
import styles from "./Button.module.scss";
import { ThemeContext } from "../../Context/Context";

interface IButton {
  variant?: "primary" | "secondary-1" | "secondary-2";
  children?: React.ReactNode;
  disabled: boolean;
  bookmark?: boolean;
  like?:'up'|'down'
  handler: () => void;
}

const Button = ({
  children,
  disabled = false,
  handler,
}: IButton ) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <button disabled={disabled} 
    className={`${styles.btnMenu} ${themeCtx.theme === 'dark' ? styles.dark : styles.light}`
    } onClick={handler}>
      {children}
      
    </button>
  );
};
export default Button;