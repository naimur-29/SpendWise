// importing libraries:
import { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebaseApi";

// importing custom hooks:
import useGetUser from "../hooks/useGetUser";
import useGetAccount from "../hooks/useGetAccount";
import useGetHistory from "../hooks/useGetHistory";

// creating context:
export const userContext = createContext(null);

// global variables:
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

// functions:
const getTFfromDate = (date) => {
  if (!date) return "";
  return `${date.slice(-5, -3)}${date.slice(0, 4)}`;
};

const getTextTf = (serial) => {
  if (!serial) return "Loading...";

  return `${monthDict[serial.slice(0, 2)]}, ${serial.slice(2)}`;
};

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

export const UserContextProvider = ({ children }) => {
  // states:
  const [currentUser, setCurrentUser] = useState(null);
  const [activeAccountIndex, setActiveAccountIndex] = useState(0);
  const [userDefTimeFrame, setUserDefTimeFrame] = useState(undefined);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);

    // set userDefTimeFrame to current date:
    let today = new Date();
    today = String(new Date()).slice(4, 15).split(" ");
    let temp = [today[2], getKeyByValue(monthDict, today[0]), today[1]].join(
      "-"
    );
    setUserDefTimeFrame(temp);
  }, []);

  // fetching user using custom hook:
  const { data: userData, isLoading: isUserDataLoading } = useGetUser(
    currentUser?.uid
  );

  // fetching account using custom hook:
  const {
    data: accountData,
    setData: setAccountData,
    isLoading: isAccountDataLoading,
  } = useGetAccount(
    !isUserDataLoading && activeAccountIndex < userData?.accounts?.length
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
    setAccountData,
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
