// importing libraries:
import { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebaseApi";

// importing custom hooks:
import useGetUser from "../hooks/useGetUser";

// creating context:
export const userContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [uid, setUid] = useState("");
  const [activeAccountIndex, setActiveAccountIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setUid(auth?.currentUser?.uid);
    }, 1000);
  });

  const { isLoading: isUserDataLoading, data: userData } = useGetUser(uid);

  const value = {
    userData,
    isUserDataLoading,
    activeAccountIndex,
    setActiveAccountIndex,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
