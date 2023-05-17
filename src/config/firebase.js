// importing firebase functions:
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDMBp-G_o1r6DfGWTEW1lwIeZ1mMz54OIM",
  authDomain: "spendwise-29.firebaseapp.com",
  projectId: "spendwise-29",
  storageBucket: "spendwise-29.appspot.com",
  messagingSenderId: "318696602556",
  appId: "1:318696602556:web:20b0415a8c7ab3743549b9",
  measurementId: "G-MHJL2BG7S1",
};

// console.log(process.env.REACT_APP_API_KEY);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
