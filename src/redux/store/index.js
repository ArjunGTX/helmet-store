import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/auth";
import { categoryReducer } from "../slices/category";
import { filterReducer } from "../slices/filter";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    filter: filterReducer,
  },
});

export * from "./AppInitializer";
