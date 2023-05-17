import { app } from "../config/firebase";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// creating & exporting firebase functions:
// const analytics = getAnalytics(app);
// auth:
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// db:
export const db = getFirestore(app);
export const usersCollectionRef = collection(db, "users");
