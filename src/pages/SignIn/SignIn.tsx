// import { Action, ThunkDispatch } from "@reduxjs/toolkit";
// import { useState } from "react";
// import { getUser } from "../../store/userSlice";
// import { useDispatch } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import styles from "./SignIn.module.scss";

// const SignIn = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch<ThunkDispatch<unknown, unknown, Action>>();

//   const fromPage =
//     (location.state.from.pathname && location.state && location.state.from) ||
//     "/";

//   const [userLogin, setUserLogin] = useState({ email: "", password: "" });

//   const formHanlder = (event: React.ChangeEvent<HTMLFormElement>) => {
//     event?.preventDefault();
//     dispatch(getUser(userLogin));
//   };

//   const inputHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, name } = event.target;
//     setUserLogin((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const SignInHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     dispatch(getUser(userLogin)).then((result) => {
//       if (result.meta.requestStatus === "fulfilled") {
//         dispatch(getUserProfile());
//         navigate(fromPage); //перепроверитььььььь!!!!!!!!!!
//       }
//     });
//   };
//   return (
//     <div>
//       <form className={styles.form_body} onSubmit={formHanlder}>
//         <h2 className={styles.sign_title}>Sign In</h2>

//         <label htmlFor="sign_in_email">Email</label>
//         <input
//           type="email"
//           value={userLogin.email}
//           onChange={inputHanlder}
//           placeholder="Your email"
//           id="sign_in_email"
//         />

//         <label htmlFor="sign_in_password"></label>
//         <input
//           type="password"
//           name="sign_in_password"
//           value={userLogin.password}
//           onChange={inputHanlder}
//           placeholder="Yor password"
//         />

//         <div className={styles.forgot_pasw}>Forgot password?</div>
//         <button className={styles.signIn_btn} type="submit">
//           Sign In
//         </button>
//         <div className={styles.signIn_link}>
//           Don’t have an account?<Link to="/sign-up"> Sign Up</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
