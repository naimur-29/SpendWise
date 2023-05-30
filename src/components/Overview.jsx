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
  } = useContext(userContext);

  return (
    <section className="_overview flex h-full max-h-[100%] w-full max-w-[100%] flex-col items-center rounded-xl bg-white p-4 shadow-[inset_-0px_-3px_4px_#39aca433] sm:flex-[1]">
      <div className="_heading mb-4 flex min-w-[50%] items-center justify-between gap-3">
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
              getTFfromDate(userDefTimeFrame) || accountData?.currentTimeFrame
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
                Number(a.dateAdded.slice(-2)) - Number(b.dateAdded.slice(-2))
            )}
            data2={historyData?.expenses?.sort(
              (a, b) =>
                Number(a.dateAdded.slice(-2)) - Number(b.dateAdded.slice(-2))
            )}
          />
        </div>
      </div>
    </section>
  );
};
