import React from "react";

export const SortBy = ({ from, to }) => {
  return (
    <div className="flex-row align-center">
      <input id={`${from}-${to}`} type="radio" name="sort" />
      <label htmlFor={`${from}-${to}`}>
        Price - {from} to {to}
      </label>
    </div>
  );
};
