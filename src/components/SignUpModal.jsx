// importing libraries:
import { useState } from "react";

// importing local components:
import { AuthForm } from "../components/AuthForm";

// importing local assets:
import Logo from "../assets/spend-wise-logo.webp";
import BGImage from "../assets/landing-page-bg.webp";

const SignUpModal = ({ isSignUpModalActive, setIsSignUpModalActive }) => {
  const [isSignUpFormActive, setIsSignUpFormActive] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "var(--main-modal-bg)",
        backgroundImage: `url("${BGImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`right absolute right-0 top-0 flex h-full w-[100%] flex-col p-3 duration-300 md:w-[40vw] ${
        isSignUpModalActive ? "" : "top-[-100%]"
      }`}
    >
      {/* color overlay */}
      <div className="absolute left-0 top-0 h-full w-full bg-[--main-modal-bg] opacity-[--main-overlay-opacity] transition-[background-color] duration-[1000ms]"></div>

      <div className="close-modal z-10 flex justify-between md:justify-end">
        <div className="logo flex items-center md:hidden">
          <img
            src={Logo}
            className="mr-2 h-8 min-w-[33px] cursor-pointer rounded-full bg-white object-cover object-center p-[2px]"
            alt="Logo"
          />
          <span className="text-2xl font-semibold text-white">SpendWise</span>
        </div>

        <div
          onClick={() => setIsSignUpModalActive(false)}
          className="flex h-[50px] w-[50px] cursor-pointer flex-col items-center justify-center py-4"
        >
          <div className="line h-[2px] w-[40px] -rotate-45 bg-white"></div>
          <div className="line h-[2px] w-[40px] rotate-45 bg-white"></div>
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
    <div className="signup-modal-container z-10 flex h-full flex-col items-center justify-center gap-6 rounded-md bg-[--main-overlay-bg] p-2 shadow">
      <h3 className="text-5xl font-bold text-[--main-overlay-text]">
        New Here?
      </h3>
      <p className="max-w-[400px] text-center text-[1.2rem] text-[--main-overlay-text]">
        Join SpendWise and take charge of your finances!
      </p>
      <button
        onClick={() => setIsSignUpFormActive(true)}
        className="w-[300px] rounded-full bg-[--main-overlay-btn-bg] px-4 py-3 text-center text-xl font-bold text-[--main-overlay-btn-text] shadow-md hover:scale-[103%] hover:shadow-xl active:scale-[95%] md:w-[270px] lg:w-[300px]"
      >
        Sign Up
      </button>
    </div>
  );
};

// sign up form:
const SignUpForm = ({ setIsSignUpModalActive }) => {
  return (
    <div className="signup-modal-container z-10 flex h-full flex-col items-center justify-center gap-6 rounded-md bg-[--main-overlay-bg] p-2 shadow">
      <AuthForm setIsSignUpModalActive={setIsSignUpModalActive} />
    </div>
  );
};
