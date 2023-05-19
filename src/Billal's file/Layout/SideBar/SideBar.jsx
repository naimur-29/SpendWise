import React from "react";
import HomePage from "../../Pages/HomePage";
import Income from "../../Components/Income/Income";
import { ImBook } from "react-icons/im";
import { BsCash, BsGraphUpArrow } from "react-icons/bs";
import { AiFillCreditCard, AiOutlineShop } from "react-icons/ai";
import { MdBusinessCenter, MdOutlineDiamond } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import Expense from "../../Components/Expense/Expense";
import History from "../../Components/History/History";

export default function SideBar() {
  const topMenuItems = [
    {
      title: "Dashboard",
      src: <BsGraphUpArrow />,
    },
    {
      title: " View transactions",
      src: <ImBook />,
    },
    {
      title: "Incomes",
      src: <BsCash />,
    },
    {
      title: "Expenses",
      src: <GiReceiveMoney />,
    },
  ];

  const bottomMenuItems = [
    {
      title: " Cash",
      icon: <BsCash />,
    },
    {
      title: "Credit card",
      icon: <AiFillCreditCard />,
    },
    {
      title: "Business",
      icon: <MdBusinessCenter />,
    },
    {
      title: "Loan",
      icon: <AiOutlineShop />,
      red: true,
    },

    {
      title: "Investment",
      icon: <BsGraphUpArrow />,
    },
    {
      title: "Asset",
      icon: <MdOutlineDiamond />,
    },
  ];

  return (
    <>
      {/* sidebar container starts  */}
      <div className="SideBarContainer fixed z-20 top-0 left-0 ">
        <div className="flex">
          <div className="mainContainer w-24   bg-gray-700 h-screen p-5 pt-5 relative duration-300 sm:w-64">
            {/* top account container starts */}
            <div className="topContainer AccountContainer mb-2 ">
              <div className="flex items-center space-x-4 ">
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer"
                  src="https://static.theprint.in/wp-content/uploads/2021/06/Elon-Musk.jpg?compress=true&quality=80&w=376&dpr=2.6"
                  alt="Bordered avatar"
                />

                <div className="hidden font-medium dark:text-white sm:block">
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
              {topMenuItems.map((ele) => (
                <>
                  <li
                    className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 
              `}
                  >
                    <div className="icon text-lg">{ele.src}</div>
                    <span
                      className={` hidden origin-left duration-200 sm:flex`}
                    >
                      {ele.title}
                    </span>
                  </li>
                </>
              ))}
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
                <span className={` hidden origin-left duration-200 sm:flex `}>
                  All transactions
                </span>
              </li>

              {bottomMenuItems.map((ele) => (
                <>
                  <li
                    className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
                  >
                    <div className="icon text-lg">{ele.icon}</div>
                    <h1
                      className={`hidden gap-1  origin-left duration-200 w-full sm:flex`}
                    >
                      {ele.title}
                      <span
                        className={` ${
                          ele.red ? "text-red-600" : "text-green-600"
                        } flex`}
                      >
                        (<TbCurrencyTaka className="self-center" />
                        200 )
                      </span>
                    </h1>
                  </li>
                </>
              ))}
            </ul>
            {/* bottom list items end  */}
          </div>
        </div>
      </div>
      {/* sidebar container ends  */}

      {/* sidebar child components starts */}
      {/* <div className="ml-64 duration-300 h-screen p-5"> */}
      <div className="ml-24 duration-300 h-100% p-2 sm:ml-64">
        {/* <div className="ml-64 duration-300 h-100% p-2"> */}
        <HomePage />
        {/* <Income /> */}
        {/* <Expense /> */}
        {/* <History /> */}
      </div>
      {/* sidebar child components ends */}
    </>
  );
}
