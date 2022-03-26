import { createContext, useState, useContext, useEffect } from "react";
import { getCart, getProducts } from "../utils/api";
import { useAuth } from "./AuthContext";

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { auth } = useAuth();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (!auth.isLoggedIn) return;
        const { status: productStatus, data: productData } =
          await getProducts();
        if (productStatus !== 200) return;
        const { status: cartStatus, data: cartData } = await getCart(
          auth.encodedToken
        );
        if (cartStatus !== 200) return;
        setCart(
          cartData.cart.filter((item) =>
            productData.products.find((product) => product._id === item._id)
          )
        );
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
