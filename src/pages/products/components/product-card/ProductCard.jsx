import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart } from "../../../../contexts";
import {
  addToCart,
  deleteFromCart,
  getOfferPrice,
} from "../../../../utils/api";
import { ProductRating } from "./ProductRating";

export const ProductCard = ({ product, isFavourite }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { cart, setCart } = useCart();

  const [isItemAdded, setIsItemAdded] = useState(
    cart.some((item) => item._id === product._id)
  );

  const addProductToCart = async () => {
    try {
      if (!auth.isLoggedIn) {
        navigate("/login");
        return;
      }
      const { status, data } = await addToCart(auth.encodedToken, product);
      if (status !== 201) return;
      setCart(data.cart);
      setIsItemAdded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemFromCart = async () => {
    try {
      const { status, data } = await deleteFromCart(
        auth.encodedToken,
        product._id
      );
      if (status !== 200) return;
      setCart(data.cart);
      setIsItemAdded(false);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <button className="btn btn-icon">
        {isFavourite ? (
          <AiFillHeart className="heart-fill" />
        ) : (
          <AiOutlineHeart />
        )}
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
      <ProductRating
        rating={product.rating}
        ratingCount={product.ratingCount}
      />
      <div className="card-bottom">
        {product.inStock ? (
          <button
            onClick={() =>
              isItemAdded ? removeItemFromCart() : addProductToCart()
            }
            className="btn btn-primary"
          >
            {isItemAdded ? "Remove from Cart" : "Add to Cart"}
          </button>
        ) : (
          <button className="btn btn-error" disabled>
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};
