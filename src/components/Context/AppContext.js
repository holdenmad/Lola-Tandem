import React, { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

const initialState = [];

const AppContextProvider = ({ children }) => {
  //   const [profiles, setProfiles] = useState(initialProfile);
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { token } = localStorage;

  useEffect(() => {
    fetch('http://localhost:5000/users/getuser', {
      headers: { 'x-auth-token': token }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setIsLoggedIn(true);
      })
      .catch(err => console.log(err));
  });
  //Login
  const login = async (event, values) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values })
    };

    const result = await fetch(
      'http://localhost:5000/users/login',
      requestOptions
    );

    const responseBody = await result.json();
    setUser({
      id: responseBody._id,
      email: responseBody.email,
      name: responseBody.name,
      'x-auth-token': result.headers.get('x-auth-token')
    });
    setIsLoggedIn(true);
    localStorage.setItem('x-auth-token', result.headers.get('x-auth-token'));
  };
  //Update user
  const updateProfile = id => {
    fetch(`http://localhost:5000/profiles/${id}`)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleProfileFormChange = e => {
    console.log(state);
    const key = e.target.name;
    const newState = { ...state };
    newState.unsavedProfileState = {
      ...newState.unsavedProfileState,
      [key]: e.target.value
    };
    console.log(key, newState);
    setState(newState);
  };

  return (
    <div>
      <AppContext.Provider
        value={{
          user,
          login,
          isLoggedIn,
          updateProfile,
          handleProfileFormChange
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

export default AppContextProvider;
