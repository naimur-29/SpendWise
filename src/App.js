// importing libraries:
import React from "react";

// importing stylesheets:
import "./App.css";

// importing components:
// import { AuthForm } from "./components/AuthForm";
import { DisplayHistory } from "./components/DisplayHistory";

const App = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-slate-300 ">
      <DisplayHistory />
    </div>
  );
};

export default App;
