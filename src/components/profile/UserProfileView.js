import React from "react";
import { AppContext } from "../Context/AppContext";

const UserProfileView = ({ profiles }) => {
  const { update } = useContext(AppContext);
  const [value, setValue] = useState({ title, imageURL, content });

  //fetch request from database (or from AppContext)
  let { id } = useParams();
  let profileId = parseInt(`${id}`);
  let profileDeets = profile
    .filter((oneProfile) => {
      return oneProfile.id === profileId;
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
            <li>Name: {user.name} </li>
            <li>Gender: {user.gender}</li>
            <li>Location: {user.location}</li>
            <li>Birthday: {user.dob}</li>
            <li>Native Languages: {user.nativelangs}</li>
            <li>Other Languages: {user.otherlangs}</li>
            <li>Languages Learning: {user.learninglangs}</li>
            <li>Interests: {user.interests}</li>
            <li>About Text: {user.freetext}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserProfileView;
