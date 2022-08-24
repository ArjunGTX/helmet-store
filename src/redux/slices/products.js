import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getFilteredProducts } from "../../utils/api";
import { getProducts } from "../services/products";
import { selectFilters } from "./filter";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const selectProducts = (store) => store.products.products;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters],
  (products, filters) => getFilteredProducts(products, filters)
);

export const productsReducer = productsSlice.reducer;
