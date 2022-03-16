import React from "react";
import { Link } from "react-router-dom";

export const Category = ({ categories }) => {
  return (
    <section className="category-container">
      {categories.map((category) => (
        <Link to={"/products"}>
        <div className="category bg-res">
          <div className="overlay" />
          <img
            src={`assets/images/category/${category.image}`}
            alt={category.image}
            className="img-res"
          />
          <h5>{category.category.toUpperCase()}</h5>
        </div>
        </Link>
      ))}
    </section>
  );
};
