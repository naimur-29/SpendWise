// importing libraries:
import { useContext, useEffect } from "react";

// importing icons:
import { TbCurrencyTaka } from "react-icons/tb";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing custom hooks:
import useDeleteIncomeExpense from "../hooks/useDeleteIncomeExpense";

// importing local components:
import { IncomeExpensePostForm } from "../components/IncomeExpensePostForm";
import { IncomeExpenseCard } from "../components/IncomeExpenseCard";
import { Loading } from "../components/Loading";

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

export default function Incomes() {
  // states:

  // contexts:
  const {
    accountData,
    currentUser,
    userDefTimeFrame,
    setUserDefTimeFrame,
    getTFfromDate,
    historyData,
    isHistoryDataLoading,
  } = useContext(userContext);

  // delete history functionality through custom hook:
  const { deleteHistory } = useDeleteIncomeExpense(true);

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
              Incomes Of
            </h2>

            <div className="relative -translate-y-1">
              <input
                type="date"
                id="session-date"
                name="session-date"
                title="Select the month & year to see that month's Histories!"
                onChange={(e) => setUserDefTimeFrame(e.target.value)}
                value={userDefTimeFrame}
                className="z-10 flex h-full w-full items-center justify-center rounded-full rounded-r-none bg-transparent px-4 py-2 text-transparent outline-[#fff] duration-200 focus:select-none"
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

          <div className="_topContainerCard mb-[40px]">
            <div className="flex w-full items-center justify-center rounded-md border-[3px] border-[#fff] bg-[#39aca4] p-2 drop-shadow-md">
              <div className="cardTop">
                <h3 className="flex flex-wrap items-center justify-center self-center text-2xl font-bold uppercase text-[#fff]">
                  Total income :
                  <span className="flex items-center text-[#51fbce]">
                    <TbCurrencyTaka />
                    {isHistoryDataLoading
                      ? "Loading..."
                      : historyData?.totalIncomeAmount || 0}
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/* top container ends  */}

          {/* body container starts */}
          <div className="bodyContainer flex flex-col gap-[40px] extra-lg:flex-row extra-lg:gap-0">
            {/* body left container starts  */}
            <div className="input-container flex flex-col items-center gap-[20px]">
              <h2 className="text-2xl uppercase">Add Income</h2>
              <IncomeExpensePostForm
                isIncome
                setUserDefTimeFrame={setUserDefTimeFrame}
              />
            </div>
            {/* body left container ends  */}

            {/* body Right container starts  */}
            <div className="bodyContainerRight customSm:w-[80%] customMid:col-span-8 customMid:mt-3 col-span-2 m-auto mt-1 w-full p-1 md:w-full md:p-0">
              <h2 className="mb-[20px] text-center text-2xl uppercase">
                Income Histories
              </h2>

              <div className="rightCardSection customMid:w-[99%] m-auto h-[68vh] w-[100%] overflow-auto md:w-[100%] lg:w-[92%]">
                {isHistoryDataLoading ? (
                  <h3 className="text-center text-slate-600">Loading...</h3>
                ) : historyData?.incomes[0] ? (
                  historyData?.incomes
                    ?.sort(
                      (a, b) =>
                        Number(b.dateAdded.slice(-2)) -
                        Number(a.dateAdded.slice(-2))
                    )
                    ?.map((ele, i) => (
                      <IncomeExpenseCard
                        key={i}
                        isIncome
                        data={ele}
                        del={deleteHistory}
                        accountId={`${currentUser?.uid}.${accountData?.alias}`}
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
