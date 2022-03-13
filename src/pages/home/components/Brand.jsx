import React from "react";

export const Brand = ({ image, className }) => {
  return (
    <div className={className}>
      <img
        className="img-res"
        src={`assets/images/brands/${image}`}
        alt={image}
      />
    </div>
  );
};
