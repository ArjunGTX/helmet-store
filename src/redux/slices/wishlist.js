import { createSlice } from "@reduxjs/toolkit";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../services/wishlist";

const initialState = {
  list: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: {
    [getWishlist.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
    [addToWishlist.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
    [removeFromWishlist.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export const selectWishlist = (store) => store.wishlist.list;

export const wishlistReducer = wishlistSlice.reducer;
