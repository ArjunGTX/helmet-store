import React, { useEffect } from "react";
import { selectAuth } from "../slices/auth";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../services/category";
import { getProducts } from "../services/products";

export const AppInitializer = ({ children }) => {
  const auth = useSelector(selectAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return <>{children}</>;
};
