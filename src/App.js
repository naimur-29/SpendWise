import "./App.css";
import React, { PureComponent } from "react";
import SideBar from "./Billal's file/Layout/SideBar/SideBar";
import LandingPage from "./Billal's file/Pages/LandingPage";

// function App() {
//   return <>
//     <SideBar />
//   </>
// }

// temp:
import { UserContextProvider } from "./contexts/UserContext";
import { IncomeExpensePostForm } from "./components/IncomeExpensePostForm";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-6 bg-slate-300 ">
      <UserContextProvider>
        <IncomeExpensePostForm isIncome />
        <IncomeExpensePostForm />
      </UserContextProvider>
    </div>
  );
}

export default App;
