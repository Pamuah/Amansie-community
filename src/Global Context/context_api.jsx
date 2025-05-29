import React, { createContext, useContext, useState } from "react";

// This is the shape of the deceased info (just comment instead of types)
const globalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [deceasedInfo, setDeceasedInfo] = useState({
    name: "",
    age: "",
    familymembers: "",
    image: "",
    motherName: "",
    fatherName: "",
    childrenNames: "",
    wakekeeping: "",
    Burial: "",
    finalRites: "",
    Thanksgiving: "",
  });

  return (
    <globalContext.Provider value={{ deceasedInfo, setDeceasedInfo }}>
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(globalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};
