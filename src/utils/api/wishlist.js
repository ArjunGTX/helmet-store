import axios from "axios";

export const getWishlist = async (token) => {
  return await axios.get("/api/user/wishlist", {
    headers: {
      authorization: token,
    },
  });
};

export const addToWishlist = async (token, product) => {
  return await axios.post(
    "/api/user/wishlist",
    { product },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deleteFromWishlist = async (token, productId) => {
  return await axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: token,
    },
  });
};
