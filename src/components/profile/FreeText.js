import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

function FreeText() {
    const { state, setState } = useContext(AppContext);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        console.log(state);
        const key = e.target.name;
        const newState = { ...state };
        newState.unsavedProfileState = {
            ...newState.unsavedProfileState,
            [key]: e.target.value,
        };
        console.log(key, newState);
        setState(newState);
    };
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
                value={value}
                onChange={handleChange}
            >
            </textarea>
        </div>
    );
}

export default FreeText;




{/* <Field
name="freeText"
as={MyStyledTextArea}
placeholder="My motivation / learning goals / profile"
rows={5}
className={
    "form-control" +
    (errors.freeText && touched.freeText ? " is-invalid" : "")
} /> */}