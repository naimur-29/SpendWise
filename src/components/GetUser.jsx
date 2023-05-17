// importing libraries:
import { useState, useEffect } from "react";
import { auth, usersCollectionRef } from "../services/firebaseApi";
import { query, where, onSnapshot } from "firebase/firestore";

// local variables:

export const GetUser = () => {
  // states:
  const [userData, setUserData] = useState({
    name: "",
    accounts: [],
  });
  //   const [errorMsg, setErrorMsg] = useState("");

  // init functions:
  useEffect(() => {
    const getUserData = async (uid) => {
      try {
        // set up query:
        const userQuery = query(usersCollectionRef, where("userId", "==", uid));

        // read the data on change to db:
        onSnapshot(userQuery, (snapshot) => {
          const data = {
            ...snapshot?.docs[0]?.data(),
            id: snapshot?.docs[0]?.id,
          };

          // set the state:
          console.log(data);
          setUserData(data);
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    setTimeout(() => {
      getUserData(auth?.currentUser?.uid);
    }, 1000);
  }, []);

  return !userData.name ? (
    <p>{"Loading..."}</p>
  ) : (
    <div>
      <h2>{auth?.currentUser?.email}</h2>

      <div>
        <p>{userData.name}</p>
        <p>{userData.accounts[0].alias}</p>
        <p>{userData.userId}</p>
      </div>
    </div>
  );
};
