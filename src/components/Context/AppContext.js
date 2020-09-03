import React, { useState, createContext, useEffect } from 'react';

const initialState = {
  user: { _id: localStorage.getItem('userId') },
  profile: {},
  unsavedProfileState: {},
  isLoggedIn: false,
  matches: []
};

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    // fetch user on page load
    if (state.user.id !== 'null') {
      fetch(
        // doing this with an access token would be allow for auth server side
        `http://localhost:5000/users/${state.user._id}`,
        requestOptions
      )
        .then(async res => {
          const user = await res.json();
          return { result: res, user };
        })
        .then(things => {
          const { result, user } = things;
          console.log(user);
          setState(previousState => ({
            ...previousState,
            isLoggedIn: !!user._id,
            user: {
              ...user,
              'x-auth-token': result.headers.get('x-auth-token')
            }
          }));
        });

      // fetch profile on page load
      fetch(`http://localhost:5000/profiles/${state.user._id}`, requestOptions)
        .then(res => res.json())
        .then(profile =>
          setState(previousState => ({ ...previousState, profile }))
        );
    }
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  //Login
  const authenticate = async (event, values, action) => {
    console.log({ event, values, action });
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values })
    };

    const result = await fetch(
      `http://localhost:5000/users/${action}`,
      requestOptions
    );

    const response = await result.json();
    const user = {
      id: response._id,
      email: response.email,
      name: response.name,
      'x-auth-token': result.headers.get('x-auth-token')
    };
    localStorage.setItem('x-auth-token', result.headers.get('x-auth-token'));
    localStorage.setItem('userId', response._id);
    setState(prev => ({ ...prev, user, isLoggedIn: !!response._id }));
  };

  const logOut = () => {
    localStorage.setItem('x-auth-token', null);
    localStorage.setItem('userId', null);
    setState(prev => ({ ...prev, user: null }));
    setState(prev => ({ ...prev, isLoggedIn: false }));
  };
  //Update user
  const updateProfile = () => {
    const requestOptions = {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.unsavedProfileState)
    };
    console.log();
    fetch(`http://localhost:5000/profiles/${state.user._id}`, requestOptions)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };



  //do we need useEffect with [state.profile] and [state.user] here like in Julia's code?

  const handleProfileFormChange = e => {
    console.log("helloo", e.target.name, e.target.selected);
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
          authenticate,
          handleProfileFormChange,
          updateProfile,
          logOut,
          state,
          setState
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

export default AppContextProvider;
