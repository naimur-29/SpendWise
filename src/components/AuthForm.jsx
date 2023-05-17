// importing libraries:
import { useState } from "react";
import { auth, googleProvider } from "../services/firebaseApi";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthForm = () => {
  console.log(auth?.currentUser?.email);

  // states:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);

  // auth functions:
  const signUpEmailPassword = async () => {
    if (password !== rePassword) {
      setErrorMsg("password doesn't match! try again!");
      setPassword("");
      setRePassword("");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      setEmail("");
      setPassword("");
      setName("");
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const signInEmailPassword = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      setEmail("");
      setPassword("");
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const signUpInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      setEmail("");
      setPassword("");
      setName("");
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const demoLogin = async () => {
    const demoEmail = "fakecake@gmail.com";
    const demoPassword = "fake123";

    try {
      await signInWithEmailAndPassword(auth, demoEmail, demoPassword);

      setEmail("");
      setPassword("");
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="shadow-lg flex flex-col justify-center gap-2 w-[540px] text-slate-200 bg-blue-400 p-4 rounded-lg">
      {/* heading */}
      <h3 className="text-center mb-3 font-bold text-3xl">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h3>

      {/* showing error message if any */}
      {errorMsg ? (
        <p className="font-semibold text-red-600 error-msg mb-1">{errorMsg}</p>
      ) : (
        <></>
      )}

      {/* name field */}
      {!isSignIn ? (
        <input
          type="text"
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={
            "w-full px-4 py-3 focus:placeholder:translate-x-[-100%] focus:bg-blue-950 duration-700" +
            (name ? " bg-green-950" : "")
          }
        />
      ) : (
        <></>
      )}

      {/* email field */}
      <input
        type="email"
        placeholder="enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={
          "w-full px-4 py-3 focus:placeholder:translate-x-[-100%] focus:bg-blue-950 duration-700" +
          (email && email.includes("@") && email.includes(".")
            ? " bg-green-950"
            : "")
        }
      />

      {/* password field */}
      <input
        type="password"
        placeholder="enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={
          "w-full px-4 py-3 focus:placeholder:translate-x-[-100%] focus:bg-blue-950 duration-700" +
          (password ? " bg-green-950" : "")
        }
      />

      {/* re-type password field */}
      <input
        type="password"
        placeholder="re-enter your password"
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
        className={
          "w-full px-4 py-3 focus:placeholder:translate-x-[-100%] focus:bg-blue-950 duration-700" +
          (rePassword && password === rePassword ? " bg-green-950" : "")
        }
      />

      {/* disclaimer/context */}
      <div className="flex justify-between">
        <button
          onClick={() => {
            setIsSignIn(!isSignIn);
            setErrorMsg("");
          }}
          className="hover:underline hover:text-slate-900"
        >
          {isSignIn ? "create new account?" : "already have an account?"}
        </button>

        <p className="text-right">*min 6 characters*</p>
      </div>

      {/* sign in/up buttons */}
      <div className="flex justify-center w-full gap-2 btn-container">
        {/* email/password sign in btn */}
        <button
          onClick={isSignIn ? signInEmailPassword : signUpEmailPassword}
          className="flex-1 p-2 font-semibold uppercase bg-blue-700 rounded-lg hover:shadow-lg hover:translate-y-[-2%] hover:bg-blue-800"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {/* google authentication sign in btn*/}
        <button
          onClick={signUpInGoogle}
          className="flex-1 p-2 font-semibold uppercase bg-blue-700 rounded-lg hover:shadow-lg hover:translate-y-[-2%] hover:bg-blue-800"
        >
          {isSignIn ? "Sign In With Google" : "Sign Up With Google"}
        </button>
      </div>

      {/* demo login button */}
      {isSignIn ? (
        <button
          onClick={demoLogin}
          className="flex-1 p-2 font-semibold uppercase bg-blue-700 rounded-lg  hover:shadow-lg hover:translate-y-[-2%] hover:bg-blue-800"
        >
          Demo Login
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
