// importing libraries:
import { useContext } from "react";

// importing icons:
import { TbCurrencyTaka } from "react-icons/tb";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing custom hooks:
import useDeleteIncomeExpense from "../hooks/useDeleteIncomeExpense";

// importing local components:
import { IncomeExpensePostForm } from "../components/IncomeExpensePostForm";
import { IncomeExpenseCard } from "../components/IncomeExpenseCard";

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

export default function Expenses() {
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
  const { deleteHistory } = useDeleteIncomeExpense();

  return (
    <section className="incomeContainer min-h-screen w-full bg-slate-100 md:w-[calc(100%-16rem)]">
      <div className="incomeContainerWrapper px-[1rem] py-[27px] md:p-[27px]">
        {/* top container starts  */}
        <div className="flex items-center gap-3 mb-4 heading">
          <h2 className="mb-3 text-2xl font-semibold extra-sm:text-3xl ">
            Expenses of
          </h2>

          <div className="relative">
            <input
              type="date"
              title="Select the month & year to see that month's Expenses!"
              onChange={(e) => setUserDefTimeFrame(e.target.value)}
              value={userDefTimeFrame}
              className="flex -translate-y-1 cursor-pointer items-center justify-center rounded-full rounded-r-none bg-[#39aca4] px-4 py-2 text-transparent shadow outline-[#fff] duration-200 hover:bg-[#39aca4aa]"
            />
            <p
              title="Select the month & year to see that month's Incomes!"
              className="date-overlay absolute left-[0] top-0 w-[120px] -translate-y-1 rounded-full bg-[#39aca4] px-4 py-2 text-slate-100"
            >
              {getTextTf(
                getTFfromDate(userDefTimeFrame) || accountData?.currentTimeFrame
              )}
            </p>
          </div>
        </div>
        <div className="topContainerCard mb-[40px]">
          <div className="flex w-full items-center justify-center rounded-md border-[3px] border-[#fff] bg-[#39aca4] p-2 drop-shadow-md">
            <div className="cardTop">
              <h3 className="flex flex-wrap items-center justify-center self-center text-2xl font-bold uppercase text-[#fff]">
                Total expense :
                <span className="flex items-center text-[#fff8bd]">
                  <TbCurrencyTaka />
                  {isHistoryDataLoading
                    ? "Loading..."
                    : historyData?.totalExpenseAmount || 0}
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
            <h2 className="text-2xl uppercase">Add Expense</h2>
            <IncomeExpensePostForm setUserDefTimeFrame={setUserDefTimeFrame} />
          </div>
          {/* body left container ends  */}

          {/* body Right container starts  */}
          <div className="bodyContainerRight customSm:w-[80%] customMid:col-span-8 customMid:mt-3 col-span-2 m-auto mt-1 w-full p-1 md:w-full md:p-0">
            <h2 className="mb-[20px] text-center text-2xl uppercase">
              Expense Histories
            </h2>

            <div className="rightCardSection customMid:w-[99%] m-auto h-[68vh] w-[100%] overflow-auto md:w-[100%] lg:w-[92%]">
              {isHistoryDataLoading ? (
                <h3 className="text-center text-slate-600">Loading...</h3>
              ) : historyData?.expenses[0] ? (
                historyData?.expenses
                  ?.sort(
                    (a, b) =>
                      Number(b.dateAdded.slice(-2)) -
                      Number(a.dateAdded.slice(-2))
                  )
                  ?.map((ele, i) => (
                    <IncomeExpenseCard
                      key={i}
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
  );
}
