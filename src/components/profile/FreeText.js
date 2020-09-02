import React from 'react';


function FreeText({value}) {
    return (
        <div>
            <label htmlFor="freetext">FreeText</label>
            <textarea
                className="form-control"
                id="freetext"
                name="freetext"
                rows="4"
                cols="50"
                placeholder="My motivation / learning goals / profile"
                value={value}
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