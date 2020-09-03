import React, {useContext, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { AppContext } from "./Context/AppContext";

const Profile = () => {
  // route = lola.com/users/profile-:id
  // Fetch request from MongoDB for Profile information
  // map that information into return statement below for each user that matches the {id} req.params
  const { state, setState } = useContext(AppContext);
  console.log(state, "test");

    useEffect(() => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      };
    fetch(`http://localhost:5000/profiles/${state.user._id}`, requestOptions)
    .then(res => res.json())
    .then(profile =>
      setState(previousState => ({ ...previousState, profile }))
    );
  }, []);

  return (
    <div classname="Profile">
      This is what a profile looks like. This can be the user themself, or
      another user.
      <div aria-label="Profile information of user">
        <ul>
          <li>Name: {state.user.name}</li>
          
          <li>Gender: {state.profile ? state.profile.gender : null}</li>
          <li>Location: {state.profile ? state.profile.location : null}</li>
          <li>Birthday: {state.profile ? state.profile.birthday : null}</li>
          <li>Native Languages: {state.profile ? state.profile.birthday : null}</li>
          <li>Other Languages: {state.profile ? state.profile.nativelang : null}</li>
          <li>Languages Learning: {state.profile ? state.profile.learninglang : null}</li>
          <li>Interests: {state.profile ? state.profile.interests : null}</li>
          <li>About Text: {state.profile ? state.profile.freetext : null}</li>
          <li>Photot: {state.profile ? state.profile.profileImg : null}</li>
        </ul>
      </div>
      <button>
        <Link to='./editProfile' className='btn btn-link'>
          Edit
        </Link>
      </button>
    </div>
  );
};

export default Profile;
