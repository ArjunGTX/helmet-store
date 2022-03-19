export const cartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return cart.some((item) => item._id === action.payload._id)
        ? cart.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...cart, { ...action.payload, quantity: 1 }];
    case "REMOVE_FROM_CART":
      return cart.filter((item) => item._id !== action.payload._id);
    case "INCREASE_QUANTITY":
      return cart.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREASE_QUANTITY":
      return cart.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return cart;
  }
};
