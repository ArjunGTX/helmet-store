import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "../reducers/cart-reducer";

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};
