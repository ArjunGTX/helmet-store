import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
  priceRange: 75000,
  includeOutOfStock: false,
  fastDelivery: false,
  sortBy: "",
  search: "",
  category: {
    racing: true,
    street: true,
    touring: true,
    offRoad: true,
  },
  brands: [],
  rating: 0,
};

const initialState = {
  filters: initialFilters,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    search: (state, { payload }) => {
      state.filters.search = payload;
    },
    sort: (state, { payload }) => {
      state.filters.sortBy = payload;
    },
    toggleStockAvailability: (state) => {
      state.filters.includeOutOfStock = !state.filters.includeOutOfStock;
    },
    toggleFastDelivery: (state) => {
      state.filters.fastDelivery = !state.filters.fastDelivery;
    },
    addBrand: (state, { payload }) => {
      state.filters.brands.push(payload);
    },
    removeBrand: (state, { payload }) => {
      return state.filters.brands.filter((brand) => brand !== payload);
    },
    addCategory: (state, { payload }) => {
      state.filters.category[payload] = true;
    },
    removeCategory: (state, { payload }) => {
      state.filters.category[payload] = false;
    },
    setRating: (state, { payload }) => {
      state.filters.rating = payload;
    },
    setPriceRange: (state, { payload }) => {
      state.filters.priceRange = payload;
    },
    clearFilters: (state) => {
      state.filters = initialFilters;
    },
  },
});

export const {
  search,
  sort,
  setPriceRange,
  setRating,
  addBrand,
  addCategory,
  removeBrand,
  removeCategory,
  toggleFastDelivery,
  toggleStockAvailability,
  clearFilters,
} = filterSlice.actions;

export const selectFilters = (store) => store.filter.filters;

export const filterReducer = filterSlice.reducer;
