import React from "react";

export const Category = ({ category, checked, onChange }) => {
  return (
    <div className="flex-row align-center">
      <input
        id={category._id}
        type="checkbox"
        checked={checked}
        value={category.category}
        onChange={onChange}
        name="category"
      />
      <label htmlFor={category._id}>{category.categoryName}</label>
    </div>
  );
};
