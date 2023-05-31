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
        backgroundColor: "#39aca4",
        backgroundImage: `url("${BGImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={
        "right absolute right-0 top-0 flex h-full w-[100%] flex-col p-3 duration-300 md:w-[40%]" +
        (isSignUpModalActive ? "" : " top-[-100%]")
      }
    >
      {/* color overlay */}
      <div className="absolute left-0 top-0 h-full w-full bg-[#39aca4] opacity-[0.8]"></div>

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
    <div className="signup-modal-container z-10 flex h-full flex-col items-center justify-center gap-6 rounded-md bg-[#fff3] p-2 shadow">
      <h3 className="text-5xl font-bold text-white">New Here?</h3>
      <p className="max-w-[400px] text-center text-[1.2rem] text-slate-100">
        Sign up and discover a great way to spend you money wisely!
      </p>
      <button
        onClick={() => setIsSignUpFormActive(true)}
        className="w-[300px] rounded-full bg-white px-4 py-3 text-center text-xl font-bold text-slate-600 shadow-md hover:scale-[103%] hover:shadow-xl active:scale-[95%] md:w-[270px] lg:w-[300px]"
      >
        Sign Up
      </button>
    </div>
  );
};

// sign up form:
const SignUpForm = ({ setIsSignUpModalActive }) => {
  return (
    <div className="signup-modal-container z-10 flex h-full flex-col items-center justify-center gap-6 rounded-md bg-[#fff3] p-2 shadow">
      <AuthForm setIsSignUpModalActive={setIsSignUpModalActive} />
    </div>
  );
};
