import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState();

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

const GlobalCOntext = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextProvider, GlobalCOntext };
