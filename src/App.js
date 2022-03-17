import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageContainer } from "./components";
import {
  ForgotPassword,
  Home,
  Login,
  Products,
  ResetPassword,
  SignUp,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContainer page={<Home />} />} />
        <Route path="/login" element={<PageContainer page={<Login />} />} />
        <Route path="/sign-up" element={<PageContainer page={<SignUp />} />} />
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
