import { createContext, useState, useContext, useEffect } from "react";
import { getCart } from "../utils/api";
import { useAuth } from "./AuthContext";

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const {
    auth: { isLoggedIn },
  } = useAuth();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (!isLoggedIn) return;
        const { status, data } = await getCart(auth.encodedToken);
        if (status !== 200) return;
        setCart(data.cart);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isLoggedIn]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
