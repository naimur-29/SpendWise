// importing libraries:
import { useState } from "react";
import { auth, googleProvider, getUsersRef } from "../services/firebaseApi";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, getDoc } from "firebase/firestore";

// importing icons:
import { FcGoogle } from "react-icons/fc";

// importing custom hooks:
import useFocusNext from "../hooks/useFocusNext";
import useCreateAccount from "../hooks/useCreateAccount";

// global variables:
const demoAccounts = [
  {
    email: "demo001@gmail.com",
    password: "0123456789",
  },
  {
    email: "demo002@gmail.com",
    password: "0123456789",
  },
  {
    email: "demo003@gmail.com",
    password: "0123456789",
  },
];

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
    // choose demo randomly:
    const demoAccount = demoAccounts[Math.floor(Math.random() * 3)];

    setEmail(demoAccount.email);
    setPassword(demoAccount.password);

    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(
        auth,
        demoAccount.email,
        demoAccount.password
      );

      setEmail("");
      setPassword("");
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message.slice(10));
    }
    setIsLoading(false);
  };

  // create user:
  const { post: createAccount } = useCreateAccount();

  const createNewUserOnSignUp = async (uid, username) => {
    try {
      const user = await getDoc(getUsersRef(uid));

      if (!user.exists()) {
        console.log("creating user...");
        await setDoc(getUsersRef(uid), {
          userId: uid,
          username: username,
          photoUrl: "",
        });

        await createAccount({
          uid,
          id: `${uid}.default`,
          alias: "default",
        });
      }
    } catch (error) {
      setErrorMsg(error.message.slice(10));
    }
  };

  return (
    <div
      className={
        isSignIn
          ? "flex w-full max-w-[640px] translate-y-[-10%] flex-col items-center gap-3"
          : "flex w-full max-w-[640px] flex-col items-center gap-2"
      }
    >
      {/* heading */}
      <h3
        className={
          isSignIn
            ? "mb-1 text-center text-[2.4rem] font-bold leading-tight text-[--main-text] lg:text-6xl"
            : "mb-4 text-center text-4xl font-bold text-[--main-overlay-text] lg:text-5xl"
        }
      >
        {isLoading
          ? "Loading..."
          : isSignIn
          ? "Login to Your Account"
          : "Sign Up"}
      </h3>

      {isSignIn ? (
        <p className="mb-6 max-w-[400px] text-center text-[1.2rem] text-[--light-text]">
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
              ? "error-msg mb-1 w-[95%] rounded-full bg-[--main-error-bg] px-1 py-2 text-center font-semibold text-[--main-error-text] shadow lg:w-[90%]"
              : "error-msg mb-1 w-full rounded-lg bg-[--main-error-bg] px-1 py-2 text-center font-semibold text-[--main-error-text] shadow"
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
            ? `w-[95%] rounded-full px-4 py-3 text-[--main-text] shadow outline-[--main-input-outline] duration-700 placeholder:text-slate-500 focus:bg-[#39aca466] focus:placeholder:translate-x-[-100%] lg:w-[90%] ${
                email && email.includes("@") && email.includes(".")
                  ? "bg-[#0f74]"
                  : "bg-[#39aca433]"
              }`
            : `w-full rounded-lg px-4 py-3 text-[--main-overlay-input-text] shadow outline-[--main-input-outline] duration-700 placeholder:text-slate-500 focus:bg-[#fff1] focus:text-slate-50 focus:placeholder:translate-x-[-100%] ${
                email && email.includes("@") && email.includes(".")
                  ? "bg-[#0f74]"
                  : "bg-[--main-overlay-input-bg]"
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
            ? "w-[95%] rounded-full px-4 py-3 text-[--main-text] shadow outline-[--main-input-outline] duration-700 placeholder:text-slate-500 focus:bg-[#39aca466] focus:placeholder:translate-x-[-100%] lg:w-[90%] " +
              (password.length > 5 ? "bg-[#0f74]" : "bg-[#39aca433]")
            : "w-full rounded-lg px-4 py-3 text-[--main-overlay-input-text] shadow outline-[--main-input-outline] duration-700 placeholder:text-slate-500 focus:bg-[#fff1] focus:text-slate-50 focus:placeholder:translate-x-[-100%] " +
              (password.length > 5
                ? "bg-[#0f74]"
                : "bg-[--main-overlay-input-bg]")
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
            "w-full rounded-lg px-4 py-3 text-[--main-overlay-input-text] shadow outline-[--main-input-outline] duration-700 placeholder:text-slate-500 focus:bg-[#fff1] focus:text-slate-50 focus:placeholder:translate-x-[-100%] " +
            (rePassword && password === rePassword
              ? "bg-[#0f74]"
              : "bg-[--main-overlay-input-bg]")
          }
        />
      ) : (
        <></>
      )}

      {/* disclaimer/context */}
      <div
        className={
          isSignIn
            ? "flex w-[95%] justify-between px-1 text-[--light-text] lg:w-[90%]"
            : "flex w-full justify-between px-1 text-slate-50"
        }
      >
        <button
          onClick={() => {
            setIsSignUpModalActive(isSignIn);
            setErrorMsg("");
          }}
          className={
            isSignIn
              ? "text-left duration-200 hover:text-[--main-text] hover:underline md:w-full"
              : "text-left text-[--main-overlay-text] duration-200 hover:underline md:w-full"
          }
        >
          {isSignIn ? "create new account?" : "already have an account?"}
        </button>

        {isSignIn ? (
          <></>
        ) : (
          <p className="text-right text-[--main-overlay-text] md:w-full">
            *min 6 characters*
          </p>
        )}
      </div>

      {/* sign in/up buttons */}
      <div className="btn-container flex w-full flex-col items-center gap-2">
        <div
          className={
            isSignIn
              ? "flex w-[95%] items-center gap-2 lg:w-[90%]"
              : "flex w-full items-center gap-2"
          }
        >
          {/* email/password sign in btn */}
          <button
            onClick={isSignIn ? signInEmailPassword : signUpEmailPassword}
            className={
              isSignIn
                ? "w-full rounded-full bg-[--main-btn-bg] p-2 text-center font-semibold uppercase text-slate-100 shadow-md hover:bg-[--hover-main-btn-bg] hover:shadow-xl active:scale-[97%]"
                : "w-full rounded-lg bg-[--main-overlay-text] p-2 text-center font-semibold uppercase text-slate-600 shadow-md hover:shadow-xl active:scale-[97%]"
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
                  ? "w-full rounded-full bg-[--main-btn-bg] p-2 text-center font-semibold uppercase text-slate-100 shadow-md hover:bg-[--hover-main-btn-bg] hover:shadow-xl active:scale-[97%]"
                  : "w-full rounded-lg bg-white p-2 text-center font-semibold uppercase text-slate-600 shadow-md hover:shadow-xl active:scale-[97%]"
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
              ? "flex w-[95%] items-center justify-center gap-1 rounded-full bg-[--main-btn-bg] p-2 font-semibold uppercase text-slate-100 shadow-md hover:bg-[--hover-main-btn-bg] hover:shadow-xl active:scale-[97%] lg:w-[90%]"
              : "flex w-full items-center justify-center gap-1 rounded-lg bg-[--main-overlay-text] p-2 font-semibold uppercase text-slate-600 shadow-md hover:shadow-xl active:scale-[97%]"
          }
        >
          {isSignIn ? "Sign In With Google" : "Sign Up With Google"}
          <FcGoogle className="text-2xl" />
        </button>
      </div>
    </div>
  );
};
