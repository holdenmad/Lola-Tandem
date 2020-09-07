import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

function FreeText() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState(state.unsavedProfileState && state.unsavedProfileState.freetext ||
        state.profile && state.profile.freetext || null);
    
        const textChanged = (value) => {
        console.log(value);
        setFreetext({ city: value })
        const result = { target: { name: "freetext", value } }
        handleProfileFormChange(result)
    }
    console.log(value);
    const initialState = { city: value };
    const [freetext, setFreetext] = useState(initialState)
    
    return (
        <div>
            <label className="heading" htmlFor="freetext">Tell us something about you</label>
            <textarea
                className="form-control"
                id="freetext"
                name="freetext"
                onChange={setFreetext}
                rows="4"
                cols="50"
                placeholder="About you"
                value={(state.unsavedProfileState && state.unsavedProfileState.freetext) || (state.profile && state.profile.freetext)}
                onChange={handleProfileFormChange}
            >
            </textarea>
        </div>
    );
}

export default FreeText;