import { createContext, useState, useContext, useEffect } from "react";
import { getWishlist } from "../utils/api";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/auth";

const WishlistContext = createContext(null);

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const auth = useSelector(selectAuth);

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (!auth.isLoggedIn) return;
        const { status, data } = await getWishlist(auth.encodedToken);
        if (status !== 200) return;
        setWishlist(data.wishlist);
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
