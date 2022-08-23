import { createContext, useState, useContext, useEffect } from "react";
import { getCart } from "../utils/api";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/auth";

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const auth = useSelector(selectAuth);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (!auth.isLoggedIn) return;
        const { status, data } = await getCart(auth.encodedToken);
        if (status !== 200) return;
        setCart(data.cart);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [auth.isLoggedIn]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
