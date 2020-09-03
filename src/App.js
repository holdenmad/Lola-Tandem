import React, { useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import UserProfileView from './components/profile/UserProfileView';
import Header from './components/Header';
import Footer from './components/Footer';

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
      {isAuthenticated && <Header />}
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
        {/* <PrivateRoute exact path='/:id' component={UserProfileView} /> */}
        <PrivateRoute exact path='/profile' component={Profile} />
      </Switch>
      {isAuthenticated && <Footer /> }
    </div>
  );
}

export default App;
