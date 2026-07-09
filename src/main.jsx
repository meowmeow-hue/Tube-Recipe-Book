import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { DrinkProvider } from "./context/DrinkContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <DrinkProvider>
        <App />
      </DrinkProvider>
    </HashRouter>
  </React.StrictMode>
);
