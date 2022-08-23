import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../../../contexts";
import {
  addToWishlist,
  deleteFromWishlist,
  getOfferPrice,
} from "../../../../utils/api";
import { ProductRating } from "./ProductRating";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../../../../redux/slices/auth";
import { selectCart } from "../../../../redux/slices/cart";
import { addToCart } from "../../../../redux/services/cart";

export const ProductCard = ({ product }) => {
  const { isLoggedIn, encodedToken } = useSelector(selectAuth);
  const cart = useSelector(selectCart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { wishlist, setWishlist } = useWishlist();

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

  const addProductToWishlist = async () => {
    try {
      if (!isLoggedIn) {
        navigate("/login");
        return;
      }
      const { status, data } = await addToWishlist(encodedToken, product);
      if (status !== 201) return;
      setWishlist(data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWishlistChange = () =>
    isLoggedIn
      ? isFavourite
        ? removeProductFromWishlist()
        : addProductToWishlist()
      : navigate("/login");

  const handleCartChange = () =>
    isLoggedIn
      ? isItemAdded
        ? navigate("/cart")
        : handleAddToCart()
      : navigate("/login");

  const removeProductFromWishlist = async () => {
    try {
      const { status, data } = await deleteFromWishlist(
        encodedToken,
        product._id
      );
      if (status !== 200) return;
      setWishlist(data.wishlist);
      return;
    } catch (error) {
      console.log(error);
    }
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
