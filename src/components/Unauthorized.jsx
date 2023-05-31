// importing libraries:
import { useContext } from "react";
import { Navigate } from "react-router-dom";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing pages:
import LandingPage from "../pages/LandingPage";

// importing local components:
import { Loading } from "../components/Loading";

export const Unauthorized = ({ children }) => {
  // contexts:
  const { currentUser } = useContext(userContext);

  // if not signed in, then return to landing page:
  if (!currentUser) {
    return (
      <Loading>
        <LandingPage isWithoutSidebar />
        <Navigate to={"/"} />
      </Loading>
    );
  }

  // else return children:
  return <>{children}</>;
};
