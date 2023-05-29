// importing libraries:
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../services/firebaseApi";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing custom hooks:
import useCreateAccount from "../hooks/useCreateAccount";

// importing icons:
import { ImBook } from "react-icons/im";
import { BsCash, BsGraphUpArrow } from "react-icons/bs";
import { FaPiggyBank } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { GoDiffAdded } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";

// importing local assets:
import Logo from "../assets/spend-wise-logo.webp";

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
  const [isNewAccountInputActive, setIsNewAccountInputActive] = useState(false);
  const [newAccAlias, setNewAccAlias] = useState("");

  // use create account hook:
  const { isLoading: isCreateAccountLoading, post: createNewAccount } =
    useCreateAccount();

  // get userData from userContext:
  const {
    userData,
    activeAccountIndex,
    setActiveAccountIndex,
    accountData,
    isAccountDataLoading,
  } = useContext(userContext);

  // handle create account on click:
  const handleCreateNewAcc = () => {
    createNewAccount({
      alias: newAccAlias.trim(),
      id: userData && `${userData?.userId}.${newAccAlias}`,
      userData,
    });

    if (!isCreateAccountLoading) {
      setNewAccAlias("");
      setIsNewAccountInputActive(false);
    }
  };

  return (
    <>
      {/* sidebar container starts  */}
      <div
        className={`h-full absolute top-0 ${
          isSidebarActive ? "left-[0%]" : "left-[-100%]"
        } z-20 SideBarContainer md:left-0 duration-200`}
      >
        <div className="flex fixed top-0 bg-[#2c8781] h-full border-r-[8px] border-[#fff] shadow-2xl md:shadow-none shadow-[#fff]">
          {/* background overlay Logo */}
          <div
            style={{
              backgroundImage: `url("${Logo}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: "0.1",
            }}
            className="overlay absolute bottom-0 left-0 w-full h-[50%] rounded-xl -z-10"
          ></div>

          <div className="flex flex-col w-64 h-screen gap-1 p-4 pt-5 duration-300 mainContainer sm:w-64">
            {/* top account container starts */}
            <div
              onClick={() => setIsSidebarActive(false)}
              className="mb-2 topContainer AccountContainer"
            >
              <div className="flex items-center justify-between space-x-4 hover:bg-[#fff4] hover:-translate-y-[0.1rem] duration-200 rounded-xl p-2 bg-[#fff3]">
                <Link
                  to="profile"
                  title="visit profile"
                  className="flex items-center justify-center gap-[8px]"
                >
                  {userData?.photoUrl ? (
                    <img
                      className="object-cover p-[2px] rounded-full w-11 h-11 bg-gray-100 shadow-[inset_-5px_-3px_8px_rgba(0,0,0,0.25)]"
                      src={userData?.photoUrl}
                      alt="avatar"
                    />
                  ) : (
                    <p className="flex items-center justify-center min-w-[2.75rem] uppercase text-3xl font-bold object-cover p-[2px] rounded-full w-11 h-11 bg-[#fff] text-[#39aca4] shadow-[inset_-5px_-3px_8px_rgba(0,0,0,0.25)]">
                      {userData?.username[0]}
                    </p>
                  )}

                  <div className="block font-medium text-gray-100 max-w-[80%] break-words">
                    <p>{userData?.username}</p>
                    <div className="text-sm font-normal text-gray-300">
                      {userData?.accounts
                        ? userData?.accounts[activeAccountIndex]?.alias
                        : ""}
                    </div>
                  </div>
                </Link>

                <div
                  title="Sign Out"
                  onClick={async () => {
                    try {
                      await signOut(auth);
                      console.log("Logout Successful!");
                    } catch (error) {
                      console.log(error.message);
                    }
                  }}
                  className="flex justify-end items-center cursor-pointer h-[50px] hover:scale-110 duration-200"
                >
                  <IoExitOutline className="text-2xl text-white" />
                </div>
              </div>
            </div>
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
                      ? `flex rounded-md p-2 cursor-pointer bg-gray-50 text-gray-700 duration-100 text-sm items-center gap-x-4 mb-1 shadow-[inset_-0px_-3px_4px_rgba(0,0,0,0.25)] 
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
            <ul className="mt-2 bottomList bg-[#fff3] rounded-xl p-2 cursor-pointer overflow-y-auto">
              <h1 className="flex items-center justify-between mb-3 font-semibold text-[#fff]">
                Accounts
                {isNewAccountInputActive ? (
                  <MdOutlineCancel
                    title="Cancel"
                    onClick={() => {
                      setIsNewAccountInputActive(false);
                      setNewAccAlias("");
                    }}
                    className="text-xl scale-[1.1] active:scale-90 rounded-full"
                  />
                ) : (
                  <GoDiffAdded
                    title="Add new account!"
                    onClick={() => setIsNewAccountInputActive(true)}
                    className="text-xl active:scale-90"
                  />
                )}
              </h1>
              {userData?.accounts?.map((ele, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setActiveAccountIndex(i);
                    setIsNewAccountInputActive(false);
                  }}
                  className={
                    i === activeAccountIndex
                      ? `flex rounded-md p-2 bg-gray-50 text-gray-700 duration-100 text-sm items-center gap-x-4 mb-1 shadow-[inset_-0px_-3px_4px_rgba(0,0,0,0.25)] 
              `
                      : `flex rounded-md p-2 text-gray-200 hover:bg-[#fff3] hover:-translate-y-[1px] duration-100 text-sm items-center gap-x-4 mb-1 
              `
                  }
                >
                  <div className="text-lg icon">
                    <FaPiggyBank />
                  </div>
                  <h3
                    className={`flex flex-wrap gap-1 origin-left duration-200 w-full`}
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
                  </h3>
                </li>
              ))}

              {/* Add new account input btn */}
              <div
                className={`flex items-center justify-between rounded-md duration-300 bg-[#fff3] overflow-hidden ${
                  isNewAccountInputActive ? "h-[40px] mt-2" : "h-[0] opacity-0"
                }`}
              >
                <input
                  type="text"
                  onChange={(e) => setNewAccAlias(e.target.value)}
                  value={newAccAlias}
                  placeholder={
                    isCreateAccountLoading ? "Loading..." : "account name"
                  }
                  className="flex-[8] flex items-center bg-[#fff2] focus:bg-[#fff4] rounded-md focus:placeholder:-translate-y-3 focus:placeholder:opacity-0 placeholder:text-slate-600 placeholder:-translate-y-[2px] outline-[#fff] text-[#fff] px-2 py-1 w-full h-full placeholder:duration-200"
                />

                <button
                  onClick={handleCreateNewAcc}
                  className="flex-[2] flex items-center justify-center w-full h-full outline-1 outline-[#fff] rounded-md"
                >
                  <TiTick className="active:scale-110 text-[#44ff9b] w-[75%] h-[75%]" />
                </button>
              </div>
            </ul>
            {/* bottom list items end  */}
          </div>
        </div>
      </div>
      {/* sidebar container ends  */}

      {/* hamburger menu */}
      <div
        onClick={() => setIsSidebarActive(!isSidebarActive)}
        className="fixed bottom-[10px] h-[50px] right-[10px] md:hidden bg-[#153d3b] rounded z-50 shadow-2xl shadow-[#fff]"
      >
        <div className="flex flex-col justify-center w-full h-full gap-2 p-2 duration-200 rounded cursor-pointer hover:scale-105">
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
    </>
  );
};
