// importing libraries:
import { useState } from "react";
import {
  getIncomeExpenseHistoriesRef,
  getAccountsRef,
  getUsersRef,
} from "../services/firebaseApi";
import { updateDoc, deleteDoc, getDoc, arrayRemove } from "firebase/firestore";

const useDeleteAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const deleteAccount = async (uid, accountData) => {
    try {
      setIsLoading(true);
      // get account data:
      const thisAccountData = (
        await getDoc(getAccountsRef(accountData?.id))
      ).data();

      // delete all of the histories:
      if (thisAccountData?.histories?.length) {
        for (let history of thisAccountData?.histories) {
          await deleteDoc(getIncomeExpenseHistoriesRef(history));
        }
      }

      // delete the account itself:
      await deleteDoc(getAccountsRef(accountData?.id));

      // remove from userData:
      await updateDoc(getUsersRef(uid), {
        accounts: arrayRemove(accountData),
      });

      setResponseMessage(`Account "${accountData?.alias}" has been removed!`);
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  };

  return { isLoading, deleteAccount, responseMessage, errorMessage };
};

export default useDeleteAccount;
