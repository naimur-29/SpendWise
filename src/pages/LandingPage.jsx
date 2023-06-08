import React, { useState, useEffect, useContext } from "react";

// importing local components:
import SignUpModal from "../components/SignUpModal";
import { AuthForm } from "../components/AuthForm";

// importing local assets:
import Logo from "../assets/spend-wise-logo.webp";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing icons:
import { BsEmojiLaughing, BsFillEmojiExpressionlessFill } from "react-icons/bs";

export default function LandingPage() {
  // states:
  const [isSignUpModalActive, setIsSignUpModalActive] = useState(true);

  // get userData from userContext:
  const { spendWiseTheme, setTheme } = useContext(userContext);

  // scroll to top on page load:
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="[background-color] relative flex h-screen w-full overflow-hidden bg-[--main-bg] duration-[1000ms]">
      {/* left side */}
      <div
        className={`left h-full w-[100%] p-3 duration-300 ${
          isSignUpModalActive ? "md:w-[60%] " : "md:w-[100%] "
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="_logo flex items-center">
            <img src={Logo} className="mr-2 h-8 cursor-pointer" alt="Logo" />
            <span className="text-2xl font-semibold text-[--main-text]">
              SpendWise
            </span>
          </div>

          <div
            title="Change Theme?"
            onClick={() =>
              setTheme(spendWiseTheme === "light" ? "dark" : "light")
            }
            className="flex h-[50px] cursor-pointer items-center justify-end gap-2 px-2 duration-200 hover:scale-110"
          >
            {spendWiseTheme === "light" ? (
              <BsEmojiLaughing className="text-2xl text-black" />
            ) : (
              <BsFillEmojiExpressionlessFill className="text-2xl text-[#4aede2]" />
            )}
          </div>
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
