// importing libraries:
import { useState, useContext } from "react";

// importing custom hooks:
import usePostIncomeExpense from "../hooks/usePostIncomeExpense";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing custom hooks:
import useFocusNext from "../hooks/useFocusNext";

// functions:
const filterAmount = (num) => {
  return isNaN(num) || Number(num) < 0 ? 0 : Number(num);
};

export const IncomeExpensePostForm = ({ isIncome, setUserDefTimeFrame }) => {
  // get userData from userContext:
  const { userData, activeAccountIndex, setActiveAccountIndex } =
    useContext(userContext);

  // states:
  const [incomeExpenseData, setIncomeExpenseData] = useState({
    amount: 0,
    context: "",
    dateAdded: "",
  });

  // using custom hooks:
  const { isLoading, post, responseMessage, errorMessage, setErrorMessage } =
    usePostIncomeExpense(incomeExpenseData, isIncome);

  const focusNext = useFocusNext();

  const onSubmitIncome = () => {
    // if user has no accounts:
    if (!userData?.accounts?.length) {
      setErrorMessage("Create An Account First!");
      return;
    }

    if (activeAccountIndex >= userData?.accounts?.length) {
      setActiveAccountIndex(0);
    }

    const accountId = userData.accounts[activeAccountIndex].id;

    post(accountId, userData?.userId);

    // set user history time frame to latest dateAdded:
    incomeExpenseData.dateAdded &&
      setUserDefTimeFrame(incomeExpenseData.dateAdded);

    // clear input fields:
    setIncomeExpenseData({
      amount: 0,
      context: "",
      dateAdded: "",
    });
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[95%] flex-col items-center gap-2 lg:w-[90%] extra-lg:w-[400px]">
        {responseMessage ? (
          <p className="mb-1 w-full bg-[#39aca4] px-2 py-1 text-center font-mono text-[#fff]">
            Latest: {responseMessage}
          </p>
        ) : (
          <></>
        )}

        {errorMessage ? (
          <p className="mb-1 w-full bg-[#39aca4] px-2 py-1 text-center font-mono text-[#fff]">
            Error: {errorMessage}
          </p>
        ) : (
          <></>
        )}

        <div className="flex w-full items-center justify-between gap-3">
          <label htmlFor="amount" className="flex-[2]">
            Amount:{" "}
          </label>
          <input
            ref={focusNext}
            type="text"
            value={incomeExpenseData.amount}
            onChange={(e) => {
              setIncomeExpenseData((prev) => ({
                ...prev,
                amount: filterAmount(e.target.value),
              }));
            }}
            className="flex-[8] rounded bg-[#39aca433] px-2 py-2 font-mono text-lg text-slate-950 shadow outline-[#42c8bf] duration-700 placeholder:text-slate-500 focus:-translate-y-[1px] focus:bg-[#39aca466] focus:shadow-2xl focus:shadow-[#fff] focus:placeholder:translate-x-[-100%]"
          />
        </div>

        <div className="flex w-full items-center justify-between gap-3">
          <label htmlFor="context" className="flex-[2]">
            Context:{" "}
          </label>
          <textarea
            ref={focusNext}
            type="text"
            rows={2}
            placeholder={isIncome ? "from where?" : "for what?"}
            value={incomeExpenseData.context}
            onChange={(e) => {
              setIncomeExpenseData((prev) => ({
                ...prev,
                context: e.target.value,
              }));
            }}
            className="flex-[8] rounded bg-[#39aca433] px-2 py-2 font-mono text-lg text-slate-950 shadow outline-[#42c8bf] duration-700 placeholder:text-slate-500 focus:-translate-y-[1px] focus:bg-[#39aca466] focus:shadow-2xl focus:shadow-[#fff] focus:placeholder:translate-x-[-100%]"
          />
        </div>

        <div className="flex w-full items-center justify-between gap-3">
          <label htmlFor="dateAdded" className="flex-[2]">
            Date:{" "}
          </label>
          <input
            ref={focusNext}
            type="date"
            value={incomeExpenseData.dateAdded}
            onChange={(e) => {
              setIncomeExpenseData((prev) => ({
                ...prev,
                dateAdded: e.target.value,
              }));
            }}
            className="flex-[8] rounded bg-[#39aca433] px-2 py-2 text-slate-950 shadow outline-[#42c8bf] duration-700 placeholder:text-slate-500 focus:-translate-y-[1px] focus:bg-[#39aca466] focus:shadow-2xl focus:shadow-[#fff] focus:placeholder:translate-x-[-100%]"
          />
        </div>

        <button
          onClick={onSubmitIncome}
          className="mt-1 flex w-full items-center justify-center gap-1 rounded-lg border-[3px] border-[#42c8bf] bg-[#fff] px-4 py-2 text-xl font-bold text-[#42c8bf] shadow-[inset_-0px_-3px_4px_#39aca433] duration-200 hover:bg-[#42c8bf11] hover:shadow-lg active:shadow-none"
        >
          {isLoading ? "Loading..." : "Add"}
        </button>
      </div>
    </div>
  );
};
