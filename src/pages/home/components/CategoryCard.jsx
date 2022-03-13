import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = ({ category, image, className }) => {
  return (
    <Link
      to={"/products"}
      className={`category br-xs of-hidden pos-rel shadow-light cursor-pointer ${className ? className : ""}`}
    >
      <img className="img-res" src={`assets/images/category/${image}`} alt={image} />
      <h3 className="pos-abs txt-lg txt-light font-medium full-width full-height fr-ct-ct">{category}</h3>
    </Link>
  );
};
