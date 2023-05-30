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
    <section className="min-h-screen w-full bg-slate-100 md:w-[calc(100%-16rem)]">
      <div className="flex flex-col w-full h-full wrapper">
        <div className="top flex w-full  flex-col items-start gap-1 px-[20px] pb-[16px] pt-[20px] sm:flex-row sm:items-center sm:justify-between md:px-[27px] md:pb-[20px]">
          <div className="left">
            <h3 className="text-2xl font-semibold text-gray-900 extra-sm:text-3xl">
              My SpendWise Profile
            </h3>
            <p className="text-gray-600 text-md extra-sm:text-lg">
              Welcome to SpendWise!
            </p>
          </div>

          <div className="flex items-center justify-center right">
            <button
              onClick={async () => {
                try {
                  await signOut(auth);
                  console.log("Logout Successful!");
                } catch (error) {
                  console.log(error.message);
                }
              }}
              className="rounded-lg bg-[#39aca4] px-8 py-2 text-lg font-bold uppercase text-slate-100 shadow-lg duration-200 hover:scale-95 hover:bg-[#2c8781] hover:shadow-md active:scale-100"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="bottom h-full w-full px-[10px] pb-[10px] md:px-[20px] md:pb-[20px]">
          <div className="wrapper flex h-full max-h-[100%] w-full flex-col gap-[20px] overflow-x-hidden rounded-3xl bg-slate-300 p-[10px] sm:p-[20px] lg:flex-row">
            <div className="left sm:flex-[1]">
              <div className="profile-card flex h-full w-full flex-col rounded-xl bg-white p-4 shadow-[inset_-0px_-3px_4px_#39aca433]">
                <div className="wrapper mb-[20px] h-full flex-grow overflow-hidden rounded-xl bg-slate-300 lg:h-0">
                  {userData?.photoUrl ? (
                    <img
                      className="object-cover object-center w-full h-full rounded-xl"
                      src={newPhotoUrl || userData?.photoUrl}
                      alt="avatar"
                    />
                  ) : (
                    <p className="">{userData?.username[0]}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1 p-1">
                  <label className="text-lg font-semibold">Username</label>
                  <input
                    type="text"
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="new username"
                    value={
                      newUsername === undefined
                        ? userData?.username
                        : newUsername
                    }
                    className="rounded bg-[#39aca433] px-2 py-2 text-slate-950 shadow outline-[#42c8bf] duration-700 placeholder:text-slate-500 placeholder:duration-200 focus:-translate-y-[1px] focus:bg-[#39aca466] focus:shadow-2xl focus:shadow-[#fff] focus:placeholder:translate-x-[-100%]"
                  />
                </div>

                <div className="flex flex-col gap-1 p-1">
                  <label className="text-lg font-semibold">Photo URL</label>
                  <input
                    type="text"
                    onChange={(e) => setNewPhotoUrl(e.target.value)}
                    placeholder="new photo url"
                    value={
                      newPhotoUrl === undefined
                        ? userData?.photoUrl
                        : newPhotoUrl
                    }
                    className="rounded bg-[#39aca433] px-2 py-2 text-slate-950 shadow outline-[#42c8bf] duration-700 placeholder:text-slate-500 placeholder:duration-200 focus:-translate-y-[1px] focus:bg-[#39aca466] focus:shadow-2xl focus:shadow-[#fff] focus:placeholder:translate-x-[-100%]"
                  />
                </div>

                <button className="mt-5 rounded-lg bg-[#39aca4] px-8 py-2 text-lg font-bold uppercase text-slate-100 shadow-md duration-200 hover:bg-[#2c8781] hover:shadow-sm active:scale-95">
                  Save
                </button>
              </div>
            </div>

            <div className="right flex h-full max-h-[100%] flex-col gap-[20px] sm:flex-[1] lg:max-w-[50%]">
              <div className="overview flex h-full max-h-[100%] w-full max-w-[100%] flex-col items-center rounded-xl bg-white p-4 shadow-[inset_-0px_-3px_4px_#39aca433] sm:flex-[1]">
                <div className="heading mb-4 flex min-w-[50%] items-center justify-between gap-3">
                  <h2 className="mb-2 text-2xl font-semibold">Overview</h2>

                  <div className="relative">
                    <input
                      type="date"
                      title="Select the month & year to see that month's Histories!"
                      onChange={(e) => setUserDefTimeFrame(e.target.value)}
                      value={userDefTimeFrame}
                      className="flex -translate-y-1 items-center justify-center rounded-full bg-[#39aca4] px-4 py-2 text-transparent shadow outline-[#fff] duration-200 hover:bg-[#39aca4aa]"
                    />
                    <p
                      title="Select the month & year to see that month's Incomes!"
                      className="date-overlay absolute left-[0] top-0 w-[120px] -translate-y-1 rounded-full bg-[#39aca4] px-4 py-2 text-slate-100"
                    >
                      {getTextTf(
                        getTFfromDate(userDefTimeFrame) ||
                          accountData?.currentTimeFrame
                      )}
                    </p>
                  </div>
                </div>

                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 flex items-center justify-center flex-grow w-full h-full">
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

              <div className="accounts flex h-full max-h-[100%] w-full flex-col overflow-y-auto rounded-xl bg-white p-4 shadow-[inset_-0px_-3px_4px_#39aca433] sm:flex-[1]">
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  My Accounts
                </h3>

                <ul className="flex h-full max-h-[100%] w-full flex-col overflow-auto">
                  {userData?.accounts?.map((account, i) => (
                    <li
                      key={i}
                      className={`mb-1 flex cursor-pointer items-center gap-x-4 rounded-md bg-[#39aca433] p-2 text-sm text-gray-900 shadow-[inset_-0px_-3px_4px_#39aca433] duration-100 hover:bg-[#39aca444]`}
                    >
                      <div className="text-lg icon">
                        <FaPiggyBank className="fill-[#2c8781]" />
                      </div>
                      <h3
                        className={`flex w-full origin-left flex-wrap gap-1 text-lg duration-200`}
                      >
                        {account?.alias}
                      </h3>

                      <div className="iconContainer ">
                        <AiTwotoneDelete className="text-2xl text-[#2c8781] duration-300 hover:scale-150 hover:text-[#f48a]" />
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
