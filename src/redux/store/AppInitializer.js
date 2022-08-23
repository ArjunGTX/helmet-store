import React, { useEffect } from "react";
import { selectAuth } from "../slices/auth";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../services/category";

export const AppInitializer = ({ children }) => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  useEffect(() => {
    dispatch(getCategories());
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return <>{children}</>;
};
