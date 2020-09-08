import React from 'react';

function FreeText({val, set, title}) {
    const changed = (e) => {
        console.log(e.target.value);
        set(e.target.value)
    }
    
    return (
        <div>
            <label className="heading" htmlFor="freetext">{title}</label>
            <textarea
                className="form-control"
                id="freetext"
                name="freetext"
                rows="4"
                cols="50"
                placeholder="About you"
                value={val}
                onChange={changed}
            >
       
            </textarea>
        </div>
    );
}

export default FreeText;