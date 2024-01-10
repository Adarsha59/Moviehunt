
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import store from "./App/store.js"; // Correct the path to your Redux store
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
