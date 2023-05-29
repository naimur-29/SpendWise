import { useState, useContext } from "react";
import { auth } from "../services/firebaseApi";
import { signOut } from "firebase/auth";

// local contexts:
import { userContext } from "../contexts/UserContext";

// local components:
import { BarChart } from "../components/BarChart";

// importing icons:
import { FaPiggyBank } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

export default function Profile() {
  // states:
  const [newPhotoUrl, setNewPhotoUrl] = useState(undefined);
  const [newUsername, setNewUsername] = useState(undefined);

  // user contexts:
  const {
    userData,
    accountData,
    historyData,
    setUserDefTimeFrame,
    userDefTimeFrame,
    getTextTf,
    getTFfromDate,
  } = useContext(userContext);

  return (
    <section className="w-full md:w-[calc(100%-16rem)] min-h-screen bg-slate-100">
      <div className="wrapper h-full w-full flex flex-col">
        <div className="top flex flex-col  sm:flex-row items-start sm:items-center sm:justify-between gap-1 w-full pt-[20px] pb-[16px] md:pb-[20px] px-[20px] md:px-[27px]">
          <div className="left">
            <h3 className="text-2xl font-semibold extra-sm:text-3xl text-gray-900">
              My SpendWise Profile
            </h3>
            <p className="text-md extra-sm:text-lg text-gray-600">
              Welcome to SpendWise!
            </p>
          </div>

          <div className="right flex items-center justify-center">
            <button
              onClick={async () => {
                try {
                  await signOut(auth);
                  console.log("Logout Successful!");
                } catch (error) {
                  console.log(error.message);
                }
              }}
              className="px-8 py-2 rounded-lg bg-[#39aca4] shadow-lg hover:bg-[#2c8781] hover:scale-95 hover:shadow-md active:scale-100 duration-200 font-bold text-lg text-slate-100 uppercase"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="bottom h-full w-full px-[10px] md:px-[20px] pb-[10px] md:pb-[20px]">
          <div className="wrapper flex flex-col lg:flex-row gap-[20px] w-full overflow-x-hidden h-full max-h-[100%] bg-slate-300 rounded-3xl p-[10px] sm:p-[20px]">
            <div className="left sm:flex-[1]">
              <div className="profile-card flex flex-col bg-white p-4 w-full h-full rounded-xl shadow-[inset_-0px_-3px_4px_#39aca433]">
                <div className="wrapper h-full lg:h-0 flex-grow rounded-xl mb-[20px] overflow-hidden bg-slate-300">
                  {userData?.photoUrl ? (
                    <img
                      className="object-cover object-center h-full w-full rounded-xl"
                      src={newPhotoUrl || userData?.photoUrl}
                      alt="avatar"
                    />
                  ) : (
                    <p className="">{userData?.username[0]}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1 p-1">
                  <label className="font-semibold text-lg">Username</label>
                  <input
                    type="text"
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="new username"
                    value={
                      newUsername === undefined
                        ? userData?.username
                        : newUsername
                    }
                    className="px-2 py-2 shadow text-slate-950 rounded outline-[#42c8bf] placeholder:text-slate-500 focus:placeholder:translate-x-[-100%] focus:bg-[#39aca466] focus:-translate-y-[1px] focus:shadow-2xl focus:shadow-[#fff] duration-700 placeholder:duration-200 bg-[#39aca433]"
                  />
                </div>

                <div className="flex flex-col gap-1 p-1">
                  <label className="font-semibold text-lg">Photo URL</label>
                  <input
                    type="text"
                    onChange={(e) => setNewPhotoUrl(e.target.value)}
                    placeholder="new photo url"
                    value={
                      newPhotoUrl === undefined
                        ? userData?.photoUrl
                        : newPhotoUrl
                    }
                    className="px-2 py-2 shadow text-slate-950 rounded outline-[#42c8bf] placeholder:text-slate-500 focus:placeholder:translate-x-[-100%] focus:bg-[#39aca466] focus:-translate-y-[1px] focus:shadow-2xl focus:shadow-[#fff] duration-700 placeholder:duration-200 bg-[#39aca433]"
                  />
                </div>

                <button className="mt-5 px-8 py-2 rounded-lg bg-[#39aca4] shadow-md hover:bg-[#2c8781] hover:shadow-sm active:scale-95 duration-200 font-bold text-lg text-slate-100 uppercase">
                  Save
                </button>
              </div>
            </div>

            <div className="right sm:flex-[1] flex flex-col h-full max-h-[100%] lg:max-w-[50%] gap-[20px]">
              <div className="overview sm:flex-[1] flex flex-col items-center bg-white p-4 w-full max-w-[100%] h-full max-h-[100%] rounded-xl shadow-[inset_-0px_-3px_4px_#39aca433]">
                <div className="flex items-center justify-between min-w-[50%] gap-3 mb-4 heading">
                  <h2 className="mb-2 text-2xl font-semibold">Overview</h2>

                  <div className="relative">
                    <input
                      type="date"
                      title="Select the month & year to see that month's Histories!"
                      onChange={(e) => setUserDefTimeFrame(e.target.value)}
                      value={userDefTimeFrame}
                      className="text-transparent bg-[#39aca4] flex items-center justify-center py-2 px-4 rounded-full -translate-y-1 shadow outline-[#fff] hover:bg-[#39aca4aa] duration-200"
                    />
                    <p
                      title="Select the month & year to see that month's Incomes!"
                      className="date-overlay text-slate-100 bg-[#39aca4] px-4 py-2 rounded-full absolute top-0 left-[0] w-[120px] -translate-y-1"
                    >
                      {getTextTf(
                        getTFfromDate(userDefTimeFrame) ||
                          accountData?.currentTimeFrame
                      )}
                    </p>
                  </div>
                </div>

                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 flex-grow flex items-center justify-center w-full h-full">
                    {/* chart */}
                    <BarChart
                      data1={historyData?.incomes?.sort(
                        (a, b) =>
                          Number(a.dateAdded.slice(-2)) -
                          Number(b.dateAdded.slice(-2))
                      )}
                      data2={historyData?.expenses?.sort(
                        (a, b) =>
                          Number(a.dateAdded.slice(-2)) -
                          Number(b.dateAdded.slice(-2))
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="accounts overflow-y-auto sm:flex-[1] flex flex-col bg-white p-4 w-full h-full max-h-[100%] rounded-xl shadow-[inset_-0px_-3px_4px_#39aca433]">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  My Accounts
                </h3>

                <ul className="overflow-auto flex flex-col w-full h-full max-h-[100%]">
                  {userData?.accounts?.map((account, i) => (
                    <li
                      key={i}
                      className={`flex rounded-md p-2 text-gray-900 bg-[#39aca433] hover:bg-[#39aca444] duration-100 text-sm items-center gap-x-4 mb-1 shadow-[inset_-0px_-3px_4px_#39aca433] cursor-pointer`}
                    >
                      <div className="text-lg icon">
                        <FaPiggyBank className="fill-[#2c8781]" />
                      </div>
                      <h3
                        className={`flex flex-wrap gap-1 origin-left duration-200 w-full text-lg`}
                      >
                        {account?.alias}
                      </h3>

                      <div className="iconContainer ">
                        <AiTwotoneDelete className="text-2xl text-[#2c8781] hover:text-[#f48a] hover:scale-150 duration-300" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
