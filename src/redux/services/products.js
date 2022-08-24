import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const getProducts = createAsyncThunk("auth/getProducts", async () => {
  try {
    const { data } = await api.getProducts();
    return data.products;
  } catch (err) {
    console.error(err);
  }
});
