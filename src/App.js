import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageContainer } from "./components";
import { AuthProvider } from "./contexts/AuthContext";
import {
  Cart,
  ForgotPassword,
  Home,
  Login,
  Products,
  ResetPassword,
  SignUp,
  Wishlist,
} from "./pages";

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<PageContainer page={<Home />} />} />
          <Route path="/login" element={<PageContainer page={<Login />} />} />
          <Route
            path="/sign-up"
            element={<PageContainer page={<SignUp />} />}
          />
          <Route
            path="/forgot-password"
            element={<PageContainer page={<ForgotPassword />} />}
          />
          <Route
            path="/reset-password"
            element={<PageContainer page={<ResetPassword />} />}
          />
          <Route
            path="/products"
            element={<PageContainer page={<Products />} />}
          />
          <Route
            path="/wishlist"
            element={<PageContainer page={<Wishlist />} />}
          />
          <Route path="/cart" element={<PageContainer page={<Cart />} />} />
        </Routes>
  );
};

export default App;
