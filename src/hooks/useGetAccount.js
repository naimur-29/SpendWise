// importing libraries:
import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { getAccountsRef } from "../services/firebaseApi";

const useGetAccount = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      // if no id:
      if (!id) {
        setErrorMessage("Invalid Account ID");
        setIsLoading(false);
      }

      // fetch data:
      setIsLoading(true);
      try {
        onSnapshot(getAccountsRef(id), (snapshot) => {
          console.log("fetching...");

          const res = snapshot.data();
          setData(res);
        });
      } catch (error) {
        setErrorMessage(error.message);
      }

      setIsLoading(false);
    };

    getData();
  }, [id]);

  return { isLoading, data, setData, errorMessage };
};

export default useGetAccount;
