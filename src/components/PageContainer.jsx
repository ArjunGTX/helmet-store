import React from "react";
import { Header } from "./Header";
import "../styles/components/page-container.css";
import { SidebarProvider, useAuth } from "../contexts";
import { Navigate } from "react-router-dom";

export const PageContainer = ({ page, requiresAuth, authPage }) => {
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
          <Navigate to="/login" replace />
        )
      ) : authPage ? (
        isLoggedIn ? (
          <Navigate to="/" replace />
        ) : (
          page
        )
      ) : (
        page
      )}
    </SidebarProvider>
  );
};
