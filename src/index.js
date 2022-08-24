import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/index";
import { AppInitializer } from "./redux/store/AppInitializer";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppInitializer>
          <App />
        </AppInitializer>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
