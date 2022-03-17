import React from "react";
import { Header } from "./Header";
import "../styles/components/page-container.css";
import { SidebarProvider } from "../contexts";

export const PageContainer = ({ page }) => {
  return (
    <SidebarProvider>
      <Header />
      {page}
    </SidebarProvider>
  );
};
