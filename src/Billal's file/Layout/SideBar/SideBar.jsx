import { useState } from "react";

import HomePage from "../../Pages/HomePage";
import Income from "../../Components/Income/Income";
import Expense from "../../Components/Expense/Expense";
import History from "../../Components/History/History";

// importing icons:
import { ImBook } from "react-icons/im";
import { BsCash, BsGraphUpArrow } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { AiFillCreditCard, AiOutlineShop } from "react-icons/ai";
import { MdBusinessCenter, MdOutlineDiamond } from "react-icons/md";

// global variables:
const topMenuItems = [
  {
    title: "Dashboard",
    path: "/",
    src: <BsGraphUpArrow />,
  },
  {
    title: "Incomes",
    path: "incomes",
    src: <BsCash />,
  },
  {
    title: "Expenses",
    path: "expenses",
    src: <GiReceiveMoney />,
  },
  {
    title: "Recent Transactions",
    path: "histories",
    src: <ImBook />,
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

export default function SideBar() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const topMenuItems = [
    {
      title: "Dashboard",
      src: <BsGraphUpArrow />,
    },
    {
      title: "View transactions",
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
      title: "Cash",
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
    <section className="relative flex justify-end">
      {/* sidebar container starts  */}
      <div
        className={`fixed top-0 ${
          isSidebarActive ? "left-[0%]" : "left-[-100%]"
        } z-20 SideBarContainer md:left-0 duration-200`}
      >
        <div className="flex">
          <div className="relative w-64 h-screen p-5 pt-5 duration-300 bg-gray-700 mainContainer sm:w-64">
            {/* top account container starts */}
            <div className="mb-2 topContainer AccountContainer ">
              <div className="flex items-center space-x-4 ">
                <img
                  className="object-cover w-10 h-10 p-1 rounded-full cursor-pointer ring-2 ring-gray-300 dark:ring-gray-500"
                  src="https://static.theprint.in/wp-content/uploads/2021/06/Elon-Musk.jpg?compress=true&quality=80&w=376&dpr=2.6"
                  alt="Bordered avatar"
                />

                <div className=" font-medium dark:text-white sm:block">
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
                    <div className="text-lg icon">{ele.src}</div>
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
            <ul className="pt-4 mt-5 bottomList ">
              <h1 className="mb-2 text-gray-50">Accounts</h1>

              <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 
              `}
              >
                <div className="text-lg icon">
                  <ImBook />
                </div>
                <span className={`  origin-left duration-200  `}>
                  All transactions
                </span>
              </li>

              {bottomMenuItems.map((ele, ind) => (
                <>
                  <li
                    key={ind}
                    className={`flex rounded-md p-1 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
                  >
                    <div className="text-lg icon">{ele.icon}</div>
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

            {/* bottom list items end  */}
          </div>
        </div>
      </div>
      {/* sidebar container ends  */}

      {/* hamburger menu */}
      <div
        onClick={() => setIsSidebarActive(!isSidebarActive)}
        className="fixed bottom-[20px] h-[50px] right-[20px] md:hidden flex flex-col justify-center gap-2 bg-[#fff3] p-2 rounded cursor-pointer"
      >
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "-rotate-45 translate-y-[13px]" : ""
          }`}
        ></div>
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "rotate-45 translate-y-[-13px]" : ""
          }`}
        ></div>
      </div>

      {/* sidebar child components starts */}
      <div className="w-[100%] md:w-[calc(100%-16rem)] bg-slate-400">
        <HomePage />
        {/* <Income /> */}
        {/* <Expense /> */}
        {/* <History /> */}
      </div>
      {/* sidebar child components ends */}
    </section>
  );
}
