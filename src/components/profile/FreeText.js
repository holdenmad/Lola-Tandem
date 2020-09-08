import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

function FreeText() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState(state.unsavedProfileState && state.unsavedProfileState.freetext ||
        state.profile && state.profile.freetext || null);
    
        const textChanged = (e) => {
        const val = e.target.value
            console.log("xyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", val);
        setFreetext(val)
        const result = { target: { name: "freetext", val } };
        handleProfileFormChange(result)
    }
    console.log(value);
    const initialState = value;
    const [freetext, setFreetext] = useState(initialState)
    
    return (
        <div>
            <label className="heading" htmlFor="freetext">Tell us something about yourself</label>
            <textarea
                className="form-control"
                id="freetext"
                name="freetext"
                rows="4"
                cols="50"
                placeholder="About you"
                value={freetext}
                onChange={textChanged}
            >
       
            </textarea>
        </div>
    );
}

export default FreeText;