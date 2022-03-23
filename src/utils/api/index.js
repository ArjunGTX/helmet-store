export const getOfferPrice = (price, discount) =>
  parseInt(price - (price * discount) / 100);

export * from "./products";
export * from "./auth";
export * from "./cart";
export * from "./wishlist";
