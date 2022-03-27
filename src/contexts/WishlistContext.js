import { createContext, useState, useContext, useEffect } from "react";
import { getProducts, getWishlist } from "../utils/api";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext(null);

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const { auth } = useAuth();

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (!auth.isLoggedIn) return;
        const { status: productStatus, data: productData } =
          await getProducts();
        if (productStatus !== 200) return;
        const { status: wishlistStatus, data: wishlistData } =
          await getWishlist(auth.encodedToken);
        if (wishlistStatus !== 200) return;
        setWishlist(
          wishlistData.wishlist.filter((item) =>
            productData.products.find((product) => product._id === item._id)
          )
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [auth.isLoggedIn]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
