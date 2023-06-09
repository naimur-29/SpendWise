// importing libraries:
import { useState, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
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
import { BsEmojiLaughing, BsFillEmojiExpressionlessFill } from "react-icons/bs";

// importing local assets:
import BG from "../assets/landing-page-bg.webp";

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

  // references:
  const inputRef = useRef(null);

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
    spendWiseTheme,
    setTheme,
  } = useContext(userContext);

  // handle create account on click:
  const handleCreateNewAcc = () => {
    createNewAccount({
      uid: userData?.userId,
      id: userData && `${userData?.userId}.${newAccAlias}`,
      alias: newAccAlias.trim(),
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
        className={`absolute top-0 h-full ${
          isSidebarActive ? "left-[0%]" : "left-[-100%]"
        } SideBarContainer z-20 duration-200 md:left-0`}
      >
        <div className="fixed top-0 flex h-full border-r-[8px] border-[#fff] bg-[--main-sidebar-bg] shadow-2xl shadow-[--main-sidebar-hamburger-menu-shadow] transition-[background-color] duration-[1000ms] md:shadow-none">
          {/* background overlay Logo */}
          <div
            style={{
              backgroundColor: "var(--main-sidebar-bg)",
              backgroundImage: `url("${BG}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundBlendMode:
                spendWiseTheme === "light" ? "color-burn" : "saturation",
              opacity: "0.15",
              transition: "background-blend-mode 1000ms ease",
            }}
            className="overlay absolute bottom-0 left-0 -z-10 h-[50%] w-full rounded-xl"
          ></div>

          <div className="mainContainer flex h-screen w-64 flex-col gap-1 p-4 pt-5 duration-300">
            {/* top account container starts */}
            <div
              onClick={() => setIsSidebarActive(false)}
              className="topContainer AccountContainer mb-2"
            >
              <div className="flex items-center justify-between space-x-4 rounded-xl bg-[--main-sidebar-items-bg] p-2 duration-200 hover:-translate-y-[0.1rem] hover:bg-[--hover-main-sidebar-items-bg]">
                <Link
                  to="/"
                  title="visit profile"
                  className="flex items-center justify-center gap-[8px]"
                >
                  {userData?.photoUrl ? (
                    <img
                      className="h-11 w-11 rounded-full bg-gray-100 object-cover p-[2px] shadow-[inset_-5px_-3px_8px_rgba(0,0,0,0.25)]"
                      src={userData?.photoUrl}
                      alt="avatar"
                    />
                  ) : (
                    <p className="flex h-11 w-11 min-w-[2.75rem] items-center justify-center rounded-full bg-[--main-sidebar-profile-bg] object-cover p-[2px] text-2xl font-bold uppercase text-[--main-sidebar-profile-text] shadow-[inset_-5px_-3px_8px_rgba(0,0,0,0.25)]">
                      {userData?.username[0]}
                    </p>
                  )}

                  <div className="block max-w-[80%] break-words font-medium text-gray-100">
                    <p>
                      {userData?.username?.length > 10
                        ? `${userData?.username.slice(0, 10)}...`
                        : userData?.username}
                    </p>
                    <div className="text-sm font-normal text-gray-300">
                      {userData?.accounts
                        ? userData?.accounts[activeAccountIndex]?.alias
                        : ""}
                    </div>
                  </div>
                </Link>

                <div
                  title="Change Theme?"
                  onClick={() =>
                    setTheme(spendWiseTheme === "light" ? "dark" : "light")
                  }
                  className="flex h-[50px] cursor-pointer items-center justify-end duration-200 hover:scale-110"
                >
                  {spendWiseTheme === "light" ? (
                    <BsEmojiLaughing className="text-2xl text-white" />
                  ) : (
                    <BsFillEmojiExpressionlessFill className="text-2xl text-[#4aede2]" />
                  )}
                </div>
              </div>
            </div>
            {/* top account container ends */}

            {/* top list items starts  */}
            <ul className="topList rounded-xl bg-[--main-sidebar-items-bg] p-2 extra-sm:cursor-pointer">
              {topMenuItems.map((ele, i) => (
                <NavLink
                  key={i}
                  to={ele.path}
                  onClick={() => setIsSidebarActive(false)}
                  className={({ isActive }) =>
                    isActive
                      ? `mb-1 flex cursor-pointer items-center gap-x-4 rounded-md bg-[--main-sidebar-active-items-bg] p-2 text-sm text-gray-700 shadow-[inset_-0px_-3px_4px_rgba(0,0,0,0.25)] duration-100 
              `
                      : `mb-1 flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-200 duration-100 hover:-translate-y-[1px] hover:bg-[--hover-main-sidebar-items-bg] 
              `
                  }
                >
                  <div className="icon text-lg">{ele.src}</div>
                  <span className={` flex origin-left duration-200`}>
                    {ele.title}
                  </span>
                </NavLink>
              ))}
            </ul>
            {/* top list items ends  */}

            {/* bottom list items start  */}
            <ul className="bottomList mt-2 overflow-y-auto rounded-xl bg-[--main-sidebar-items-bg] p-2 extra-sm:cursor-pointer">
              <h1 className="mb-3 flex items-center justify-between font-semibold text-[#fff]">
                {isCreateAccountLoading ? "Loading..." : "Accounts"}
                {isNewAccountInputActive ? (
                  <MdOutlineCancel
                    title="Cancel"
                    onClick={() => {
                      setIsNewAccountInputActive(false);
                      setNewAccAlias("");
                    }}
                    className="scale-[1.1] cursor-pointer rounded-full text-xl active:scale-90"
                  />
                ) : (
                  <GoDiffAdded
                    title="Add new account!"
                    onClick={() => {
                      setIsNewAccountInputActive(true);
                      inputRef.current.focus();
                    }}
                    className="cursor-pointer text-xl active:scale-90"
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
                      ? `mb-1 flex cursor-pointer items-center gap-x-4 rounded-md bg-[--main-sidebar-active-items-bg] p-2 text-sm text-gray-700 shadow-[inset_-0px_-3px_4px_rgba(0,0,0,0.25)] duration-100
              `
                      : `mb-1 flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-200 duration-100 hover:-translate-y-[1px] hover:bg-[--hover-main-sidebar-items-bg]
              `
                  }
                >
                  <div className="icon text-lg">
                    <FaPiggyBank />
                  </div>
                  <h3
                    className={`flex w-full origin-left flex-wrap gap-1 duration-200`}
                  >
                    {ele?.alias}

                    {i === activeAccountIndex ? (
                      <span
                        className={`flex font-bold text-[--main-sidebar-items-text-balance]`}
                      >
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
                className={`flex items-center justify-between overflow-hidden rounded-md bg-[#fff3] duration-300 ${
                  isNewAccountInputActive ? "mt-2 h-[40px]" : "h-[0] opacity-0"
                }`}
              >
                <input
                  type="text"
                  ref={inputRef}
                  onChange={(e) => setNewAccAlias(e.target.value)}
                  value={newAccAlias}
                  placeholder="account name"
                  className="flex h-full w-full flex-[8] items-center rounded-md bg-[#fff2] px-2 py-1 text-[#fff] outline-[#fff] placeholder:-translate-y-[2px] placeholder:text-slate-200 placeholder:duration-200 focus:bg-[#fff4] focus:placeholder:-translate-y-3 focus:placeholder:opacity-0"
                />

                <button
                  onClick={handleCreateNewAcc}
                  className="flex h-full w-full flex-[2] items-center justify-center rounded-md outline-1 outline-[#fff]"
                >
                  <TiTick className="h-[75%] w-[75%] text-[#44ff9b] active:scale-110" />
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
        className="fixed bottom-[10px] right-[10px] z-50 h-[50px] rounded bg-[--main-sidebar-hamburger-menu-bg] shadow-[inset_-0px_-3px_4px_rgba(0,0,0,0.25)] md:hidden"
      >
        <div className="flex h-full w-full cursor-pointer flex-col justify-center gap-2 rounded p-2 duration-200 hover:scale-105">
          <div
            className={`line h-[5px] w-[40px] rounded bg-[--main-sidebar-hamburger-menu-items-bg] duration-300 ${
              isSidebarActive ? "translate-y-[13px] -rotate-[135deg]" : ""
            }`}
          ></div>
          <div
            className={`line h-[5px] w-[40px] rounded  bg-[--main-sidebar-hamburger-menu-items-bg] duration-300 ${
              isSidebarActive ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`line h-[5px] w-[40px] rounded  bg-[--main-sidebar-hamburger-menu-items-bg] duration-300 ${
              isSidebarActive ? "translate-y-[-13px] rotate-[135deg]" : ""
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};
