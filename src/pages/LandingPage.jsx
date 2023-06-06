import React, { useState, useEffect } from "react";

// importing local components:
import SignUpModal from "../components/SignUpModal";
import { AuthForm } from "../components/AuthForm";

// importing local assets:
import Logo from "../assets/spend-wise-logo.webp";

export default function LandingPage() {
  // states:
  const [isSignUpModalActive, setIsSignUpModalActive] = useState(true);

  // scroll to top on page load:
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative flex h-screen w-full overflow-hidden bg-[--main-bg]">
      {/* left side */}
      <div
        className={`left h-full w-[100%] ${
          isSignUpModalActive ? "md:w-[60%] " : "md:w-[100%] "
        }p-3 duration-300`}
      >
        <div className="logo flex items-center">
          <img src={Logo} className="mr-2 h-8 cursor-pointer" alt="Logo" />
          <span className="text-2xl font-semibold text-[--main-text]">
            SpendWise
          </span>
        </div>

        <div className="login-container flex h-full flex-col items-center justify-center gap-6 rounded-md p-2">
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
