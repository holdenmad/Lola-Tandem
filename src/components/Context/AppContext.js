import React, { useState, createContext, useEffect } from 'react';

const initialState = {
  user: { _id: localStorage.getItem('userId') },
  profile: {},
  unsavedProfileState: {},
  interests: [],
  isLoggedIn: false,
  matches: []
};

const interests = [
  { name: 'interests', id: 1, value: 'Sports', isChecked: false },
  { name: 'interests', id: 2, value: 'Teamsports', isChecked: false },
  { name: 'interests', id: 3, value: 'Extreme Sports', isChecked: false },
  { name: 'interests', id: 4, value: 'Skating', isChecked: false },
  { name: 'interests', id: 5, value: 'Running', isChecked: false },
  { name: 'interests', id: 6, value: 'Fitness', isChecked: false },
  { name: 'interests', id: 7, value: 'Yoga', isChecked: false },
  { name: 'interests', id: 8, value: 'Music', isChecked: false }
];


export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    // fetch user on page load
    if (state.user && state.user._id !== 'null') {
      fetch(
        // doing this with an access token would be allow for auth server side
        `${process.env.REACT_APP_HEROKU}/users/${state.user._id}`,
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
      fetch(`${process.env.REACT_APP_HEROKU}/profiles/${state.user._id}`, requestOptions)
        .then(res => res.json())
        .then(profile =>
          setState(previousState => ({ ...previousState, profile }))
        );
    }
  }, []);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

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
      `${process.env.REACT_APP_HEROKU}/users/${action}`,
      requestOptions
    );

    const response = await result.json();
    const user = {
      _id: response._id,
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
    const cleanInitialState = { ...initialState };
    cleanInitialState.user = {}
    setState(cleanInitialState);
  };
  //Update user
  const updateProfile = async (update) => {
    const requestOptions = {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(update)
    };
    fetch(
      `${process.env.REACT_APP_HEROKU}/profiles/${state.user._id}`,
      requestOptions
    )
      .then(function (res) {
        console.log(res);
        const newState = { ...state, ...update };
        setState(newState);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
 

  //do we need useEffect with [state.profile] and [state.user] here like in Julia's code?
  //Either push each checked item into an array to be put into the state, or change the handle to progressively update the unsavedProfile state to reflect each change
  // const handleProfileFormChange = e => {
  //   // console.log('Test handleProfileFormChange', e.target.name, e.target.value);
    
  //   const key = e.target.name;
  //   const value = e.target.value;
  //   console.log(key, value);
  //   const newState = { ...state };
  //   newState.unsavedProfileState = {
  //     ...newState.unsavedProfileState,
  //     [key]: value
  //   };
  //   console.log('Test handleProfileFormChange', ': ', key, e.target.value);
  //   setState(newState);
  // };

  return (
    <div>
      <AppContext.Provider
        value={{
          authenticate,
          // handleProfileFormChange,
          updateProfile,
          interests,
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
