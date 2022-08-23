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

export const getTotalCartPrice = (cart) =>
  cart.reduce(
    (totalPrice, item) => (totalPrice += parseInt(item.price * item.qty)),
    0
  );

export const getTotalQty = (cart) =>
  cart.reduce((qty, item) => (qty += parseInt(item.qty)), 0);

export const getTotalDiscount = (cart) =>
  cart.reduce(
    (discount, item) =>
      (discount += Math.round(
        parseInt(((item.price * item.offer) / 100) * item.qty)
      )),
    0
  );

export const getTotalDeliveryCharge = (cart) =>
  cart.reduce(
    (deliveryCharge, item) => (deliveryCharge += parseInt(item.qty * 100)),
    0
  );
