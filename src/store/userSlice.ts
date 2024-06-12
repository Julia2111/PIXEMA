import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActivateUser, User } from "../Types/Types";

export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (activateObj: User, { rejectWithValue, dispatch }) => {
    try {
      const responce = await fetch(
        "https://studapi.teachmeskills.by/auth/users/",
        {
          method: "POST",
          body: JSON.stringify(activateObj),
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken":
              "2u9EiabuRdAvpzVVsb1AyBCN4NHiCd5Ea3MCV5Pzj5kaopDjEW0Dqhmb3jXgmn3p",
          },
        }
      );

      if (!responce.ok) {
        throw new Error("Error is here  ):");
      }
      const data = await responce.json();
      console.log(data);
      dispatch(addUser(data));
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
export const activateUser = createAsyncThunk(
  "user/activateUser",
  async (activateObj: ActivateUser, { rejectWithValue }) => {
    try {
      const obj = {
        uid: activateObj.uid,
        token: activateObj.token,
      };
      const responce = await fetch(
        "https://studapi.teachmeskills.by/auth/users/activation/",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!responce.ok) {
        throw new Error("Error is here  ):");
      }
      const data = await responce.json();
      console.log(data);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
export const getUser = createAsyncThunk(
  "user/sigIN",
  async (
    userLogin: {
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const responce = await fetch(
        "https://studapi.teachmeskills.by/auth/jwt/create/",
        {
          method: "POST",
          body: JSON.stringify(userLogin),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await responce.json();
      console.log(data);
      localStorage.setItem("Login", JSON.stringify(data));
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: { username: "Your Name" },
    tokenStatus: false,
  },
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
