import React from "react";
import { useNavigate } from "react-router-dom";
import { brandList } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { addBrand, removeBrand } from "../../../redux/slices/filter";

export const Brand = ({ item }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleBrandChange = (brand) => {
    dispatch(addBrand(brand));
    brandList.forEach(
      (listBrand) =>
        listBrand.brand !== brand && dispatch(removeBrand(listBrand.brand))
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
