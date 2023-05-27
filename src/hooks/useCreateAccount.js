// importing libraries:
import { useState } from "react";
import { setDoc, arrayUnion, updateDoc } from "firebase/firestore";
import { getAccountsRef, getUsersRef } from "../services/firebaseApi";

const useCreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const post = async ({ alias, id, userData }) => {
    setIsLoading(true);

    // if no id:
    if (!id || !alias || !userData) {
      setErrorMessage("Invalid Account ID");
      setIsLoading(false);
      return;
    }

    try {
      // create account:
      console.log("posting...");
      await setDoc(getAccountsRef(id), {
        alias: alias,
        currentBalance: 0,
        currentTimeFrame: "",
        histories: [],
      });

      // update user data:
      await updateDoc(getUsersRef(id.split(".")[0]), {
        ...userData,
        accounts: arrayUnion({
          alias,
          id,
        }),
      });
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  };

  return { isLoading, post, errorMessage };
};

export default useCreateAccount;
