// importing libraries:
import { useContext } from "react";

// local contexts:
import { userContext } from "../contexts/UserContext";

// local components:
import { BarChart } from "../components/BarChart";

export const Overview = () => {
  // user contexts:
  const {
    accountData,
    historyData,
    setUserDefTimeFrame,
    userDefTimeFrame,
    getTextTf,
    getTFfromDate,
    spendWiseTheme,
  } = useContext(userContext);

  return (
    <section className="_overview flex h-full max-h-[100%] min-h-[280px] w-full max-w-[100%] flex-col items-center rounded-xl bg-[--main-dashboard-cards-bg] p-4 shadow-[inset_-0px_-3px_4px_var(--main-dashboard-cards-shadow)] transition-[background-color] duration-300 sm:flex-[1]">
      <div className="_heading mb-4 flex min-w-[50%] flex-wrap items-center justify-center gap-2">
        <h2 className="mb-2 text-2xl font-semibold text-[--main-text]">
          Overview
        </h2>

        <div className="relative -translate-y-1">
          <input
            type="date"
            id="session-date"
            name="session-date"
            title="Select the month & year to see that month's Histories!"
            onChange={(e) => setUserDefTimeFrame(e.target.value)}
            value={userDefTimeFrame}
            className="z-10 flex h-full w-full items-center justify-center rounded-full bg-transparent p-2 text-transparent outline-[#fff] duration-200"
          />
          <p
            title="Select the month & year to see that month's Incomes!"
            className="_date-overlay absolute left-[0] top-0 flex h-full w-full items-center justify-center rounded-full bg-[--main-btn-bg] font-semibold text-slate-100"
          >
            {getTextTf(
              getTFfromDate(userDefTimeFrame) || accountData?.currentTimeFrame
            )}
          </p>
        </div>
      </div>

      <div className="flex h-full w-full items-center justify-center">
        {/* chart */}
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
    </section>
  );
};
