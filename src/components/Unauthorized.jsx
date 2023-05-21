// importing libraries:
import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing pages:
import LandingPage from "../pages/LandingPage";

const Unauthorized = ({ children }) => {
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
    return <h1>Loading...</h1>;
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

export default Unauthorized;
