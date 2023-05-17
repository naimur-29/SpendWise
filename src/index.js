// importing libraries:
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// importing stylesheets:
import "./index.css";

// importing remixicon
import "remixicon/fonts/remixicon.css";

// importing components:
import App from "./App";
// importing context provider
// import { AppContextProvider } from "./Context/Context";
import { AppContextProvider } from "./Billal's file/Context/Context";

// creating root:
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering root:
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <AppContextProvider> */}
    <App />
    {/* </AppContextProvider> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
