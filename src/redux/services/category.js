import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const getCategories = createAsyncThunk(
  "auth/getCategories",
  async () => {
    try {
      const { data } = await api.getCategories();
      return data.categories;
    } catch (err) {
      console.error(err);
    }
  }
);
