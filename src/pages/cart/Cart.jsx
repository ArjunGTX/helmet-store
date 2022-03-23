import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import "../../styles/pages/cart.css";
import { CartCard, Checkout } from "./components";

const cartList = [
  {
    id: 1,
    name: "AGV PISTA GP",
    price: 104000,
    offer: 25,
    rating: 4,
    count: 5,
    ratingCount: 456,
    description: "RACE TESTED, GLOSSY GRAPHICS PRINTED",
    image: "assets/images/helmets/racing/agv/pista-gp-rr-min.png",
  },
  {
    id: 2,
    name: "AGV PISTA GP",
    price: 104000,
    offer: 25,
    rating: 3,
    ratingCount: 320,
    count: 2,
    description: "RACE TESTED, GLOSSY GRAPHICS PRINTED ",
    image: "assets/images/helmets/racing/agv/pista-gp-rr-min.png",
  },
];

export const Cart = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => !auth.isLoggedIn && navigate("/login"), []);
  return (
    <>
      <h3 className="page-title">MY CART(2)</h3>
      <div className="cart-container">
        <div className="items">
          {cartList.map((item) => (
            <CartCard item={item} key={item.id} />
          ))}
        </div>
        <Checkout />
      </div>
    </>
  );
};
