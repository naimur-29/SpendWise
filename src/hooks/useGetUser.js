// importing libraries:
import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { getUsersRef } from "../services/firebaseApi";

const useGetUser = (uid) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      // if no uid:
      if (!uid) {
        setErrorMessage("Invalid UID");
        setIsLoading(false);
      }

      // fetch data:
      setIsLoading(true);
      try {
        onSnapshot(getUsersRef(uid), (snapshot) => {
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
  }, [uid]);

  return { isLoading, data, errorMessage };
};

export default useGetUser;
