// importing libraries:
import { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebaseApi";

// importing custom hooks:
import useGetUser from "../hooks/useGetUser";
import useGetAccount from "../hooks/useGetAccount";
import useGetHistory from "../hooks/useGetHistory";

// creating context:
export const userContext = createContext(null);

// functions:
const getTFfromDate = (date) => {
  if (!date) return "";
  return `${date.slice(-5, -3)}${date.slice(0, 4)}`;
};

const getTextTf = (serial) => {
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

  if (!serial) return "Loading...";

  return `${monthDict[serial.slice(0, 2)]}, ${serial.slice(2)}`;
};

export const UserContextProvider = ({ children }) => {
  // states:
  const [currentUser, setCurrentUser] = useState(null);
  const [activeAccountIndex, setActiveAccountIndex] = useState(0);
  const [userDefTimeFrame, setUserDefTimeFrame] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  // fetching user using custom hook:
  const { data: userData, isLoading: isUserDataLoading } = useGetUser(
    currentUser?.uid
  );

  // fetching account using custom hook:
  const { data: accountData, isLoading: isAccountDataLoading } = useGetAccount(
    !isUserDataLoading && userData?.accounts
      ? userData?.accounts[activeAccountIndex].id
      : undefined
  );

  // fetching history using custom hook:
  const { data: historyData, isLoading: isHistoryDataLoading } = useGetHistory(
    `${currentUser?.uid}.${accountData?.alias}.${
      userDefTimeFrame
        ? getTFfromDate(userDefTimeFrame)
        : accountData?.currentTimeFrame
    }`
  );

  const value = {
    currentUser,
    userData,
    isUserDataLoading,
    accountData,
    isAccountDataLoading,
    activeAccountIndex,
    setActiveAccountIndex,
    userDefTimeFrame,
    setUserDefTimeFrame,
    getTFfromDate,
    getTextTf,
    historyData,
    isHistoryDataLoading,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
