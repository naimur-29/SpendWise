import React, { PureComponent } from "react";

import SideBar from "./Billal's file/Layout/SideBar/SideBar";
// import LandingPage from "./Billal's file/Pages/LandingPage";

import "./App.css";

// temp:
import { UserContextProvider } from "./contexts/UserContext";
import { IncomeExpensePostForm } from "./components/IncomeExpensePostForm";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    // <div className="flex flex-col items-center justify-center w-full min-h-screen gap-6 bg-slate-300 ">
    <div>
      <LandingPage />
      {/* <UserContextProvider>
        <IncomeExpensePostForm isIncome />
        <IncomeExpensePostForm />
      </UserContextProvider> */}
    </div>
  );
}

export default App;
