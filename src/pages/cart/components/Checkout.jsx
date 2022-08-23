import React from "react";

export const Checkout = ({ checkoutDetails }) => {
  const { price, discount, qty, deliveryCharge } = checkoutDetails;
  return (
    <div className="checkout">
      <h4>PRICE DETAILS</h4>
      <hr />
      <div className="details">
        <div className="flex-row">
          <span>Price ({qty} items)</span>
          <span className="ml-auto">₹{price}</span>
        </div>
        <div className="flex-row">
          <span>Discount</span>
          <span className="ml-auto">-₹{discount}</span>
        </div>
        <div className="flex-row">
          <span>Delivery Charge</span>
          <span className="ml-auto">₹{deliveryCharge}</span>
        </div>
      </div>
      <hr />
      <div className="flex-row">
        <h5>TOTAL AMOUNT</h5>
        <h5 className="ml-auto">₹{price - discount + deliveryCharge}</h5>
      </div>
      <hr />
      <span className="note">
        You will save <span className="offer">₹{discount}</span> on this
        purchase
      </span>
      <button className="btn btn-primary">PLACE ORDER</button>
    </div>
  );
};
