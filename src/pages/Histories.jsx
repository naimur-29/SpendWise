// importing libraries:
import { useState, useContext } from "react";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing local components:
import { HistoryCard } from "../components/HistoryCard";
import { BarChart } from "../components/BarChart";

// functions:
const getTextTf = (serial) => {
  const monthDict = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  if (!serial) return "Loading...";

  return `${monthDict[serial.slice(0, 2)]}, ${serial.slice(2)}`;
};

export default function Histories() {
  // states:
  const [searchText, setSearchText] = useState("");

  // contexts:
  const {
    accountData,
    userDefTimeFrame,
    setUserDefTimeFrame,
    getTFfromDate,
    historyData,
    isHistoryDataLoading,
  } = useContext(userContext);

  return (
    <section className="incomeContainer w-full md:w-[calc(100%-16rem)] min-h-screen bg-slate-100">
      <div className="incomeContainerWrapper px-[1rem] py-[27px] md:p-[27px]">
        {/* top container starts  */}
        <div className="flex items-center gap-3 mb-4 heading">
          <h2 className="mb-3 text-2xl font-semibold extra-sm:text-3xl ">
            Histories of
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
                getTFfromDate(userDefTimeFrame) || accountData?.currentTimeFrame
              )}
            </p>
          </div>
        </div>

        {/* top container ends  */}
        <div className="input-container flex flex-col justify-center mx-auto w-[95%] extra-lg:w-[70%] items-center mb-[40px]">
          <h2 className="text-2xl uppercase mb-[10px]">Overview</h2>
          <BarChart
            data1={historyData?.incomes?.sort(
              (a, b) =>
                Number(a.dateAdded.slice(-2)) - Number(b.dateAdded.slice(-2))
            )}
            data2={historyData?.expenses?.sort(
              (a, b) =>
                Number(a.dateAdded.slice(-2)) - Number(b.dateAdded.slice(-2))
            )}
          />
        </div>

        {/* body container starts */}
        <div className="flex flex-col items-center justify-center pb-5 bodyContainer extra-lg:gap-0">
          {/* body left container starts  */}
          <div className="topContainerCard mb-[10px]">
            <h2 className="text-center text-2xl uppercase mb-[10px]">
              All Histories
            </h2>

            {/* search bar */}
            <div className="flex justify-center items-center w-full p-2 bg-[#39aca4] rounded-md drop-shadow-md border-[3px] border-[#fff]">
              <div className="cardTop">
                <div className="text-2xl uppercase font-bold self-center text-[#fff] flex flex-wrap gap-1 justify-center items-center">
                  <span className="lg:flex-[1] w-full h-full text-center">
                    Search Context :
                  </span>
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) =>
                      setSearchText(e.target.value.trim().toLowerCase())
                    }
                    className="flex-[1] w-full h-full bg-[#fff3] focus:bg-[#fff6] outline-[#fff] px-2 py-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bodyContainerRight w-full customSm:w-[80%] md:w-full m-auto mt-1 col-span-2 customMid:col-span-8 customMid:mt-3 p-1 md:p-0">
            <div className="rightCardSection h-[68vh] w-[100%] md:w-[100%] customMid:w-[99%] lg:w-[92%] m-auto overflow-auto">
              {isHistoryDataLoading ? (
                <h3 className="text-center text-slate-600">Loading...</h3>
              ) : historyData?.incomes[0] || historyData?.expenses[0] ? (
                [...historyData?.incomes, ...historyData?.expenses]
                  .filter(
                    (i) =>
                      i.context.toLowerCase().includes(searchText) ||
                      String(i.amount).includes(searchText) ||
                      i.dateAdded.includes(searchText) ||
                      i.stat.includes(searchText)
                  )
                  ?.sort(
                    (a, b) =>
                      Number(b.dateAdded.slice(-2)) -
                      Number(a.dateAdded.slice(-2))
                  )
                  ?.map((ele, i) => (
                    <HistoryCard
                      key={i}
                      amount={ele.amount}
                      context={ele.context}
                      dateAdded={ele.dateAdded}
                      stat={ele.stat}
                    />
                  ))
              ) : (
                <h3 className="text-center text-slate-600">Empty!</h3>
              )}
            </div>
          </div>
          {/* body Right container ends  */}
        </div>
        {/* body container ends */}
      </div>
    </section>
  );
}
