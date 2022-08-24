import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const signUp = createAsyncThunk("auth/signUp", async (credentials) => {
  try {
    const { data } = await api.signUp(credentials);
    return data.encodedToken;
  } catch (err) {
    console.error(err);
  }
});

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await api.login(credentials);
    return data.encodedToken;
  } catch (err) {
    console.error(err);
  }
});
