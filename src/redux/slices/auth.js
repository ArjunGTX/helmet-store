import { createSlice } from "@reduxjs/toolkit";
import { login, signUp } from "../services/auth";

const initialState = JSON.parse(localStorage.getItem("auth")) || {
  encodedToken: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.encodedToken = "";
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.encodedToken = payload;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.encodedToken = payload;
    },
  },
});

export const { logout } = authSlice.actions;

export const selectAuth = (store) => store.auth;

export const authReducer = authSlice.reducer;
