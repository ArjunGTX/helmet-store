export const wishlistReducer = (wishlist, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return wishlist.some((item) => item._id === action.payload._id)
        ? wishlist
        : [...wishlist, action.payload];
    case "REMOVE_FROM_WISHLIST":
      return wishlist.filter((item) => item._id !== action.payload._id);
    default:
      return wishlist;
  }
};
