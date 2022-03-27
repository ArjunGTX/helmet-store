import { Link } from "react-router-dom";
import { useCart } from "../../contexts";
import "../../styles/pages/cart.css";
import {
  getTotalCartPrice,
  getTotalDeliveryCharge,
  getTotalDiscount,
  getTotalQty,
} from "../../utils/api";
import { CartCard, Checkout } from "./components";

export const Cart = () => {
  const { cart } = useCart();

  const checkoutDetails = cart && {
    qty: getTotalQty(cart),
    price: getTotalCartPrice(cart),
    discount: getTotalDiscount(cart),
    deliveryCharge: getTotalDeliveryCharge(cart),
  };

  return (
    <>
      {cart.length !== 0 && (
        <h3 className="page-title">MY CART ({cart.length})</h3>
      )}
      <div className="cart-container">
        <div className="items">
          {cart?.map((item) => (
            <CartCard item={item} key={item._id} />
          ))}
        </div>
        {cart.length !== 0 ? (
          <Checkout checkoutDetails={checkoutDetails} />
        ) : (
          <div className="flex-col flex-center full-page">
            <h2>Your Cart is Empty</h2>
            <Link to="/products" className="btn btn-primary">
              SHOP NOW
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
