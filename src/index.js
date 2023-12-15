import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";

import { Header } from "./Header/index.js";
import { Sobre } from "./Sobre/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Sobre />

    <App />
  </React.StrictMode>
);
