// import React, { useState } from "react";
// import { useAuth } from "../../hook/useAuth";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { signUpUser } from "../../store/userSlice";
// import { Action, ThunkDispatch } from "@reduxjs/toolkit";
// import styles from "../SignIn/SignIn.module.scss";
// import { initialPostState } from "../../HOC/initialStates";
// const SignUp = () => {
//   const [userSignUp, SetUserSignUp] = useState({
//     username: "",
//     email: "",
//     password: "",
//     course_group: 7,
//   });

//   const navigate = useNavigate();
//   const dispatch = useDispatch<ThunkDispatch<unknown, unknown, Action>>();
//   const { signin } = useAuth();
//   const location = useLocation();

//   const fromPage =
//     (location.state.from.pathname && location.state && location.state.from) ||
//     "/";

//   const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     SetUserSignUp((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//   console.log(value);
//   return (
//     <div>
//       <form className={styles.form_body} onSubmit={formHanlder}>
//         <h2 className={styles.sign_title}>Sign In</h2>

//         <label htmlFor="sign_in_name">Name</label>
//         <input
//           type="text"
//           value={userSignUp.username}
//           onChange={inputHandler}
//           placeholder="Your name"
//           id="sign_in_name"
//         />
//         <label htmlFor="sign_in_email">Email</label>
//         <input
//           type="email"
//           value={userSignUp.email}
//           onChange={inputHandler}
//           placeholder="Your email"
//           id="sign_in_email"
//         />

//         <label htmlFor="sign_in_password">Password</label>
//         <input
//           type="password"
//           name="sign_in_password"
//           value={userSignUp.password}
//           onChange={inputHandler}
//           placeholder="Your password"
//         />

//         <div className={styles.forgot_pasw}>Forgot password?</div>
//         <button className={styles.signIn_btn} type="submit">
//           Sign Up
//         </button>
//         <div className={styles.signIn_link}>
//           Already have an account?<Link to="/sign-in"> Sign Up</Link>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default SignUp;
