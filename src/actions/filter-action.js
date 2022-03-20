export const sortItems = (sort) => ({
  type: "SORT_ITEMS",
  payload: sort,
});

export const toggleStock = (stock) => ({
  type: "TOGGLE_STOCK",
  payload: stock,
});

export const toggleDelivery = (delivery) => ({
  type: "TOGGLE_DELIVERY",
  payload: delivery,
});

export const addCategory = (category) => ({
  type: "ADD_CATEGORY",
  payload: category,
});

export const removeCategory = (category) => ({
  type: "REMOVE_CATEGORY",
  payload: category,
});

export const addBrand = (brand) => ({
  type: "ADD_BRAND",
  payload: brand,
});

export const removeBrand = (brand) => ({
  type: "REMOVE_BRAND",
  payload: brand,
});

export const filterRating = (rating) => ({
  type: "FILTER_RATING",
  payload: rating,
});

export const filterPrice = (price) => ({
  type: "FILTER_PRICE",
  payload: parseInt(price),
});

export const clearFilters = () => ({
  type: "CLEAR_FILTERS",
});
