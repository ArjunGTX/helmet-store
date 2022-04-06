import React from "react";
import { Header } from "./Header";
import "../styles/components/page-container.css";
import { SidebarProvider, useAuth } from "../contexts";
import { Navigate, useLocation } from "react-router-dom";

export const PageContainer = ({ page, requiresAuth }) => {
  const location = useLocation();
  const {
    auth: { isLoggedIn },
  } = useAuth();

  return (
    <SidebarProvider>
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
    </SidebarProvider>
  );
};
