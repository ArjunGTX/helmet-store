import React from "react";

export const PriceRange = ({ min, max, range, step, onChange }) => {
  return (
    <div className="price-range">
      <div className="flex-row">
        <span>{min}</span>
        <span className="ml-auto">{max}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={range}
        name="price-range"
      />
    </div>
  );
};
