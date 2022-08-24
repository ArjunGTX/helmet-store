import React from "react";

export const Availability = ({
  stock,
  delivery,
  onStockChange,
  onDeliveryChange,
}) => {
  return (
    <>
      <div className="flex-row align-center">
        <input
          id="stock"
          type="checkbox"
          name="stock"
          checked={stock}
          onChange={onStockChange}
        />
        <label htmlFor="stock">Include out of Stock</label>
      </div>
      <div className="flex-row align-center">
        <input
          id="delivery"
          type="checkbox"
          checked={delivery}
          onChange={onDeliveryChange}
          name="delivery"
        />
        <label htmlFor="delivery">Fast Delivery</label>
      </div>
    </>
  );
};
