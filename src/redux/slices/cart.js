import { createSlice, createSelector } from "@reduxjs/toolkit";
import {
  addToCart,
  getCart,
  removeFromCart,
  updateCartCount,
} from "../services/cart";

const initialState = {
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [getCart.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
    [addToCart.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
    [removeFromCart.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
    [updateCartCount.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export const { logout } = cartSlice.actions;

export const selectCart = (store) => store.cart.list;

export const selectTotalCartPrice = createSelector([selectCart], (cart) =>
  cart.reduce(
    (totalPrice, item) => (totalPrice += parseInt(item.price * item.qty)),
    0
  )
);

export const selectTotalCartQty = createSelector([selectCart], (cart) =>
  cart.reduce((qty, item) => (qty += parseInt(item.qty)), 0)
);

export const selectTotalDiscount = createSelector([selectCart], (cart) =>
  cart.reduce(
    (discount, item) =>
      (discount += Math.round(
        parseInt(((item.price * item.offer) / 100) * item.qty)
      )),
    0
  )
);

export const selectTotalDeliveryCharge = createSelector([selectCart], (cart) =>
  cart.reduce(
    (deliveryCharge, item) => (deliveryCharge += parseInt(item.qty * 100)),
    0
  )
);

export const cartReducer = cartSlice.reducer;
