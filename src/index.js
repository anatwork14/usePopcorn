import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppConcurrency from "./AppConcurrency";
import Geolocate from "./Geolocate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Geolocate />
  </React.StrictMode>
);
