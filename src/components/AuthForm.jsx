// importing libraries:
import { useState } from "react";
import { auth, googleProvider, getUsersRef } from "../services/firebaseApi";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { setDoc } from "firebase/firestore";

// importing icons:
import { FcGoogle } from "react-icons/fc";

// importing custom hooks:
import useFocusNext from "../hooks/useFocusNext";

export const AuthForm = ({ isSignIn, setIsSignUpModalActive }) => {
  // states:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // using hooks:
  const focusNext = useFocusNext();

  // auth functions:
  const signUpEmailPassword = async () => {
    if (password !== rePassword) {
      setErrorMsg("password doesn't match! try again!");
      setPassword("");
      setRePassword("");
      return;
    }

    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await createNewUserOnSignUp(
        auth?.currentUser?.uid,
        auth?.currentUser?.email?.split("@")[0]
      );

      setEmail("");
      setPassword("");
      setRePassword("");
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message.slice(10));
    }
    setIsLoading(false);
  };

  const signInEmailPassword = async () => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);

      setEmail("");
      setPassword("");
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message.slice(10));
    }
    setIsLoading(false);
  };

  const signUpInGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      await createNewUserOnSignUp(
        auth?.currentUser?.uid,
        auth?.currentUser?.email?.split("@")[0]
      );

      setEmail("");
      setPassword("");
      setRePassword("");
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message.slice(10));
    }
    setIsLoading(false);
  };

  const demoLogin = async () => {
    const demoEmail = "fakecake420@gmail.com";
    const demoPassword = "fake123";

    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, demoEmail, demoPassword);

      setEmail("");
      setPassword("");
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message.slice(10));
    }
    setIsLoading(false);
  };

  const createNewUserOnSignUp = async (uid, username) => {
    try {
      await setDoc(getUsersRef(uid), {
        userId: uid,
        username: username,
      });
    } catch (error) {
      setErrorMsg(error.message.slice(10));
    }
  };

  return (
    <div
      className={
        isSignIn
          ? "flex flex-col gap-3 w-full max-w-[640px] items-center translate-y-[-10%]"
          : "flex flex-col gap-2 w-full max-w-[640px] items-center"
      }
    >
      {/* heading */}
      <h3
        className={
          isSignIn
            ? "text-slate-900 leading-tight text-[2.4rem] mb-1 text-center lg:text-6xl font-bold"
            : "text-white text-4xl lg:text-5xl mb-4 font-bold text-center"
        }
      >
        {isLoading
          ? "Loading..."
          : isSignIn
          ? "Login to Your Account"
          : "Sign Up"}
      </h3>

      {isSignIn ? (
        <p className="text-slate-700 text-center mb-6 text-[1.2rem] max-w-[400px]">
          Sign in and take control of your finances with ease and precision.
        </p>
      ) : (
        <></>
      )}

      {/* showing error message if any */}
      {errorMsg ? (
        <p
          className={
            isSignIn
              ? "error-msg font-semibold text-slate-100 bg-[#f48a] shadow w-[95%] lg:w-[90%] px-1 py-2 text-center rounded-full mb-1"
              : "error-msg font-semibold text-slate-100 bg-[#f48a] shadow w-full px-1 py-2 text-center rounded-lg mb-1"
          }
        >
          {errorMsg}
        </p>
      ) : (
        <></>
      )}

      {/* email field */}
      <input
        ref={focusNext}
        type="email"
        placeholder="enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={
          isSignIn
            ? `w-[95%] lg:w-[90%] px-4 py-3 shadow text-slate-950 rounded-full outline-gray-200 placeholder:text-slate-500 focus:placeholder:translate-x-[-100%] focus:bg-[#39aca466] duration-700 ${
                email && email.includes("@") && email.includes(".")
                  ? "bg-[#0f76]"
                  : "bg-[#39aca433]"
              }`
            : `w-full px-4 py-3 shadow text-gray-900 rounded-lg outline-gray-200 placeholder:text-slate-100 focus:placeholder:translate-x-[-100%] focus:bg-[#fff6] duration-700 ${
                email && email.includes("@") && email.includes(".")
                  ? "bg-[#0f73]"
                  : "bg-[#fff3]"
              }`
        }
      />

      {/* password field */}
      <input
        ref={focusNext}
        type="password"
        placeholder="enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={
          isSignIn
            ? "w-[95%] lg:w-[90%] px-4 py-3 shadow text-slate-950 rounded-full outline-gray-200 placeholder:text-slate-500 focus:placeholder:translate-x-[-100%] focus:bg-[#39aca466] duration-700 " +
              (password.length > 5 ? "bg-[#0f76]" : "bg-[#39aca433]")
            : "w-full px-4 py-3 shadow text-gray-900 rounded-lg outline-gray-200 placeholder:text-slate-100 focus:placeholder:translate-x-[-100%] focus:bg-[#fff6] duration-700 " +
              (password.length > 5 ? "bg-[#0f73]" : "bg-[#fff3]")
        }
      />

      {/* re-type password field */}
      {!isSignIn ? (
        <input
          ref={focusNext}
          type="password"
          placeholder="re-enter your password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          className={
            "w-full px-4 py-3 shadow text-gray-900 rounded-lg outline-gray-200 placeholder:text-slate-100 focus:placeholder:translate-x-[-100%] focus:bg-[#fff6] duration-700 " +
            (rePassword && password === rePassword
              ? "bg-[#0f73]"
              : "bg-[#fff3]")
          }
        />
      ) : (
        <></>
      )}

      {/* disclaimer/context */}
      <div
        className={
          isSignIn
            ? "flex justify-between w-[95%] lg:w-[90%] text-slate-700 px-1"
            : "flex justify-between w-full text-slate-100 px-1"
        }
      >
        <button
          onClick={() => {
            setIsSignUpModalActive(isSignIn);
            setErrorMsg("");
          }}
          className={
            "hover:underline hover:text-slate-700 duration-200 md:w-full text-left"
          }
        >
          {isSignIn ? "create new account?" : "already have an account?"}
        </button>

        {isSignIn ? (
          <></>
        ) : (
          <p className="text-right md:w-full">*min 6 characters*</p>
        )}
      </div>

      {/* sign in/up buttons */}
      <div className="flex flex-col items-center w-full gap-2 btn-container">
        <div
          className={
            isSignIn
              ? "flex items-center w-[95%] lg:w-[90%] gap-2"
              : "flex items-center w-full gap-2"
          }
        >
          {/* email/password sign in btn */}
          <button
            onClick={isSignIn ? signInEmailPassword : signUpEmailPassword}
            className={
              isSignIn
                ? "w-full p-2 font-semibold uppercase bg-[#3dc0b7] text-slate-100 rounded-full text-center shadow-md active:scale-[97%] hover:shadow-xl hover:bg-[#39aca4]"
                : "w-full p-2 font-semibold uppercase bg-white text-slate-600 rounded-lg text-center shadow-md active:scale-[97%] hover:shadow-xl"
            }
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {/* demo login button */}
          {isSignIn ? (
            <button
              onClick={demoLogin}
              className={
                isSignIn
                  ? "w-full p-2 font-semibold uppercase bg-[#3dc0b7] text-slate-100 rounded-full text-center shadow-md active:scale-[97%] hover:shadow-xl hover:bg-[#39aca4]"
                  : "w-full p-2 font-semibold uppercase bg-white text-slate-600 rounded-lg text-center shadow-md active:scale-[97%] hover:shadow-xl"
              }
            >
              Demo Login
            </button>
          ) : (
            <></>
          )}
        </div>

        {/* google authentication sign in btn*/}
        <button
          onClick={signUpInGoogle}
          className={
            isSignIn
              ? "w-[95%] lg:w-[90%] flex items-center gap-1 justify-center p-2 font-semibold uppercase bg-[#3dc0b7] text-slate-100 rounded-full shadow-md active:scale-[97%] hover:shadow-xl hover:bg-[#39aca4]"
              : "w-full flex items-center gap-1 justify-center p-2 font-semibold uppercase bg-white text-slate-600 rounded-lg shadow-md active:scale-[97%] hover:shadow-xl"
          }
        >
          {isSignIn ? "Sign In With Google" : "Sign Up With Google"}
          <FcGoogle className="text-2xl" />
        </button>
      </div>
    </div>
  );
};
