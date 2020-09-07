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
      `http://localhost:5000/users/${action}`,
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
  const updateProfile = async () => {
    const change = { ...state.unsavedProfileState }
    // if (state.unsavedProfileState.days) {
    //   const bdStr = state.unsavedProfileState.days + " " + state.unsavedProfileState.months + " " + state.unsavedProfileState.years
    //   const birthday = Date.parse(bdStr);
    //   change.birthday = birthday;
    // }
    if (state.unsavedProfileState.birthday) {
      var DOB = state.unsavedProfileState.birthday;
      var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
      var millisecondsBetweenNowAnd1970 = Date.now();
      var ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;
      var milliseconds = ageInMilliseconds;
      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var month = day * 30;
      var year = day * 365;
      var years = Math.round(milliseconds / year);
      var months = years * 12;
      var days = years * 365;
      var hours = Math.round(milliseconds / hour);
      var seconds = Math.round(milliseconds / second);
      function printResults() {
        var message = "Age in Years : " + years +
          "</br>Age in Months : " + months +
          "</br>Age in Days : " + days +
          "</br>Age in Hours : " + hours +
          "</br>Age in Seconds : " + seconds +
          "</br>Age in Milliseconds : " + milliseconds;
          console.log(message)
      }
    }

    const requestOptions = {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(change)
    };
    await fetch(
      `http://localhost:5000/profiles/${state.user._id}`,
      requestOptions
    )
      .then(function (res) {
        console.log(res);

        const newState = { ...state, ...state.unsavedProfileState };
        newState.unsavedProfileState = {};
        setState(newState);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  //do we need useEffect with [state.profile] and [state.user] here like in Julia's code?
  //Either push each checked item into an array to be put into the state, or change the handle to progressively update the unsavedProfile state to reflect each change
  const handleProfileFormChange = e => {
    // console.log('Test handleProfileFormChange', e.target.name, e.target.value);
    const key = e.target.name;
    const newState = { ...state };
    newState.unsavedProfileState = {
      ...newState.unsavedProfileState,
      [key]: e.target.value
    };
    console.log('Test handleProfileFormChange', ': ', key, e.target.value);
    setState(newState);
  };

  return (
    <div>
      <AppContext.Provider
        value={{
          authenticate,
          handleProfileFormChange,
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
