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
    title: "Recent Transactions",
    path: "histories",
    src: <ImBook />,
  },
];

export const SideBar = () => {
  // get userData from userContext:
  const { userData, activeAccountIndex } = useContext(userContext);

  // states:
  const [isSidebarActive, setIsSidebarActive] = useState(false);

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
            <Link
              to={"profile"}
              onClick={() => setIsSidebarActive(false)}
              className="mb-2 topContainer AccountContainer "
            >
              <div className="flex items-center space-x-4 ">
                <img
                  className="object-cover p-[2px] rounded-full w-11 h-11 bg-slate-300"
                  src={
                    auth?.currentUser?.photoURL ||
                    "https://static.theprint.in/wp-content/uploads/2021/06/Elon-Musk.jpg?compress=true&quality=80&w=376&dpr=2.6"
                  }
                  alt="Bordered avatar"
                />

                <div className="block font-medium dark:text-white">
                  <div>{userData ? userData?.username : "Loading..."}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {userData?.accounts
                      ? userData?.accounts[activeAccountIndex]?.alias
                      : ""}
                  </div>
                </div>
              </div>
            </Link>
            {/* top account container ends */}

            {/* top list items starts  */}
            <ul className="pt-5 topList">
              {topMenuItems.map((ele, i) => (
                <NavLink
                  key={i}
                  to={ele.path}
                  onClick={() => setIsSidebarActive(false)}
                  className={({ isActive }) =>
                    isActive
                      ? `flex rounded-md p-2 cursor-pointer bg-gray-50 text-gray-700 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 mb-1 
              `
                      : `flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 mb-1 
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
            <ul className="pt-4 mt-5 bottomList ">
              <h1 className="mb-2 text-gray-50">Accounts</h1>

              {userData?.accounts?.map((ele, i) => (
                <li
                  key={i}
                  className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 mb-1 ${
                    i === activeAccountIndex ? "bg-gray-50 text-gray-700" : ""
                  }`}
                >
                  <div className="text-lg icon">
                    <FaPiggyBank />
                  </div>
                  <h1 className={`flex gap-1  origin-left duration-200 w-full`}>
                    {ele?.alias}
                    <span className={`text-green-600 flex`}>
                      (<TbCurrencyTaka className="self-center" />
                      200 )
                    </span>
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
      {/* <div className="h-screen p-5 ml-64 duration-300"> */}
      <div className="w-[100%] md:w-[calc(100%-16rem)] bg-slate-400">
        {/* <div className="ml-64 duration-300 h-100% p-2"> */}
        {/* <HomePage /> */}
        {/* <Income /> */}
        {/* <Expense /> */}
        {/* <History /> */}
      </div>
      {/* sidebar child components ends */}
    </section>
  );
};
