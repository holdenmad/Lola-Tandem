import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

const genders = ["", "other", "female", "male", "d", "e", "f"];

function Gender() {
  const { state, setState, handleProfileFormChange } = useContext(AppContext);
  //updating unsaved profile state

  // const [value, setValue] = useState(state.profile.gender)
  const [value, setValue] = useState("female");


  return (
    <div>
      <label className="heading">Gender</label>
      <select
        onChange={handleProfileFormChange}
        as="select"
        name="gender"
        className="form-control medium"
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
