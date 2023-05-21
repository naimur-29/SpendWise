// importing libraries:
import { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebaseApi";

// importing custom hooks:
import useGetUser from "../hooks/useGetUser";

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

  const value = {
    currentUser,
    userData,
    isUserDataLoading,
    activeAccountIndex,
    setActiveAccountIndex,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
