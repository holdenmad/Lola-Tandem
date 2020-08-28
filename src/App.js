import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";

import axios from 'axios'


function App() {
const [profile, setProfile] = useState([])
  //Fetch profiles
  useEffect(() => {
		const fetchProfile = async () => {
			const profile = await axios
        .get('http://localhost:4000/profiles')
        .then(result => result.data)
      return profile;
      
		};
		fetchProfile().then(res => setProfile(res));
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
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/profile-:id">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
