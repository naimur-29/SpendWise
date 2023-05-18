import "./App.css";
import React, { PureComponent } from "react";
import SideBar from "./Billal's file/Layout/SideBar/SideBar";
import LandingPage from "./Billal's file/Pages/LandingPage";

// temp:
import { IncomeExpensePostForm } from "./components/IncomeExpensePostForm";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-6 bg-slate-300 ">
      <IncomeExpensePostForm isIncome />
      <IncomeExpensePostForm />
    </div>
  );
}

export default App;
