import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider, FilterProvider, WishlistProvider } from "./contexts";
import { makeServer } from "./server";
import "./styles/index.css";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
