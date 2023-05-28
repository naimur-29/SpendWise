import React, { useState } from "react";

// importing local components:
import SignUpModal from "../components/SignUpModal";
import { AuthForm } from "../components/AuthForm";

// importing local assets:
import Logo from "../assets/spend-wise-logo.webp";

export default function LandingPage() {
  // states:
  const [isSignUpModalActive, setIsSignUpModalActive] = useState(true);

  return (
    <section className="relative flex w-full h-screen overflow-hidden bg-white">
      {/* left side */}
      <div
        className={`left w-[100%] h-full ${
          isSignUpModalActive ? "md:w-[60%] " : "md:w-[100%] "
        }p-3 duration-300`}
      >
        <div className="flex items-center logo">
          <img src={Logo} className="h-8 mr-2 cursor-pointer" alt="Logo" />
          <span className="text-2xl font-semibold">SpendWise</span>
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-6 p-2 rounded-md login-container">
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
