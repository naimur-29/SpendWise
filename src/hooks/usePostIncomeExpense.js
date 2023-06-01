// importing libraries:
import { useState } from "react";
import {
  getIncomeExpenseHistoriesRef,
  getAccountsRef,
} from "../services/firebaseApi";
import { updateDoc, arrayUnion, setDoc, getDoc } from "firebase/firestore";

// importing icons:
import { TbCurrencyTaka } from "react-icons/tb";

// functions:
const getCurrentTF = (today) =>
  String(today.getMonth() + 1).padStart(2, "0") + today.getFullYear();

const getTemplateDoc = (date, accountId, userId) => {
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
    userId,
    accountId,
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
  // states:
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);

  // functions:
  const post = async (accountId, userId) => {
    setIsLoading(true);

    // set data stat:
    data = {
      ...data,
      stat: isIncome ? "incomes" : "expenses",
    };

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
          setErrorMessage(
            <span>
              Expense can't exceed the Total account balance{" "}
              {<TbCurrencyTaka className="inline" />}
              {prevCurrentBalance}!
            </span>
          );
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
            ...getTemplateDoc(data.dateAdded, accountId, userId),
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
          isIncome ? (
            <span>
              {<TbCurrencyTaka className="inline" />}
              {data.amount} has been added to the {thisAccountData.alias}{" "}
              account!
            </span>
          ) : (
            <span>
              {<TbCurrencyTaka className="inline" />}
              {data.amount} has been deducted from the {thisAccountData.alias}{" "}
              account!
            </span>
          )
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

  return { isLoading, post, responseMessage, errorMessage, setErrorMessage };
};

export default usePostIncomeExpense;
