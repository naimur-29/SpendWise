// importing libraries:
import { useState, useContext, useEffect } from "react";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing local components:
import { HistoryCard } from "../components/HistoryCard";
import { BarChart } from "../components/BarChart";
import { Loading } from "../components/Loading";

export default function Histories() {
  // states:
  const [searchText, setSearchText] = useState("");

  // contexts:
  const {
    accountData,
    userDefTimeFrame,
    setUserDefTimeFrame,
    getTFfromDate,
    getTextTf,
    historyData,
    isHistoryDataLoading,
    spendWiseTheme,
  } = useContext(userContext);

  // scroll to top on page load:
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Loading duration={1000}>
      <section className="incomeContainer min-h-screen w-full bg-slate-100 md:w-[calc(100%-16rem)]">
        <div className="incomeContainerWrapper px-[1rem] py-[27px] md:p-[27px]">
          {/* top container starts  */}
          <div className="heading mb-4 flex items-center gap-3">
            <h2 className="mb-3 text-2xl font-semibold extra-sm:text-3xl">
              Histories Of
            </h2>

            <div className="relative -translate-y-1">
              <input
                type="date"
                id="session-date"
                name="session-date"
                title="Select the month & year to see that month's Histories!"
                onChange={(e) => setUserDefTimeFrame(e.target.value)}
                value={userDefTimeFrame}
                className="z-10 flex h-full w-full items-center justify-center rounded-full rounded-r-none bg-transparent px-4 py-2 text-transparent outline-[#fff] duration-200"
              />
              <p
                title="Select the month & year to see that month's Incomes!"
                className="_date-overlay absolute left-[0] top-0 flex h-full w-full items-center justify-center rounded-full rounded-r-none bg-[#39aca4] font-semibold text-slate-100"
              >
                {getTextTf(
                  getTFfromDate(userDefTimeFrame) ||
                    accountData?.currentTimeFrame
                )}
              </p>
            </div>
          </div>

          {/* top container ends  */}
          <div className="input-container mx-auto mb-[40px] flex w-[95%] flex-col items-center justify-center extra-lg:w-[70%]">
            <h2 className="mb-[10px] text-2xl uppercase">Overview</h2>
            <BarChart
              data1={historyData?.incomes?.sort(
                (a, b) =>
                  Number(a.dateAdded.slice(-2)) - Number(b.dateAdded.slice(-2))
              )}
              data2={historyData?.expenses?.sort(
                (a, b) =>
                  Number(a.dateAdded.slice(-2)) - Number(b.dateAdded.slice(-2))
              )}
              totalIncome={historyData?.totalIncomeAmount}
              totalExpense={historyData?.totalExpenseAmount}
              theme={spendWiseTheme}
            />
          </div>

          {/* body container starts */}
          <div className="bodyContainer flex flex-col items-center justify-center pb-5 extra-lg:gap-0">
            {/* body left container starts  */}
            <div className="topContainerCard mb-[10px]">
              <h2 className="mb-[10px] text-center text-2xl uppercase">
                All Histories
              </h2>

              {/* search bar */}
              <div className="flex w-full items-center justify-center rounded-md border-[3px] border-[#fff] bg-[#39aca4] p-2 drop-shadow-md">
                <div className="cardTop">
                  <div className="flex flex-wrap items-center justify-center gap-1 self-center text-2xl font-bold uppercase text-[#fff]">
                    <span className="h-full w-full text-center lg:flex-[1]">
                      Search Context :
                    </span>
                    <input
                      type="text"
                      value={searchText}
                      onChange={(e) =>
                        setSearchText(e.target.value.trim().toLowerCase())
                      }
                      className="h-full w-full flex-[1] bg-[#fff3] px-2 py-1 outline-[#fff] focus:bg-[#fff6]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bodyContainerRight customSm:w-[80%] customMid:col-span-8 customMid:mt-3 col-span-2 m-auto mt-1 w-full p-1 md:w-full md:p-0">
              <div className="rightCardSection customMid:w-[99%] m-auto h-[68vh] w-[100%] overflow-auto md:w-[100%] lg:w-[92%]">
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
    </Loading>
  );
}
