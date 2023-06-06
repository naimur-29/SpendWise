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
  const { currentUser, spendWiseTheme } = useContext(userContext);

  // if not signed in, then return to landing page:
  if (!currentUser) {
    return (
      <Loading isWithoutSidebar>
        <div id={spendWiseTheme || "light"}>
          <LandingPage />
          <Navigate to={"/"} />
        </div>
      </Loading>
    );
  }

  // else return children:
  return <>{children}</>;
};
