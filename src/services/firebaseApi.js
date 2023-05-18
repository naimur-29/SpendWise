import { app } from "../config/firebase";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, doc } from "firebase/firestore";

// creating & exporting firebase functions:
// const analytics = getAnalytics(app);
// auth:
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// db:
export const db = getFirestore(app);

// users:
export const usersCollectionRef = collection(db, "users");
export const getUsersRef = (uid) => doc(db, "users", uid);

// accounts:
export const getAccountsRef = (id) => doc(db, "accounts", id);

// histories:
export const getIncomeExpenseHistoriesRef = (id) =>
  doc(db, "incomeExpenseHistories", id);
