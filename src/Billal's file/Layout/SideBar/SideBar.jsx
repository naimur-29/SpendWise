import React from "react";
import HomePage from "../../Pages/HomePage";
import Income from "../../Components/Income/Income";
import { ImBook } from "react-icons/im";
import { BsCash, BsGraphUpArrow } from "react-icons/bs";
import { AiFillCreditCard, AiOutlineShop } from "react-icons/ai";
import { MdBusinessCenter, MdOutlineDiamond } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import Expense from "../../Components/Expense/Expense";

export default function SideBar() {
  return (
    <>
      {/* sidebar container starts  */}
      <div className="SideBarContainer fixed z-20 top-0 left-0 ">
        <div className="flex">
          <div className="mainContainer w-64  bg-gray-700 h-screen p-5 pt-5 relative duration-300">
            {/* top account container starts */}
            <div className="topContainer AccountContainer ">
              <div className="flex items-center space-x-4 ">
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer"
                  src="https://static.theprint.in/wp-content/uploads/2021/06/Elon-Musk.jpg?compress=true&quality=80&w=376&dpr=2.6"
                  alt="Bordered avatar"
                />

                <div className="font-medium dark:text-white">
                  <div>Jese Leos</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Your Money
                  </div>
                </div>
              </div>
            </div>
            {/* top account container ends */}
            {/* top list items starts  */}
            <ul className="pt-5 topList ">
              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 
              `}
              >
                <div className="icon text-lg">
                  <i className="ri-line-chart-fill"></i>
                </div>
                <span className={` origin-left duration-200`}>Dashboard</span>
              </li>
              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 
              `}
              >
                <div className="icon text-lg">
                  <i className="ri-inbox-line"></i>
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
                  <i className="ri-money-dollar-box-line"></i>
                </div>
                <span className={` origin-left duration-200`}>Incomes</span>
              </li>
              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 
              `}
              >
                <div className="icon text-lg">
                  <i className="ri-wallet-2-line"></i>
                </div>
                <span className={` origin-left duration-200`}>Expense</span>
              </li>
            </ul>
            {/* top list items ends  */}

            {/* bottom list items start  */}
            <ul className="pt-4 bottomList mt-5 ">
              <h1 className="text-gray-50 mb-2">Accounts</h1>
              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 
              `}
              >
                <div className="icon text-lg">
                  <ImBook />
                </div>
                <span className={` origin-left duration-200`}>
                  All transactions
                </span>
              </li>
              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
              >
                <div className="icon text-lg">
                  <BsCash />
                </div>
                <h1 className={`flex gap-1 origin-left duration-200 w-full`}>
                  Cash
                  <span className="text-green-600 flex">
                    (<TbCurrencyTaka className="self-center" />
                    200 )
                  </span>
                </h1>
              </li>
              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
              >
                <div className="icon text-lg">
                  <AiFillCreditCard />
                </div>
                <h1 className={`flex gap-1 origin-left duration-200 w-full`}>
                  Credit card
                  <span className="text-green-600 flex">
                    (<TbCurrencyTaka className="self-center" />
                    200 )
                  </span>
                </h1>
              </li>
              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
              >
                <div className="icon text-lg">
                  <MdBusinessCenter />
                </div>
                <h1 className={`flex gap-1 origin-left duration-200 w-full`}>
                  Business
                  <span className="text-green-600 flex">
                    (<TbCurrencyTaka className="self-center" />
                    200 )
                  </span>
                </h1>
              </li>
              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
              >
                <div className="icon text-lg">
                  <AiOutlineShop />
                </div>
                <h1 className={`flex gap-1 origin-left duration-200 w-full`}>
                  Loan
                  <span className="text-red-600 flex">
                    (<TbCurrencyTaka className="self-center" />
                    200 )
                  </span>
                </h1>
              </li>

              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
              >
                <div className="icon text-lg">
                  <MdOutlineDiamond />
                </div>
                <h1 className={`flex gap-1 origin-left duration-200 w-full`}>
                  Asset
                  <span className="text-green-600 flex">
                    (<TbCurrencyTaka className="self-center" />
                    200 )
                  </span>
                </h1>
              </li>

              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
              >
                <div className="icon text-lg">
                  <BsGraphUpArrow />
                </div>
                <h1 className={`flex gap-1 origin-left duration-200 w-full`}>
                  Investment
                  <span className="text-green-600 flex">
                    (<TbCurrencyTaka className="self-center" />
                    200 )
                  </span>
                </h1>
              </li>
            </ul>
            {/* bottom list items end  */}
          </div>
        </div>
      </div>
      {/* sidebar container ends  */}

      {/* sidebar child components starts */}
      {/* <div className="ml-64 duration-300 h-screen p-5"> */}
      <div className="ml-64 duration-300 h-100% p-5">
        {/* <HomePage /> */}
        {/* <Income /> */}
        <Expense />
      </div>
      {/* sidebar child components ends */}
    </>
  );
}
