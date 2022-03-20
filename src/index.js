import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider, CategoryProvider, FilterProvider, WishlistProvider } from "./contexts";
import { makeServer } from "./server";
import "./styles/index.css";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <FilterProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </FilterProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
