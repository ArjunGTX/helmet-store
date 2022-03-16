import React from "react";

export const Category = ({category}) => {
  return (
    <div className="flex-row align-center">
      <input id={category.id} type="checkbox" name="category" />
      <label htmlFor={category.id}>{category.name}</label>
    </div>
  );
};
