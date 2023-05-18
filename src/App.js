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
import { AuthForm } from "./components/AuthForm";

function App() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-slate-300 ">
      <AuthForm />
    </div>
  );
}

export default App;
