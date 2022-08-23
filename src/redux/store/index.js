import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/auth";
import { cartReducer } from "../slices/cart";
import { categoryReducer } from "../slices/category";
import { filterReducer } from "../slices/filter";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export * from "./AppInitializer";
