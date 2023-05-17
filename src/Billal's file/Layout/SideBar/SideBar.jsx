import React from "react";
import HomePage from "../../Pages/HomePage";

export default function SideBar() {
  return (
    <>
      {/* sidebar container starts  */}
      <div className="SideBarContainer fixed z-20 top-0 left-0 ">
        <div className="flex">
          <div className="mainContainer w-64  bg-gray-700 h-screen p-5 pt-5 relative duration-300">
            <ul className="pt-5">
              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 
              `}
              >
                <div className="icon text-lg">
                  <i class="ri-line-chart-fill"></i>
                </div>
                <span className={` origin-left duration-200`}>Dashboard</span>
              </li>
              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 
              `}
              >
                <div className="icon text-lg">
                  <i class="ri-inbox-line"></i>
                </div>
                <span className={` origin-left duration-200`}>
                  View transactions
                </span>
              </li>
              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 
              `}
              >
                <div className="icon text-lg">
                  <i class="ri-money-dollar-box-line"></i>
                </div>
                <span className={` origin-left duration-200`}>Incomes</span>
              </li>
              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 
              `}
              >
                <div className="icon text-lg">
                  <i class="ri-wallet-2-line"></i>
                </div>
                <span className={` origin-left duration-200`}>Expense</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* sidebar container ends  */}

      {/* sidebar child components starts */}
      <div className="ml-64 duration-300 h-screen p-5">
        <HomePage />
      </div>
      {/* sidebar child components ends */}
    </>
  );
}
