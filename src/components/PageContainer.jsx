import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "../styles/components/page-container.css";

export const PageContainer = ({ page }) => {
  return (
    <div className="page-container fc-fs-fs pos-rel of-hidden">
      <Header />
      {page}
      <Footer />
    </div>
  );
};
