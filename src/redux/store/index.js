import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/auth";
import { cartReducer } from "../slices/cart";
import { categoryReducer } from "../slices/category";
import { filterReducer } from "../slices/filter";
import { productsReducer } from "../slices/products";
import { sidebarReducer } from "../slices/sidebar";
import { wishlistReducer } from "../slices/wishlist";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    filter: filterReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    sidebar: sidebarReducer,
    products: productsReducer,
  },
});

export * from "./AppInitializer";
