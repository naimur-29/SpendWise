// importing libraries:
import React from "react";
import ReactDOM from "react-dom/client";

// importing stylesheets:
import "./index.css";

// importing components:
import App from "./App";

// creating root:
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering root:
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
