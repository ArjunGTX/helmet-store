import React from "react";
import { useNavigate } from "react-router-dom";
import { addCategory, removeCategory } from "../../../actions";
import { useFilters } from "../../../contexts";

export const Category = ({ categories }) => {
  const { filterDispatch } = useFilters();
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    filterDispatch(addCategory(category));
    categories.forEach(
      (listCategory) =>
        listCategory.category !== category &&
        filterDispatch(removeCategory(listCategory.category))
    );
    navigate("/products");
  };

  return (
    <section className="category-container">
      {categories.map((category) => (
        <div
          onClick={() => handleCategoryChange(category.category)}
          className="category bg-res"
          key={category._id}
        >
          <div className="overlay" />
          <img src={category.image} alt={category.image} className="img-res" />
          <h5>{category.category.toUpperCase()}</h5>
        </div>
      ))}
    </section>
  );
};
