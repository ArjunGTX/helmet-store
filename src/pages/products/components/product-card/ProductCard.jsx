import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../../../contexts";
import {
  addToCart,
  addToWishlist,
  deleteFromCart,
  deleteFromWishlist,
  getOfferPrice,
} from "../../../../utils/api";
import { ProductRating } from "./ProductRating";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();

  const [loading, setLoading] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(
    cart.some((item) => item._id === product._id)
  );
  const isFavourite = wishlist.some((item) => item._id === product._id);

  const addProductToCart = async () => {
    try {
      if (!auth.isLoggedIn) {
        navigate("/login");
        return;
      }
      setLoading(true);
      const { status, data } = await addToCart(auth.encodedToken, product);
      if (status !== 201) {
        setLoading(false);
        return;
      }
      setCart(data.cart);
      setIsItemAdded(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const addProductToWishlist = async () => {
    try {
      if (!auth.isLoggedIn) {
        navigate("/login");
        return;
      }
      const { status, data } = await addToWishlist(auth.encodedToken, product);
      if (status !== 201) return;
      setWishlist(data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemFromCart = async () => {
    try {
      setLoading(true);
      const { status, data } = await deleteFromCart(
        auth.encodedToken,
        product._id
      );
      if (status !== 200) {
        setLoading(false);
        return;
      }
      setCart(data.cart);
      setIsItemAdded(false);
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeProductFromWishlist = async () => {
    try {
      const { status, data } = await deleteFromWishlist(
        auth.encodedToken,
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
      <button
        onClick={() =>
          isFavourite ? removeProductFromWishlist() : addProductToWishlist()
        }
        className="btn btn-icon"
      >
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
            disabled={loading}
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
