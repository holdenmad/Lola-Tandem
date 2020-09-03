import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

const initialState = {
  user: {id:localStorage.getItem("userId")},
  profile: {},
  unsavedProfileState: {},
}

const AppContextProvider = ({ children }) => {
//   const [profiles, setProfiles] = useState(initialProfile);
  const [state, setState] = useState(initialState);

  // fetch user on page load 
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };

    fetch(
      `http://localhost:5000/users/${state.user.id}`,
      requestOptions
    )
    .then(res=>res.json())
    .then(user=>setState(previousState => ({...previousState, user:{...user, "x-auth-token": localStorage.getItem("x-auth-token")}})))

    // fetch profile on page load 
    fetch(
      `http://localhost:5000/profiles/${state.user.id}`,
      requestOptions
    )
    .then(res=>res.json())
    .then(profile=>setState(previousState => ({...previousState, profile})))
  }, []);
  useEffect(()=>{
    console.log(state.user)
  },[state.user])

  useEffect(()=>{
    console.log(state.profile)
  },[state.profile])

  const handleProfileFormChange = (e) => {
    console.log(state);
    const key = e.target.name;
    const newState = { ...state };
    newState.unsavedProfileState = {
        ...newState.unsavedProfileState,
        [key]: e.target.value,
    };
    console.log(key, newState);
    setState(newState);
};

  return (
    <div>
      <AppContext.Provider value={{state, setState, handleProfileFormChange}}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

export default AppContextProvider;
