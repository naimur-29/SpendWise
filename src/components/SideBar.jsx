// importing libraries:
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../services/firebaseApi";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing icons:
import { ImBook } from "react-icons/im";
import { BsCash, BsGraphUpArrow } from "react-icons/bs";
import { FaPiggyBank } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";

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
    title: "All Histories",
    path: "histories",
    src: <ImBook />,
  },
];

export const SideBar = () => {
  // states:
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // get userData from userContext:
  const {
    userData,
    activeAccountIndex,
    setActiveAccountIndex,
    accountData,
    isAccountDataLoading,
  } = useContext(userContext);

  return (
    <>
      {/* sidebar container starts  */}
      <div
        className={`bg-[#2c8781] border-r-[8px] border-[#fff] shadow-2xl shadow-[#fff] fixed top-0 ${
          isSidebarActive ? "left-[0%]" : "left-[-100%]"
        } z-20 SideBarContainer md:left-0 duration-200`}
      >
        <div className="flex">
          <div className="relative flex flex-col w-64 h-screen gap-1 p-4 pt-5 duration-300 mainContainer sm:w-64">
            {/* top account container starts */}
            <Link
              to={"profile"}
              onClick={() => setIsSidebarActive(false)}
              className="mb-2 topContainer AccountContainer"
            >
              <div className="flex items-center space-x-4 hover:bg-[#fff4] hover:-translate-y-[0.1rem] duration-200 rounded-xl p-1 bg-[#fff3]">
                <img
                  className="object-cover p-[2px] rounded-full w-11 h-11 bg-gray-100"
                  src={
                    auth?.currentUser?.photoURL ||
                    "https://static.theprint.in/wp-content/uploads/2021/06/Elon-Musk.jpg?compress=true&quality=80&w=376&dpr=2.6"
                  }
                  alt="Bordered avatar"
                />

                <div className="block font-medium text-gray-100">
                  <div>{userData ? userData?.username : "Loading..."}</div>
                  <div className="text-sm text-gray-300">
                    {userData?.accounts
                      ? userData?.accounts[activeAccountIndex]?.alias
                      : ""}
                  </div>
                </div>
              </div>
            </Link>
            {/* top account container ends */}

            {/* top list items starts  */}
            <ul className="topList bg-[#fff3] rounded-xl p-2 cursor-pointer">
              {topMenuItems.map((ele, i) => (
                <NavLink
                  key={i}
                  to={ele.path}
                  onClick={() => setIsSidebarActive(false)}
                  className={({ isActive }) =>
                    isActive
                      ? `flex rounded-md p-2 cursor-pointer bg-gray-50 text-gray-700 hover:-translate-y-[1px] duration-100 text-sm items-center gap-x-4 mb-1 
              `
                      : `flex rounded-md p-2 cursor-pointer text-gray-200 hover:bg-[#fff3] hover:-translate-y-[1px] duration-100 text-sm items-center gap-x-4 mb-1 
              `
                  }
                >
                  <div className="text-lg icon">{ele.src}</div>
                  <span className={` flex origin-left duration-200`}>
                    {ele.title}
                  </span>
                </NavLink>
              ))}
            </ul>
            {/* top list items ends  */}

            {/* bottom list items start  */}
            <ul className="mt-5 bottomList bg-[#fff3] rounded-xl p-2 cursor-pointer">
              <h1 className="mb-3 font-semibold text-gray-100">Accounts</h1>

              {userData?.accounts?.map((ele, i) => (
                <li
                  key={i}
                  onClick={() => setActiveAccountIndex(i)}
                  className={
                    i === activeAccountIndex
                      ? `flex rounded-md p-2 cursor-pointer bg-gray-50 text-gray-700 hover:-translate-y-[1px] duration-100 text-sm items-center gap-x-4 mb-1 
              `
                      : `flex rounded-md p-2 cursor-pointer text-gray-200 hover:bg-[#fff3] hover:-translate-y-[1px] duration-100 text-sm items-center gap-x-4 mb-1 
              `
                  }
                >
                  <div className="text-lg icon">
                    <FaPiggyBank />
                  </div>
                  <h1
                    className={`flex flex-wrap gap-1  origin-left duration-200 w-full`}
                  >
                    {ele?.alias}

                    {i === activeAccountIndex ? (
                      <span className={`text-[#38a097] flex font-bold`}>
                        (<TbCurrencyTaka className="self-center" />
                        {isAccountDataLoading
                          ? "Loading..."
                          : accountData?.currentBalance}
                        )
                      </span>
                    ) : (
                      <></>
                    )}
                  </h1>
                </li>
              ))}
            </ul>
            {/* bottom list items end  */}
          </div>
        </div>
      </div>
      {/* sidebar container ends  */}

      {/* hamburger menu */}
      <div
        onClick={() => setIsSidebarActive(!isSidebarActive)}
        className="fixed bottom-[10px] h-[50px] right-[10px] md:hidden bg-[#153d3b] rounded z-50 shadow-2xl"
      >
        <div className="flex flex-col justify-center w-full h-full gap-2 p-2 duration-200 rounded shadow-xl cursor-pointer hover:scale-105">
          <div
            className={`line duration-300 h-[5px] w-[40px] bg-[#fff] rounded ${
              isSidebarActive ? "-rotate-[135deg] translate-y-[13px]" : ""
            }`}
          ></div>
          <div
            className={`line duration-300 h-[5px] w-[40px]  bg-[#fff] rounded ${
              isSidebarActive ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`line duration-300 h-[5px] w-[40px]  bg-[#fff] rounded ${
              isSidebarActive ? "rotate-[135deg] translate-y-[-13px]" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* sidebar child components starts */}
      {/* <div className="h-screen p-5 ml-64 duration-300"> */}
      {/* <div className="w-[100%] md:w-[calc(100%-16rem)] bg-slate-400"> */}
      {/* <div className="ml-64 duration-300 h-100% p-2"> */}
      {/* <HomePage /> */}
      {/* <Income /> */}
      {/* <Expense /> */}
      {/* <History /> */}
      {/* </div> */}
      {/* sidebar child components ends */}
    </>
  );
};
