import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

function FreeText2() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState(state.unsavedProfileState && state.unsavedProfileState.freetext2 ||
        state.profile && state.profile.freetext2 || null);
    
        const textChanged = (value) => {
        console.log(value);
        setFreetext2({ city: value })
        const result = { target: { name: "freetext2", value } }
        handleProfileFormChange(result)
    }
    console.log(value);
    const initialState = { city: value };
    const [freetext2, setFreetext2] = useState(initialState)
    
    return (
        <div>
            <label className="heading" htmlFor="freetext2">What is your motivation for learning the language?</label>
            <textarea
                className="form-control"
                id="freetext2"
                name="freetext2"
                onChange={setFreetext2}
                rows="4"
                cols="50"
                placeholder="Your motivation"
                value={(state.unsavedProfileState && state.unsavedProfileState.freetext2) || (state.profile && state.profile.freetext2)}
                onChange={handleProfileFormChange}
            >
            </textarea>
        </div>
    );
}

export default FreeText2;