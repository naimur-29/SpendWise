// importing libraries:
import { useState } from "react";
import {
  getIncomeExpenseHistoriesRef,
  getAccountsRef,
} from "../services/firebaseApi";
import { updateDoc, arrayRemove, getDoc } from "firebase/firestore";

const useDeleteIncomeExpense = (isIncome) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const deleteHistory = async (accountId, data) => {
    setIsLoading(true);

    // create history id:
    const historyId = `${accountId}.${data.dateAdded.split("-")[1]}${
      data.dateAdded.split("-")[0]
    }`;

    try {
      // get prev currentBalance:
      const thisAccountData = (await getDoc(getAccountsRef(accountId))).data();
      const prevCurrentBalance = thisAccountData.currentBalance;

      // get previous history:
      const prevDataSnapshot = await getDoc(
        getIncomeExpenseHistoriesRef(historyId)
      );
      const prevData = prevDataSnapshot.data();
      console.log(data);

      // functions:
      const getNewIncomeExpenseData = (prev) =>
        isIncome
          ? {
              incomes: arrayRemove(data),
              totalIncomeAmount: prev.totalIncomeAmount - data.amount,
            }
          : {
              expenses: arrayRemove(data),
              totalExpenseAmount: prev.totalExpenseAmount - data.amount,
            };

      const getNewCurrentBalance = (prev) =>
        isIncome
          ? {
              currentBalance: prev - data.amount,
            }
          : {
              currentBalance: prev + data.amount,
            };

      // update income/expense history:
      await updateDoc(
        getIncomeExpenseHistoriesRef(historyId),
        getNewIncomeExpenseData(prevData)
      );

      // update account data:
      await updateDoc(getAccountsRef(accountId), {
        ...getNewCurrentBalance(prevCurrentBalance),
      });

      // set response:
      setResponseMessage(`History deleted successfully!`);
      setErrorMessage("");
    } catch (error) {
      // set error message:
      setErrorMessage(error.message);
      setResponseMessage("");
    }

    setIsLoading(false);
  };

  return { isLoading, deleteHistory, responseMessage, errorMessage };
};

export default useDeleteIncomeExpense;
