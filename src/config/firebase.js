// importing firebase functions:
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "spendwise-29.firebaseapp.com",
  projectId: "spendwise-29",
  storageBucket: "spendwise-29.appspot.com",
  messagingSenderId: "318696602556",
  appId: "1:318696602556:web:42807a64dfe6036b3549b9",
  measurementId: "G-0EPXRCXD5B",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
