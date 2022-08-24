import React from "react";

export const Brand = ({ brand, onChange, checked }) => {
  return (
    <div className="flex-row align-center">
      <input
        id={brand}
        type="checkbox"
        name="brand"
        checked={checked}
        onChange={onChange}
        value={brand}
      />
      <label htmlFor={brand}>{brand}</label>
    </div>
  );
};
