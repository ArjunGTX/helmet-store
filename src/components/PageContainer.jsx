import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "../styles/components/page-container.css";

export const PageContainer = ({ page }) => {
  return (
    <div className="page-container fc-fs-fs pos-rel ofx-hidden ofy-auto">
      <Header />
      {page}
      <Footer />
    </div>
  );
};
