export const getOfferPrice = (price, discount) =>
  price - (price * discount) / 100;

export const getSortedItems = (items, sort) => {
  if (sort === "low")
    return [...items].sort(
      (firstItem, secondItem) =>
        getOfferPrice(firstItem.price, firstItem.offer) -
        getOfferPrice(secondItem.price - secondItem.offer)
    );
  if (sort === "high")
    return [...items].sort(
      (firstItem, secondItem) =>
        getOfferPrice(secondItem.price, secondItem.offer) -
        getOfferPrice(firstItem.price, firstItem.offer)
    );
};
