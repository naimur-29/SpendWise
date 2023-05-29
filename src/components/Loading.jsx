// importing libraries:
import { useState, useEffect } from "react";

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
        className={`w-full ${
          !isWithoutSidebar ? "md:w-[calc(100%-16rem)]" : ""
        } min-h-screen bg-gray-100 flex justify-center items-center`}
      >
        <h3 className="text-4xl text-center w-full text-gray-700">
          Loading...
        </h3>
      </section>
    );
  }

  // else return children:
  return <>{children}</>;
};
