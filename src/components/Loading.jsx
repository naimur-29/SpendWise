// importing libraries:
import { useState, useEffect } from "react";

// importing stylesheets:
import "./css/Loading.css";

export const Loading = ({ children, duration, isWithoutSidebar }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, duration || 2000);
  }, [duration]);

  // loading screen:
  if (isLoading) {
    return (
      <section
        style={{
          "--animationDuration": duration ? `${duration}ms` : "2000ms",
        }}
        className={`_main-container w-full ${
          !isWithoutSidebar ? "md:w-[calc(100%-16rem)]" : ""
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
