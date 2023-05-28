import { useState, useContext } from "react";
import { auth } from "../services/firebaseApi";
import { signOut } from "firebase/auth";

// local contexts:
import { userContext } from "../contexts/UserContext";

// local components:
import { BarChart } from "../components/BarChart";

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
          <div className="wrapper flex flex-col lg:flex-row w-full overflow-x-hidden h-full bg-slate-300 rounded-3xl p-[20px]">
            <div className="left flex-[1]">
              <div className="profile-card flex flex-col justify-evenly bg-white p-4 w-full h-full rounded-xl">
                {userData?.photoUrl ? (
                  <img
                    className="object-cover object-center rounded-xl mb-[20px]"
                    src={userData?.photoUrl}
                    alt="avatar"
                  />
                ) : (
                  <p className="">{userData?.username[0]}</p>
                )}

                <div className="flex items-center gap-2 p-1">
                  <label className="flex-[2] font-semibold text-lg">
                    Username :{" "}
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="new username"
                    value={
                      newUsername === undefined
                        ? userData?.username
                        : newUsername
                    }
                    className="flex-[8] px-2 py-2 shadow text-slate-950 rounded outline-[#42c8bf] placeholder:text-slate-500 focus:placeholder:translate-x-[-100%] focus:bg-[#39aca466] focus:-translate-y-[1px] focus:shadow-2xl focus:shadow-[#fff] duration-700 placeholder:duration-200 bg-[#39aca433]"
                  />
                </div>

                <div className="flex items-center gap-2 p-1">
                  <label className="flex-[2] font-semibold text-lg">
                    Photo URL :{" "}
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setNewPhotoUrl(e.target.value)}
                    placeholder="new photo url"
                    value={
                      newPhotoUrl === undefined
                        ? userData?.photoUrl
                        : newPhotoUrl
                    }
                    className="flex-[8] px-2 py-2 shadow text-slate-950 rounded outline-[#42c8bf] placeholder:text-slate-500 focus:placeholder:translate-x-[-100%] focus:bg-[#39aca466] focus:-translate-y-[1px] focus:shadow-2xl focus:shadow-[#fff] duration-700 placeholder:duration-200 bg-[#39aca433]"
                  />
                </div>

                <button>Save</button>
              </div>
            </div>

            <div className="right flex-[1] flex flex-col">
              <div className="accounts">
                <h3>My Accounts</h3>
                <hr />
                {userData?.accounts?.map((account, i) => (
                  <div key={i}>
                    <p>{account.alias}</p>
                  </div>
                ))}
              </div>

              <div className="overview">
                <div className="flex items-center gap-3 mb-4 heading">
                  <h2 className="mb-3 text-2xl font-semibold extra-sm:text-3xl ">
                    Overview of
                  </h2>

                  <div className="relative">
                    <input
                      type="date"
                      title="Select the month & year to see that month's Histories!"
                      onChange={(e) => setUserDefTimeFrame(e.target.value)}
                      value={userDefTimeFrame}
                      className="text-transparent bg-[#39aca4] flex items-center justify-center py-2 px-4 rounded-full -translate-y-1 shadow outline-[#fff] hover:bg-[#39aca4aa] rounded-r-none duration-200"
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

                {/* chart */}
                {/* <BarChart
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
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
