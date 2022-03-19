import { createContext, useReducer, useContext } from "react";
import { wishlistReducer } from "../reducers";

const WishlistContext = createContext(null);

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, []);
  return (
    <WishlistContext.Provider value={{ wishlist, dispatchWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
