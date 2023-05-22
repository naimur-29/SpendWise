// importing libraries:
import { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebaseApi";

// importing custom hooks:
import useGetUser from "../hooks/useGetUser";
import useGetAccount from "../hooks/useGetAccount";

// creating context:
export const userContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeAccountIndex, setActiveAccountIndex] = useState(0);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  // getting user using custom hook:
  const { data: userData, isLoading: isUserDataLoading } = useGetUser(
    currentUser?.uid
  );

  // getting user using custom hook:
  const { data: accountData, isLoading: isAccountDataLoading } = useGetAccount(
    !isUserDataLoading && userData?.accounts
      ? userData.accounts[activeAccountIndex].id
      : undefined
  );

  const value = {
    currentUser,
    userData,
    isUserDataLoading,
    accountData,
    isAccountDataLoading,
    activeAccountIndex,
    setActiveAccountIndex,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
