import { Link } from "react-router-dom";
import "../../styles/pages/cart.css";
import { CartCard, Checkout } from "./components";
import { useSelector } from "react-redux";
import {
  selectCart,
  selectTotalCartPrice,
  selectTotalCartQty,
  selectTotalDeliveryCharge,
  selectTotalDiscount,
} from "../../redux/slices/cart";

export const Cart = () => {
  const cart = useSelector(selectCart);
  const qty = useSelector(selectTotalCartQty);
  const price = useSelector(selectTotalCartPrice);
  const discount = useSelector(selectTotalDiscount);
  const deliveryCharge = useSelector(selectTotalDeliveryCharge);

  const checkoutDetails = {
    qty,
    price,
    discount,
    deliveryCharge,
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
