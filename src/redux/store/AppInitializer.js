import React, { useEffect } from "react";
import { selectAuth } from "../slices/auth";
import { useSelector } from "react-redux";

export const AppInitializer = ({ children }) => {
  const auth = useSelector(selectAuth);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return <>{children}</>;
};
