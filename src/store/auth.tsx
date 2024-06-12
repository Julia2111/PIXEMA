import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthApi, { SignInInfo, SignUpInfo } from "../api/auth.ts";

export const register = createAsyncThunk(
  "auth/register",
  async (info: SignUpInfo, { rejectWithValue }) => {
    try {
      const response = await AuthApi.register(info);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue((e as Error).message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (info: SignInInfo, { rejectWithValue }) => {
    try {
      const response = await AuthApi.login(info);
      const data = await response.json();
      return { user: data };
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  return await AuthApi.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});
const { reducer } = authSlice;
export default reducer;
