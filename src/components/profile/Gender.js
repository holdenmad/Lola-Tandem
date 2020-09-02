import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

const genders = ["", "other", "female", "male", "d", "e", "f"];

function Gender() {
  const { state, setState } = useContext(AppContext);
  //updating unsaved profile state

  // const [value, setValue] = useState(state.profile.gender)
  const [value, setValue] = useState("female");

  const handleChange = (e) => {
    console.log(state);
    const key = e.target.name;
    const newState = { ...state };
    newState.unsavedProfileState = {
      ...newState.unsavedProfileState,
      [key]: e.target.value,
    };
    console.log(key, newState);
    //update the state when we change the form
    setState(newState);
  };

  return (
    <div>
      <label>Gender</label>
      <select
        onChange={handleChange}
        as="select"
        name="gender"
        className="form-control gender"
      >
        {genders.map((gender) => (
          <option
            key={gender}
            selected={gender === value ? true : false}
            value={gender}
          >
            {gender}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Gender;
