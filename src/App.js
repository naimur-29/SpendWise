// importing libraries:
import React from "react";

// importing stylesheets:
import "./App.css";

// importing components:
import { IncomePostForm } from "./components/IncomePostForm";
import { ExpensePostForm } from "./components/ExpensePostForm";

const App = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-slate-300 ">
      <IncomePostForm />
    </div>
  );
};

export default App;
