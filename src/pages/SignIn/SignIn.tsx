import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { useState } from "react";
import { getUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch<ThunkDispatch<unknown, unknown, Action>>();
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });

  const formHanlder = (event: React.ChangeEvent<HTMLFormElement>) => {
    event?.preventDefault();
    dispatch(getUser(userLogin));
  };
  const inputHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", width: "350px" }}
        onSubmit={formHanlder}
      >
        <input
          value={userLogin.email}
          type="email"
          name="email"
          placeholder="write your email"
          onChange={inputHanlder}
        />
        <input
          value={userLogin.password}
          type="password"
          name="password"
          onChange={inputHanlder}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SignIn;
