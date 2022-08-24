import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../services/category";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

export const selectCategories = (store) => store.category.categories;

export const categoryReducer = categorySlice.reducer;
