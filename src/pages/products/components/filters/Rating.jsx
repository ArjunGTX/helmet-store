import React from "react";

export const Rating = ({ rating }) => {
  return (
    <div className="flex-row align-center">
      <input id={`star-${rating}`} type="radio" name="rating" />
      <label htmlFor={`star-${rating}`}>{rating} Stars & above</label>
    </div>
  );
};
