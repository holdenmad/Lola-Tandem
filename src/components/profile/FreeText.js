import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

function FreeText() {
    const { state, handleProfileFormChange } = useContext(AppContext);

    return (
        <div>
            <label className="heading" htmlFor="freetext">FreeText</label>
            <textarea
                className="form-control"
                id="freetext"
                name="freetext"
                rows="4"
                cols="50"
                placeholder="My motivation / learning goals / profile"
                value={(state.unsavedProfileState && state.unsavedProfileState.freeText) || (state.profile && state.profile.freeText)}
                onChange={handleProfileFormChange}
            >
            </textarea>
        </div>
    );
}

export default FreeText;