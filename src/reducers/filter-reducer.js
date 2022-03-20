export const initialFilters = {
  priceRange: 75000,
  includeOutOfStock: false,
  fastDelivery: false,
  sortBy: "",
  category: {
    racing: true,
    street: true,
    touring: true,
    offRoad: true,
  },
  brands: [],
  rating: 0,
};

export const filterReducer = (filters, action) => {
  switch (action.type) {
    case "SORT_ITEMS":
      return { ...filters, sortBy: action.payload };
    case "TOGGLE_STOCK":
      return { ...filters, includeOutOfStock: !filters.includeOutOfStock };
    case "TOGGLE_DELIVERY":
      return { ...filters, fastDelivery: !filters.fastDelivery };
    case "ADD_BRAND":
      return {
        ...filters,
        brands: [...filters.brands, action.payload],
      };
    case "REMOVE_BRAND":
      return {
        ...filters,
        brands: filters.brands.filter((brand) => brand !== action.payload),
      };
    case "ADD_CATEGORY":
      return {
        ...filters,
        category: {
          ...filters.category,
          [action.payload]: true,
        },
      };
    case "REMOVE_CATEGORY":
      return {
        ...filters,
        category: {
          ...filters.category,
          [action.payload]: false,
        },
      };
    case "FILTER_RATING":
      return { ...filters, rating: action.payload };
    case "FILTER_PRICE":
      return { ...filters, priceRange: action.payload };
    case "CLEAR_FILTERS":
      return initialFilters;
  }
};
