// importing libraries:
import { useState, useEffect } from "react";
import { auth } from "../services/firebaseApi";

// importing pages:
import LandingPage from "../pages/LandingPage";

const Unauthorized = ({ children }) => {
  // states:
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const uid = auth?.currentUser?.uid;
      setIsAuthorized(uid ? true : false);
    }, 1000);
  });

  if (!isAuthorized) return <LandingPage />;
  return <>{children}</>;
};

export default Unauthorized;
