import React, { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import './styles/birthday.css';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import EditProfile from './components/profile/EditProfile';
import Matches from './components/Matches';

// import UserProfileView from './components/profile/UserProfileView';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppContext } from './components/Context/AppContext';

const token = localStorage.getItem('x-auth-token');


const isAuthenticated = () => {
  if (token === null || token === undefined || token === false) {
   console.log("a");
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
  const { state } = useContext(AppContext);
  return (
    <div className='App'>
      {state.isLoggedIn && <Header />}
      <Switch>
        <Route exact path='/'>
        {!state.isLoggedIn && <Welcome /> || <Dashboard />}
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
        <PrivateRoute exact path='/editprofile' component={EditProfile} />
        <PrivateRoute exact path='/matches' component={Matches} />

      </Switch>
      {state.isLoggedIn && <Footer /> }
    </div>
  );
}

export default App;
