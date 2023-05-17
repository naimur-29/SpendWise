import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function LandingPage() {
  return (
    <>
      <div className="landingPageContainer bg-green-400 w-full h-screen">
        <div className="landingPageWrapper bg-red-400 w-11/12 h-full m-auto ">
          {/* top left logo starts  */}
          <div className="topLogo flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-2"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </div>
          {/* top left logo ends  */}

          {/* login page starts  */}
          <div className="loginPage border border-black bg-violet-300">
            <div className="loginPageWrapper w-11/12 m-auto bg-pink-300">
              <h1>login into your account</h1>
              {/* social media link login section starts  */}
              <div className="socialLogin">
                <h1>login using social media </h1>
                {/* social media icons  */}
                <div className="socialIcons">
                  <BsFacebook className="" />
                  <AiOutlineGooglePlus className="" />
                  <AiFillLinkedin className="" />
                </div>
              </div>
              {/* social media link login section ends  */}
            </div>
          </div>
          {/* login page ends  */}
        </div>
      </div>
    </>
  );
}
