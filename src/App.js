import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

const token = localStorage.getItem('x-auth-token')
console.log(token)

const isAuthenticated = () => {
  if(token === null || token === undefined || token === false) {
    return false
  } else {
    return token
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/users/login" }} />
      )
    }
  />
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/users/register">
          <Register />
        </Route>
        <Route exact path="/users/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
