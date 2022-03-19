import React from "react";

export const Checkout = () => {
  return (
    <div className="checkout">
      <h4>PRICE DETAILS</h4>
      <hr />
      <div className="details">
        <div className="flex-row">
          <span>Price (2 items)</span>
          <span className="ml-auto">₹4800</span>
        </div>
        <div className="flex-row">
          <span>Discount</span>
          <span className="ml-auto">-₹2400</span>
        </div>
        <div className="flex-row">
          <span>Delivery Charge</span>
          <span className="ml-auto">₹300</span>
        </div>
      </div>
      <hr />
      <div className="flex-row">
        <h5>TOTAL AMOUNT</h5>
        <h5 className="ml-auto">₹2700</h5>
      </div>
      <hr />
      <span className="note">
        You will save <span className="offer">₹240000</span> on this offer
      </span>
      <button className="btn btn-primary">PLACE ORDER</button>
    </div>
  );
};
