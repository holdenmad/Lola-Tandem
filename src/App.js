import React, { useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';

import Matches from './components/Matches';
import UserProfileView from './components/profile/UserProfileView';

const token = localStorage.getItem('x-auth-token');

const isAuthenticated = () => {
  if (token === null || token === undefined || token === false) {
    return false;
  } else {
    return token;
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/users/login' }} />
      )
    }
  />
);

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Welcome />
        </Route>
        <Route exact path='/users/register'>
          <Register />
        </Route>
        <Route exact path='/users/login'>
          <Login />
        </Route>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/matches' component={Matches} />
        {/* <PrivateRoute exact path='/:id' component={UserProfileView} /> */}
      </Switch>
    </div>
  );
}

export default App;
