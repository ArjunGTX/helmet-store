import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const getCategories = createAsyncThunk(
  "auth/getCategories",
  async (credentials) => {
    try {
      const { data } = await api.getCategories(credentials);
      return data.categories;
    } catch (err) {
      console.error(err);
    }
  }
);
