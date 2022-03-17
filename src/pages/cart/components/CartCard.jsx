import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

export const CartCard = ({ item }) => {
  return (
    <div className="card card-horizontal">
      <button className="btn btn-icon">
        <AiOutlineHeart />
      </button>
      <div className="card-cover flex-row flex-center">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-content">
        <div className="card-title-container">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-subtitle price">{item.description}</p>
          <span className="price-new">
            ₹{item.price - (item.price * item.offer) / 100}
          </span>
          <span className="price-old">₹{item.price}</span>
          <span className="offer">({item.offer}% OFF)</span>
        </div>
        <div className="quantity flex-row flex-center mx-auto">
          <button className="btn btn-link">-</button>
          <span>{item.count}</span>
          <button className="btn btn-link">+</button>
        </div>
        <div className="card-bottom">
          <button className="btn btn-secondary">Remove from Cart</button>
        </div>
      </div>
    </div>
  );
};
