// importing libraries:
import { useState } from "react";

// importing local components:
import { AuthForm } from "../components/AuthForm";

const SignUpModal = ({ isSignUpModalActive, setIsSignUpModalActive }) => {
  const [isSignUpFormActive, setIsSignUpFormActive] = useState(false);

  return (
    <div
      className={
        "right flex flex-col p-3 bg-[#39aca4] w-[100%] h-full md:w-[40%] duration-300 absolute top-0 right-0" +
        (isSignUpModalActive ? "" : " top-[-100%]")
      }
    >
      <div className="close-modal flex justify-between md:justify-end">
        <div className="logo flex items-center md:hidden">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-2 cursor-pointer bg-white p-1 rounded-full min-w-[33px]"
            alt="Flowbite Logo"
          />
          <span className="font-semibold text-2xl text-white">SpendWise</span>
        </div>

        <div
          onClick={() => setIsSignUpModalActive(false)}
          className="flex flex-col items-center justify-center cursor-pointer py-4 w-[50px] h-[50px]"
        >
          <div className="line w-[40px] h-[2px] bg-white -rotate-45"></div>
          <div className="line w-[40px] h-[2px] bg-white rotate-45"></div>
        </div>
      </div>

      {isSignUpFormActive ? (
        <SignUpForm setIsSignUpModalActive={setIsSignUpModalActive} />
      ) : (
        <SignUpPrompt setIsSignUpFormActive={setIsSignUpFormActive} />
      )}
    </div>
  );
};

export default SignUpModal;

// Sign Up Prompt:
const SignUpPrompt = ({ setIsSignUpFormActive }) => {
  return (
    <div className="signup-modal-container bg-[#fff3] h-full flex flex-col items-center justify-center gap-6 rounded-md shadow p-2">
      <h3 className="text-white text-5xl font-bold">New Here?</h3>
      <p className="text-slate-100 text-center text-[1.2rem] max-w-[400px]">
        Sign up and discover a great way to spend you money wisely!
      </p>
      <button
        onClick={() => setIsSignUpFormActive(true)}
        className="bg-white text-slate-600 w-[300px] px-4 py-3 font-bold text-xl rounded-full text-center shadow-md active:scale-[95%] hover:shadow-xl hover:scale-[103%] md:w-[270px] lg:w-[300px]"
      >
        Sign Up
      </button>
    </div>
  );
};

// sign up form:
const SignUpForm = ({ setIsSignUpModalActive }) => {
  return (
    <div className="signup-modal-container bg-[#fff3] h-full flex flex-col items-center justify-center gap-6 rounded-md shadow p-2">
      <AuthForm setIsSignUpModalActive={setIsSignUpModalActive} />
    </div>
  );
};
