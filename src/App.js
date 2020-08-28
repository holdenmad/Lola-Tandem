import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Welcome from "./Components/Welcome";
import Dashboard from "./Components/Dashboard";

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
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
