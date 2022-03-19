export const initialFilters = {
  includeOutOfStock: false,
  fastDelivery: false,
  sortBy: null,
  category: {
    racing: true,
    street: true,
    touring: true,
    offRoad: true,
  },
  brands: ["agv", "arai", "mt", "shoei"],
  rating: null,
  priceRange: 150000,
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
      return { ...filters, brands: [...filters.brands, action.payload] };
    case "REMOVE_BRAND":
      return {
        ...filters,
        brands: brands.filters((brand) => brand !== action.payload),
      };
    case "TOGGLE_CATEGORY":
      return {
        ...filters,
        category: {
          ...filters.category,
          [action.payload]: !filters.category[action.payload],
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
