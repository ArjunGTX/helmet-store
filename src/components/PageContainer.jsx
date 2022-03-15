import React from "react";
import { Header } from "./Header";
import "../styles/components/page-container.css";

export const PageContainer = ({ page }) => {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
