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
        backgroundImage: `url("${BGImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={
        "right flex flex-col p-3 w-[100%] h-full md:w-[40%] duration-300 absolute top-0 right-0" +
        (isSignUpModalActive ? "" : " top-[-100%]")
      }
    >
      {/* image overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#39aca4] opacity-[0.8]"></div>

      <div className="z-10 flex justify-between close-modal md:justify-end">
        <div className="flex items-center logo md:hidden">
          <img
            src={Logo}
            className="h-8 mr-2 cursor-pointer bg-white rounded-full p-[2px] min-w-[33px] object-cover object-center"
            alt="Logo"
          />
          <span className="text-2xl font-semibold text-white">SpendWise</span>
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
    <div className="z-10 signup-modal-container bg-[#fff3] h-full flex flex-col items-center justify-center gap-6 rounded-md shadow p-2">
      <h3 className="text-5xl font-bold text-white">New Here?</h3>
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
    <div className="z-10 signup-modal-container bg-[#fff3] h-full flex flex-col items-center justify-center gap-6 rounded-md shadow p-2">
      <AuthForm setIsSignUpModalActive={setIsSignUpModalActive} />
    </div>
  );
};
