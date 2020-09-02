import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Gender from "./Gender";
import Avatar from "./Avatar";
import { Birthday } from "./Birthday";
import FreeText from "./FreeText";
import Interests from "./Interests";
import Languages from "./Languages";
import {AppContext} from "../Context/AppContext";

// import { accountService, alertService } from "@/_services";

function EditProfile({ history, _id}) {
    const {state, setState} = useContext(AppContext)
//   const user = accountService.userValue;
  const initialValue = {
    freetext: "",
    Avatar: "",
    Gender: "",
    Birthday: "",
    Location: "",
    Languages: "",
    Interests: "",
  };
  const [formState, setFormState] = useState(initialValue);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    //fetch request profile db
    fetch(`http://localhost:5000/profiles/${state.user}`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(state.unsavedProfileState)
    })
    .then(function(res){
      state.profile = res
      state.unsavedProfileState = null
        // update the state.profile = res
        // update the state.unsavedProfileState = null
     })
    .catch(function(res){ console.log(res) })
  };

  return (
    <form onSubmit={handleSubmit}>
      <Avatar />
      <Gender />
      <Birthday />
      <FreeText value={formState.freeText} />
      {/* <Location /> */}
      <Languages />
      <Interests />
      <div className="form-group">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-success mr-2"
        >
          {isSubmitting && (
            <span className="spinner-border spinner-border-sm mr-1"></span>
          )}{" "}
          Update
        </button>
        <Link to="." className="btn btn-link">
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default EditProfile;
