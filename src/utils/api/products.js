import axios from "axios";
import { getOfferPrice } from ".";
import { compareStrings } from "../helpers";

export const getProducts = async () => {
  return axios.get("/api/products");
};

export const getCategories = async () => {
  return axios.get("/api/categories");
};

export const getSortedItems = (items, sort) => {
  if (sort === "low")
    return [...items].sort(
      (firstItem, secondItem) =>
        getOfferPrice(firstItem.price, firstItem.offer) -
        getOfferPrice(secondItem.price, secondItem.offer)
    );
  if (sort === "high")
    return [...items].sort(
      (firstItem, secondItem) =>
        getOfferPrice(secondItem.price, secondItem.offer) -
        getOfferPrice(firstItem.price, firstItem.offer)
    );
  return items;
};

export const getFilteredProducts = (products, filters) => {
  if (products && filters) {
    const sortedProducts = getSortedItems(products, filters.sortBy);
    return sortedProducts
      .filter((product) => (filters.includeOutOfStock ? true : product.inStock))
      .filter((product) => (filters.fastDelivery ? product.fastDelivery : true))
      .filter((product) => filters.category[product.categoryName])
      .filter((product) =>
        filters.rating === 0 ? true : filters.rating <= product.rating
      )
      .filter(
        (product) =>
          getOfferPrice(product.price, product.offer) <= filters.priceRange
      )
      .filter((product) =>
        filters.brands.length === 0
          ? true
          : filters.brands.find((brand) => brand === product.brand)
      )
      .filter((product) =>
        compareStrings(product.name, filters.search)
          ? compareStrings(product.name, filters.search)
          : compareStrings(product.description, filters.search)
      );
  }
};
