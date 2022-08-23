import React from "react";

export const Rating = ({ rating, checked, onChange }) => {
  return (
    <div className="flex-row align-center">
      <input
        id={`star-${rating}`}
        type="radio"
        value={rating}
        name="rating"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={`star-${rating}`}>{rating} Stars & above</label>
    </div>
  );
};
