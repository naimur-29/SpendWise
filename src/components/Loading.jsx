// importing libraries:
import { useState, useEffect, useContext } from "react";

// importing stylesheets:
import "./css/Loading.css";

// importing local contexts:
import { userContext } from "../contexts/UserContext";

export const Loading = ({ children, duration, isWithoutSidebar }) => {
  // states:
  const [isLoading, setIsLoading] = useState(true);

  // user context:
  const { spendWiseTheme } = useContext(userContext);

  // setting loading state by duration:
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, duration || 2000);
  }, [duration]);

  // loading screen:
  if (isLoading) {
    return (
      <section
        id={spendWiseTheme || "light"}
        style={{
          "--animationDuration": duration ? `${duration}ms` : "2000ms",
        }}
        className={`_main-container w-full ${
          !isWithoutSidebar ? "md:w-[calc(100%-16rem-8px)]" : ""
        } z-50 h-screen`}
      >
        <h3
          data-text="SpendWise"
          className={
            isWithoutSidebar ? "_main-text" : "_main-text isWithoutSideBar"
          }
        >
          SpendWise
        </h3>
      </section>
    );
  }

  // else return children:
  return <>{children}</>;
};
