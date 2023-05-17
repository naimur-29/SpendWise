// importing libraries:
import { useState } from "react";
import { updateDoc, arrayUnion, setDoc } from "firebase/firestore";
import { getIncomeRef } from "../services/firebaseApi";

const accountId = "<userId>.<accountAlias>";
const accountBalance = 1000; // todo: increase account balance "onSubmitIncome"

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

export const IncomePostForm = () => {
  // states:
  const [incomeData, setIncomeData] = useState({
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
    return incomeData.amount > 0 && incomeData.dateAdded;
  };

  const onSubmitIncome = async () => {
    if (checkData()) {
      setIsLoading(true);
      // create history id:
      const historyId = `${accountId}.${incomeData.dateAdded.split("-")[1]}${
        incomeData.dateAdded.split("-")[0]
      }`;

      try {
        // if history with this 'id' exists:
        // update income history:
        await updateDoc(getIncomeRef(historyId), {
          incomes: arrayUnion(incomeData),
        });

        // clear input fields:
        setIncomeData({
          amount: 0,
          context: "",
          dateAdded: "",
        });
      } catch (error) {
        // set error message:
        console.log(error.message);

        // if history with this 'id' doesn't exist:
        if (String(error.message).startsWith("No document to update:")) {
          console.log("create new!");

          // create history with that 'id':
          await setDoc(getIncomeRef(historyId), {
            ...getTemplateDoc(incomeData.dateAdded),
            incomes: [incomeData],
            totalIncomeAmount: incomeData.amount,
          });

          // clear input fields:
          setIncomeData({
            amount: 0,
            context: "",
            dateAdded: "",
          });
        }
      }
      setIsLoading(false);
    } else {
      console.log("Invalid Data!");
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-2 w-[400px] items-center">
        <div className="flex gap-3  w-full justify-between">
          <label htmlFor="amount">Amount: </label>
          <input
            type="text"
            value={incomeData.amount}
            onChange={(e) => {
              setIncomeData((prev) => ({
                ...prev,
                amount: filterAmount(e.target.value),
              }));
            }}
            className="w-[80%] text-slate-300 px-1"
          />
        </div>

        <div className="flex gap-3  w-full justify-between">
          <label htmlFor="context">Context: </label>
          <input
            type="text"
            placeholder="from where?"
            value={incomeData.context}
            onChange={(e) => {
              setIncomeData((prev) => ({
                ...prev,
                context: e.target.value,
              }));
            }}
            className="w-[80%] text-slate-300 px-1"
          />
        </div>

        <div className="flex justify-between gap-3 w-full">
          <label htmlFor="dateAdded">Date: </label>
          <input
            type="date"
            value={incomeData.dateAdded}
            onChange={(e) => {
              setIncomeData((prev) => ({
                ...prev,
                dateAdded: e.target.value,
              }));
            }}
            className="w-[80%] text-slate-300 px-1"
          />
        </div>

        <button
          onClick={onSubmitIncome}
          className="bg-blue-700 text-slate-100 px-4 py-2 mt-1 rounded-lg  w-full font-bold text-xl hover:shadow-lg hover:bg-blue-800"
        >
          {isLoading ? "Loading..." : "Add Income"}
        </button>
      </div>
    </div>
  );
};
