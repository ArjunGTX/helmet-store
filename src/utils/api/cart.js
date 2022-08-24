import axios from "axios";

export const getCart = async (token) => {
  return await axios.get("/api/user/cart", {
    headers: {
      authorization: token,
    },
  });
};

export const addToCart = async (token, product) => {
  return await axios.post(
    "/api/user/cart",
    { product },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deleteFromCart = async (token, productId) => {
  return await axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: token,
    },
  });
};

export const updateCartCount = async (token, productId, action) => {
  return await axios.post(
    `/api/user/cart/${productId}`,
    { action },
    {
      headers: {
        authorization: token,
      },
    }
  );
};
