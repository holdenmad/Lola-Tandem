import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
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
