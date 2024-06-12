import styles from "./SignUp.module.scss";
import { ReactComponent as Logo } from "../../assets/pixema.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useAuth } from "../../hook/useAuth";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import AuthProvider from "../../HOC/AuthProvider";
