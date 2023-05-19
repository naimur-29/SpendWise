import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

// importing local components:
import SignUpModal from "../components/SignUpModal";
import { AuthForm } from "../components/AuthForm";

export default function LandingPage() {
  const [isSignUpModalActive, setIsSignUpModalActive] = useState(true);

  return (
    <section className="overflow-hidden bg-white w-full max-w-[1920px] h-screen flex">
      {/* left side */}
      <div
        className={
          "left w-[100%] h-full md:w-[60%] p-3 duration-300" +
          (isSignUpModalActive ? "" : " md:w-[100%]")
        }
      >
        <div className="logo flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-2 cursor-pointer"
            alt="Flowbite Logo"
          />
          <span className="font-semibold text-2xl">SpendWise</span>
        </div>

        <div className="login-container h-full flex flex-col items-center justify-center gap-6 rounded-md p-2">
          <AuthForm isSignIn setIsSignUpModalActive={setIsSignUpModalActive} />
        </div>
      </div>

      {/* right side */}
      <SignUpModal
        isSignUpModalActive={isSignUpModalActive}
        setIsSignUpModalActive={setIsSignUpModalActive}
      />
    </section>
  );
}
