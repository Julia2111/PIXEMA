import styles from "./SignUp.module.scss";
import { InputForm } from "../../ui-components/Input/Input";
import React, { ChangeEvent, useContext, useState } from "react";
import useInput from "../../ui-components/UseInput/UseInput";
import { ThemeContext } from "../../Context/Context";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../../store/auth";
import { SignInInfo, SignUpInfo } from "../../api/auth";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import Title from "../../ui-components/Title/Title";
import { ReactComponent as Pixema } from "../../assets/pixema.svg";

const Signup: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<unknown, unknown, Action>>();
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  // const fromPage = location.state.from.pathname||'/';
  const emailInput = useInput("");
  const passwordInput = useInput("");
  const confirmPasswordInput = useInput("");

  const validateInput = (input: {
    value: string;
    setError: (value: boolean) => void;
  }) => {
    if (!input.value.trim()) {
      input.setError(true);
    } else {
      input.setError(false);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (!name.trim()) {
      setError(true);
    } else {
      setError(false);
    }

    validateInput(emailInput);
    validateInput(passwordInput);
    validateInput(confirmPasswordInput);

    console.log(
      "email ==>",
      emailInput.value,
      "password ==>",
      passwordInput.value,
      "confirm password ==>",
      confirmPasswordInput.value
    );

    const singUpInfo: SignUpInfo = {
      username: emailInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      course_group: 7,
    };

    dispatch(register(singUpInfo));

    const singInInfo: SignInInfo = {
      email: singUpInfo.email,
      password: singUpInfo.password,
    };

    login(singInInfo);
    navigate("/confirmation", { state: { fromPage }, replace: true });
  };

  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.wrapLogin}>
      <div className={styles.wrapTitle}>
        <Pixema className={styles.logoReg} />
        <a href="home">Back to home</a>
      </div>
      <div className={styles.authPage}>
        <div
          className={
            styles.authForm &&
            `${theme === "dark" ? styles.dark : styles.light}`
          }
        >
          <div className={styles.pageCenter}>
            <Title title={"Sign Up"} />
            <form onSubmit={handleSubmit}>
              <InputForm
                type="text"
                label="Name"
                value={name}
                name="name"
                error={error}
                onChange={handleNameChange}
                placeholder="Your name"
              />
              <InputForm
                type="email"
                label="Email"
                name="Email"
                placeholder="Your email"
                {...emailInput}
              />
              <InputForm
                type="password"
                label="Password"
                name="Password"
                placeholder="Your password"
                {...passwordInput}
              />

              <button type="submit" className={styles.submit}>
                Sing up
              </button>
            </form>
          </div>
        </div>
        <p className={styles.notification}>
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
};
export default Signup;
