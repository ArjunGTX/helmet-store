export const addToWishlist = (product) => ({
  type: "ADD_TO_WISHLIST",
  payload: product,
});

export const removeFromWishlist = (product) => ({
  type: "REMOVE_FROM_WISHLIST",
  payload: product,
});
