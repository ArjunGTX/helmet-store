import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCategory, removeCategory } from "../../../redux/slices/filter";

export const Category = ({ categories }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    dispatch(addCategory(category));
    categories.forEach(
      (listCategory) =>
        listCategory.category !== category &&
        dispatch(removeCategory(listCategory.category))
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
