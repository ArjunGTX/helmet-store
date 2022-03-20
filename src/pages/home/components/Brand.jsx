import React from "react";
import { useNavigate } from "react-router-dom";
import { addBrand, removeBrand } from "../../../actions";
import { useFilters } from "../../../contexts";
import { brandList } from "../../../utils/constants";

export const Brand = ({ item }) => {
  const { filterDispatch } = useFilters();
  const navigate = useNavigate();

  const handleBrandChange = (brand) => {
    filterDispatch(addBrand(brand));
    brandList.forEach(
      (listBrand) =>
        listBrand.brand !== brand &&
        filterDispatch(removeBrand(listBrand.brand))
    );
    navigate("/products");
  };
  return (
    <img
      onClick={() => handleBrandChange(item.brand)}
      className="brand"
      src={item.image}
      alt={item.image}
    />
  );
};
