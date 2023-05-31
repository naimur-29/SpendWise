// importing firebase functions:
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "spendwise-backend.firebaseapp.com",
  projectId: "spendwise-backend",
  storageBucket: "spendwise-backend.appspot.com",
  messagingSenderId: "176151550361",
  appId: "1:176151550361:web:601d1d7b4df9ca9e3c9b08",
  measurementId: "G-EW8X0BYCF5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
