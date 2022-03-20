import React from "react";

export const SortBy = ({ sort, checked, onChange }) => {
  return (
    <div className="flex-row align-center">
      <input
        id={sort}
        type="radio"
        name="sort-by"
        checked={checked}
        value={sort}
        onChange={onChange}
      />
      <label htmlFor={sort}>
        Price - {sort === "high" ? "High to Low" : "Low to High"}
      </label>
    </div>
  );
};
