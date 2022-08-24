import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const getWishlist = createAsyncThunk(
  "auth/getWishlist",
  async (_, { getState }) => {
    try {
      const {
        auth: { encodedToken },
      } = getState();
      const { data } = await api.getWishlist(encodedToken);
      return data.wishlist;
    } catch (err) {
      console.error(err);
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "auth/addToWishlist",
  async (product, { getState }) => {
    try {
      const {
        auth: { encodedToken },
      } = getState();
      const { data } = await api.addToWishlist(encodedToken, product);
      return data.wishlist;
    } catch (err) {
      console.error(err);
    }
  }
);

export const removeFromWishlist = createAsyncThunk(
  "auth/removeFromWishlist",
  async (productId, { getState }) => {
    try {
      const {
        auth: { encodedToken },
      } = getState();
      const { data } = await api.deleteFromWishlist(encodedToken, productId);
      return data.wishlist;
    } catch (err) {
      console.error(err);
    }
  }
);
