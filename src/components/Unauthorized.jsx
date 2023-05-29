// importing libraries:
import { useContext } from "react";
import { Navigate } from "react-router-dom";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing pages:
import LandingPage from "../pages/LandingPage";

export const Unauthorized = ({ children }) => {
  // contexts:
  const { currentUser } = useContext(userContext);

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
