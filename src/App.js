import React from "react";
import "./styles/base/app.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageContainer } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContainer page={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
