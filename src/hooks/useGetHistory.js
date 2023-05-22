// importing libraries:
import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { getIncomeExpenseHistoriesRef } from "../services/firebaseApi";

const useGetHistory = (id) => {
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
        onSnapshot(getIncomeExpenseHistoriesRef(id), (snapshot) => {
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

  return { isLoading, data, errorMessage };
};

export default useGetHistory;
