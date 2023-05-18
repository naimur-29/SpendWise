import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

export default function LandingPage() {
  return (
    <>
      <div className="landingPageContainer bg-slate-50 w-full h-screen">
        <div className="landingPageWrapper w-11/12 h-full m-auto ">
          {/* top left logo starts  */}
          <div className="topLogo pt-2 flex  items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-2 cursor-pointer"
              alt="Flowbite Logo"
            />
            <span class="self-center cursor-pointer text-2xl font-semibold whitespace-nowrap text-black">
              Flowbite
            </span>
          </div>
          {/* top left logo ends  */}

          {/* login page starts  */}

          <div className="loginPage text-center mt-36">
            <div className="loginPageWrapper w-11/12 m-auto ">
              <h1 className="text-5xl font-semibold py-2 mb-3">
                login into your account
              </h1>

              {/* social media link login section starts  */}
              <div className="socialLogin">
                <h1 className="text-2xl mb-3">login using social media</h1>
                {/* social media icons  */}
                <div className="socialIcons w-1/6 justify-evenly flex m-auto py-1 ">
                  <BsFacebook className="m-auto h-9 w-9 cursor-pointer text-blue-900" />
                  <AiFillGooglePlusCircle className="m-auto h-9 w-9 cursor-pointer text-red-800" />
                  <AiFillLinkedin className="m-auto h-9 w-9 cursor-pointer text-blue-900" />
                </div>
                {/* social media icons  ends */}
              </div>
              {/* social media link login section ends  */}

              {/* input section login starts  */}
              <div className="inputSection mt-4 w-[40%] m-auto ">
                <h1 className="mb-4">OR</h1>
                <div class="mb-4 p-2 rounded-xl w-full bg-gray-200">
                  <input
                    type="text"
                    id="base-input"
                    class="bg-gray-200 border border-gray-300 text-gray-900 text-sm border-none outline-none block w-11/12 p-1 "
                    placeholder="Email"
                  />
                </div>
                <div class="mb-4 p-2 rounded-xl w-full bg-gray-200 flex justify-between">
                  <input
                    type="password"
                    id="base-input"
                    class="bg-gray-200 border border-gray-300 text-gray-900 text-sm border-none outline-none block w-11/12 p-1 "
                    placeholder="Password"
                  />
                  <div className="eyeIcon self-center">
                    <AiFillEye className="h-6 w-6 cursor-pointer" />
                  </div>
                </div>
                <div className="signinButton">
                  <button
                    type="button"
                    class="py-3 px-5 w-[50%] font-medium text-gray-50  bg-green-600 rounded-2xl border border-gray-200 hover:bg-green-700 text-base"
                  >
                    Sign in
                  </button>
                </div>
              </div>
              {/* input section login ends  */}
            </div>
          </div>
          {/* login page ends  */}
        </div>
      </div>
    </>
  );
}
