import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

function FreeText3() {
    const { state, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState(state.unsavedProfileState && state.unsavedProfileState.freetext3 ||
        state.profile && state.profile.freetext3 || null);
    
        const textChanged = (value) => {
        console.log(value);
        setFreetext3({ city: value })
        const result = { target: { name: "freetext3", value } }
        handleProfileFormChange(result)
    }
    console.log(value);
    const initialState = { city: value };
    const [freetext3, setFreetext3] = useState(initialState)
    
    return (
        <div>
            <label className="heading" htmlFor="freetext3">What expectations do you have for a lola-tandem partner?</label>
            <textarea
                className="form-control"
                id="freetext3"
                name="freetext3"
                onChange={setFreetext3}
                rows="4"
                cols="50"
                placeholder="Your expectations"
                value={(state.unsavedProfileState && state.unsavedProfileState.freetext3) || (state.profile && state.profile.freetext3)}
                onChange={handleProfileFormChange}
            >
            </textarea>
        </div>
    );
}

export default FreeText3;