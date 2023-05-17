// importing libraries:
import { useState, useEffect } from "react";
import { auth, usersCollectionRef } from "../services/firebaseApi";
import { getDocs } from "firebase/firestore";

// local variables:

export const DisplayHistory = () => {
  // states:
  const [userData, setUserData] = useState({
    userId: "",
    name: "",
    accounts: [],
  });

  // init functions:
  useEffect(() => {
    const getUserData = async () => {
      try {
        // read the data
        const data = await getDocs(usersCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);

        // set the state
        setUserData(filteredData[0]);
      } catch (error) {
        console.log(error.message);
      }
    };

    getUserData();
  }, []);

  return !userData.userId ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h2>{auth?.currentUser?.email}</h2>

      <div>
        <p>{userData.name}</p>
        <p>{userData.userId}</p>
      </div>
    </div>
  );
};
