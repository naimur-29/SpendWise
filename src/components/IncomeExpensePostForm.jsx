// importing libraries:
import { useState } from "react";
import {
  getIncomeExpenseHistoriesRef,
  getAccountsRef,
} from "../services/firebaseApi";
import { updateDoc, arrayUnion, setDoc, getDoc } from "firebase/firestore";

// get user info from contextApi's context and extract account id:
const accountId = "<userId>.<accountAlias>";

const getTemplateDoc = (date) => {
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

  const tF = `${monthDict[date.split("-")[1]]}, ${date.split("-")[0]}`;

  return {
    timeFrame: tF,
    totalIncomeAmount: 0,
    totalExpenseAmount: 0,
    budgetTarget: 0,
    incomes: [],
    expenses: [],
  };
};

export const IncomeExpensePostForm = ({ isIncome }) => {
  // states:
  const [incomeExpenseData, setIncomeExpenseData] = useState({
    amount: 0,
    context: "",
    dateAdded: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // functions:
  const filterAmount = (num) => {
    return isNaN(num) || Number(num) < 0 ? 0 : Number(num);
  };

  const checkData = () => {
    return incomeExpenseData.amount > 0 && incomeExpenseData.dateAdded;
  };

  const onSubmitIncome = async () => {
    if (checkData()) {
      setIsLoading(true);

      // create history id:
      const historyId = `${accountId}.${
        incomeExpenseData.dateAdded.split("-")[1]
      }${incomeExpenseData.dateAdded.split("-")[0]}`;

      try {
        // get prev currentBalance:
        const thisAccountData = (
          await getDoc(getAccountsRef(accountId))
        ).data();
        const prevCurrentBalance = thisAccountData.currentBalance;

        // if expense is greater than income:
        if (!isIncome && incomeExpenseData.amount > prevCurrentBalance) {
          console.log("Expense can't exceed the Total account balance!!");
          setIsLoading(false);
          return;
        }

        // get previous history:
        const prevDataSnapshot = await getDoc(
          getIncomeExpenseHistoriesRef(historyId)
        );
        const prevData = prevDataSnapshot.data();

        // functions:
        const getNewIncomeExpenseData = (prev, historyIdExists) =>
          isIncome
            ? {
                incomes: historyIdExists
                  ? arrayUnion(incomeExpenseData)
                  : [incomeExpenseData],
                totalIncomeAmount: historyIdExists
                  ? prev.totalIncomeAmount + incomeExpenseData.amount
                  : incomeExpenseData.amount,
              }
            : {
                expenses: historyIdExists
                  ? arrayUnion(incomeExpenseData)
                  : [incomeExpenseData],
                totalExpenseAmount: historyIdExists
                  ? prev.totalExpenseAmount + incomeExpenseData.amount
                  : incomeExpenseData.amount,
              };

        const getNewCurrentBalance = (prev) =>
          isIncome
            ? {
                currentBalance: prev + incomeExpenseData.amount,
              }
            : {
                currentBalance: prev - incomeExpenseData.amount,
              };

        // if history with this 'id' exists:
        if (prevDataSnapshot.exists()) {
          // update income history:
          await updateDoc(
            getIncomeExpenseHistoriesRef(historyId),
            getNewIncomeExpenseData(prevData, true)
          );

          // update account data:
          await updateDoc(
            getAccountsRef(accountId),
            getNewCurrentBalance(prevCurrentBalance)
          );

          // else history with this 'id' doesn't exist:
        } else {
          // create history with that 'id':
          await setDoc(getIncomeExpenseHistoriesRef(historyId), {
            ...getTemplateDoc(incomeExpenseData.dateAdded),
            ...getNewIncomeExpenseData({}, false),
          });

          // update account's history data:
          await updateDoc(getAccountsRef(accountId), {
            histories: arrayUnion(historyId),
            ...getNewCurrentBalance(prevCurrentBalance),
          });
        }

        // clear input fields:
        setIncomeExpenseData({
          amount: 0,
          context: "",
          dateAdded: "",
        });

        // log response:
        console.log(
          `$${incomeExpenseData.amount} has been ${
            isIncome ? "added to" : "deducted from"
          } the ${thisAccountData.alias} account!`
        );
      } catch (error) {
        // set error message:
        console.log(error.message);
      }

      setIsLoading(false);
    } else {
      console.log("Invalid Data!");
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-2 w-[400px] items-center">
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
