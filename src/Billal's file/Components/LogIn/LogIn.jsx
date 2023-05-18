import React from "react";
import { AiFillEye } from "react-icons/ai";

export default function LogIn() {
  return (
    <>
      <div className="loginPage text-center m-auto mt-32  w-[45%]  p-3 bg-gray-500 rounded-md shadow-md hover:bg-gray-600  ">
        <div className="loginPageWrapper w-[99%]   m-auto ">
          <h1 className="text-5xl font-semibold text-white py-2 mb-3">
            log in
          </h1>

          {/* input section login starts  */}
          <div className="inputSection mt-4 w-[98%]  m-auto">
            <div className="mb-4 p-2 rounded-xl w-full bg-gray-200">
              <input
                type="text"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm border-none outline-none block w-11/12 p-1 "
                placeholder="Email"
              />
            </div>
            <div className="mb-4 p-2 rounded-xl w-full bg-gray-200 flex justify-between">
              <input
                type="password"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm border-none outline-none block w-11/12 p-1 "
                placeholder="Password"
              />
              <div className="eyeIcon self-center">
                <AiFillEye className="h-6 w-6 cursor-pointer" />
              </div>
            </div>

            <div className="questionSection mb-4 text-left">
              <h1 className="text-white">Create a new account !!</h1>
            </div>

            <div className="ButtonSection">
              {/* signin button div  */}
              <div className="signinButton">
                <button
                  type="button"
                  className="py-3 px-4 w-[45%] font-medium text-gray-50  bg-green-600 rounded-lg border border-gray-200 hover:bg-green-700 text-base"
                >
                  Log in
                </button>
              </div>
              {/* two button row  */}
              <div className="butonTwo mt-2 flex justify-evenly">
                <button
                  type="button"
                  className="py-3  px-5 font-medium w-[47%] text-gray-50  bg-green-600 rounded-lg border border-gray-200 hover:bg-green-700 text-base"
                >
                  Demo LOGin
                </button>
                <button
                  type="button"
                  className="py-3 px-5 font-medium w-[47%] text-gray-50  bg-green-600 rounded-lg border border-gray-200 hover:bg-green-700 text-base"
                >
                  log in with Google
                </button>
              </div>
            </div>
          </div>
          {/* input section login ends  */}
        </div>
      </div>
    </>
  );
}
