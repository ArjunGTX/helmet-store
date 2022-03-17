import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ProductRating } from "./ProductRating";

export const ProductCard = ({ product }) => {
  const getOfferPrice = (price, offer) => price - (price * offer) / 100;
  return (
    <div className="card">
      <button className="btn btn-icon">
        <AiOutlineHeart />
      </button>
      <div className="card-cover flex-row flex-center">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card-title-container">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-subtitle price">{product.description}</p>
        <span className="price-new">{`₹${getOfferPrice(
          product.price,
          product.offer
        )}`}</span>
        <span className="price-old">{`₹${product.price}`}</span>
        <span className="offer">{`(${product.offer}% OFF)`}</span>
      </div>
      <ProductRating rating={product.rating} ratingCount={product.ratingCount} />
      <div className="card-bottom">
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};
