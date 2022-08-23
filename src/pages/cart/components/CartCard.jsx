import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useWishlist } from "../../../contexts";
import {
  addToWishlist,
  deleteFromWishlist,
  getOfferPrice,
} from "../../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../../../redux/slices/auth";
import { removeFromCart, updateCartCount } from "../../../redux/services/cart";

export const CartCard = ({ item }) => {
  const { encodedToken } = useSelector(selectAuth);
  const { wishlist, setWishlist } = useWishlist();

  const dispatch = useDispatch();

  const isFavourite = wishlist.some((product) => product._id === item._id);

  const updateItemCount = async (type) => {
    dispatch(
      updateCartCount({
        productId: item._id,
        type,
      })
    );
  };

  const addProductToWishlist = async () => {
    try {
      const { status, data } = await addToWishlist(encodedToken, item);
      if (status !== 201) return;
      setWishlist(data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const removeProductFromWishlist = async () => {
    try {
      const { status, data } = await deleteFromWishlist(encodedToken, item._id);
      if (status !== 200) return;
      setWishlist(data.wishlist);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromCart = async () => {
    dispatch(removeFromCart(item._id));
  };

  return (
    <div className="card card-horizontal">
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
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-content">
        <div className="card-title-container">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-subtitle price">{item.description}</p>
          <span className="price-new">
            ₹{getOfferPrice(item.price, item.offer)}
          </span>
          <span className="price-old">₹{item.price}</span>
          <span className="offer">({item.offer}% OFF)</span>
        </div>
        <div className="quantity flex-row flex-center mx-auto">
          <button
            disabled={item.qty <= 0}
            onClick={() => updateItemCount("decrement")}
            className="btn btn-link"
          >
            -
          </button>
          <span>{item.qty}</span>
          <button
            onClick={() => updateItemCount("increment")}
            className="btn btn-link"
          >
            +
          </button>
        </div>
        <div className="card-bottom">
          <button onClick={handleRemoveFromCart} className="btn btn-secondary">
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};
