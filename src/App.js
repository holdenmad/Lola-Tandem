import React, {useState, useEffect, useContext} from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Welcome from "./Components/Welcome";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import {AppContext} from "./Components/Context/AppContext"

import axios from 'axios'


function App() {
const {state} = useContext(AppContext)
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
    <>
    {/* {state.user.token ? ( */}
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
      {/* ) : (
        <h1>lol ur not logged in</h1>
      )
    } */}
    </>
  );
}

export default App;
