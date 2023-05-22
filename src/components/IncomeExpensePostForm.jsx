// importing libraries:
import { useState, useContext } from "react";

// importing custom hooks:
import usePostIncomeExpense from "../hooks/usePostIncomeExpense";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// functions:
const filterAmount = (num) => {
  return isNaN(num) || Number(num) < 0 ? 0 : Number(num);
};

export const IncomeExpensePostForm = ({ isIncome }) => {
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

  const onSubmitIncome = () => {
    const accountId = userData.accounts[activeAccountIndex].id;

    post(accountId);

    // clear input fields:
    setIncomeExpenseData({
      amount: 0,
      context: "",
      dateAdded: "",
    });
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-2 lg:w-[400px] w-[95%] items-center">
        {responseMessage ? <p>Response: {responseMessage}</p> : <></>}

        {errorMessage ? <p>Error: {errorMessage}</p> : <></>}

        <div className="flex justify-between w-full gap-3">
          <label htmlFor="amount">Amount: </label>
          <input
            type="text"
            value={incomeExpenseData.amount}
            onChange={(e) => {
              setIncomeExpenseData((prev) => ({
                ...prev,
                amount: filterAmount(e.target.value),
              }));
            }}
            className="w-[80%] text-slate-300 px-1"
          />
        </div>

        <div className="flex justify-between w-full gap-3">
          <label htmlFor="context">Context: </label>
          <input
            type="text"
            placeholder={isIncome ? "from where?" : "for what?"}
            value={incomeExpenseData.context}
            onChange={(e) => {
              setIncomeExpenseData((prev) => ({
                ...prev,
                context: e.target.value,
              }));
            }}
            className="w-[80%] text-slate-300 px-1"
          />
        </div>

        <div className="flex justify-between w-full gap-3">
          <label htmlFor="dateAdded">Date: </label>
          <input
            type="date"
            value={incomeExpenseData.dateAdded}
            onChange={(e) => {
              setIncomeExpenseData((prev) => ({
                ...prev,
                dateAdded: e.target.value,
              }));
            }}
            className="w-[80%] text-slate-300 px-1"
          />
        </div>

        <button
          onClick={onSubmitIncome}
          className="w-full px-4 py-2 mt-1 text-xl font-bold bg-blue-700 rounded-lg text-slate-100 hover:shadow-lg hover:bg-blue-800"
        >
          {isLoading ? "Loading..." : isIncome ? "Add Income" : "Add Expense"}
        </button>
      </div>
    </div>
  );
};
