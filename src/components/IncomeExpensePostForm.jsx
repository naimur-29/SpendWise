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
  const { userData, activeAccountIndex } = useContext(userContext);

  // states:
  const [incomeExpenseData, setIncomeExpenseData] = useState({
    amount: 0,
    context: "",
    dateAdded: "",
  });

  // using custom hooks:
  const { isLoading, post, responseMessage, errorMessage } =
    usePostIncomeExpense(incomeExpenseData, isIncome);

  const focusNext = useFocusNext();

  const onSubmitIncome = () => {
    const accountId = userData.accounts[activeAccountIndex].id;

    post(accountId);

    // set user history time frame to latest dateAdded:
    setUserDefTimeFrame(incomeExpenseData.dateAdded);

    // clear input fields:
    setIncomeExpenseData({
      amount: 0,
      context: "",
      dateAdded: "",
    });
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-2 extra-lg:w-[400px] lg:w-[90%] w-[95%] items-center">
        {responseMessage ? (
          <p className="w-full text-center font-mono text-[#fff] bg-[#39aca4] py-1 px-2 mb-1">
            Latest: {responseMessage}
          </p>
        ) : (
          <></>
        )}

        {errorMessage ? (
          <p className="w-full text-center font-mono text-[#fff] bg-[#39aca4] py-1 px-2 mb-1">
            Error: {errorMessage}
          </p>
        ) : (
          <></>
        )}

        <div className="flex items-center justify-between w-full gap-3">
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
            className="flex-[8] text-lg font-mono px-2 py-2 shadow text-slate-950 rounded outline-[#42c8bf] placeholder:text-slate-500 focus:placeholder:translate-x-[-100%] focus:bg-[#39aca466] focus:-translate-y-[1px] focus:shadow-2xl focus:shadow-[#fff] duration-700 bg-[#39aca433]"
          />
        </div>

        <div className="flex items-center justify-between w-full gap-3">
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
            className="flex-[8] text-lg font-mono px-2 py-2 shadow text-slate-950 rounded outline-[#42c8bf] placeholder:text-slate-500 focus:placeholder:translate-x-[-100%] focus:bg-[#39aca466] focus:-translate-y-[1px] focus:shadow-2xl focus:shadow-[#fff] duration-700 bg-[#39aca433]"
          />
        </div>

        <div className="flex items-center justify-between w-full gap-3">
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
            className="flex-[8] px-2 py-2 shadow text-slate-950 rounded outline-[#42c8bf] placeholder:text-slate-500 focus:placeholder:translate-x-[-100%] focus:bg-[#39aca466] focus:-translate-y-[1px] focus:shadow-2xl focus:shadow-[#fff] duration-700 bg-[#39aca433]"
          />
        </div>

        <button
          onClick={onSubmitIncome}
          className="w-full px-4 py-2 mt-1 text-xl font-bold flex justify-center items-center gap-1 bg-[#fff] rounded-lg text-[#42c8bf] hover:shadow-lg hover:bg-[#42c8bf11] duration-200 border-[3px] border-[#42c8bf] active:shadow-none shadow-[inset_-0px_-3px_4px_#39aca433]"
        >
          {isLoading ? "Loading..." : "Add"}
        </button>
      </div>
    </div>
  );
};
