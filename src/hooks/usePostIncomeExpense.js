// importing libraries:
import { useState } from "react";
import {
  getIncomeExpenseHistoriesRef,
  getAccountsRef,
} from "../services/firebaseApi";
import { updateDoc, arrayUnion, setDoc, getDoc } from "firebase/firestore";

// functions:
const getCurrentTF = (today) =>
  String(today.getMonth() + 1).padStart(2, "0") + today.getFullYear();

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

const isDataValid = (data) => {
  return data.amount > 0 && data.dateAdded;
};

const usePostIncomeExpense = (data, isIncome) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const post = async (accountId) => {
    setIsLoading(true);

    // create history id:
    const historyId = `${accountId}.${data.dateAdded.split("-")[1]}${
      data.dateAdded.split("-")[0]
    }`;

    if (isDataValid(data)) {
      try {
        // get prev currentBalance:
        const thisAccountData = (
          await getDoc(getAccountsRef(accountId))
        ).data();
        const prevCurrentBalance = thisAccountData.currentBalance;

        // if expense is greater than income:
        if (!isIncome && data.amount > prevCurrentBalance) {
          setErrorMessage("Expense can't exceed the Total account balance!!");
          setResponseMessage("");
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
                incomes: historyIdExists ? arrayUnion(data) : [data],
                totalIncomeAmount: historyIdExists
                  ? prev.totalIncomeAmount + data.amount
                  : data.amount,
              }
            : {
                expenses: historyIdExists ? arrayUnion(data) : [data],
                totalExpenseAmount: historyIdExists
                  ? prev.totalExpenseAmount + data.amount
                  : data.amount,
              };

        const getNewCurrentBalance = (prev) =>
          isIncome
            ? {
                currentBalance: prev + data.amount,
              }
            : {
                currentBalance: prev - data.amount,
              };

        // if history with this 'id' exists:
        if (prevDataSnapshot.exists()) {
          // update income history:
          await updateDoc(
            getIncomeExpenseHistoriesRef(historyId),
            getNewIncomeExpenseData(prevData, true)
          );

          // update account data:
          await updateDoc(getAccountsRef(accountId), {
            ...getNewCurrentBalance(prevCurrentBalance),
            currentTimeFrame: getCurrentTF(new Date()),
          });

          // else history with this 'id' doesn't exist:
        } else {
          // create history with that 'id':
          await setDoc(getIncomeExpenseHistoriesRef(historyId), {
            ...getTemplateDoc(data.dateAdded),
            ...getNewIncomeExpenseData({}, false),
          });

          // update account's history data:
          await updateDoc(getAccountsRef(accountId), {
            ...getNewCurrentBalance(prevCurrentBalance),
            histories: arrayUnion(historyId),
            currentTimeFrame: getCurrentTF(new Date()),
          });
        }

        // set response:
        setResponseMessage(
          `$${data.amount} has been ${
            isIncome ? "added to" : "deducted from"
          } the ${thisAccountData.alias} account!`
        );
        setErrorMessage("");
      } catch (error) {
        // set error message:
        setErrorMessage(error.message);
        setResponseMessage("");
      }
    } else {
      setErrorMessage("Invalid Data!");
      setResponseMessage("");
    }

    setIsLoading(false);
  };

  return { isLoading, post, responseMessage, errorMessage };
};

export default usePostIncomeExpense;
