import React from "react";
import { Header } from "./Header";
import "../styles/components/page-container.css";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/auth";

export const PageContainer = ({ page, requiresAuth }) => {
  const { isLoggedIn } = useSelector(selectAuth);

  const location = useLocation();

  return (
    <>
      <Header />
      {requiresAuth ? (
        isLoggedIn ? (
          page
        ) : (
          <Navigate
            to="/login"
            replace
            state={{
              from: location,
            }}
          />
        )
      ) : (
        page
      )}
    </>
  );
};
