import { useContext } from "react";
import { ThemeContext } from "../../../Context/Context";
import "./input.scss";

export const InputAuthorization = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="form-input__container">
      <h2
        className={
          themeContext.themeIsActive === false
            ? "form-input__title"
            : "form-input__title white"
        }
      >
        {props.title}
      </h2>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={
          themeContext.themeIsActive === false
            ? "form-input"
            : "form-input white"
        }
      />
    </div>
  );
};
