import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import UserProfileView from "./components/profile/UserProfileView";

const token = localStorage.getItem("x-auth-token");
console.log(token);

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
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const users = await axios
        .get("https://localhost:5000/users")
        .then((result) => result.data);
      return users;
    };
    fetchUser().then((res) => setUsers(res));
  }, []);

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
        <PrivateRoute
          exact
          path="/dashboard"
          component={Dashboard}
          users={users}
        />
        <PrivateRoute
          exact
          path="/:id"
          component={UserProfileView}
          users={users}
        />
      </Switch>
    </div>
  );
}

export default App;
