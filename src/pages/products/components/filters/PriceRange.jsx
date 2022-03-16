import React from "react";

export const PriceRange = ({ min, max }) => {
  return (
    <div className="price-range">
      <div className="flex-row">
        <span>{min}</span>
        <span className="ml-auto">{max}</span>
      </div>
      <input type="range" min={min} max={max} name="price-range" />
    </div>
  );
};
