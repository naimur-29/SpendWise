// importing libraries:
import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing pages:
import LandingPage from "../pages/LandingPage";

export const Unauthorized = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // contexts:
  const { currentUser } = useContext(userContext);

  // loading screen:
  if (isLoading) {
    return (
      <section className="w-full min-h-screen bg-gray-100 flex justify-center items-center">
        <h3 className="text-4xl text-center w-full text-gray-700">
          Loading...
        </h3>
      </section>
    );
  }

  // if not signed in, then return to landing page:
  if (!currentUser) {
    return (
      <>
        <LandingPage />
        <Navigate to={"/"} />
      </>
    );
  }

  // else return children:
  return <>{children}</>;
};
