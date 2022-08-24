import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const getCart = createAsyncThunk(
  "auth/getCart",
  async (_, { getState }) => {
    try {
      const {
        auth: { encodedToken },
      } = getState();
      const { data } = await api.getCart(encodedToken);
      return data.cart;
    } catch (err) {
      console.error(err);
    }
  }
);

export const addToCart = createAsyncThunk(
  "auth/addToCart",
  async (product, { getState }) => {
    try {
      const {
        auth: { encodedToken },
      } = getState();
      const { data } = await api.addToCart(encodedToken, product);
      return data.cart;
    } catch (err) {
      console.error(err);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "auth/removeFromCart",
  async (productId, { getState }) => {
    try {
      const {
        auth: { encodedToken },
      } = getState();
      const { data } = await api.deleteFromCart(encodedToken, productId);
      return data.cart;
    } catch (err) {
      console.error(err);
    }
  }
);

export const updateCartCount = createAsyncThunk(
  "auth/updateCartCount",
  async ({ productId, type }, { getState }) => {
    try {
      const {
        auth: { encodedToken },
      } = getState();
      const { data } = await api.updateCartCount(encodedToken, productId, {
        type,
      });
      return data.cart;
    } catch (err) {
      console.error(err);
    }
  }
);
