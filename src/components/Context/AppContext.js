import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

const initialState = []

const AppContextProvider = ({ children }) => {
//   const [profiles, setProfiles] = useState(initialProfile);
  const [state, setState] = useState(initialState);
  //save userid in the state

  return (
    <div>
      <AppContext.Provider value={{state, setState}}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

export default AppContextProvider;
