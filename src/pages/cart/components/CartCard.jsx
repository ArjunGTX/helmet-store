import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useAuth, useCart } from "../../../contexts";
import {
  deleteFromCart,
  getOfferPrice,
  updateCartCount,
} from "../../../utils/api";

export const CartCard = ({ item }) => {
  const { setCart } = useCart();
  const { auth } = useAuth();

  const updateItemCount = async (type) => {
    try {
      const action = {
        type: type,
      };
      const { status, data } = await updateCartCount(
        auth.encodedToken,
        item._id,
        action
      );
      if (status !== 200) return;
      setCart(data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemFromCart = async () => {
    try {
      const { status, data } = await deleteFromCart(
        auth.encodedToken,
        item._id
      );
      if (status !== 200) return;
      setCart(data.cart);
      return;
    } catch (error) {
      console.log(error);
    }
  };

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
          <button onClick={removeItemFromCart} className="btn btn-secondary">
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};
