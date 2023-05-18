import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

import LogIn from "../Components/LogIn/LogIn";
import SignUp from "../Components/SignUp/SignUp";

export default function LandingPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="landingPageContainer bg-slate-50 w-full h-screen">
        <div className="landingPageWrapper w-11/12 h-full m-auto ">
          {/* top left logo starts  */}
          <div className="topLogo pt-2 flex  items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-2 cursor-pointer"
              alt="Flowbite Logo"
            />
            <span className="self-center cursor-pointer text-2xl font-semibold whitespace-nowrap text-black">
              Flowbite
            </span>
          </div>
          {/* top left logo ends  */}

          {/* login page starts  */}
          <LogIn />
          {/* login page ends  */}

          {/* sign up page starts  */}
          {/* <SignUp /> */}
          {/* sign up page ends  */}
        </div>
      </div>

      {/*  Modal  */}

      <div
        className={`modalContainer ${
          open && "hidden"
        }  bg-red-400 flex flex-col justify-center items-center w-[29%] h-[calc(100%-1rem)]  fixed top-0 right-0 `}
      >
        <div className="ajaira bg-cyan-300 relative">
          <div className="iconContainer  fixed top-2 right-2">
            <RxCross2
              className="cursor-pointer text-4xl"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        <div className="bodyContainer flex flex-col justify-center items-center">
          <div className="bodyTop mb-5">
            <h1 className="text-4xl text-gray-50 font-semibold">New Here?</h1>
          </div>
          <div className="bodyMid">
            <h1 className="text-center text-xl text-gray-50 mb-6">
              Sign up and discover a greate amount of new opportunities
            </h1>
          </div>
          <div className="bodyBottom flex justify-center w-full">
            <button
              type="button"
              className="py-3  px-5 font-medium  w-[50%] m-auto text-gray-950  bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 text-base"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
