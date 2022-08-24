import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getOfferPrice } from "../../../../utils/api";
import { ProductRating } from "./ProductRating";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../../../../redux/slices/auth";
import { selectCart } from "../../../../redux/slices/cart";
import { addToCart } from "../../../../redux/services/cart";
import { selectWishlist } from "../../../../redux/slices/wishlist";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../../redux/services/wishlist";

export const ProductCard = ({ product }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  const cart = useSelector(selectCart);
  const wishlist = useSelector(selectWishlist);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isItemAdded, setIsItemAdded] = useState(
    cart.some((item) => item._id === product._id)
  );
  const isFavourite = wishlist.some((item) => item._id === product._id);

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    const {
      meta: { requestStatus },
    } = await dispatch(addToCart(product));
    if (requestStatus === "fulfilled") {
      setIsItemAdded(true);
    }
  };

  const handleAddToWishlist = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    dispatch(addToWishlist(product));
  };

  const handleWishlistChange = () =>
    isLoggedIn
      ? isFavourite
        ? handleRemoveFromWishlist()
        : handleAddToWishlist()
      : navigate("/login");

  const handleCartChange = () =>
    isLoggedIn
      ? isItemAdded
        ? navigate("/cart")
        : handleAddToCart()
      : navigate("/login");

  const handleRemoveFromWishlist = async () => {
    dispatch(removeFromWishlist(product._id));
  };

  return (
    <div className="card">
      <button onClick={handleWishlistChange} className="btn btn-icon">
        {isFavourite && isLoggedIn ? (
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
          <button onClick={handleCartChange} className="btn btn-primary">
            {isLoggedIn && isItemAdded ? "Go to Cart" : "Add to Cart"}
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
