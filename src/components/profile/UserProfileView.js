import React from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const UserProfileView = ({ users }) => {
  //fetch request from database (or from AppContext)
  let { id } = useParams();
  let profileId = parseInt(`${id}`);
  let profileDeets = users
    .filter((oneProfile) => {
      return oneProfile.userId === profileId;
    })
    .map((oneProfile) => {
      return oneProfile;
    });

  return (
    <div>
      {profileDeets.map((oneProfile) => (
        <div>
          <p margin="small" textAlign="center">
            {oneProfile.name}
          </p>

          <img
            fill="false"
            alignSelf="center"
            className="avatar"
            src={"useravatar.png"}
            alt={`${oneProfile.name}`}
          />
          <ul>
            <li>Name: {oneProfile.name} </li>
            <li>Gender: {oneProfile.gender}</li>
            <li>Location: {oneProfile.location}</li>
            <li>Birthday: {oneProfile.dob}</li>
            <li>Native Languages: {oneProfile.nativelangs}</li>
            <li>Other Languages: {oneProfile.otherlangs}</li>
            <li>Languages Learning: {oneProfile.learninglangs}</li>
            <li>Interests: {oneProfile.interests}</li>
            <li>About Text: {oneProfile.freetext}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserProfileView;
